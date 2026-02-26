// app/(vendor)/vendor/dashboard/return-items-management/_components/ReturnRequestManageCard.tsx
import { ClipboardList, Ticket } from "lucide-react";
import UiPill from "./UiPill";
import EvidencePanel from "./EvidencePanel";
import ActionRequiredPanel from "./ActionRequiredPanel";
import type { ReturnRequestItem, ActionRequiredForm } from "../_types/return-items-management.types";

export default function ReturnRequestManageCard({
  item,
  form,
}: {
  item: ReturnRequestItem;
  form: ActionRequiredForm;
}) {
  return (
    <section className="mt-5 overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-orange-600">
            <ClipboardList className="h-5 w-5" />
          </span>
          <p className="text-[13px] font-extrabold text-slate-900">{item.requestTitleBn}</p>
          <UiPill tone={item.badges.left.tone}>{item.badges.left.labelBn}</UiPill>
          <UiPill tone={item.badges.right.tone}>{item.badges.right.labelBn}</UiPill>
        </div>

        <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
          <Ticket className="h-4 w-4" />
          {item.ticketNo}
        </div>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-slate-400">ফেরত অনুরোধ করেছেন</p>
              <p className="text-[12px] font-extrabold text-emerald-600">{item.quickMeta.requestedTextBn}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-slate-400">OFFICE</p>
              <p className="text-[12px] font-extrabold text-slate-900">{item.quickMeta.office}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-slate-400">ORDER ID</p>
              <p className="text-[12px] font-extrabold text-slate-900">{item.quickMeta.orderId}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-slate-400">ফেরতের কারণ</p>
              <p className="text-[12px] font-extrabold text-slate-900">{item.quickMeta.reason}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-extrabold text-slate-400">ITEM DETAILS</p>
            <p className="mt-2 text-[12px] font-extrabold text-slate-900">{item.item.name}</p>
            <p className="mt-1 text-[11px] font-medium text-slate-500">{item.item.meta}</p>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-extrabold text-slate-400">Buyer Note</p>
            <p className="mt-2 text-[12px] font-medium leading-relaxed text-slate-700">{item.buyerNoteBn}</p>
          </div>

          <div className="mt-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-[10px] font-extrabold text-orange-600">Office Note</p>
            <p className="mt-2 text-[12px] font-semibold text-orange-700">{item.officeNoteBn}</p>
          </div>

          <ActionRequiredPanel form={form} />
        </div>

        <EvidencePanel evidence={item.evidence} />
      </div>
    </section>
  );
}