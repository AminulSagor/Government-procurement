// app/(vendor)/vendor/dashboard/return-items-management/_components/ResolvedReturnRow.tsx
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function ResolvedReturnRow({
  title,
  statusText,
  dateText,
}: {
  title: string;
  statusText: string;
  dateText: string;
}) {
  return (
    <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-[0_10px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <div>
          <p className="text-[13px] font-extrabold text-slate-900">{title}</p>
          <p className="text-[11px] font-medium text-slate-500">{dateText}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-extrabold text-slate-700">
          {statusText}
        </span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  );
}