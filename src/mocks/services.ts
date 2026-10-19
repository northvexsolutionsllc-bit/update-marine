export type ServiceCategory =
  | "Renovation"
  | "Construction"
  | "Outdoor Living"
  | "Maintenance"
  | "Commercial";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

export const serviceCategories: Array<"All" | ServiceCategory> = [
  "All",
  "Renovation",
  "Construction",
  "Outdoor Living",
  "Maintenance",
  "Commercial",
];

export const services: Service[] = [
  {
    slug: "fiberglass-repair-coating",
    title: "Fiberglass Repair & Coating",
    category: "Renovation",
    short:
      "Repair, resurface, and recoat existing fiberglass pools, fixing cracks, blisters, and worn gel-coat.",
    description:
      "Fiberglass pools age from the inside out. We diagnose blistering, osmotic cracks, and delaminated gel-coat, repair the structure properly, then apply a fresh fiberglass coating that restores colour and protects the shell for years of New England freeze-thaw cycles.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/stone-steps-patio.webp",
    imageAlt:
      "Existing pool refinished with a fresh fiberglass coating and stone-step surround",
    bullets: [
      "Crack, blister, and delamination repair",
      "Full gel-coat removal and surface preparation",
      "Multi-layer fiberglass coating application",
      "Colour matching and non-slip finish options",
    ],
  },
  {
    slug: "concrete-pools",
    title: "Concrete Pool Installation",
    category: "Construction",
    short:
      "Fully custom gunite construction engineered around your backyard, shaped to exactly the design you want.",
    description:
      "Gunite is still the most durable pool structure you can build. We handle layout, excavation, steel and shell, plumbing, plaster, and decking in-house, engineering every pool around your grade, soil, and the way you actually want to use the space.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/backyard-pool-construction.webp",
    imageAlt:
      "In-progress gunite pool construction with rebar structure and forest backdrop",
    bullets: [
      "Custom gunite shells in any shape or depth",
      "Engineered steel, plumbing, and hydraulics",
      "Standard plaster, pebble, and glass finishes",
      "Integrated spa, sun shelf, and water features",
    ],
  },
  {
    slug: "inground-pools",
    title: "Inground Pools",
    category: "Construction",
    short:
      "End-to-end inground pool builds: excavation, structure, plumbing, plaster, and decking by one crew.",
    description:
      "One crew from the first shovel to the final swim. Building inground pools across Connecticut and New York, we keep excavation, structure, equipment, finish, and decking on a single schedule so you always know who is on site and what happens next.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/kidney-pool-stone-patio.webp",
    imageAlt: "Completed free-form kidney inground pool with bluestone patio",
    bullets: [
      "Free-form, kidney, rectangle, and L-shape designs",
      "Equipment selection and energy-efficient pumps",
      "Coping, tile, and finish coordination",
      "Permit and inspection support",
    ],
  },
  {
    slug: "pool-renovations",
    title: "Pool Renovations",
    category: "Renovation",
    short:
      "Bring a tired pool back to life with resurfacing, re-tiling, and structural repair that looks brand new.",
    description:
      "Most pools do not need replacing. They need the right renovation. We strip failing plaster, address structural and plumbing issues we find underneath, and rebuild the finish, tile line, and coping so the pool performs like new again.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/plaster-resurfacing-progress.webp",
    imageAlt:
      "Pool shell mid-resurfacing with taped seams and plaster crew at work",
    bullets: [
      "Full plaster removal and resurfacing",
      "Tile line and coping replacement",
      "Structural crack and seam repair",
      "Skimmer, return, and light upgrades",
    ],
  },
  {
    slug: "pool-remodeling",
    title: "Pool Remodeling",
    category: "Renovation",
    short:
      "Reshape, re-tile, and modernize an outdated pool into a resort-style centerpiece for your property.",
    description:
      "Remodeling goes beyond resurfacing. We change the shape of the experience by adding sun shelves, spillover spas, fire features, and new finish palettes so a 1990s backyard becomes the reason you stay home on weekends.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/firepit-spa-pool.webp",
    imageAlt:
      "Remodeled backyard pool with raised stone spa and fire bowl feature",
    bullets: [
      "Raised spas and spillover water features",
      "Sun shelves and tanning ledges",
      "Fire bowls, fire pits, and wall accents",
      "Complete finish and deck redesign",
    ],
  },
  {
    slug: "pool-patios",
    title: "Pool Patios",
    category: "Outdoor Living",
    short:
      "Slip-resistant paver and natural-stone decking designed to handle Connecticut weather year-round.",
    description:
      "The patio is half the pool. We build bluestone, paver, and travertine decks on properly compacted bases with correct drainage and pitch, so the surface stays level, cool underfoot, and free of heaving after a hard freeze.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/paver-patio-pool.webp",
    imageAlt:
      "Rectangular pool with paver patio, lounge chairs, and retaining walls",
    bullets: [
      "Bluestone, travertine, and paver decking",
      "Drainage, pitch, and base compaction",
      "Retaining walls and grade correction",
      "Coping replacement and expansion joints",
    ],
  },
  {
    slug: "pool-repairs",
    title: "Pool Repairs",
    category: "Maintenance",
    short:
      "Leak detection, equipment fixes, and structural repairs from a team that diagnoses the real problem first.",
    description:
      "We would rather find the cause than sell you a repair. Pressure testing, dye testing, and equipment diagnostics tell us where the water is actually going, so the fix happens once instead of every season.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/equipment-room-feed-tanks.webp",
    imageAlt: "Pool equipment room with chemical feed tanks and plumbing",
    bullets: [
      "Leak detection and pressure testing",
      "Pump, filter, heater, and salt system repair",
      "Skimmer, return, and main drain fixes",
      "Plumbing replacement and rerouting",
    ],
  },
  {
    slug: "emergency-services",
    title: "Emergency Pool Services",
    category: "Maintenance",
    short:
      "Urgent leaks, equipment failures, or storm damage. Our team responds fast when you can't wait.",
    description:
      "A pool losing water overnight or a pump that quit before a party is not a scheduling problem. Emergency calls get triaged the same day, with stabilization first and a permanent repair plan right after.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/ada-pool-lift.webp",
    imageAlt: "Pool safety equipment staged at the edge of a lap pool",
    bullets: [
      "Same-day triage for active leaks",
      "Storm and winter damage response",
      "Equipment failure and electrical checks",
      "Temporary containment and stabilization",
    ],
  },
  {
    slug: "sandblasting",
    title: "Sandblasting",
    category: "Renovation",
    short:
      "Abrasive sandblasting that strips old plaster, paint, and coatings down to a clean, sound surface.",
    description:
      "A new finish is only as good as what it bonds to. Sandblasting removes failed plaster, paint, and contamination to expose bare, sound substrate. That is the preparation step too many crews skip on the way to a fast resurface.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/pebble-shell-pre-plaster-construction.jpg",
    imageAlt:
      "Drained pool shell stripped to bare structure ahead of a new finish coat",
    bullets: [
      "Paint and plaster removal",
      "Surface profiling for proper adhesion",
      "Contaminant and scale removal",
      "Containment and cleanup included",
    ],
  },
  {
    slug: "waterblasting",
    title: "Waterblasting",
    category: "Renovation",
    short:
      "High-pressure waterblasting that cleans and profiles pool surfaces without the dust of dry abrasive methods.",
    description:
      "When a pool sits near landscaping, waterblasting is often the smarter prep method. High-pressure water strips coatings and contamination with far less airborne dust, leaving a profiled surface ready for the next coat.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/plaster-resurfacing-progress.webp",
    imageAlt: "Pool surface being prepped during a resurfacing project",
    bullets: [
      "Dust-reduced coating removal",
      "Algae and stain remediation",
      "Surface profiling for recoat adhesion",
      "Safe around poolside landscaping",
    ],
  },
  {
    slug: "fence-installation",
    title: "Fence Installation",
    category: "Outdoor Living",
    short:
      "Code-compliant pool fencing in aluminum and vinyl for safety, privacy, and a finished backyard.",
    description:
      "A pool is not finished until it is safe. We install aluminum, vinyl, and glass fencing at correct heights, spacing, and gate hardware so the pool passes inspection and the backyard finally looks complete.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/aerial-rectangular-pool-slide.jpg",
    imageAlt:
      "Backyard pool enclosed by black aluminum fencing on a stone-veneer base",
    bullets: [
      "Aluminum, vinyl, and glass options",
      "Self-closing, self-latching gates",
      "Code height and spacing compliance",
      "Stone and masonry base details",
    ],
  },
  {
    slug: "commercial-filter-system-installation",
    title: "Commercial Filter System Installation",
    category: "Commercial",
    short:
      "High-capacity filtration and circulation systems engineered for commercial and community pools.",
    description:
      "Commercial pools live under a different code, a different load, and a different inspection. We size turnover rates correctly, install high-capacity filtration and chemical feed systems, and document the install for health department review.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/equipment-room-feed-tanks.webp",
    imageAlt:
      "Commercial pool equipment room with feed tanks and filtration plumbing",
    bullets: [
      "Turnover and flow rate engineering",
      "High-capacity filtration installation",
      "Chemical feed and controller systems",
      "Health department documentation",
    ],
  },
  {
    slug: "opening-and-closing",
    title: "Opening & Closing",
    category: "Maintenance",
    short:
      "Seasonal pool opening and closing with startup, balancing, winterization, and equipment protection done right.",
    description:
      "How a pool closes decides how it opens. Our winterization protects plumbing, heaters, and surfaces from freeze damage, and spring openings bring the water back to balance without a green-pool battle.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/kidney-pool-mesh-cover.jpg",
    imageAlt:
      "Kidney pool closed under a fitted mesh safety cover for the off-season",
    bullets: [
      "Full system startup and inspection",
      "Water chemistry balancing",
      "Blow-out and freeze protection",
      "Equipment winterization",
    ],
  },
  {
    slug: "safety-winter-cover-installation",
    title: "Safety Winter Cover Installation",
    category: "Maintenance",
    short:
      "Custom-fit mesh and solid safety covers anchored to hold weight, keep debris out, and protect through winter.",
    description:
      "A proper safety cover is measured, not guessed. We template your pool, set anchors into the deck correctly, and install a cover rated to hold weight, which means a safer winter and a cleaner opening.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/green-cover-bluestone-pool.jpg",
    imageAlt:
      "Rectangular pool fitted with a green mesh safety cover for winter",
    bullets: [
      "On-site templating and custom fit",
      "Mesh and solid cover options",
      "Deck anchor installation",
      "Weight-rated safety performance",
    ],
  },
  {
    slug: "new-pool-construction",
    title: "New Pool Construction",
    category: "Construction",
    short:
      "Ground-up custom pool builds: design, excavation, gunite shell, plumbing, finish, and decking by one crew.",
    description:
      "A new pool is a construction project before it is a backyard. We plan the build sequence, coordinate utilities and inspections, and keep the site organized so the finished pool arrives on the schedule we set.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/backyard-pool-construction.webp",
    imageAlt: "New gunite pool under construction on a wooded lot",
    bullets: [
      "Design and layout consultation",
      "Excavation through gunite shell",
      "Plumbing, equipment, and finish",
      "Decking and landscape coordination",
    ],
  },
  {
    slug: "pool-landscape-lighting",
    title: "Pool & Landscape Lighting",
    category: "Outdoor Living",
    short:
      "Custom LED lighting that turns your backyard into an evening destination, covering water, decking, and fire features.",
    description:
      "Lighting is the cheapest way to change how a pool feels. We design low-voltage LED packages for the water, deck edges, stone walls, and fire features, with transformers and controls sized for the whole system.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/firepit-spa-pool.webp",
    imageAlt:
      "Evening backyard pool with lit fire bowl and accent landscape lighting",
    bullets: [
      "Colour-changing LED pool lights",
      "Deck, step, and wall accent lighting",
      "Transformer and control sizing",
      "Fire feature and water feature lighting",
    ],
  },
];