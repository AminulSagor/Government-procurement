"use client";

export default function MatchCard({ percent, textBn }: { percent: number; textBn: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-green)]/5 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[var(--color-border)] text-[var(--color-primary-color)]">
          ⚙
        </span>
        <div>
          <div className="text-sm font-semibold text-[var(--color-black)]">
            সিস্টেমের মোট যোগফল নথির সাথে মিলেছে
          </div>
          <div className="mt-1 text-xs text-[var(--color-light-gray)]">{textBn}</div>
        </div>
      </div>

      <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-primary-color)]">
        {percent}% Match
      </span>
    </div>
  );
}
