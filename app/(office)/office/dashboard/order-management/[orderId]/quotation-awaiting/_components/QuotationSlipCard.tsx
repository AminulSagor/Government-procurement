"use client";

import { QuotationAwaitingPageData } from "@/app/(office)/office/types/quotation-awaiting.types";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import Card from "@/components/cards/card";
import { FileText, Printer, ArrowLeft } from "lucide-react";

function formatMoneyBDT(n: number) {
  return `${n.toFixed(2)} ৳`;
}

export default function QuotationSlipCard({
  slip,
  onPrint,
  onBack,
}: {
  slip: QuotationAwaitingPageData["slip"];
  onPrint?: () => void;
  onBack?: () => void;
}) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="bg-secondary-color/12 px-5 py-4">
        <div className="flex items-center gap-2 text-lg font-bold text-black">
          <FileText className="h-5 w-5 text-primary-color" />
          {slip.title}
        </div>
        <div className="mt-1 text-xs text-light-gray">{slip.subtitle}</div>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center justify-between border-b border-primary-color/10 pb-3 text-[11px] font-semibold text-medium-gray">
          <div>{slip.columnsLeft}</div>
          <div>{slip.columnsRight}</div>
        </div>

        <div className="divide-y divide-primary-color/10">
          {slip.items.map((it) => (
            <div key={it.id} className="py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-black">
                    {it.name}
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-black">
                    <span className="inline-flex h-8 items-center justify-center rounded-md border border-primary-color/10 bg-off-white px-3">
                      {it.qty}
                    </span>
                    <span className="text-medium-gray">x</span>
                    <span className="inline-flex h-8 items-center justify-center rounded-md border border-primary-color/10 bg-off-white px-3">
                      {formatMoneyBDT(it.unitPrice)}
                    </span>
                  </div>

                  <div className="mt-2 inline-flex rounded-md border border-primary-color/10 bg-off-white px-3 py-2 text-xs text-medium-gray">
                    {it.metaLine}
                  </div>
                </div>

                <div className="text-right text-sm font-bold text-black">
                  {formatMoneyBDT(it.total)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-primary-color/10 pt-4">
          <div className="flex items-center justify-between text-sm text-black">
            <div className="text-medium-gray">{slip.subtotalLabel}</div>
            <div className="font-semibold">{slip.subtotalText}</div>
          </div>

          <div className="my-4 border-t border-primary-color/10" />

          <div className="flex items-center justify-between">
            <div className="text-base font-bold text-primary-color">
              {slip.totalLabel}
            </div>
            <div className="text-xl font-extrabold text-primary-color">
              {slip.totalText}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs font-semibold text-light-gray">
            {slip.procurementMethodLabel}
          </div>
          <div className="mt-2 rounded-md border border-primary-color/10 bg-off-white px-4 py-3 text-sm font-semibold text-black">
            {slip.procurementMethodValue}
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <PrimaryButton
            onClick={onPrint}
            className="w-full py-3 flex items-center justify-center gap-2"
          >
            <Printer className="h-4 w-4" />
            {slip.primaryBtnText}
          </PrimaryButton>

          <SecondaryButton
            onClick={onBack}
            className="w-full py-3 flex items-center justify-center gap-2 border border-primary-color/25"
          >
            <ArrowLeft className="h-4 w-4" />
            {slip.secondaryBtnText}
          </SecondaryButton>
        </div>
      </div>
    </Card>
  );
}
