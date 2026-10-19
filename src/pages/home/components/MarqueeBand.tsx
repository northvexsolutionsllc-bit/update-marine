import Marquee from "@/components/base/Marquee";

const items = [
  "Gunite Construction",
  "Full Renovations",
  "Plaster & Resurfacing",
  "Tile & Coping",
  "Outdoor Living",
  "Commercial Pools",
  "Lighting Design",
  "Leak Detection",
];

export default function MarqueeBand() {
  return (
    <div className="relative overflow-hidden">
      <Marquee items={items} duration={42} />
    </div>
  );
}