"use client";

export default function InboxPagination() {
  return (
    <div className="px-5 pb-6 flex items-center justify-end gap-2">
      <button className="h-9 px-4 rounded-lg border border-border bg-white text-sm text-gray/70">
        Previous
      </button>

      <button className="h-9 w-9 rounded-lg bg-[var(--color-primary-color)] text-white text-sm font-bold">
        1
      </button>

      <button className="h-9 px-4 rounded-lg border border-border bg-white text-sm text-gray/70">
        Next
      </button>
    </div>
  );
}
