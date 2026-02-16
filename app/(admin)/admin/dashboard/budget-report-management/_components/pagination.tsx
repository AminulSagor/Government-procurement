export default function Pagination() {
  return (
    <div className="flex items-center justify-end gap-2">
      <button className="h-9 w-9 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]">
        ‹
      </button>

      <button className="h-9 w-9 rounded-lg bg-[var(--color-primary-color)] text-white">
        1
      </button>

      <button className="h-9 w-9 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]">
        2
      </button>

      <span className="px-1 text-[var(--color-light-gray)]">…</span>

      <button className="h-9 w-9 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]">
        17
      </button>

      <button className="h-9 w-9 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]">
        ›
      </button>
    </div>
  );
}
