"use client";

export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center rounded-md border border-[var(--color-light-gray)]/30 bg-[var(--color-off-white)] px-3 text-sm font-semibold text-black">
      {children}
    </span>
  );
}
