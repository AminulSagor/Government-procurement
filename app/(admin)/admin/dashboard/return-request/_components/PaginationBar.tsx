type Props = {
  page: number;
  totalPages: number;
  label: string;
  onPrev: () => void;
  onNext: () => void;
};

export default function PaginationBar({ page, totalPages, label, onPrev, onNext }: Props) {
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs text-light-gray">{label}</p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={prevDisabled}
          className={[
            "h-9 rounded-xl border border-border bg-white px-4 text-sm font-medium text-black shadow-sm",
            prevDisabled ? "opacity-50" : "hover:bg-off-white",
          ].join(" ")}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className={[
            "h-9 rounded-xl border border-border bg-white px-4 text-sm font-medium text-black shadow-sm",
            nextDisabled ? "opacity-50" : "hover:bg-off-white",
          ].join(" ")}
        >
          Next
        </button>
      </div>
    </div>
  );
}