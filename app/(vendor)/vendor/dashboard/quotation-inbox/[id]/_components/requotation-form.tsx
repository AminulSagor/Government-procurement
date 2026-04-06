"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { Pencil, RefreshCw } from "lucide-react";
import ProductSearchModal, { ProductSearchItem } from "../requotation/_components/product-search-modal";


type Props = {
  title?: string;
  subtitle?: string;

  statusTitle?: string;
  statusValue?: string;

  itemName?: string;
  itemCode?: string;
  modelId?: string;

  qty?: number;

  officeBudget?: number;
  estimatedPrice?: number;

  vatPct?: number;
  itPct?: number;
  extraPct?: number;

  offerUnit?: number;

  deliveryValue?: string;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function RequotationForm({
  title = "দরপত্র কম্পারিজন ও অফার আপডেট",
  subtitle = "অ্যাডমিনের অনুরোধ অনুযায়ী আপনার অফারটি সংশোধন করুন",

  statusTitle = "আইটেম স্ট্যাটাস",
  statusValue = "আন্ডার রিকোটেশন",

  itemName: initialName = "HP LaserJet Pro P1102 Toner",
  itemCode: initialCode = "০৩৬৫০৬০১",
  modelId: initialModel = "HP-TRN-1102-STD",

  qty = 5,

  officeBudget = 3600,
  estimatedPrice = 3600,

  vatPct = 15,
  itPct = 1,
  extraPct = 0.5,

  offerUnit = 3400,

  deliveryValue = "৭ দিন",
}: Props) {
  // ✅ product state (so selecting from modal updates UI)
  const [itemName, setItemName] = React.useState(initialName);
  const [itemCode, setItemCode] = React.useState(initialCode);
  const [modelId, setModelId] = React.useState(initialModel);

  // ✅ modal state
  const [openSearch, setOpenSearch] = React.useState(false);
  const [query, setQuery] = React.useState("Toner");

  // ✅ demo items (later API)
  const items: ProductSearchItem[] = [
    {
      id: "1",
      name: "Canon NPG-51 Toner",
      itemCode: "035601",
      model: "NPG-51",
      estimatedPrice: 6950,
    },
    {
      id: "2",
      name: "Samsung MLT-D101S Toner",
      itemCode: "035602",
      model: "MLT-D101S",
      estimatedPrice: 9250,
    },
  ];

  const subtotal = qty * offerUnit;
  const vat = subtotal * (vatPct / 100);
  const it = subtotal * (itPct / 100);
  const extra = subtotal * (extraPct / 100);
  const grand = subtotal + vat + it + extra;

  return (
    <>
      {/* ✅ MODAL */}
      <ProductSearchModal
        open={openSearch}
        onOpenChange={setOpenSearch}
        value={query}
        onChange={setQuery}
        items={items}
        onSelect={(p) => {
          setItemName(p.name);
          setItemCode(p.itemCode);
          setModelId(p.model);
          setOpenSearch(false);
        }}
      />

      <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden shadow-sm">
        {/* header */}
        <div className="flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <h3 className="text-base font-extrabold text-gray">{title}</h3>
            <p className="mt-1 text-xs font-semibold text-gray/45">{subtitle}</p>
          </div>

          <div className="shrink-0 rounded-2xl border border-gray/10 bg-secondary/30 px-4 py-2 text-center">
            <p className="text-[11px] font-semibold text-gray/50">{statusTitle}</p>
            <p className="mt-0.5 text-xs font-extrabold text-primary-color">
              {statusValue}
            </p>
          </div>
        </div>

        {/* table header */}
        <div className="border-t border-gray/10 bg-[#EEF5F7]">
          <div className="grid grid-cols-[2fr_0.7fr_1.35fr_1.15fr] px-6 py-4 text-xs font-extrabold text-gray/60">
            <span>পণ্য ও স্পেসিফিকেশন</span>
            <span className="text-center">পরিমাণ</span>
            <span className="text-center">টেন্ডার একক দর (৳)</span>
            <span className="text-right">টেন্ডার একত্রিত ও মোট বাজেট</span>
          </div>
        </div>

        {/* row */}
        <div className="grid grid-cols-[2fr_0.7fr_1.35fr_1.15fr]">
          {/* col 1 */}
          <div className="px-6 py-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-extrabold text-gray leading-snug">
                  {itemName}
                </p>

                <p className="mt-2 text-xs font-semibold text-primary-color">
                  আইটেম কোড: {itemCode}
                </p>

                <p className="mt-2 text-[11px] font-semibold text-gray/45">
                  MODEL ID: {modelId}
                </p>
              </div>

              {/* ✅ CLICK HERE */}
              <button
                type="button"
                onClick={() => setOpenSearch(true)}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-primary-color/35 bg-white px-4 py-2 text-xs font-extrabold text-primary-color hover:bg-primary-color/5"
              >
                <RefreshCw size={14} />
                পণ্য পরিবর্তন করুন
              </button>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold text-gray/50 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray/25" />
                ডেলিভারি সময় (ডেলিভারি তারিখ)
              </p>

              <input
                defaultValue={deliveryValue}
                className="mt-2 h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
              />
            </div>
          </div>

          {/* col 2 qty */}
          <div className="border-l border-gray/10 px-6 py-7 flex justify-center">
            <div className="mt-2 inline-flex h-12 min-w-[56px] items-center justify-center rounded-2xl border border-gray/12 bg-[#EEF5F7] text-sm font-extrabold text-gray">
              {String(qty).padStart(2, "0")}
            </div>
          </div>

          {/* col 3 offer */}
          <div className="border-l border-gray/10 bg-[#EEF5F7] px-6 py-7">
            <div className="space-y-6">
              <div className="border-l-2 border-primary-color/25 pl-4">
                <p className="text-xs font-semibold text-gray/55">অফিসের বাজেট</p>
                <p className="mt-2 text-sm font-extrabold text-gray">
                  {money(officeBudget)}
                </p>
              </div>

              <div className="border-l-2 border-primary-color/25 pl-4">
                <p className="text-xs font-semibold text-gray/55">
                  ইস্টিমেটেড মূল্য
                </p>
                <p className="mt-2 text-sm font-extrabold text-gray">
                  {money(estimatedPrice)}
                </p>
              </div>

              <div className="pt-1">
                <p className="text-xs font-extrabold text-primary-color flex items-center gap-2">
                  <Pencil size={14} /> আপনার অফার (একক) - আপডেট করুন
                </p>

                <div className="mt-2 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-color font-extrabold">
                    ৳
                  </span>
                  <input
                    className={[
                      "h-14 w-full rounded-2xl bg-white",
                      "border-2 border-primary-color/35",
                      "pl-10 pr-5 text-right",
                      "text-lg font-extrabold text-primary-color",
                      "shadow-[0_6px_16px_rgba(0,0,0,0.10)]",
                      "focus:outline-none",
                    ].join(" ")}
                    defaultValue={String(offerUnit)}
                  />
                </div>

                <p className="mt-2 text-[11px] font-semibold text-gray/55">
                  * সর্বোচ্চ: {money(officeBudget * qty)} বা কম
                </p>
              </div>
            </div>
          </div>

          {/* col 4 totals */}
          <div className="border-l border-gray/10 px-6 py-7 text-right">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray/55">
                  ভ্যাট (VAT) {vatPct}%
                </p>
                <p className="mt-2 text-sm font-extrabold text-gray">
                  {money(vat)}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray/55">
                  আইটি (IT) {itPct}%
                </p>
                <p className="mt-2 text-sm font-extrabold text-gray">
                  {money(it)}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray/55">
                  অতিরিক্ত চার্জ {extraPct}%
                </p>
                <p className="mt-2 text-sm font-extrabold text-gray">
                  {money(extra)}
                </p>
              </div>

              <div className="pt-5">
                <p className="text-xs font-semibold text-gray/55">
                  মোট আইটেম বাজেট
                </p>
                <p className="mt-2 text-2xl font-extrabold text-primary-color">
                  {money(grand)}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-gray/45">
                  {String(qty).padStart(2, "0")} টি আইটেম সংশোধিত মূল্য
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="px-6 pb-6">
          <div className="mt-4 h-px w-full bg-gray/10" />
          <div className="mt-5 flex items-center justify-end">
            <PrimaryButton className="px-8 py-3 text-sm font-extrabold">
              আপডেট করুন
            </PrimaryButton>
          </div>
        </div>
      </Card>
    </>
  );
}
