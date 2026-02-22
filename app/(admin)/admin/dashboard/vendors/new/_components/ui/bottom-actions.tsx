"use client";

type Props = {
  onCancel: () => void;
  onSubmit: () => void;
  submitLabel: string;
};

export default function BottomActions({ onCancel, onSubmit, submitLabel }: Props) {
  return (
    <div className="sticky bottom-0 mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_-10px_24px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            বাতিল করুন
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="h-10 rounded-xl bg-primary-color px-4 text-sm font-semibold text-white hover:opacity-95"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}