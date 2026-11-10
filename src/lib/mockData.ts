import {
  RestaurantConfig,
  MenuCategory,
  MenuItem,
  GalleryItem,
  ChefProfile,
  Testimonial,
} from "@/types";

export const defaultRestaurantConfig: RestaurantConfig = {
  id: "rest-001",
  name: "AURA LUXE",
  tagline: "Modern Culinary Artistry & Gastronomy",
  description:
    "An avant-garde dining experience combining precision culinary craft, immersive ambiance, and hyper-seasonal ingredients.",
  logo_url: "/images/logo.svg",
  favicon_url: "/favicon.ico",
  primary_color: "#FF781F",
  accent_color: "#FFB45C",
  currency_code: "USD",
  timezone: "America/New_York",
  phone: "+1 (555) 839-2872",
  email: "concierge@auraluxe-dining.com",
  address: {
    street: "450 Grand Avenue, Suite 100",
    city: "New York",
    state: "NY",
    postal_code: "10001",
    country: "United States",
  },
  social_links: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  opening_hours: [
    { days: "Monday - Thursday", hours: "5:00 PM – 11:00 PM" },
    { days: "Friday - Saturday", hours: "4:30 PM – 12:30 AM" },
    { days: "Sunday", hours: "4:00 PM – 10:30 PM" },
  ],
};

export const mockCategories: MenuCategory[] = [
  {
    id: "cat-starters",
    name: "Artisan Starters",
    slug: "starters",
    description: "Delicate bites crafted with rare seasonal ingredients.",
    display_order: 1,
    is_active: true,
  },
  {
    id: "cat-mains",
    name: "Signature Mains",
    slug: "mains",
    description: "Wood-fired cuts and chef-curated prime entrees.",
    display_order: 2,
    is_active: true,
  },
  {
    id: "cat-seafood",
    name: "Coastal & Raw Bar",
    slug: "coastal",
    description: "Daily caught wild seafood paired with citrus emulsions.",
    display_order: 3,
    is_active: true,
  },
  {
    id: "cat-pastas",
    name: "Handmade Pasta & Risotto",
    slug: "pasta",
    description: "House-extruded durum wheat pasta and aged carnaroli rice.",
    display_order: 4,
    is_active: true,
  },
  {
    id: "cat-desserts",
    name: "Desserts & Patisserie",
    slug: "desserts",
    description: "Architectural pastries, smoked chocolate, and sorbets.",
    display_order: 5,
    is_active: true,
  },
  {
    id: "cat-beverages",
    name: "Reserve Cellar & Cocktails",
    slug: "beverages",
    description: "Sommelier-selected reserve vintages and artisanal smoke cocktails.",
    display_order: 6,
    is_active: true,
  },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: "dish-01",
    name: "A5 Miyazaki Wagyu Tenderloin",
    slug: "a5-miyazaki-wagyu",
    description:
      "Charcoal-seared Japanese A5 beef tenderloin, black winter truffle silk puree, charred baby leeks, and 25-year balsamico jus.",
    base_price: 6800, // $68.00
    currency_code: "USD",
    image_url: "/images/gallery/food-wagyu-steak.jpg",
    category_id: "cat-mains",
    category_name: "Signature Mains",
    dietary_type: "non-veg",
    spice_level: 0,
    preparation_minutes: 25,
    ingredients: ["A5 Japanese Wagyu", "Winter Black Truffle", "Fingerling Puree", "Shallot Jus", "Micro Chervil"],
    allergens: ["Dairy"],
    is_featured: true,
    is_bestseller: true,
    is_available: true,
    rating: 4.9,
    reviews_count: 142,
    variants: [
      { id: "var-6oz", name: "6 oz Petite Cut", price_adjustment: 0, is_available: true },
      { id: "var-8oz", name: "8 oz Signature Cut", price_adjustment: 1800, is_available: true },
      { id: "var-10oz", name: "10 oz Imperial Cut", price_adjustment: 3400, is_available: true },
    ],
    modifier_groups: [
      {
        id: "mod-doneness",
        name: "Meat Temperature",
        selection_type: "single",
        min_selection: 1,
        max_selection: 1,
        is_required: true,
        modifiers: [
          { id: "m-rare", name: "Rare (Warm red center)", price_adjustment: 0, is_available: true },
          { id: "m-med-rare", name: "Medium Rare (Recommended)", price_adjustment: 0, is_available: true },
          { id: "m-med", name: "Medium (Warm pink)", price_adjustment: 0, is_available: true },
        ],
      },
      {
        id: "mod-extras",
        name: "Chef's Luxury Enhancements",
        selection_type: "multiple",
        min_selection: 0,
        max_selection: 3,
        is_required: false,
        modifiers: [
          { id: "ex-foie", name: "Pan-Seared Hudson Valley Foie Gras", price_adjustment: 2200, is_available: true },
          { id: "ex-truffle", name: "Tableside Shaved Alba Truffle", price_adjustment: 1600, is_available: true },
          { id: "ex-lobster", name: "Butter-Poached Maine Lobster Tail", price_adjustment: 2600, is_available: true },
        ],
      },
    ],
  },
  {
    id: "dish-02",
    name: "Wild Morel & Black Truffle Tagliolini",
    slug: "truffle-morel-tagliolini",
    description:
      "Hand-cut 30-egg yolk pasta ribbon, foraged Pacific morels, Parmigiano-Reggiano Vacche Rosse emulsion, cured egg yolk snow.",
    base_price: 3800, // $38.00
    currency_code: "USD",
    image_url: "/images/gallery/food-truffle-tagliolini.jpg",
    category_id: "cat-pastas",
    category_name: "Handmade Pasta & Risotto",
    dietary_type: "veg",
    spice_level: 0,
    preparation_minutes: 20,
    ingredients: ["Durum Semolina", "Fresh Morel Mushrooms", "Umbrian Black Truffle", "Aged Parmigiano", "Cultured Butter"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    is_featured: true,
    is_bestseller: true,
    is_available: true,
    rating: 4.8,
    reviews_count: 98,
    modifier_groups: [
      {
        id: "mod-pasta-size",
        name: "Portion Size",
        selection_type: "single",
        min_selection: 1,
        max_selection: 1,
        is_required: true,
        modifiers: [
          { id: "m-app", name: "Primi (Appetizer Portion)", price_adjustment: -800, is_available: true },
          { id: "m-main", name: "Secondi (Full Main Portion)", price_adjustment: 0, is_available: true },
        ],
      },
    ],
  },
  {
    id: "dish-03",
    name: "Hokkaido Scallop Crudo",
    slug: "hokkaido-scallop-crudo",
    description:
      "Flash-sliced sashimi-grade diver scallops, finger lime pearls, white ponzu gelée, pickled shallots, pressed extra virgin olive oil.",
    base_price: 2900, // $29.00
    currency_code: "USD",
    image_url: "/images/gallery/food-scallop-crudo.jpg",
    category_id: "cat-seafood",
    category_name: "Coastal & Raw Bar",
    dietary_type: "non-veg",
    spice_level: 1,
    preparation_minutes: 15,
    ingredients: ["Hokkaido Diver Scallops", "Finger Lime", "White Ponzu", "Oscietra Caviar", "Shiso Oil"],
    allergens: ["Shellfish"],
    is_featured: true,
    is_bestseller: false,
    is_available: true,
    rating: 4.9,
    reviews_count: 64,
  },
  {
    id: "dish-04",
    name: "Smoked Dark Chocolate Sphere",
    slug: "smoked-chocolate-sphere",
    description:
      "70% Valrhona Guanaja cocoa dome filled with Madagascar vanilla bean mousse, molten espresso caramel poured tableside.",
    base_price: 2200, // $22.00
    currency_code: "USD",
    image_url: "/images/gallery/food-chocolate-sphere.jpg",
    category_id: "cat-desserts",
    category_name: "Desserts & Patisserie",
    dietary_type: "veg",
    spice_level: 0,
    preparation_minutes: 12,
    ingredients: ["Valrhona 70% Dark Chocolate", "Tahitian Vanilla", "Fleur de Sel Caramel", "Hazelnut Praline"],
    allergens: ["Dairy", "Nuts"],
    is_featured: false,
    is_bestseller: true,
    is_available: true,
    rating: 5.0,
    reviews_count: 182,
  },
  {
    id: "dish-05",
    name: "Smoked Rosemary Old Fashioned",
    slug: "smoked-rosemary-old-fashioned",
    description:
      "Small-batch bourbon infused with charred orange peel, charred rosemary branch smoke, house spiced bitters, hand-carved ice sphere.",
    base_price: 2400, // $24.00
    currency_code: "USD",
    image_url: "/images/gallery/lounge-cocktail-bar.jpg",
    category_id: "cat-beverages",
    category_name: "Reserve Cellar & Cocktails",
    dietary_type: "vegan",
    spice_level: 0,
    preparation_minutes: 8,
    ingredients: ["Woodford Reserve Bourbon", "Angostura & Orange Bitters", "Demerara Syrup", "Charred Rosemary"],
    allergens: [],
    is_featured: true,
    is_bestseller: true,
    is_available: true,
    rating: 4.9,
    reviews_count: 215,
  },
];

export const mockGalleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Signature Wagyu Striploin & Black Truffle",
    category: "food",
    image_url: "/images/gallery/food-wagyu-steak.jpg",
    description:
      "A5 Japanese Wagyu seared over binchotan white charcoal with winter truffles and micro herbs.",
    aspect_ratio: "landscape",
    tags: ["Signature", "A5 Wagyu", "Fine Dining"],
    display_order: 1,
    is_published: true,
  },
  {
    id: "gal-02",
    title: "Wild Morel & Truffle Tagliolini",
    category: "food",
    image_url: "/images/gallery/food-truffle-tagliolini.jpg",
    description:
      "Handmade 30-egg yolk pasta with Pacific morels and shaved Umbrian winter truffles.",
    aspect_ratio: "landscape",
    tags: ["Handmade Pasta", "Umbrian Truffle"],
    display_order: 2,
    is_published: true,
  },
  {
    id: "gal-03",
    title: "Hokkaido Scallop Crudo & Oscietra Caviar",
    category: "food",
    image_url: "/images/gallery/food-scallop-crudo.jpg",
    description:
      "Flash-sliced sashimi-grade scallops arranged in an intricate rosette with finger lime pearls and ponzu.",
    aspect_ratio: "landscape",
    tags: ["Coastal", "Oscietra Caviar"],
    display_order: 3,
    is_published: true,
  },
  {
    id: "gal-04",
    title: "Valrhona Smoked Dark Chocolate Sphere",
    category: "food",
    image_url: "/images/gallery/food-chocolate-sphere.jpg",
    description:
      "Molten espresso caramel sauce poured tableside over a 70% dark chocolate dome.",
    aspect_ratio: "landscape",
    tags: ["Patisserie", "Valrhona Cocoa"],
    display_order: 4,
    is_published: true,
  },
  {
    id: "gal-05",
    title: "The Grand Dining Hall & Atrium",
    category: "interior",
    image_url: "/images/gallery/interior-dining-hall.jpg",
    description:
      "Atmospheric evening ambiance featuring curved brass details, velvet booths, and moody candlelight.",
    aspect_ratio: "landscape",
    tags: ["Atmosphere", "Architecture", "Luxury"],
    display_order: 5,
    is_published: true,
  },
  {
    id: "gal-06",
    title: "Open Hearth & Culinary Theatre",
    category: "kitchen",
    image_url: "/images/gallery/kitchen-live-flame.jpg",
    description:
      "Guests experience live fire cooking, wood-fired roasting, and precision finishing in our open kitchen.",
    aspect_ratio: "landscape",
    tags: ["Live Fire", "Kitchen", "Artistry"],
    display_order: 6,
    is_published: true,
  },
  {
    id: "gal-07",
    title: "Chef Marcus Vance's Plating Precision",
    category: "chefs",
    image_url: "/images/gallery/chef-precision-plating.jpg",
    description:
      "Executive Chef Marcus Vance meticulously garnishing our seasonal coastal course with tweezers.",
    aspect_ratio: "portrait",
    tags: ["Executive Chef", "Craftsmanship"],
    display_order: 7,
    is_published: true,
  },
  {
    id: "gal-08",
    title: "Head Pastry Chef Elena Rostova",
    category: "chefs",
    image_url: "/images/gallery/chef-elena-pastry.jpg",
    description:
      "Head Pastry Chef Elena Rostova applying delicate edible gold leaf onto architectural dessert creations.",
    aspect_ratio: "portrait",
    tags: ["Pastry Chef", "Sculptural Patisserie"],
    display_order: 8,
    is_published: true,
  },
  {
    id: "gal-09",
    title: "The Obsidian Cocktail Lounge",
    category: "events",
    image_url: "/images/gallery/lounge-cocktail-bar.jpg",
    description:
      "Handcrafted smoked libations, rare vintage spirits, and intimate private booth gatherings.",
    aspect_ratio: "landscape",
    tags: ["Cocktails", "Mixology", "Lounge"],
    display_order: 9,
    is_published: true,
  },
];

export const mockChefs: ChefProfile[] = [
  {
    id: "chef-01",
    name: "Chef Marcus Vance",
    position: "Executive Chef & Culinary Director",
    biography:
      "With 18 years across 3-Michelin-starred kitchens in Lyon, Tokyo, and New York, Chef Marcus brings classical French rigor to bold avant-garde flavor concepts.",
    image_url: "/images/gallery/chef-precision-plating.jpg",
    specialty_dishes: ["A5 Miyazaki Wagyu", "Charcoal Smoked Duck Breast"],
  },
  {
    id: "chef-02",
    name: "Elena Rostova",
    position: "Head Pastry Chef",
    biography:
      "Trained at L'École Valrhona, Elena transforms pastry into sculptural architectural art with surprising savory nuances and botanical infusions.",
    image_url: "/images/gallery/chef-elena-pastry.jpg",
    specialty_dishes: ["Valrhona Smoked Sphere", "Citrus & Shiso Tart"],
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "test-01",
    customer_name: "Eleanor Sterling",
    rating: 5,
    review_text:
      "An unforgettable sensory journey. The A5 Wagyu paired with their cellar reserve was transcendent. The lighting and digital presentation are out of this world.",
    date: "November 2026",
    is_verified: true,
  },
  {
    id: "test-02",
    customer_name: "David Chen",
    rating: 5,
    review_text:
      "The online reservation and table selection were effortless. Dining by the open hearth was cinematic. Truly sets the gold standard for luxury dining.",
    date: "October 2026",
    is_verified: true,
  },
  {
    id: "test-03",
    customer_name: "Sophia Martinez",
    rating: 5,
    review_text:
      "Flawless hospitality. We ordered through their digital platform for private catering—every course arrived at exact temperature with Michelin-level precision.",
    date: "October 2026",
    is_verified: true,
  },
];
