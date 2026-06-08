"use client";

export default function IbasPagination({
  leftText,
  page,
  totalPages,
  onPageChange,
}: {
  leftText: string;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-white px-5 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[var(--color-medium-gray)]">{leftText}</p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="h-9 rounded-lg px-3 text-sm font-semibold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={[
              "h-9 w-9 rounded-lg text-sm font-bold",
              p === page
                ? "bg-[var(--color-primary-color)] text-white"
                : "text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]",
            ].join(" ")}
          >
            {p}
          </button>
        ))}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="h-9 rounded-lg px-3 text-sm font-semibold text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}