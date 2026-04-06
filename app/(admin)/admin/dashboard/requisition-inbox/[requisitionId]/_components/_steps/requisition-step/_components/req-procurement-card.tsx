import { FileText } from "lucide-react";

export default function ReqProcurementCard({ value }: { value: string }) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
          <FileText className="h-5 w-5" strokeWidth={1.9} />
        </span>

        <div className="w-full">
          <p className="text-sm font-semibold text-[var(--color-black)]">
            ক্রয় পদ্ধতি (Procurement Method)
          </p>

          <div className="mt-3 inline-flex h-10 items-center rounded-lg bg-[rgba(120,185,181,0.14)] px-4 text-sm font-semibold text-[var(--color-black)]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
