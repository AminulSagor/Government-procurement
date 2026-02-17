"use client";

export default function MiniPagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-3 py-2 text-xs font-semibold text-[var(--color-medium-gray)]"
        onClick={() => onChange(Math.max(1, page - 1))}
      >
        পূর্ববর্তী
      </button>

      <button className="h-9 w-9 rounded-xl bg-[var(--color-primary-color)] text-sm font-extrabold text-white">
        {page.toLocaleString("bn-BD")}
      </button>

      <button className="h-9 w-9 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white text-sm font-extrabold text-[var(--color-black)]">
        {Math.min(totalPages, page + 1).toLocaleString("bn-BD")}
      </button>

      <button
        className="rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-3 py-2 text-xs font-semibold text-[var(--color-medium-gray)]"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
      >
        পরবর্তী
      </button>
    </div>
  );
}
