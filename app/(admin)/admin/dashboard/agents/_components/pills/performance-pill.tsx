"use client";

export default function PerformancePill({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <span className="mt-1 inline-flex w-fit rounded-full bg-[rgba(7,136,52,0.12)] px-3 py-1 text-[10px] font-extrabold text-[var(--color-green)]">
      HIGH PERFORMER
    </span>
  );
}
