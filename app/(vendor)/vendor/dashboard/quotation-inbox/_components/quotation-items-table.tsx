"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Trash2 } from "lucide-react";

export type QuoteItem = {
  id: string;
  name: string;
  code?: string;
  qty: number;
  unitPrice: number;
};

type Props = {
  items?: QuoteItem[];
  onChange?: (next: QuoteItem[]) => void;
};

const demoItems: QuoteItem[] = [
  {
    id: "it_1",
    name: "HP LaserJet Pro P1102 Toner",
    code: "Code: HP-1112",
    qty: 5,
    unitPrice: 170000,
  },
];

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US")}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function QuotationItemsTable({ items = demoItems, onChange }: Props) {
  const [rows, setRows] = React.useState<QuoteItem[]>(items);

  React.useEffect(() => setRows(items), [items]);

  const updateRow = (id: string, patch: Partial<QuoteItem>) => {
    const next = rows.map((r) => (r.id === id ? { ...r, ...patch } : r));
    setRows(next);
    onChange?.(next);
  };

  const removeRow = (id: string) => {
    const next = rows.filter((r) => r.id !== id);
    setRows(next);
    onChange?.(next);
  };

  const rowTotal = (r: QuoteItem) => Math.max(0, (r.qty || 0) * (r.unitPrice || 0));
  const subTotal = rows.reduce((s, r) => s + rowTotal(r), 0);

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
      {/* header row (same columns as Component #2) */}
      <div className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_0.7fr] gap-2 px-3 py-2 bg-secondary">
        <p className="text-[11px] font-extrabold text-gray/60">পণ্য</p>
        <p className="text-[11px] font-extrabold text-gray/60">পরিমাণ</p>
        <p className="text-[11px] font-extrabold text-gray/60">একক মূল্য</p>
        <p className="text-[11px] font-extrabold text-gray/60">মোট মূল্য</p>
        <p className="text-[11px] font-extrabold text-gray/60 text-right">অ্যাকশন</p>
      </div>

      {/* rows */}
      <div className="divide-y divide-gray/10">
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_0.7fr] gap-2 px-3 py-3"
          >
            {/* product */}
            <div>
              <p className="text-xs font-extrabold text-gray leading-5">
                {r.name}
              </p>
              {r.code ? (
                <p className="mt-1 text-[11px] font-semibold text-gray/45">
                  {r.code}
                </p>
              ) : null}
            </div>

            {/* qty */}
            <div>
              <input
                type="number"
                value={r.qty}
                min={0}
                onChange={(e) => updateRow(r.id, { qty: Number(e.target.value || 0) })}
                className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
              />
            </div>

            {/* unit price */}
            <div>
              <input
                type="number"
                value={r.unitPrice}
                min={0}
                onChange={(e) =>
                  updateRow(r.id, { unitPrice: Number(e.target.value || 0) })
                }
                className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
              />
            </div>

            {/* total */}
            <div className="flex items-center">
              <p className="text-xs font-extrabold text-gray">
                {money(rowTotal(r))}
              </p>
            </div>

            {/* action */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => removeRow(r.id)}
                className="h-10 w-10 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/50 hover:text-gray"
                aria-label="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* subtotal strip */}
      <div className="border-t border-gray/10 bg-white px-4 py-3">
        <div className="flex items-center justify-end gap-3">
          <p className="text-xs font-semibold text-gray/50">সাব-টোটাল</p>
          <p className="text-sm font-extrabold text-gray">{money(subTotal)}</p>
        </div>
      </div>
    </Card>
  );
}
