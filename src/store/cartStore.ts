import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, MenuItem, FoodVariant, FoodModifier } from "@/types";

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  discountPercentage: number;
  isOpen: boolean;

  // Actions
  addItem: (
    item: MenuItem,
    quantity?: number,
    variant?: FoodVariant,
    modifiers?: { group_id: string; modifier: FoodModifier }[],
    specialInstructions?: string
  ) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  setIsOpen: (isOpen: boolean) => void;

  // Computed Selectors
  getSubtotal: () => number;
  getDiscount: () => number;
  getTax: () => number;
  getDeliveryFee: () => number;
  getGrandTotal: () => number;
  getTotalItemsCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      discountPercentage: 0,
      isOpen: false,

      setIsOpen: (isOpen) => set({ isOpen }),

      addItem: (item, quantity = 1, variant, modifiers = [], specialInstructions = "") => {
        const variantPriceAdj = variant ? variant.price_adjustment : 0;
        const modifiersPriceAdj = modifiers.reduce((acc, m) => acc + m.modifier.price_adjustment, 0);
        const unitPrice = item.base_price + variantPriceAdj + modifiersPriceAdj;

        // Create a unique key for grouping identical configurations
        const modifierKey = modifiers
          .map((m) => m.modifier.id)
          .sort()
          .join("-");
        const variantKey = variant ? variant.id : "none";
        const configId = `${item.id}_${variantKey}_${modifierKey}_${specialInstructions.trim()}`;

        const existingItemIndex = get().items.findIndex((i) => i.id === configId);

        if (existingItemIndex > -1) {
          const updatedItems = [...get().items];
          const existing = updatedItems[existingItemIndex];
          const newQty = existing.quantity + quantity;
          updatedItems[existingItemIndex] = {
            ...existing,
            quantity: newQty,
            item_total: newQty * existing.calculated_unit_price,
          };
          set({ items: updatedItems, isOpen: true });
        } else {
          const newItem: CartItem = {
            id: configId,
            menu_item: item,
            quantity,
            selected_variant: variant,
            selected_modifiers: modifiers,
            special_instructions: specialInstructions,
            calculated_unit_price: unitPrice,
            item_total: unitPrice * quantity,
          };
          set({ items: [...get().items, newItem], isOpen: true });
        }
      },

      removeItem: (cartItemId) => {
        set({ items: get().items.filter((i) => i.id !== cartItemId) });
      },

      updateQuantity: (cartItemId, newQuantity) => {
        if (newQuantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }
        const updated = get().items.map((i) => {
          if (i.id === cartItemId) {
            return {
              ...i,
              quantity: newQuantity,
              item_total: newQuantity * i.calculated_unit_price,
            };
          }
          return i;
        });
        set({ items: updated });
      },

      clearCart: () => set({ items: [], couponCode: null, discountPercentage: 0 }),

      applyCoupon: (code: string) => {
        const clean = code.trim().toUpperCase();
        if (clean === "LUXE20") {
          set({ couponCode: clean, discountPercentage: 20 });
          return { success: true, message: "Coupon applied: 20% discount granted!" };
        } else if (clean === "WELCOME10") {
          set({ couponCode: clean, discountPercentage: 10 });
          return { success: true, message: "Welcome promo applied: 10% discount granted!" };
        }
        return { success: false, message: "Invalid or expired coupon code." };
      },

      removeCoupon: () => set({ couponCode: null, discountPercentage: 0 }),

      getSubtotal: () => {
        return get().items.reduce((acc, item) => acc + item.item_total, 0);
      },

      getDiscount: () => {
        const subtotal = get().getSubtotal();
        const percentage = get().discountPercentage;
        return Math.round((subtotal * percentage) / 100);
      },

      getTax: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const taxable = Math.max(0, subtotal - discount);
        return Math.round(taxable * 0.08875); // 8.875% tax rate
      },

      getDeliveryFee: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= 10000 ? 0 : 500; // Free delivery over $100, otherwise $5.00
      },

      getGrandTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const tax = get().getTax();
        const delivery = get().getDeliveryFee();
        return Math.max(0, subtotal - discount + tax + delivery);
      },

      getTotalItemsCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: "restaurant_luxe_cart",
    }
  )
);

