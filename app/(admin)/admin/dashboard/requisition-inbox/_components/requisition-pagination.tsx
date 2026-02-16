"use client";

import { PaginationState } from "../_types/requisition-inbox.types";

export default function RequisitionPagination({
  value,
  onChange,
}: {
  value: PaginationState;
  onChange: (next: PaginationState) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(value.total / value.pageSize));

  const go = (p: number) => onChange({ ...value, page: Math.min(totalPages, Math.max(1, p)) });

  const Btn = ({
    active,
    children,
    onClick,
    disabled,
  }: {
    active?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`h-9 min-w-9 rounded-lg border px-3 text-sm font-semibold ${
        active
          ? "border-[rgba(31,110,128,0.35)] bg-[var(--color-primary-color)] text-white"
          : "border-[rgba(100,116,139,0.20)] bg-white text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
      } ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </button>
  );

  return (
    <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[rgba(100,116,139,0.20)] bg-white px-5 py-4  md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[var(--color-medium-gray)]">
        সর্বমোট <span className="font-semibold text-[var(--color-black)]">{value.total}</span> টি চাহিদাপত্রের মধ্যে{" "}
        <span className="font-semibold text-[var(--color-black)]">
          {(value.page - 1) * value.pageSize + 1}
        </span>{" "}
        থেকে{" "}
        <span className="font-semibold text-[var(--color-black)]">
          {Math.min(value.total, value.page * value.pageSize)}
        </span>{" "}
        দেখানো হচ্ছে
      </p>

      <div className="flex items-center justify-end gap-2">
        <Btn disabled={value.page === 1} onClick={() => go(value.page - 1)}>
          ‹
        </Btn>

        {/* show: 1 2 3 ... 45 like image */}
        <Btn active={value.page === 1} onClick={() => go(1)}>1</Btn>
        <Btn active={value.page === 2} onClick={() => go(2)}>2</Btn>
        <Btn active={value.page === 3} onClick={() => go(3)}>3</Btn>

        <span className="px-1 text-[var(--color-medium-gray)]">…</span>

        <Btn active={value.page === totalPages} onClick={() => go(totalPages)}>
          {totalPages}
        </Btn>

        <Btn disabled={value.page === totalPages} onClick={() => go(value.page + 1)}>
          ›
        </Btn>
      </div>
    </div>
  );
}
