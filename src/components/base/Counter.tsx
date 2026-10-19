import useCountUp from "@/hooks/useCountUp";
import useInView from "@/hooks/useInView";

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, className = "", duration = 1600 }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const rest = match ? match[2] : value;
  const decimals = match && match[1].includes(".") ? 1 : 0;
  const current = useCountUp(target, inView, duration, decimals);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {current.toFixed(decimals)}
      {rest}
    </span>
  );
}