import { cn } from "../../_utils/cn";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.06)]",
        className
      )}
    >
      {children}
    </section>
  );
}