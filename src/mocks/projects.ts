export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  detail: string;
  duration: string;
}

export const projectCategories = [
  "All",
  "Full Renovation",
  "New Construction",
  "Resurfacing",
  "Outdoor Living",
  "Repairs & Seasonal",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Free-Form Kidney Pool & Bluestone Patio",
    location: "Fairfield, CT",
    category: "Full Renovation",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/kidney-pool-stone-patio.webp",
    imageAlt: "Completed free-form kidney inground pool with bluestone patio",
    summary:
      "A dated kidney pool rebuilt end to end: new plaster, new coping, and a full bluestone surround.",
    detail:
      "The shell was sound but everything bolted to it had failed. We stripped the old plaster, rebuilt the tile line and coping, installed new LED lighting, and set a thermally stable bluestone patio that ties the pool into the tree line.",
    duration: "5 weeks",
  },
  {
    id: 2,
    title: "Raised Spa & Fire Bowl Retreat",
    location: "Westport, CT",
    category: "Outdoor Living",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/firepit-spa-pool.webp",
    imageAlt:
      "Remodeled backyard pool with raised stone spa and fire bowl feature",
    summary:
      "Remodel that added a raised spillover spa and fire bowl to an existing rectangular pool.",
    detail:
      "We tied a raised spa into the existing hydraulics with a spillover edge, matched the stone to the house, and ran a fire bowl on the far corner so the pool reads as the centrepiece of an evening courtyard.",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Gunite Build on a Wooded Lot",
    location: "Newtown, CT",
    category: "New Construction",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/backyard-pool-construction.webp",
    imageAlt: "In-progress gunite pool construction with rebar structure and forest backdrop",
    summary:
      "Ground-up gunite pool delivered through excavation, steel, shell, plumbing, finish, and decking.",
    detail:
      "A sloping wooded lot meant careful layout and imported fill. We engineered the shell around the grade change, ran equipment to a concealed pad, and kept the existing tree canopy as the backdrop instead of removing it.",
    duration: "9 weeks",
  },
  {
    id: 4,
    title: "Paver Patio & Lounge Deck",
    location: "Shelton, CT",
    category: "Outdoor Living",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/paver-patio-pool.webp",
    imageAlt: "Rectangular pool with paver patio, lounge chairs, and retaining walls",
    summary:
      "New paver deck with retaining walls that corrected a badly pitched, heaving patio.",
    detail:
      "The original deck drained toward the house. We removed it, rebuilt the base with proper compaction, added retaining walls to hold the new grade, and finished in a cool-toned paver with a slip-resistant surface.",
    duration: "3 weeks",
  },
  {
    id: 5,
    title: "20-Year Gunite Resurfacing",
    location: "Trumbull, CT",
    category: "Resurfacing",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/plaster-resurfacing-progress.webp",
    imageAlt: "Pool shell mid-resurfacing with taped seams and plaster crew at work",
    summary:
      "Full plaster removal and resurfacing that took a two-decade-old pool back to new.",
    detail:
      "Two decades of scale had hidden failing seams and a cracked return line. We repaired the structure first, replaced the returns, then applied a new plaster finish with a fresh tile band at the waterline.",
    duration: "2 weeks",
  },
  {
    id: 6,
    title: "Algae Recovery & Equipment Rebuild",
    location: "Derby, CT",
    category: "Repairs & Seasonal",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/green-algae-pool-cleaning-crew.jpg",
    imageAlt: "Green algae-filled pool with a service crew on-site before renovation",
    summary:
      "A neglected pool brought back to swimmable in days, with the filtration system rebuilt.",
    detail:
      "The pool had been closed improperly for two seasons. We recovered the water, then replaced the failed filter and pump so the chemistry could actually hold instead of recurring every week.",
    duration: "1 week",
  },
  {
    id: 7,
    title: "Mesh Safety Cover & Winterization",
    location: "Milford, CT",
    category: "Repairs & Seasonal",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/kidney-pool-mesh-cover.jpg",
    imageAlt: "Kidney pool closed under a fitted mesh safety cover for the off-season",
    summary:
      "Custom-templated safety cover and full plumbing winterization ahead of a hard freeze.",
    detail:
      "We templated the kidney shape on site, set new deck anchors, installed a weight-rated mesh cover, then blew out the lines and winterized the heater and salt system for the off-season.",
    duration: "2 days",
  },
  {
    id: 8,
    title: "Family Pool with Aluminum Fencing",
    location: "Stamford, CT",
    category: "Outdoor Living",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/aerial-rectangular-pool-slide.jpg",
    imageAlt:
      "Backyard pool enclosed by black aluminum fencing on a stone-veneer base",
    summary:
      "Code-compliant aluminum pool fence and self-latching gates around a busy family yard.",
    detail:
      "The pool needed to pass inspection before the season opened. We installed black aluminum fencing on a stone-veneer base with self-closing, self-latching gates and clear sightlines from the house.",
    duration: "4 days",
  },
  {
    id: 9,
    title: "Pebble Finish Shell Preparation",
    location: "Danbury, CT",
    category: "Resurfacing",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/pebble-shell-pre-plaster-construction.jpg",
    imageAlt:
      "Drained pool shell stripped to bare structure ahead of a new finish coat",
    summary:
      "Sandblasted shell preparation ahead of a pebble finish on a heavily scaled pool.",
    detail:
      "The old finish was painted over failed plaster. We sandblasted back to sound substrate, repaired the seams, and handed over a properly profiled shell so the new pebble finish bonds the way it should.",
    duration: "2 weeks",
  },
];