"use client";

export default function MismatchCard() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-red)]/5 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[var(--color-red)]/20 text-[var(--color-red)]">
          ⚠
        </span>
        <div>
          <div className="text-sm font-semibold text-[var(--color-black)]">
            নথির সাথে তথ্যের অমিল পাওয়া গেছে
          </div>
          <div className="mt-1 text-xs text-[var(--color-light-gray)]">
            সঠিক তথ্য যুক্ত করুন অথবা যথাযথ সংযোজন করুন।
          </div>
        </div>
      </div>

      <span className="inline-flex items-center rounded-full border border-[var(--color-red)]/20 bg-white px-3 py-1 text-xs font-semibold text-[var(--color-red)]">
        Mismatch
      </span>
    </div>
  );
}
