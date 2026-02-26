// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/ShipmentTimeline.tsx
import type { ShipmentEvent } from "../_types/return-request-details.types";

export default function ShipmentTimeline({ events }: { events: ShipmentEvent[] }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
      <div className="relative pl-6">
        <div className="absolute left-2 top-2 h-[calc(100%-8px)] w-[2px] bg-slate-200" />

        <ul className="space-y-6">
          {events.map((ev) => {
            const dotCls = ev.active
              ? "bg-emerald-500 ring-4 ring-emerald-100"
              : ev.done
              ? "bg-[--color-primary-color] ring-4 ring-[color:rgba(31,110,128,0.12)]"
              : "bg-slate-300 ring-4 ring-slate-100";

            return (
              <li key={ev.key} className="relative">
                <span className={["absolute -left-[28px] top-1.5 h-3 w-3 rounded-full", dotCls].join(" ")} />
                <div className="space-y-1">
                  <p className="text-[13px] font-semibold text-slate-900">
                    {ev.titleBn} <span className="text-slate-500">({ev.titleEn})</span>
                  </p>
                  {ev.noteBn ? <p className="text-[12px] text-slate-600">{ev.noteBn}</p> : null}
                  {ev.dateText ? <p className="text-[11px] text-slate-400">{ev.dateText}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}