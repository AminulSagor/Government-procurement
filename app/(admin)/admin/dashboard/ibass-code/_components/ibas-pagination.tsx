"use client";

export default function IbasPagination({ leftText }: { leftText: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-white px-5 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[var(--color-medium-gray)]">{leftText}</p>

      <div className="flex items-center gap-2">
        <button className="h-9 rounded-lg px-3 text-sm font-semibold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]">
          Previous
        </button>

        <button className="h-9 w-9 rounded-lg bg-[var(--color-primary-color)] text-sm font-bold text-white">
          1
        </button>
        <button className="h-9 w-9 rounded-lg text-sm font-bold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]">
          2
        </button>
        <button className="h-9 w-9 rounded-lg text-sm font-bold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]">
          3
        </button>

        <button className="h-9 rounded-lg px-3 text-sm font-semibold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]">
          Next
        </button>
      </div>
    </div>
  );
}
