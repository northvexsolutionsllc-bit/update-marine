export interface Testimonial {
  name: string;
  service: string;
  source: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Scott W.",
    service: "Swimming Pool Remodeling",
    source: "via Angi",
    quote:
      "Our pool and attached hot tub needed a full refresh, and the crew handled every stage, from prep and plastering to getting us ready to open for the season, without missing a beat. The whole team was friendly and clearly knew what they were doing, and the project wrapped up just as planned. Richard in particular was great to work with: quick to respond and always kept me in the loop.",
  },
  {
    name: "Michael P.",
    service: "Verified Angi Review",
    source: "via Angi",
    quote:
      "Really pleasant, well-informed team to work with. I'd recommend them without hesitation.",
  },
  {
    name: "Beth P.",
    service: "Concrete Pool Installation",
    source: "via Angi",
    quote:
      "Richard and his crew were professional, courteous, and clearly skilled at what they do. They took our 20-year-old gunite pool and made it feel brand new again in just two weeks. We couldn't be happier with the result.",
  },
  {
    name: "David X.",
    service: "Swimming Pool Remodeling",
    source: "via Angi",
    quote:
      "Richard brought a high level of professionalism and know-how to our project, and it showed in how thorough the work was from start to finish.",
  },
];

export const transformationStages = [
  {
    stage: "Stage 1 of 5",
    title: "Old Pool",
    copy:
      "Every transformation starts with an honest look at what's there: cracked decking, dated finishes, equipment past its prime.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/green-algae-pool-cleaning-crew.jpg",
    imageAlt:
      "Green, algae-filled pool with a service crew on-site, the starting point before renovation",
  },
  {
    stage: "Stage 2 of 5",
    title: "Demolition",
    copy:
      "We strip the shell back to bare structure, clearing the way for a build that's right the first time.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/pebble-shell-pre-plaster-construction.jpg",
    imageAlt:
      "Pool shell stripped back to bare structure with taped seams during demolition",
  },
  {
    stage: "Stage 3 of 5",
    title: "Renovation",
    copy:
      "New plumbing, new plaster, new structure. Every stage is inspected before the next one starts.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/plastering-blue-plaster-application.jpg",
    imageAlt:
      "Crew applying fresh blue plaster to a drained pool shell during renovation",
  },
  {
    stage: "Stage 4 of 5",
    title: "Finishing",
    copy:
      "Decking, tile, and lighting come together to turn a worksite back into a backyard.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/rectangular-pool-filling-bluestone-patio.jpg",
    imageAlt:
      "Finished pool being filled with water alongside a new bluestone patio",
  },
  {
    stage: "Stage 5 of 5",
    title: "Luxury Result",
    copy:
      "The finished result: a resort-style escape built to last, backed by our warranty.",
    image:
      "https://www.marinepoolrenovationsllc.com/images/projects/kidney-spa-pool-filled-tan-decking.jpg",
    imageAlt:
      "Completed kidney pool with raised spa and tan decking, the finished luxury result",
  },
];

export const beforeImage =
  "https://www.marinepoolrenovationsllc.com/images/projects/pebble-shell-pre-plaster-construction.jpg";
export const afterImage =
  "https://www.marinepoolrenovationsllc.com/images/projects/kidney-spa-pool-filled-tan-decking.jpg";