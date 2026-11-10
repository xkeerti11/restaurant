export type DietaryType = "veg" | "non-veg" | "vegan" | "gluten-free" | "halal";

export interface RestaurantConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo_url: string;
  favicon_url: string;
  primary_color: string;
  accent_color: string;
  currency_code: string;
  timezone: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  social_links: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  opening_hours: {
    days: string;
    hours: string;
  }[];
}

export interface FoodVariant {
  id: string;
  name: string;
  price_adjustment: number; // in cents/paise
  is_available: boolean;
}

export interface FoodModifier {
  id: string;
  name: string;
  price_adjustment: number;
  is_available: boolean;
}

export interface ModifierGroup {
  id: string;
  name: string;
  selection_type: "single" | "multiple";
  min_selection: number;
  max_selection: number;
  is_required: boolean;
  modifiers: FoodModifier[];
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  base_price: number; // in minor units (e.g. 1850 = $18.50)
  currency_code: string;
  image_url: string;
  category_id: string;
  category_name?: string;
  dietary_type: DietaryType;
  spice_level: number; // 0 to 3
  preparation_minutes: number;
  ingredients: string[];
  allergens: string[];
  is_featured: boolean;
  is_bestseller: boolean;
  is_available: boolean;
  variants?: FoodVariant[];
  modifier_groups?: ModifierGroup[];
  rating?: number;
  reviews_count?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
}

export interface CartItem {
  id: string; // unique item id inside cart
  menu_item: MenuItem;
  quantity: number;
  selected_variant?: FoodVariant;
  selected_modifiers: {
    group_id: string;
    modifier: FoodModifier;
  }[];
  special_instructions?: string;
  calculated_unit_price: number; // in minor units
  item_total: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount_total: number;
  tax_total: number;
  delivery_fee: number;
  grand_total: number;
  applied_coupon?: {
    code: string;
    discount_amount: number;
    discount_type: "percentage" | "fixed";
  };
}

export type OrderType = "dine-in" | "takeaway" | "delivery";
export type OrderStatus =
  | "placed"
  | "confirmed"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  order_number: string;
  order_type: OrderType;
  order_status: OrderStatus;
  payment_status: "pending" | "paid" | "failed" | "refunded";
  payment_method: "card" | "cash_on_delivery" | "upi";
  currency_code: string;
  subtotal: number;
  discount_total: number;
  tax_total: number;
  delivery_fee: number;
  grand_total: number;
  customer_info: {
    name: string;
    email: string;
    phone: string;
  };
  delivery_address?: {
    street: string;
    apartment?: string;
    city: string;
    postal_code: string;
    delivery_notes?: string;
  };
  table_number?: string;
  items: {
    name: string;
    quantity: number;
    unit_price: number;
    item_total: number;
    selected_variant_name?: string;
    modifiers_summary?: string;
  }[];
  placed_at: string;
  estimated_delivery_time?: string;
}

export interface Reservation {
  id: string;
  booking_code: string;
  customer_name: string;
  email: string;
  phone: string;
  party_size: number;
  date: string;
  time_slot: string;
  seating_area: "main_hall" | "private_dining" | "terrace" | "bar_lounge";
  special_requests?: string;
  status: "pending" | "confirmed" | "seated" | "completed" | "cancelled";
  created_at: string;
}

export type GalleryCategory = "all" | "food" | "interior" | "kitchen" | "chefs" | "events";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image_url: string;
  thumbnail_url?: string;
  description: string;
  aspect_ratio?: "landscape" | "portrait" | "square";
  tags?: string[];
  display_order: number;
  is_published: boolean;
}

export interface ChefProfile {
  id: string;
  name: string;
  position: string;
  biography: string;
  image_url: string;
  specialty_dishes: string[];
}

export interface Testimonial {
  id: string;
  customer_name: string;
  avatar_url?: string;
  rating: number;
  review_text: string;
  date: string;
  is_verified: boolean;
}

