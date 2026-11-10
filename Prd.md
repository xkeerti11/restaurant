
# MASTER PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Premium Restaurant Website & Management Platform

**Document Type:** Complete Product Requirements & Technical Specification  
**Product:** Generic White-Label Restaurant Website  
**Design Direction:** Premium Dark / Luxury Modern  
**Reference:** User-provided restaurant website screenshot  
**Frontend:** Next.js + TypeScript  
**Backend:** Supabase + PostgreSQL  
**UI:** Tailwind CSS + shadcn/ui  
**Animation:** Framer Motion  
**Status:** Development Specification

---

# 1. PROJECT OVERVIEW

## 1.1 Product Vision

Develop a premium, modern, fully responsive restaurant website with a complete restaurant management system.

The website must provide an elegant food discovery experience, online ordering, table reservations, customer management, and a powerful admin dashboard.

The platform must be generic and white-label ready. It must not contain any hardcoded restaurant identity, business name, logo, address, phone number, menu, or branding.

All restaurant-specific information must be dynamically manageable through the admin dashboard.

## 1.2 Primary Objectives

1. Create a premium restaurant website.
2. Provide a complete digital food menu.
3. Enable online food ordering.
4. Enable table reservations.
5. Provide a complete shopping cart and checkout.
6. Integrate payment processing.
7. Provide order tracking.
8. Create a powerful restaurant admin dashboard.
9. Allow dynamic content management.
10. Support mobile, tablet, and desktop.
11. Optimize the website for SEO and performance.
12. Build a reusable architecture for multiple restaurant clients.

## 1.3 Product Architecture

The application consists of three primary systems:

### A. Public Website
- Homepage
- About
- Menu
- Food details
- Offers
- Gallery
- Reservations
- Online ordering
- Cart
- Checkout
- Order tracking
- Contact
- FAQ
- Legal pages

### B. Customer System
- Registration
- Login
- Profile
- Order history
- Reservation history
- Saved addresses
- Wishlist
- Reviews
- Loyalty points

### C. Admin Management System
- Dashboard
- Menu management
- Category management
- Order management
- Reservation management
- Customer management
- Coupon management
- Gallery management
- Website CMS
- Branch management
- Staff management
- Analytics
- Settings

---

# 2. BRANDING & DESIGN CONFIGURATION

## 2.1 Branding Requirements

No fixed brand identity will be included in the source code.

The application must support dynamic branding.

Configurable fields:

| Field | Type |
|---|---|
| Restaurant Name | Text |
| Logo | Image upload |
| Favicon | Image upload |
| Tagline | Text |
| Description | Rich text |
| Primary Color | Color picker |
| Secondary Color | Color picker |
| Accent Color | Color picker |
| Background Color | Color picker |
| Heading Font | Font selector |
| Body Font | Font selector |
| Contact Email | Email |
| Phone Number | Phone |
| Address | Text |
| Social Links | URLs |
| Opening Hours | Structured data |

All information must be editable through the admin dashboard.

If a field is not configured, use a neutral fallback or hide the corresponding component. Never display invented business information.

## 2.2 Default Visual Design System

The initial theme should follow the supplied reference screenshot.

### Color Tokens

| Token | Default |
|---|---|
| Background | #08090B |
| Surface | #111316 |
| Elevated Surface | #191C20 |
| Primary Accent | #FF781F |
| Secondary Accent | #FFB45C |
| Main Text | #F5F2EC |
| Secondary Text | #999DA5 |
| Border | #292D32 |
| Success | #35B779 |
| Error | #E45B50 |

These values must be configurable.

### Typography

- Headings: Sora
- Body: Inter
- Buttons: Inter Semibold
- Prices: Inter Bold

### Design Rules

- Premium dark background.
- Orange highlights.
- Large food photography.
- Rounded cards.
- Subtle glass effects.
- Thin borders.
- Soft shadows.
- Controlled gradients.
- High contrast typography.
- Consistent spacing.
- Responsive layouts.

### Design Dimensions

| Element | Desktop |
|---|---|
| Content Maximum Width | 1200–1320px |
| Navbar Height | 72px |
| Section Spacing | 90–120px |
| Card Radius | 18–24px |
| Button Height | 44–52px |
| Main Container Padding | 40–60px |

Mobile spacing must be independently optimized.

---

# 3. PUBLIC WEBSITE – PAGE-WISE REQUIREMENTS

# PAGE 01: HOMEPAGE

Route: `/`

## Section 1: Announcement Bar

Purpose: Display important promotions and announcements.

Components:
- Announcement text
- Promotional icon
- CTA link
- Optional countdown
- Close button
- Announcement carousel

Functionality:
- Dynamic announcement management.
- Enable/disable.
- Schedule start and end dates.
- CTA destination configuration.
- Mobile responsive scrolling.

## Section 2: Navbar

Components:
- Dynamic restaurant logo.
- Navigation links.
- Account icon.
- Shopping cart icon.
- Cart quantity badge.
- Book Table CTA.
- Mobile hamburger menu.

Navigation:
- Home
- Menu
- About
- Specials
- Gallery
- Contact

Interactions:
- Sticky navigation.
- Transparent initial state.
- Background transition on scroll.
- Active route indicator.
- Dropdown menu.
- Mobile navigation drawer.
- Cart state synchronization.

## Section 3: Hero

Layout: Two-column desktop layout.

Left:
- Eyebrow text.
- Main H1 heading.
- Highlighted text.
- Description.
- Explore Menu button.
- Book Table button.
- Optional rating indicator.

Right:
- Large transparent food image.
- Radial background glow.
- Decorative elements.
- Floating animation.

CMS fields:
- Heading.
- Highlighted heading text.
- Description.
- Hero image.
- Mobile hero image.
- CTA labels.
- CTA destinations.

## Section 4: Promotional Banner

Design: Ticket-style horizontal promotional card.

Components:
- Offer title.
- Discount amount.
- Coupon code.
- Expiry information.
- Customer avatars (optional).
- Food image.
- Apply Offer button.

Functionality:
- Copy coupon.
- Validate coupon.
- Redirect to menu.
- Dynamic expiry.
- Admin-controlled visibility.

## Section 5: Trust Indicators

Configurable statistics:
- Customer count.
- Experience.
- Restaurant rating.
- Total dishes.

Only verified business information may be published.

## Section 6: Food Categories

Components:
- Section heading.
- Description.
- Category image cards.
- Category title.
- Dish count.
- Explore arrow.

Functionality:
- Dynamic category retrieval.
- Category navigation.
- Category filtering.
- Active category state.
- Mobile horizontal scrolling.

## Section 7: Bestselling Dishes

Components:
- Section heading.
- View All Menu.
- Food cards.
- Food image.
- Food name.
- Description.
- Price.
- Rating.
- Veg/Non-Veg badge.
- Bestseller badge.
- Add to Cart.

Interactions:
- Quick View.
- Add to Cart.
- Customization modal.
- Quantity selection.
- Availability validation.
- Cart feedback.

## Section 8: Why Choose Us

Four configurable feature cards.

Each card:
- Icon.
- Heading.
- Description.

Admin can add, edit, delete and reorder features.

## Section 9: About Preview

Components:
- About image.
- Brand story.
- Description.
- Established year (optional).
- Learn More CTA.

## Section 10: Special Offers

Components:
- Offer image.
- Offer title.
- Original price.
- Discounted price.
- Promo code.
- Expiration date.
- View Offer CTA.

## Section 11: Chef Recommendations

Components:
- Chef's Pick label.
- Featured food image.
- Dish information.
- Chef name (if configured).
- Price.
- Add to Cart.

## Section 12: Food Gallery

Components:
- Masonry image grid.
- Gallery categories.
- Image preview.
- Lightbox.
- Next/Previous navigation.

## Section 13: Testimonials

Components:
- Customer photo (optional).
- Customer name.
- Rating.
- Review text.
- Review date.
- Verified status (only if verified).

Interactions:
- Carousel.
- Manual navigation.
- Mobile swipe.
- Admin moderation.

## Section 14: Meet Our Chefs

Components:
- Chef photograph.
- Name.
- Position.
- Biography.
- Experience.
- Specialization.

Section must be hidden if no chef information is available.

## Section 15: Table Reservation

Components:
- Reservation heading.
- Description.
- Booking form.
- Date picker.
- Time selection.
- Guest count.
- Seating preference.
- Contact information.
- Special requests.

## Section 16: Location & Opening Hours

Components:
- Address.
- Phone.
- Email.
- Opening schedule.
- Map.
- Directions CTA.

## Section 17: FAQ

Components:
- Question.
- Answer.
- Accordion.
- Category grouping (optional).

## Section 18: Newsletter

Components:
- Heading.
- Description.
- Email input.
- Subscribe button.
- Consent checkbox.

## Section 19: Footer

Columns:
1. Dynamic logo and description.
2. Quick navigation.
3. Menu categories.
4. Contact information.
5. Opening hours.
6. Social media.
7. Newsletter.

Bottom:
- Copyright.
- Privacy Policy.
- Terms.
- Refund Policy.
- Delivery Policy.

---

# PAGE 02: ABOUT US

Route: `/about`

Sections:

1. Breadcrumb.
2. Page hero.
3. Restaurant introduction.
4. Brand story.
5. History timeline.
6. Mission and vision.
7. Food philosophy.
8. Ingredient sourcing.
9. Chef profiles.
10. Awards and achievements.
11. CTA to explore menu.
12. Footer.

CMS:
- All text and images configurable.
- Timeline entries configurable.
- Sections reorderable.
- Optional sections hideable.

---

# PAGE 03: MENU

Route: `/menu`

## Layout

Top:
- Breadcrumb.
- Page title.
- Description.
- Search bar.

Below:
- Category navigation.
- Filter sidebar.
- Sorting dropdown.
- Food card grid.

## Filters

- All.
- Vegetarian.
- Vegan.
- Non-Vegetarian.
- Gluten-Free.
- Spicy.
- Price range.
- Availability.
- Rating.

## Search

Search must support:
- Dish name.
- Description.
- Ingredients.
- Category.

## Sorting

- Popularity.
- Price ascending.
- Price descending.
- Rating.
- Newest.

## Food Card

- Image.
- Name.
- Description.
- Price.
- Rating.
- Dietary badge.
- Bestseller.
- Availability.
- Add to Cart.

## Pagination

Support pagination or incremental loading.

Empty states:
- No dishes found.
- Category empty.
- Search returned no results.

---

# PAGE 04: FOOD DETAILS

Route: `/menu/[slug]`

Components:

- Breadcrumb.
- Main image.
- Food name.
- Description.
- Price.
- Ingredients.
- Allergens.
- Dietary information.
- Spice level.
- Preparation time.
- Size variants.
- Add-ons.
- Quantity selector.
- Special instructions.
- Add to Cart.
- Related dishes.

## Customization Logic

Example:
- Size: Small / Medium / Large.
- Crust: Regular / Thin / Cheese Burst.
- Extra Cheese.
- Additional Toppings.

Price formula:

Final Item Price = Base Price + Variant Price + Selected Add-ons.

Quantity must be multiplied by the final configured unit price.

All customization options must be validated by the backend.

---

# PAGE 05: SPECIAL OFFERS

Route: `/specials`

Features:
- Active offers.
- Upcoming offers.
- Offer cards.
- Coupon details.
- Validity.
- Terms and conditions.
- Apply coupon.
- Copy code.

Expired offers must not be available for checkout.

---

# PAGE 06: GALLERY

Route: `/gallery`

Features:
- Food gallery.
- Interior gallery.
- Kitchen gallery.
- Chef gallery.
- Events gallery.
- Image masonry layout.
- Lightbox.
- Full-screen preview.
- Video support.
- Lazy loading.

Admin must control gallery uploads and ordering.

---

# PAGE 07: RESERVATION

Route: `/reservation`

## Reservation Form

Fields:
- Branch.
- Customer name.
- Phone.
- Email.
- Reservation date.
- Reservation time.
- Number of guests.
- Seating preference.
- Occasion.
- Special requests.

## Reservation Logic

1. Customer selects branch.
2. Customer selects date.
3. Customer selects guest count.
4. System fetches available time slots.
5. Customer selects a slot.
6. System validates capacity.
7. Customer submits information.
8. Backend creates reservation.
9. Confirmation is generated.
10. Notifications are triggered.

Reservation statuses:
- Pending.
- Confirmed.
- Checked In.
- Completed.
- Cancelled.
- No Show.

Prevent double booking using server-side transactional availability checks.

---

# PAGE 08: CART

Route: `/cart`

Components:
- Cart items.
- Food thumbnail.
- Item name.
- Variant details.
- Add-on details.
- Quantity selector.
- Remove item.
- Edit customization.
- Coupon input.
- Price summary.
- Continue Shopping.
- Proceed to Checkout.

Calculations:
- Subtotal.
- Discounts.
- Taxes.
- Delivery fee.
- Other configured charges.
- Grand total.

Handle:
- Empty cart.
- Out-of-stock items.
- Price changes.
- Invalid coupon.
- Removed products.

Server must recalculate prices before checkout.

---

# PAGE 09: CHECKOUT

Route: `/checkout`

Sections:

1. Customer details.
2. Delivery or pickup selection.
3. Address.
4. Delivery instructions.
5. Branch selection.
6. Order summary.
7. Coupon.
8. Tax breakdown.
9. Payment selection.
10. Place Order.

Payment options:
- UPI.
- Card.
- Net Banking.
- Wallets where supported.
- Cash on Delivery if enabled.
- Pay at Restaurant if enabled.

Payment processing:
- Create pending order.
- Create payment request.
- Verify payment server-side.
- Verify webhook signature.
- Update payment status.
- Confirm order after successful validation.

Never store raw card information.

---

# PAGE 10: ORDER CONFIRMATION

Route: `/order/success`

Components:
- Success indicator.
- Order number.
- Order summary.
- Payment status.
- Estimated preparation time.
- Customer details.
- Track Order CTA.
- Continue Shopping.

Order information must be accessible only to the authorized customer or authorized staff.

---

# PAGE 11: ORDER TRACKING

Route: `/order/[id]`

Status timeline:
1. Order Received.
2. Confirmed.
3. Preparing.
4. Ready / Out for Delivery.
5. Delivered.

Features:
- Order details.
- Status updates.
- Estimated time.
- Payment details.
- Branch contact.
- Cancellation eligibility.

Real-time updates through Supabase Realtime or an equivalent reliable mechanism.

---

# PAGE 12: CONTACT

Route: `/contact`

Components:
- Contact information.
- Address.
- Phone.
- Email.
- Opening hours.
- Map.
- Directions.
- Contact form.
- WhatsApp CTA (if configured).

Contact form fields:
- Name.
- Email.
- Phone (optional).
- Subject.
- Message.

Include server-side validation, spam protection and submission confirmation.

---

# PAGE 13: CUSTOMER ACCOUNT

Routes:
- `/login`
- `/register`
- `/forgot-password`
- `/account`

Account sections:
- Profile.
- Orders.
- Reservations.
- Saved addresses.
- Wishlist.
- Reviews.
- Loyalty points.
- Account security.

Authentication:
- Email/password.
- Phone OTP where configured.
- Supported OAuth providers.

---

# PAGE 14: FAQ

Route: `/faq`

Features:
- Categorized FAQs.
- Search.
- Accordion.
- Contact support CTA.

---

# PAGE 15: LEGAL PAGES

Routes:
- `/privacy-policy`
- `/terms`
- `/refund-policy`
- `/delivery-policy`

Content must be editable and reviewed according to the restaurant's actual business policies and applicable law.

---

# 4. ADMIN DASHBOARD REQUIREMENTS

Route prefix: `/admin`

All admin pages must use the same premium dark design system.

## ADMIN 01: Login

Route: `/admin/login`

Features:
- Email.
- Password.
- Show/hide password.
- Forgot password.
- Authentication validation.
- Session management.

No public admin registration.

## ADMIN 02: Dashboard

Route: `/admin`

Dashboard cards:
- Today's Revenue.
- Total Orders.
- Pending Orders.
- Confirmed Reservations.
- Active Customers.
- Average Order Value.

Charts:
- Daily revenue.
- Monthly revenue.
- Orders over time.
- Popular dishes.
- Category sales.
- Reservation trends.

Widgets:
- Recent orders.
- Upcoming reservations.
- Low availability alerts.
- Latest customer feedback.

All analytics must be based on actual database records.

## ADMIN 03: Menu Management

Route: `/admin/menu`

Features:
- Add dish.
- Edit dish.
- Delete dish.
- Upload images.
- Set category.
- Set description.
- Set price.
- Set tax configuration.
- Set dietary type.
- Manage allergens.
- Manage variants.
- Manage add-ons.
- Bestseller toggle.
- Availability toggle.
- Featured toggle.

## ADMIN 04: Categories

Route: `/admin/categories`

Features:
- Create category.
- Edit category.
- Delete category.
- Category image.
- Description.
- Display order.
- Active status.
- SEO slug.

Do not allow deleting categories that still contain active menu items without reassignment.

## ADMIN 05: Variants and Add-ons

Route: `/admin/modifiers`

Features:
- Modifier groups.
- Required/optional selection.
- Minimum selections.
- Maximum selections.
- Price adjustments.
- Variant availability.
- Item-specific configuration.

## ADMIN 06: Orders

Route: `/admin/orders`

Features:
- Live order list.
- Order search.
- Date filter.
- Status filter.
- Payment filter.
- Order detail view.
- Accept/reject.
- Update status.
- Print invoice.
- Cancellation.
- Refund workflow.

## ADMIN 07: Reservations

Route: `/admin/reservations`

Views:
- Daily.
- Weekly.
- Calendar.
- List.

Features:
- Create walk-in reservation.
- Confirm.
- Cancel.
- Reschedule.
- Assign table.
- Check-in.
- Mark completed.
- Manage waitlist.

## ADMIN 08: Tables

Route: `/admin/tables`

Features:
- Table creation.
- Table number.
- Seating capacity.
- Seating type.
- Floor/area.
- Availability.
- Active status.

## ADMIN 09: Customers

Route: `/admin/customers`

Features:
- Customer list.
- Search.
- Order history.
- Reservation history.
- Customer contact information.
- Loyalty information.
- Account status.

Access to personal information must be permission-controlled.

## ADMIN 10: Coupons

Route: `/admin/coupons`

Fields:
- Coupon code.
- Discount type.
- Discount value.
- Minimum order.
- Maximum discount.
- Start date.
- Expiry date.
- Usage limit.
- Per-customer limit.
- Applicable products.
- Active status.

## ADMIN 11: Gallery

Route: `/admin/gallery`

Features:
- Image upload.
- Video URL.
- Category.
- Alt text.
- Reorder.
- Delete.
- Publish/unpublish.

## ADMIN 12: Website CMS

Route: `/admin/cms`

Manage:
- Hero content.
- Hero image.
- Promotional banner.
- About section.
- Why Choose Us.
- Featured dishes.
- Special offers.
- Chef profiles.
- Testimonials.
- Gallery.
- FAQs.
- Newsletter.
- Footer.
- Navigation links.

Support preview before publishing.

## ADMIN 13: Branch Management

Route: `/admin/branches`

Features:
- Branch creation.
- Branch information.
- Address.
- Phone.
- Opening hours.
- Branch-specific menu.
- Branch-specific orders.
- Branch-specific reservations.
- Delivery configuration.

## ADMIN 14: Staff Management

Route: `/admin/staff`

Roles:
- Super Admin.
- Manager.
- Kitchen Staff.
- Cashier.
- Content Manager.

Permissions must be enforced on the backend.

## ADMIN 15: Reports

Route: `/admin/reports`

Reports:
- Revenue.
- Orders.
- Taxes.
- Refunds.
- Popular items.
- Sales by category.
- Peak hours.
- Coupon usage.
- Customer retention.
- Reservation performance.

## ADMIN 16: Settings

Route: `/admin/settings`

Sections:

**General**
- Restaurant information.
- Logo.
- Favicon.
- Description.

**Appearance**
- Colors.
- Typography.
- Images.

**Contact**
- Email.
- Phone.
- Address.

**Business**
- Opening hours.
- Holidays.
- Delivery settings.

**Payments**
- Payment provider configuration.
- Enable/disable payment methods.

**Notifications**
- Email.
- SMS.
- WhatsApp.

**SEO**
- Meta title.
- Meta description.
- Social preview image.
- Sitemap settings.

**Security**
- Admin permissions.
- Session settings.
- Audit logs.

---

# 5. COMPONENT INVENTORY

Components must be reusable and independently maintainable.

## Global Layout

- AnnouncementBar
- SiteNavbar
- DesktopNavigation
- MobileNavigationDrawer
- LogoRenderer
- Footer
- BackToTop
- Breadcrumb
- PageContainer
- SectionHeading

## UI Components

- Button
- IconButton
- Badge
- Input
- Textarea
- Select
- Checkbox
- RadioGroup
- DatePicker
- TimeSlotPicker
- Modal
- Drawer
- Dropdown
- Tooltip
- Tabs
- Accordion
- Pagination
- Skeleton
- Toast
- AlertDialog
- EmptyState
- ErrorState
- LoadingState

## Food Components

- FoodCard
- FoodGrid
- FoodImage
- FoodPrice
- DietaryBadge
- BestsellerBadge
- FoodRating
- FoodSearch
- FoodFilters
- FoodSorting
- FoodCategoryCard
- FoodDetailsModal
- VariantSelector
- AddonSelector
- QuantitySelector
- AddToCartButton
- AvailabilityIndicator

## Ordering Components

- CartIcon
- CartDrawer
- CartItem
- CartSummary
- CouponInput
- DeliveryAddressForm
- PaymentSelector
- CheckoutSummary
- OrderStatusTimeline
- OrderTrackingCard

## Reservation Components

- ReservationForm
- ReservationCalendar
- ReservationTimeSlots
- GuestSelector
- SeatingSelector
- ReservationConfirmation
- ReservationStatusBadge

## Homepage Components

- HeroSection
- PromotionalCouponBanner
- TrustStatistics
- CategorySection
- BestsellingSection
- WhyChooseUs
- AboutPreview
- OffersSection
- ChefRecommendations
- GallerySection
- TestimonialsSection
- ChefSection
- ReservationSection
- LocationSection
- FAQSection
- NewsletterSection

## Admin Components

- AdminSidebar
- AdminHeader
- AdminStatCard
- AdminDataTable
- AdminFilters
- AdminForm
- AdminImageUploader
- AdminRichTextEditor
- AdminStatusBadge
- AdminChart
- AdminCalendar
- AdminConfirmationDialog

---

# 6. DATABASE SCHEMA

Database: PostgreSQL through Supabase.

Use UUID primary keys, timestamps, foreign keys, indexes, constraints, and appropriate Row Level Security.

All monetary values should use integer minor units (e.g. paise) or an explicitly configured decimal currency representation. Store currency codes with monetary records.

## 6.1 Identity and Restaurant Configuration

### restaurants
- id UUID PK
- name TEXT NULLABLE
- slug TEXT UNIQUE
- description TEXT
- logo_url TEXT NULLABLE
- favicon_url TEXT NULLABLE
- tagline TEXT
- primary_color TEXT
- accent_color TEXT
- currency_code TEXT
- timezone TEXT
- status TEXT
- created_at TIMESTAMPTZ
- updated_at TIMESTAMPTZ

### restaurant_settings
- id UUID PK
- restaurant_id UUID FK
- setting_key TEXT
- setting_value JSONB
- updated_at TIMESTAMPTZ

Unique constraint: restaurant_id + setting_key.

### restaurant_branches
- id UUID PK
- restaurant_id UUID FK
- branch_name TEXT
- slug TEXT
- address JSONB
- phone TEXT
- email TEXT
- latitude NUMERIC NULLABLE
- longitude NUMERIC NULLABLE
- is_active BOOLEAN
- created_at TIMESTAMPTZ

### opening_hours
- id UUID PK
- branch_id UUID FK
- weekday SMALLINT
- opening_time TIME
- closing_time TIME
- is_closed BOOLEAN

### holiday_hours
- id UUID PK
- branch_id UUID FK
- holiday_date DATE
- opening_time TIME NULLABLE
- closing_time TIME NULLABLE
- is_closed BOOLEAN
- note TEXT

## 6.2 Users and Permissions

### profiles
- id UUID PK, references auth.users
- full_name TEXT
- phone TEXT
- avatar_url TEXT
- created_at TIMESTAMPTZ

### restaurant_members
- id UUID PK
- restaurant_id UUID FK
- user_id UUID FK
- role_id UUID FK
- branch_id UUID FK NULLABLE
- status TEXT
- created_at TIMESTAMPTZ

### roles
- id UUID PK
- restaurant_id UUID FK
- role_name TEXT

### permissions
- id UUID PK
- permission_key TEXT
- description TEXT

### role_permissions
- role_id UUID FK
- permission_id UUID FK

Use backend-enforced role and permission checks.

## 6.3 Menu

### categories
- id UUID PK
- restaurant_id UUID FK
- name TEXT
- slug TEXT
- description TEXT
- image_url TEXT
- display_order INTEGER
- is_active BOOLEAN
- created_at TIMESTAMPTZ

### menu_items
- id UUID PK
- restaurant_id UUID FK
- category_id UUID FK
- name TEXT
- slug TEXT
- description TEXT
- base_price BIGINT
- currency_code TEXT
- image_url TEXT
- dietary_type TEXT
- spice_level INTEGER
- preparation_minutes INTEGER
- ingredients JSONB
- allergens JSONB
- is_featured BOOLEAN
- is_bestseller BOOLEAN
- is_available BOOLEAN
- created_at TIMESTAMPTZ
- updated_at TIMESTAMPTZ

### menu_item_images
- id UUID PK
- menu_item_id UUID FK
- image_url TEXT
- alt_text TEXT
- display_order INTEGER

### food_variants
- id UUID PK
- menu_item_id UUID FK
- name TEXT
- price_adjustment BIGINT
- is_available BOOLEAN

### modifier_groups
- id UUID PK
- restaurant_id UUID FK
- name TEXT
- selection_type TEXT
- min_selection INTEGER
- max_selection INTEGER
- is_required BOOLEAN

### modifiers
- id UUID PK
- modifier_group_id UUID FK
- name TEXT
- price_adjustment BIGINT
- is_available BOOLEAN

### menu_item_modifier_groups
- menu_item_id UUID FK
- modifier_group_id UUID FK

### branch_menu_availability
- id UUID PK
- branch_id UUID FK
- menu_item_id UUID FK
- is_available BOOLEAN
- price_override BIGINT NULLABLE

## 6.4 Cart and Orders

### carts
- id UUID PK
- customer_id UUID FK NULLABLE
- session_id TEXT NULLABLE
- restaurant_id UUID FK
- branch_id UUID FK
- status TEXT
- created_at TIMESTAMPTZ
- updated_at TIMESTAMPTZ

### cart_items
- id UUID PK
- cart_id UUID FK
- menu_item_id UUID FK
- quantity INTEGER
- variant_id UUID FK NULLABLE
- selected_modifiers JSONB
- special_instructions TEXT

### orders
- id UUID PK
- restaurant_id UUID FK
- branch_id UUID FK
- customer_id UUID FK NULLABLE
- order_number TEXT
- order_type TEXT
- order_status TEXT
- payment_status TEXT
- currency_code TEXT
- subtotal BIGINT
- discount_total BIGINT
- tax_total BIGINT
- delivery_fee BIGINT
- grand_total BIGINT
- coupon_id UUID FK NULLABLE
- customer_snapshot JSONB
- address_snapshot JSONB
- placed_at TIMESTAMPTZ
- created_at TIMESTAMPTZ

### order_items
- id UUID PK
- order_id UUID FK
- menu_item_id UUID FK NULLABLE
- item_name_snapshot TEXT
- unit_price BIGINT
- quantity INTEGER
- selected_variant JSONB
- selected_modifiers JSONB
- item_total BIGINT
- special_instructions TEXT

### order_status_history
- id UUID PK
- order_id UUID FK
- old_status TEXT
- new_status TEXT
- changed_by UUID FK NULLABLE
- note TEXT
- created_at TIMESTAMPTZ

### order_addresses
- id UUID PK
- order_id UUID FK
- recipient_name TEXT
- phone TEXT
- address JSONB
- delivery_instructions TEXT

## 6.5 Payments

### payments
- id UUID PK
- order_id UUID FK
- provider TEXT
- provider_payment_id TEXT NULLABLE
- provider_order_id TEXT NULLABLE
- amount BIGINT
- currency_code TEXT
- payment_status TEXT
- verified_at TIMESTAMPTZ NULLABLE
- created_at TIMESTAMPTZ

### payment_events
- id UUID PK
- payment_id UUID FK
- provider_event_id TEXT
- event_type TEXT
- verification_status TEXT
- processed_at TIMESTAMPTZ

Unique provider event ID to prevent duplicate webhook processing.

Never store card numbers, CVV or raw payment credentials.

## 6.6 Reservations

### restaurant_tables
- id UUID PK
- branch_id UUID FK
- table_number TEXT
- capacity INTEGER
- seating_type TEXT
- area TEXT
- is_active BOOLEAN

### reservations
- id UUID PK
- restaurant_id UUID FK
- branch_id UUID FK
- customer_id UUID FK NULLABLE
- table_id UUID FK NULLABLE
- reservation_number TEXT
- customer_name TEXT
- phone TEXT
- email TEXT
- reservation_date DATE
- start_time TIMESTAMPTZ
- end_time TIMESTAMPTZ
- guest_count INTEGER
- seating_preference TEXT
- occasion TEXT
- special_requests TEXT
- status TEXT
- created_at TIMESTAMPTZ

### reservation_status_history
- id UUID PK
- reservation_id UUID FK
- old_status TEXT
- new_status TEXT
- changed_by UUID FK NULLABLE
- created_at TIMESTAMPTZ

Use transactional checks or database constraints to prevent overlapping table reservations.

## 6.7 Promotions

### coupons
- id UUID PK
- restaurant_id UUID FK
- code TEXT
- discount_type TEXT
- discount_value BIGINT
- minimum_order BIGINT
- maximum_discount BIGINT NULLABLE
- starts_at TIMESTAMPTZ
- expires_at TIMESTAMPTZ
- usage_limit INTEGER NULLABLE
- per_customer_limit INTEGER NULLABLE
- is_active BOOLEAN

### coupon_redemptions
- id UUID PK
- coupon_id UUID FK
- customer_id UUID FK NULLABLE
- order_id UUID FK
- discount_amount BIGINT
- redeemed_at TIMESTAMPTZ

## 6.8 Customer Data

### customer_addresses
- id UUID PK
- customer_id UUID FK
- label TEXT
- address JSONB
- is_default BOOLEAN

### wishlists
- id UUID PK
- customer_id UUID FK
- menu_item_id UUID FK
- created_at TIMESTAMPTZ

### reviews
- id UUID PK
- restaurant_id UUID FK
- customer_id UUID FK NULLABLE
- order_id UUID FK NULLABLE
- menu_item_id UUID FK NULLABLE
- rating INTEGER
- review_text TEXT
- moderation_status TEXT
- created_at TIMESTAMPTZ

### loyalty_transactions
- id UUID PK
- customer_id UUID FK
- order_id UUID FK NULLABLE
- points_change INTEGER
- transaction_type TEXT
- created_at TIMESTAMPTZ

## 6.9 CMS and Content

### pages
- id UUID PK
- restaurant_id UUID FK
- title TEXT
- slug TEXT
- content JSONB
- meta_title TEXT
- meta_description TEXT
- is_published BOOLEAN
- updated_at TIMESTAMPTZ

### homepage_sections
- id UUID PK
- restaurant_id UUID FK
- section_type TEXT
- title TEXT
- content JSONB
- display_order INTEGER
- is_enabled BOOLEAN

### gallery_items
- id UUID PK
- restaurant_id UUID FK
- media_type TEXT
- media_url TEXT
- alt_text TEXT
- category TEXT
- display_order INTEGER
- is_published BOOLEAN

### chefs
- id UUID PK
- restaurant_id UUID FK
- name TEXT
- position TEXT
- biography TEXT
- image_url TEXT
- display_order INTEGER
- is_active BOOLEAN

### faqs
- id UUID PK
- restaurant_id UUID FK
- question TEXT
- answer TEXT
- display_order INTEGER
- is_active BOOLEAN

### testimonials
- id UUID PK
- restaurant_id UUID FK
- customer_name TEXT
- review_text TEXT
- rating INTEGER
- image_url TEXT NULLABLE
- is_verified BOOLEAN
- is_published BOOLEAN

## 6.10 Communication and Audit

### newsletter_subscribers
- id UUID PK
- restaurant_id UUID FK
- email TEXT
- consent_at TIMESTAMPTZ
- unsubscribed_at TIMESTAMPTZ NULLABLE

### notifications
- id UUID PK
- restaurant_id UUID FK
- customer_id UUID FK NULLABLE
- order_id UUID FK NULLABLE
- channel TEXT
- notification_type TEXT
- delivery_status TEXT
- sent_at TIMESTAMPTZ NULLABLE

### audit_logs
- id UUID PK
- restaurant_id UUID FK
- user_id UUID FK NULLABLE
- action TEXT
- entity_type TEXT
- entity_id UUID NULLABLE
- metadata JSONB
- created_at TIMESTAMPTZ

### System Schema Rules

1. All restaurant-owned records must include restaurant_id directly or through an enforced parent relationship.
2. Foreign keys must prevent invalid references.
3. Use indexes for search, order status, dates, restaurant IDs and branch IDs.
4. Use unique constraints for slugs and order numbers within their appropriate scope.
5. Store historical order item names and prices as snapshots.
6. Do not delete completed financial transactions.
7. Use migrations for schema changes.
8. Use Row Level Security.
9. Use database transactions for checkout and reservations.
10. Use soft deletion where business history must be preserved.

---

# 7. API & SERVER ACTION ARCHITECTURE

Use server-side Next.js Route Handlers and Server Actions where appropriate.

## Public APIs

### Restaurant
- GET `/api/restaurant`
- GET `/api/branches`
- GET `/api/branches/[slug]`

### Menu
- GET `/api/categories`
- GET `/api/menu`
- GET `/api/menu/[slug]`
- GET `/api/menu/search`

### Cart
- GET `/api/cart`
- POST `/api/cart/items`
- PATCH `/api/cart/items/[id]`
- DELETE `/api/cart/items/[id]`

### Checkout
- POST `/api/checkout`
- POST `/api/payments/create`
- POST `/api/payments/webhook`

### Orders
- GET `/api/orders/[id]`
- GET `/api/orders/[id]/tracking`

### Reservations
- GET `/api/reservations/availability`
- POST `/api/reservations`
- GET `/api/reservations/[id]`
- PATCH `/api/reservations/[id]/cancel`

### Customers
- GET `/api/account`
- PATCH `/api/account`
- GET `/api/account/orders`
- GET `/api/account/reservations`

### Contact
- POST `/api/contact`
- POST `/api/newsletter`

## Admin APIs

- GET/POST `/api/admin/menu`
- PATCH/DELETE `/api/admin/menu/[id]`
- GET/POST `/api/admin/categories`
- GET/PATCH `/api/admin/orders`
- PATCH `/api/admin/orders/[id]`
- GET/POST `/api/admin/reservations`
- PATCH `/api/admin/reservations/[id]`
- GET/POST `/api/admin/coupons`
- GET/POST `/api/admin/gallery`
- GET/PATCH `/api/admin/settings`
- GET/POST `/api/admin/branches`
- GET/POST `/api/admin/staff`
- GET `/api/admin/analytics`

All admin routes must enforce authorization server-side.

---

# 8. RECOMMENDED PROJECT FOLDER STRUCTURE

```text
restaurant-platform/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── (website)/
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   ├── menu/
│   │   │   ├── specials/
│   │   │   ├── gallery/
│   │   │   ├── reservation/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── order/
│   │   │   ├── contact/
│   │   │   └── faq/
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── admin/
│   │   │   ├── login/
│   │   │   ├── page.tsx
│   │   │   ├── menu/
│   │   │   ├── categories/
│   │   │   ├── orders/
│   │   │   ├── reservations/
│   │   │   ├── tables/
│   │   │   ├── customers/
│   │   │   ├── coupons/
│   │   │   ├── gallery/
│   │   │   ├── cms/
│   │   │   ├── branches/
│   │   │   ├── staff/
│   │   │   ├── reports/
│   │   │   └── settings/
│   │   │
│   │   └── api/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── homepage/
│   │   ├── menu/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── reservation/
│   │   └── admin/
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   ├── payments/
│   │   ├── validations/
│   │   ├── pricing/
│   │   ├── permissions/
│   │   └── notifications/
│   │
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── constants/
│   └── config/
│
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── config.toml
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

---

# 9. FUNCTIONAL ACCEPTANCE CRITERIA

The project is considered complete only when these requirements pass testing.

## A. Branding and CMS

- [ ] Admin can upload a logo.
- [ ] Restaurant name can be changed.
- [ ] Colors can be changed.
- [ ] Contact information can be updated.
- [ ] Hero content can be edited.
- [ ] Homepage sections can be enabled/disabled.
- [ ] Images can be replaced.
- [ ] Changes appear on the public website.
- [ ] No fixed restaurant identity exists in source code.

## B. Navigation

- [ ] All navigation links work.
- [ ] Navbar remains usable while scrolling.
- [ ] Mobile drawer opens and closes.
- [ ] Cart count updates.
- [ ] Active navigation is correct.
- [ ] No broken links.

## C. Menu

- [ ] Admin can create a category.
- [ ] Admin can create a food item.
- [ ] Food images display correctly.
- [ ] Search returns relevant items.
- [ ] Category filtering works.
- [ ] Dietary filters work.
- [ ] Sorting works.
- [ ] Out-of-stock items cannot be ordered.
- [ ] Food details show correct information.

## D. Food Customization

- [ ] Required variants must be selected.
- [ ] Optional add-ons work.
- [ ] Minimum/maximum selection rules are enforced.
- [ ] Price recalculates correctly.
- [ ] Quantity changes update totals.
- [ ] Customizations remain attached to cart items.

## E. Cart

- [ ] Add to Cart works.
- [ ] Remove Item works.
- [ ] Quantity updates work.
- [ ] Duplicate products with different customizations are handled correctly.
- [ ] Coupon validation works.
- [ ] Tax calculations are correct.
- [ ] Delivery fee is correct.
- [ ] Grand total matches backend calculations.
- [ ] Empty cart displays a proper empty state.

## F. Checkout and Payments

- [ ] Customer details validate.
- [ ] Address validation works.
- [ ] Order is created safely.
- [ ] Payment is verified server-side.
- [ ] Invalid payment cannot confirm an order.
- [ ] Duplicate webhooks cannot duplicate payment processing.
- [ ] Failed payments show appropriate states.
- [ ] Successful orders receive unique IDs.
- [ ] Payment and order records remain consistent.

## G. Reservations

- [ ] Customer can select a date.
- [ ] Available slots load correctly.
- [ ] Guest capacity is enforced.
- [ ] Conflicting reservations cannot be confirmed.
- [ ] Reservation confirmation is generated.
- [ ] Admin can manage bookings.
- [ ] Cancellation rules work.
- [ ] Timezone handling is correct.

## H. Admin Dashboard

- [ ] Admin login works.
- [ ] Unauthorized users cannot access admin routes.
- [ ] Menu CRUD works.
- [ ] Category CRUD works.
- [ ] Order management works.
- [ ] Reservation management works.
- [ ] CMS updates are reflected.
- [ ] Staff permissions work.
- [ ] Analytics use actual data.
- [ ] Important actions are audit logged.

## I. Responsive UI

- [ ] Desktop layout works.
- [ ] Tablet layout works.
- [ ] Mobile layout works.
- [ ] No horizontal overflow.
- [ ] Images maintain aspect ratios.
- [ ] Buttons are touch friendly.
- [ ] Mobile navigation works.
- [ ] Checkout works on mobile.
- [ ] Reservation form works on mobile.

## J. Performance and SEO

- [ ] All public pages have appropriate metadata.
- [ ] Sitemap works.
- [ ] Robots configuration works.
- [ ] Canonical URLs are correct.
- [ ] Image optimization is implemented.
- [ ] Lazy loading works where appropriate.
- [ ] No unnecessary client-side JavaScript.
- [ ] Structured data is accurate.
- [ ] No critical console errors.
- [ ] No broken images.

## K. Security

- [ ] RLS policies are enabled.
- [ ] Customer data is isolated.
- [ ] Admin permissions are enforced server-side.
- [ ] Secrets are never exposed to frontend.
- [ ] Payment webhooks are verified.
- [ ] Input validation exists.
- [ ] Rate limiting exists on sensitive endpoints.
- [ ] Audit logging works.
- [ ] Backup and recovery procedures are documented.

---

# 10. NON-FUNCTIONAL REQUIREMENTS

## Performance

Targets:
- Lighthouse Performance: 90+ on representative optimized pages.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 95+.

These are targets, not guaranteed results; test on production-like devices and networks.

## Responsiveness

Support:
- Small mobile: 320px and above.
- Standard mobile.
- Tablet.
- Laptop.
- Desktop.
- Large desktop.

## Accessibility

- Semantic HTML.
- Keyboard navigation.
- Accessible form labels.
- Screen reader compatibility.
- Proper contrast.
- Focus indicators.
- Reduced motion support.

## Reliability

- Meaningful error handling.
- Retry mechanisms where safe.
- Transactional checkout.
- Transactional reservation validation.
- Database backup strategy.
- Error monitoring.

---

# 11. ENVIRONMENT VARIABLES

Create `.env.example` with placeholders only.

```env
NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

EMAIL_PROVIDER_API_KEY=

WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=

GOOGLE_MAPS_API_KEY=

NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

Do not commit real secrets to GitHub.

Only expose public-safe variables through `NEXT_PUBLIC_` configuration.

---

# 12. SEED DATA REQUIREMENTS

The development environment may include sample data to demonstrate the system.

However:

- Do not create a fake real-world restaurant identity.
- Do not insert invented addresses or phone numbers.
- Do not display fake customer reviews as genuine.
- Do not publish invented business statistics.
- Sample menu items must be marked as demo content.
- Sample data must be removable.
- Production must start without demo content.

Admin must be able to configure the entire restaurant profile from scratch.

---

# 13. DEVELOPMENT WORKFLOW

Develop the project in the following order.

## Phase 1: Foundation

1. Initialize Next.js.
2. Configure TypeScript.
3. Configure Tailwind CSS.
4. Install shadcn/ui.
5. Configure Framer Motion.
6. Establish the design tokens.
7. Create global layouts.
8. Configure Supabase.
9. Establish database migrations.

Deliverable: Working application foundation.

## Phase 2: Design Implementation

1. Announcement bar.
2. Navbar.
3. Hero.
4. Coupon banner.
5. Categories.
6. Bestselling dishes.
7. Why Choose Us.
8. About.
9. Offers.
10. Gallery.
11. Testimonials.
12. Chefs.
13. Reservation.
14. Location.
15. FAQ.
16. Newsletter.
17. Footer.

Deliverable: Complete responsive homepage.

## Phase 3: Public Pages

1. About page.
2. Menu page.
3. Food details.
4. Gallery.
5. Offers.
6. Contact.
7. FAQ.
8. Legal pages.

Deliverable: Complete public website.

## Phase 4: Admin Dashboard

1. Authentication.
2. Dashboard.
3. Menu CRUD.
4. Categories.
5. Variants and add-ons.
6. CMS.
7. Gallery management.
8. Branch management.
9. Staff permissions.
10. Settings.

Deliverable: Dynamic website management.

## Phase 5: Ordering System

1. Cart.
2. Customization.
3. Checkout.
4. Address management.
5. Payment.
6. Order confirmation.
7. Order tracking.
8. Admin order management.

Deliverable: Complete ordering workflow.

## Phase 6: Reservations

1. Table management.
2. Availability engine.
3. Booking form.
4. Reservation confirmation.
5. Admin calendar.
6. Booking notifications.

Deliverable: Complete reservation workflow.

## Phase 7: Finalization

1. Security audit.
2. Responsive testing.
3. SEO.
4. Performance.
5. Accessibility.
6. Payment testing.
7. E2E tests.
8. Production deployment.

Deliverable: Production-ready application.

---

# 14. FINAL PROJECT DEFINITION

The final application must be:

- A premium dark-themed restaurant website.
- White-label ready.
- Fully responsive.
- Dynamically configurable.
- CMS enabled.
- Online ordering enabled.
- Table reservation enabled.
- Payment integrated.
- Customer account enabled.
- Admin dashboard enabled.
- Database backed.
- SEO optimized.
- Secure.
- Scalable.

## Final Product Rule

Do not build a static template with decorative buttons.

Every visible interactive element must have a real action, appropriate validation, loading state, success state, and error state.

Do not use hardcoded restaurant information in the production application.

All business-specific content must be controlled through the restaurant configuration and CMS.

**END OF MASTER PRD**