// app/(vendor)/vendor/dashboard/return-items-management/_components/ActionRequiredPanel.tsx
import { CalendarClock } from "lucide-react";
import type { ActionRequiredForm } from "../_types/return-items-management.types";

export default function ActionRequiredPanel({ form }: { form: ActionRequiredForm }) {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        <h4 className="text-[12px] font-extrabold text-orange-700">Action Required</h4>
      </div>

      <div className="mt-4 space-y-4">
        <label className="flex items-start gap-3 text-[12px] font-semibold text-slate-700">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
          <span>{form.approveLabelBn}</span>
        </label>

        <textarea
          className="h-20 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] outline-none focus:ring-2 focus:ring-[color:rgba(31,110,128,0.25)]"
          placeholder={form.responsePlaceholderBn}
        />

        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[12px] font-semibold text-slate-700">
            {form.pickupOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 text-[12px] font-extrabold text-white shadow-[0_10px_18px_rgba(234,88,12,0.25)] hover:opacity-95"
          >
            <CalendarClock className="h-4 w-4" />
            {form.pickupButtonBn}
          </button>
        </div>

        <label className="flex items-start gap-3 text-[12px] font-semibold text-slate-700">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
          <span>{form.rejectLabelBn}</span>
        </label>

        <textarea
          className="h-16 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] outline-none focus:ring-2 focus:ring-[color:rgba(31,110,128,0.25)]"
          placeholder={form.rejectReasonPlaceholderBn}
        />

        <button
          type="button"
          className="w-full rounded-xl bg-red-600 px-4 py-3 text-[12px] font-extrabold text-white shadow-[0_12px_20px_rgba(231,53,8,0.25)] hover:opacity-95"
        >
          {form.finalDangerButtonBn}
        </button>
      </div>
    </div>
  );
}