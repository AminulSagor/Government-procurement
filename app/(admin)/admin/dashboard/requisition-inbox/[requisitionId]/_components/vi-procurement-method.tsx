export default function VIProcurementMethod({
  titleBn,
  value,
}: {
  titleBn: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.20)] bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(31,110,128,0.10)] text-[var(--color-primary-color)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M7 4h10v16H7V4Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M9 8h6M9 12h6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <div className="w-full">
          <p className="text-sm font-semibold text-[var(--color-black)]">{titleBn}</p>

          <div className="mt-3 inline-flex h-10 items-center rounded-lg bg-[rgba(120,185,181,0.14)] px-4 text-sm font-semibold text-[var(--color-black)]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
