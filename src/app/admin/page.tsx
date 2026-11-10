"use client";

import React, { useState } from "react";
import { mockMenuItems, mockGalleryItems, defaultRestaurantConfig } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { MenuItem, GalleryItem } from "@/types";
import {
  ShoppingBag,
  Calendar,
  UtensilsCrossed,
  Image as ImageIcon,
  Settings,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  DollarSign,
  Search,
  X,
  Sparkles,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "reservations" | "menu" | "gallery" | "settings">("orders");

  // Mock State for Live Orders Kanban
  const [orders, setOrders] = useState([
    {
      id: "ORD-928192",
      customer: "Lorde Harrison",
      type: "delivery",
      items: "1x A5 Wagyu Tenderloin (8 oz), 1x Truffle Tagliolini",
      total: 10600,
      status: "preparing",
      time: "10 mins ago",
    },
    {
      id: "ORD-928193",
      customer: "Eleanor Sterling",
      type: "dine-in",
      items: "2x Smoked Chocolate Sphere, 2x Old Fashioned",
      total: 9200,
      status: "placed",
      time: "2 mins ago",
    },
    {
      id: "ORD-928189",
      customer: "David Chen",
      type: "takeaway",
      items: "1x Hokkaido Scallop Crudo",
      total: 2900,
      status: "ready",
      time: "25 mins ago",
    },
  ]);

  // Mock State for Reservations
  const [reservations, setReservations] = useState([
    {
      id: "RES-101",
      customer: "Sophia Martinez",
      party: 4,
      date: "Today",
      time: "19:30",
      area: "Grand Dining Hall",
      status: "confirmed",
    },
    {
      id: "RES-102",
      customer: "Arthur Pendelton",
      party: 2,
      date: "Today",
      time: "20:00",
      area: "Private Reserve Chamber",
      status: "seated",
    },
  ]);

  // Mock State for Menu items
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>(mockMenuItems);
  const [menuSearch, setMenuSearch] = useState("");
  const [isAddDishOpen, setIsAddDishOpen] = useState(false);
  const [newDishName, setNewDishName] = useState("");
  const [newDishPrice, setNewDishPrice] = useState("45.00");
  const [newDishCategory, setNewDishCategory] = useState("Signature Mains");
  const [newDishDesc, setNewDishDesc] = useState("");

  // Mock State for WebGL Gallery CMS
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(mockGalleryItems);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [newMediaTitle, setNewMediaTitle] = useState("");
  const [newMediaCategory, setNewMediaCategory] = useState<any>("food");
  const [newMediaDesc, setNewMediaDesc] = useState("");

  // Settings State
  const [brandName, setBrandName] = useState(defaultRestaurantConfig.name);
  const [tagline, setTagline] = useState(defaultRestaurantConfig.tagline);
  const [primaryColor, setPrimaryColor] = useState(defaultRestaurantConfig.primary_color);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)));
  };

  const handleToggleMenuAvailability = (itemId: string) => {
    setMenuItemsList(
      menuItemsList.map((item) =>
        item.id === itemId ? { ...item, is_available: !item.is_available } : item
      )
    );
  };

  const handleCreateDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDishName) return;

    const newDish: MenuItem = {
      id: "dish-" + Date.now(),
      name: newDishName,
      slug: newDishName.toLowerCase().replace(/\s+/g, "-"),
      description: newDishDesc || "Artisan chef course crafted with seasonal market ingredients.",
      base_price: Math.round(parseFloat(newDishPrice || "45") * 100),
      currency_code: "USD",
      image_url: "/images/gallery/food-wagyu-steak.jpg",
      category_id: "cat-mains",
      category_name: newDishCategory,
      dietary_type: "non-veg",
      spice_level: 0,
      preparation_minutes: 20,
      ingredients: ["Fresh Seasonal Herbs", "Prime Sourcing"],
      allergens: [],
      is_featured: false,
      is_bestseller: false,
      is_available: true,
    };

    setMenuItemsList([newDish, ...menuItemsList]);
    setIsAddDishOpen(false);
    setNewDishName("");
    setNewDishDesc("");
  };

  const handleCreateMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMediaTitle) return;

    const newMedia: GalleryItem = {
      id: "gal-" + Date.now(),
      title: newMediaTitle,
      category: newMediaCategory,
      image_url: "/images/gallery/interior-dining-hall.jpg",
      description: newMediaDesc || "Curated visual capture rendered in 3D WebGL space.",
      display_order: galleryList.length + 1,
      is_published: true,
    };

    setGalleryList([newMedia, ...galleryList]);
    setIsAddMediaOpen(false);
    setNewMediaTitle("");
    setNewMediaDesc("");
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // Dynamically update document root CSS variable immediately so user sees live effect
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--primary", primaryColor);
    }
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3000);
  };

  const filteredMenu = menuItemsList.filter((m) => {
    if (!menuSearch) return true;
    const q = menuSearch.toLowerCase();
    return m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-background pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-text-secondary font-semibold">
                Control Center Live
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-text-main">
              Restaurant Operations & CMS
            </h1>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-status-success/15 text-status-success flex items-center justify-center">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] text-text-secondary block uppercase font-bold">Today Revenue</span>
                <span className="text-sm font-bold text-text-main">$3,840.00</span>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface border border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] text-text-secondary block uppercase font-bold">Active Orders</span>
                <span className="text-sm font-bold text-text-main">{orders.length} in queue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap focus-ring ${
              activeTab === "orders"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Live Orders Kanban</span>
          </button>

          <button
            onClick={() => setActiveTab("reservations")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap focus-ring ${
              activeTab === "reservations"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>Table Reservations</span>
          </button>

          <button
            onClick={() => setActiveTab("menu")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap focus-ring ${
              activeTab === "menu"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
            <span>Menu & Modifiers</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap focus-ring ${
              activeTab === "gallery"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <ImageIcon className="w-4 h-4" aria-hidden="true" />
            <span>WebGL 3D Gallery CMS</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap focus-ring ${
              activeTab === "settings"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <Settings className="w-4 h-4" aria-hidden="true" />
            <span>White-Label Settings</span>
          </button>
        </div>

        {/* TAB 1: LIVE ORDERS KANBAN */}
        {activeTab === "orders" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Placed / Incoming */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <h2 className="font-heading font-bold text-sm text-text-main">Incoming Orders</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-elevated text-primary-accent font-semibold">
                  {orders.filter((o) => o.status === "placed").length}
                </span>
              </div>
              {orders
                .filter((o) => o.status === "placed")
                .map((o) => (
                  <div key={o.id} className="p-4 rounded-2xl bg-surface border border-border space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono font-bold text-primary">{o.id}</span>
                      <span className="text-text-secondary">{o.time}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text-main">{o.customer}</h3>
                      <p className="text-xs text-text-secondary mt-1">{o.items}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <span className="font-bold text-sm text-text-main">{formatPrice(o.total)}</span>
                      <button
                        onClick={() => handleUpdateOrderStatus(o.id, "preparing")}
                        className="px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow focus-ring"
                      >
                        Send to Hearth
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Column 2: In Preparation */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <h2 className="font-heading font-bold text-sm text-text-main">Cooking in Hearth</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-elevated text-primary font-semibold">
                  {orders.filter((o) => o.status === "preparing").length}
                </span>
              </div>
              {orders
                .filter((o) => o.status === "preparing")
                .map((o) => (
                  <div key={o.id} className="p-4 rounded-2xl bg-surface border border-primary/40 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono font-bold text-primary">{o.id}</span>
                      <span className="text-status-success font-medium flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" aria-hidden="true" /> Grilling
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text-main">{o.customer}</h3>
                      <p className="text-xs text-text-secondary mt-1">{o.items}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <span className="font-bold text-sm text-text-main">{formatPrice(o.total)}</span>
                      <button
                        onClick={() => handleUpdateOrderStatus(o.id, "ready")}
                        className="px-3 py-1.5 rounded-xl bg-status-success text-white text-xs font-semibold focus-ring"
                      >
                        Ready for Delivery
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Column 3: Ready / Out */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <h2 className="font-heading font-bold text-sm text-text-main">Ready / In Transit</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-elevated text-status-success font-semibold">
                  {orders.filter((o) => o.status === "ready").length}
                </span>
              </div>
              {orders
                .filter((o) => o.status === "ready")
                .map((o) => (
                  <div key={o.id} className="p-4 rounded-2xl bg-surface border border-border space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono font-bold text-primary">{o.id}</span>
                      <span className="text-text-secondary text-[11px]">{o.type.toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text-main">{o.customer}</h3>
                      <p className="text-xs text-text-secondary mt-1">{o.items}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <span className="font-bold text-sm text-text-main">{formatPrice(o.total)}</span>
                      <button
                        onClick={() => handleUpdateOrderStatus(o.id, "delivered")}
                        className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-status-success text-text-main hover:text-white text-xs font-semibold transition-colors focus-ring"
                      >
                        Mark Completed
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 2: TABLE RESERVATIONS */}
        {activeTab === "reservations" && (
          <div className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-base text-text-main">
                Evening Table Schedule
              </h2>
              <span className="text-xs text-text-secondary">Auto-sync with table availability engine</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-text-secondary uppercase">
                    <th className="pb-3">Booking Code</th>
                    <th className="pb-3">Patron Name</th>
                    <th className="pb-3">Party</th>
                    <th className="pb-3">Time</th>
                    <th className="pb-3">Atmosphere Zone</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {reservations.map((res) => (
                    <tr key={res.id} className="text-text-main">
                      <td className="py-4 font-mono font-bold text-primary">{res.id}</td>
                      <td className="py-4 font-semibold">{res.customer}</td>
                      <td className="py-4">{res.party} Guests</td>
                      <td className="py-4">{res.time}</td>
                      <td className="py-4 text-text-secondary">{res.area}</td>
                      <td className="py-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-status-success/15 text-status-success border border-status-success/30">
                          {res.status}
                        </span>
                      </td>
                      <td className="py-4 text-right space-x-2">
                        <button className="px-3 py-1 rounded-lg bg-surface-elevated hover:bg-primary text-white transition-colors focus-ring">
                          Seat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: MENU & MODIFIERS CRUD */}
        {activeTab === "menu" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Filter catalog courses..."
                  value={menuSearch}
                  onChange={(e) => setMenuSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                />
              </div>

              <button
                onClick={() => setIsAddDishOpen(true)}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold flex items-center gap-1.5 shadow-glow hover:bg-primary-accent active:scale-95 transition-all focus-ring"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Add New Course</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((item) => (
                <div key={item.id} className="p-5 rounded-2xl bg-surface border border-border flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase font-bold text-primary">{item.category_name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                          item.is_available ? "bg-status-success/15 text-status-success" : "bg-status-error/15 text-status-error"
                        }`}
                      >
                        {item.is_available ? "Available" : "Sold Out"}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-text-main mb-1">{item.name}</h3>
                    <p className="text-xs text-text-secondary line-clamp-2">{item.description}</p>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between items-center mt-4">
                    <span className="font-bold text-sm text-text-main">{formatPrice(item.base_price)}</span>
                    <button
                      onClick={() => handleToggleMenuAvailability(item.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-elevated hover:bg-surface text-text-secondary hover:text-text-main border border-border transition-colors focus-ring"
                    >
                      {item.is_available ? "Mark Sold Out" : "Mark Available"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: WEBGL GALLERY CMS */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-heading font-bold text-base text-text-main">
                  WebGL 3D Media Gallery Manager
                </h2>
                <p className="text-xs text-text-secondary">
                  Photos are mapped onto Three.js 3D planes with liquid wave shaders.
                </p>
              </div>
              <button
                onClick={() => setIsAddMediaOpen(true)}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold flex items-center gap-1.5 shadow-glow hover:bg-primary-accent active:scale-95 transition-all focus-ring"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Upload 3D Media</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryList.map((item) => (
                <div key={item.id} className="rounded-2xl bg-surface border border-border overflow-hidden">
                  <div className="h-44 overflow-hidden relative bg-black">
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/80 text-primary uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-xs text-text-main mb-1">{item.title}</h3>
                    <p className="text-[11px] text-text-secondary line-clamp-2">{item.description}</p>
                    <div className="pt-3 border-t border-border flex justify-between items-center mt-3 text-xs">
                      <span className="text-status-success text-[11px]">Rendered in WebGL</span>
                      <button
                        onClick={() => setGalleryList(galleryList.filter((g) => g.id !== item.id))}
                        className="text-status-error hover:underline text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: WHITE-LABEL BRANDING & SETTINGS */}
        {activeTab === "settings" && (
          <form onSubmit={handleSaveSettings} className="glass-card rounded-2xl p-6 sm:p-8 border border-border max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading font-bold text-base text-text-main">
              Dynamic White-Label Identity & Theming
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="settings-brand-name" className="text-xs font-semibold text-text-secondary block mb-1">
                  Restaurant Brand Name
                </label>
                <input
                  id="settings-brand-name"
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                />
              </div>

              <div>
                <label htmlFor="settings-tagline" className="text-xs font-semibold text-text-secondary block mb-1">
                  Tagline & Positioning
                </label>
                <input
                  id="settings-tagline"
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="settings-primary-color" className="text-xs font-semibold text-text-secondary block mb-1">
                    Primary Accent Color (Live Preview)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="settings-primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-xl bg-transparent border-0 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-surface border border-border text-xs text-text-main font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="settings-currency" className="text-xs font-semibold text-text-secondary block mb-1">
                    Currency Representation
                  </label>
                  <input
                    id="settings-currency"
                    type="text"
                    defaultValue="USD"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main font-mono"
                  />
                </div>
              </div>
            </div>

            {savedSettingsNotice && (
              <div
                role="status"
                className="p-3.5 rounded-xl bg-status-success/15 border border-status-success/30 text-status-success text-xs font-semibold flex items-center gap-2 animate-fadeIn"
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Settings updated and CSS variables propagated live to DOM!</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-xs shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all focus-ring"
            >
              Save & Propagate Theme Live
            </button>
          </form>
        )}
      </div>

      {/* MODAL: ADD NEW COURSE */}
      {isAddDishOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface border border-border rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-base text-text-main">Add New Course</h3>
              <button onClick={() => setIsAddDishOpen(false)} className="text-text-secondary hover:text-text-main">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateDish} className="space-y-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">Dish Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kurobuta Pork Belly"
                  value={newDishName}
                  onChange={(e) => setNewDishName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-text-secondary block mb-1">Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newDishPrice}
                    onChange={(e) => setNewDishPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary block mb-1">Course Category</label>
                  <select
                    value={newDishCategory}
                    onChange={(e) => setNewDishCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring"
                  >
                    <option value="Artisan Starters">Artisan Starters</option>
                    <option value="Signature Mains">Signature Mains</option>
                    <option value="Coastal & Raw Bar">Coastal & Raw Bar</option>
                    <option value="Handmade Pasta">Handmade Pasta</option>
                    <option value="Desserts & Patisserie">Desserts</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-text-secondary block mb-1">Culinary Description</label>
                <textarea
                  rows={3}
                  value={newDishDesc}
                  onChange={(e) => setNewDishDesc(e.target.value)}
                  placeholder="Ingredients, wood-fire preparation notes..."
                  className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow"
              >
                Publish Course to Menu
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: UPLOAD 3D MEDIA */}
      {isAddMediaOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface border border-border rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading font-bold text-base text-text-main">Add 3D Gallery Media</h3>
              <button onClick={() => setIsAddMediaOpen(false)} className="text-text-secondary hover:text-text-main">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateMedia} className="space-y-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Private Cellar Tasting"
                  value={newMediaTitle}
                  onChange={(e) => setNewMediaTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary block mb-1">Category</label>
                <select
                  value={newMediaCategory}
                  onChange={(e) => setNewMediaCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring"
                >
                  <option value="food">Gourmet Food Plating</option>
                  <option value="interior">Interior Ambiance</option>
                  <option value="kitchen">Live Fire Kitchen</option>
                  <option value="chefs">Master Chefs</option>
                  <option value="events">Cocktail Lounge & Events</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-secondary block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newMediaDesc}
                  onChange={(e) => setNewMediaDesc(e.target.value)}
                  placeholder="Visual notes for WebGL lightbox..."
                  className="w-full px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main focus-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow"
              >
                Add to WebGL Scene
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
