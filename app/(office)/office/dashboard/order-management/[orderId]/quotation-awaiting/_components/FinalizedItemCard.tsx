"use client";

import { AwaitingQuotationItem } from "@/app/(office)/office/types/quotation-awaiting.types";
import Card from "@/components/cards/card";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-2 text-xs font-semibold text-light-gray">{label}</div>
      {children}
    </div>
  );
}

function ReadonlyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-11 w-full rounded-md border border-primary-color/10 bg-off-white px-4 text-sm text-black flex items-center">
      {children}
    </div>
  );
}

function MiniBox({ value, note }: { value: string; note?: string }) {
  return (
    <div>
      <div className="h-11 w-full rounded-md border border-primary-color/10 bg-off-white px-4 text-sm font-semibold text-black flex items-center justify-center">
        {value}
      </div>
      {note ? (
        <div className="mt-1 text-center text-xs text-medium-gray">{note}</div>
      ) : null}
    </div>
  );
}

export default function FinalizedItemCard({
  item,
}: {
  item: AwaitingQuotationItem;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold text-black">{item.title}</div>
            <span className="rounded-full bg-secondary-color/20 px-3 py-1 text-xs font-semibold text-primary-color">
              {item.tagLabel}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-3 text-sm">
            <div className="text-light-gray">Code: {item.code}</div>
            <span className="rounded-md bg-green/10 px-3 py-1 text-xs font-semibold text-green">
              {item.stageLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label={item.specificationLabel}>
          <ReadonlyBox>{item.specificationValue}</ReadonlyBox>
        </Field>

        <Field label={item.attachmentLabel}>
          <div className="h-11 w-full rounded-md border border-primary-color/10 bg-off-white px-4 text-sm text-primary-color flex items-center">
            {item.attachment?.label ?? "সংযুক্ত ফাইল নেই"}
          </div>
        </Field>
      </div>

      <div className="my-5 border-t border-primary-color/10" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-7">
        <Field label={item.unitPriceLabel}>
          <MiniBox value={`${item.unitPrice} ৳`} />
        </Field>

        <Field label={item.vatLabel}>
          <MiniBox
            value={`${item.vatPercent}`}
            note={`(${item.vatPercent.toFixed(2)})`}
          />
        </Field>

        <Field label={item.aitLabel}>
          <MiniBox
            value={`${item.aitPercent}`}
            note={`(${item.aitPercent.toFixed(2)})`}
          />
        </Field>

        <Field label={item.additionalVatLabel}>
          <MiniBox
            value={`${item.additionalVatPercent}`}
            note={`(${item.additionalVatPercent.toFixed(2)})`}
          />
        </Field>

        <Field label={item.totalUnitLabel}>
          <div className="h-11 w-full rounded-md border border-primary-color/10 bg-white px-4 text-sm font-semibold text-primary-color flex items-center justify-center">
            {item.totalUnit.toFixed(2)}
          </div>
        </Field>

        <Field label={item.quantityLabel}>
          <MiniBox value={`${item.quantity}`} />
        </Field>

        <div className="text-right">
          <div className="mb-2 text-xs font-semibold text-light-gray">
            {item.estimatedTotalLabel}
          </div>
          <div className="text-lg font-bold text-primary-color">
            {item.estimatedTotal.toFixed(2)} ৳
          </div>
        </div>
      </div>
    </Card>
  );
}
