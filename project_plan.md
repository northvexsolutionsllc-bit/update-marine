# Marine Pool Renovations LLC — Website Rebuild

## 1. Project Description
A multi-page marketing website for **Marine Pool Renovations LLC**, a licensed & insured luxury pool contractor based in Derby, Connecticut, serving Connecticut, New York, New Jersey and Massachusetts since 2019.

Core value: communicate premium craftsmanship, show real project photography, and drive free-estimate requests by phone or form. Target users are homeowners with aging inground pools plus commercial property managers.

## 2. Page Structure
- `/` — Home (hero, full service grid, 5-stage transformation, before/after comparison, lighting add-on, stats & reviews)
- `/services` — All 16 services, category filtering, deep detail sections
- `/projects` — Project gallery with category filters and detail lightbox
- `/about` — Company story, values, credentials, service area
- `/contact` — Free estimate request form, contact details, map, hours
- `*` — Not found

## 3. Core Features
- [x] Sticky header with scroll state + mobile menu
- [x] Full service catalogue (16 services) with category filtering
- [x] Interactive 5-stage renovation timeline
- [x] Draggable before/after comparison slider
- [x] Project gallery with filters and image lightbox
- [x] Estimate request form (Form integration) with anti-spam honeypot and inline status feedback
- [x] Click-to-call and email links throughout
- [x] Responsive layout down to mobile

## 4. Data Model Design
No database required. All catalogue content (services, projects, testimonials, company info) is static site content stored in `src/mocks/` and is not user-generated.
Form submissions are handled by the built-in Form integration.

## 5. Backend / Third-party Integration Plan
- Database: not needed (marketing site, static content)
- Form: built-in Form for estimate requests (submission stored by Readdy Forms)
- Shopify: not needed
- Stripe / Toss / PayPal / Square: not needed (work is quoted, not sold online)
- Map: Google Maps embed on the contact page

## 6. Development Phase Plan

### Phase 1: Design system + site shell
- Goal: establish palette, typography, header/footer, routing
- Deliverable: reusable layout with working navigation

### Phase 2: Homepage
- Goal: full-length, content-rich homepage
- Deliverable: hero, services grid, transformation stage switcher, before/after slider, lighting CTA, stats and reviews

### Phase 3: Interior pages
- Goal: complete the site structure
- Deliverable: Services, Projects, About, Contact pages + estimate form

### Phase 4: Polish
- Goal: responsive fixes, animation, build verification
- Deliverable: production-ready build