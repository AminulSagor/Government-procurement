"use client";

import { useMemo, useState } from "react";
import { Search, Upload, Trash2, Minus, Plus } from "lucide-react";
import {
  demoReturnableProducts,
  demoReturnReasons,
  demoUploadedFiles,
} from "@/app/(office)/office/dummy-data/return-product-data";
import Card from "@/components/cards/card";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";

export default function ReturnProductForm() {
  const products = useMemo(() => demoReturnableProducts, []);
  const reasons = useMemo(() => demoReturnReasons, []);
  const [query, setQuery] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(
    products[0]?.id ?? "",
  );

  const [reason, setReason] = useState(reasons[0]?.value ?? "");
  const [qty, setQty] = useState(1);
  const [details, setDetails] = useState("");
  const [files, setFiles] = useState(demoUploadedFiles);

  const selected = useMemo(
    () => products.find((p) => p.id === selectedProductId),
    [products, selectedProductId],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.nameBn, p.orderId, p.sellerNameBn].some((x) =>
        x.toLowerCase().includes(q),
      ),
    );
  }, [products, query]);

  const dec = () => setQty((v) => (v <= 1 ? 1 : v - 1));
  const inc = () => setQty((v) => v + 1);

  const onReset = () => {
    setQuery("");
    setSelectedProductId(products[0]?.id ?? "");
    setReason(reasons[0]?.value ?? "");
    setQty(1);
    setDetails("");
    setFiles(demoUploadedFiles);
  };

  const onSubmit = () => {
    // demo submit
    console.log({
      productId: selectedProductId,
      reason,
      qty,
      details,
      files,
    });
    alert("ডেমো: আবেদন জমা দেয়া হয়েছে ✅");
  };

  return (
    <div className="space-y-6">
      {/* Product selection */}
      <div>
        <h2 className="text-base font-semibold text-black">
          পণ্য নির্বাচন করুন
        </h2>
        <p className="text-sm text-medium-gray mt-1">
          ফেরতযোগ্য পণ্য নির্বাচন করুন
        </p>

        <div className="mt-3 relative">
          <Search className="w-4 h-4 text-medium-gray absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="অর্ডার আইডি বা পণ্যের নাম দিয়ে খুঁজুন..."
            className="
              w-full h-11 pl-10 pr-3 rounded-md
              bg-white border border-primary-color/20
              outline-none
              focus:border-primary-color/50
              text-black placeholder:text-medium-gray
            "
          />
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedProductId(p.id)}
              className={`
                w-full text-left rounded-lg border transition
                ${p.id === selectedProductId ? "border-primary-color/60" : "border-primary-color/20"}
                bg-white hover:brightness-[1.02]
              `}
            >
              <div className="p-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-lg font-semibold text-black">
                    {p.nameBn}
                  </div>
                  <div className="text-sm text-medium-gray mt-1">
                    অর্ডার আইডিঃ <span className="text-black">{p.orderId}</span>
                    , বিক্রেতাঃ{" "}
                    <span className="text-black">{p.sellerNameBn}</span>,
                    প্রাপ্তির তারিখঃ{" "}
                    <span className="text-black">{p.purchaseDateBn}</span>
                  </div>

                  <span className="inline-flex mt-3 px-3 py-1 rounded-full text-sm bg-[rgba(7,136,52,0.10)] text-green">
                    {p.returnableDaysLeftTextBn}
                  </span>
                </div>

                <div className="w-24 h-16 rounded-md bg-off-white overflow-hidden border border-primary-color/10 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imageUrl}
                    alt={p.nameBn}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-color/10" />

      {/* Return details */}
      <div>
        <h2 className="text-base font-semibold text-black">ফেরতের বিবরণ</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              ফেরতের কারণ
            </label>
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="
                  w-full h-11 rounded-md px-3
                  bg-white border border-primary-color/20
                  outline-none
                  focus:border-primary-color/50
                  text-black
                "
              >
                {reasons.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.labelBn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              পরিমাণ
            </label>
            <div
              className="
                h-11 rounded-md px-2
                bg-white border border-primary-color/20
                flex items-center justify-between
              "
            >
              <button
                type="button"
                onClick={dec}
                className="h-9 w-10 rounded-md border border-primary-color/20 flex items-center justify-center active:scale-[0.97]"
                aria-label="decrease"
              >
                <Minus className="w-4 h-4 text-medium-gray" />
              </button>

              <div className="text-sm text-black">
                প্রতি পণ্যের মধ্যে <span className="font-semibold">{qty}</span>{" "}
                টা
              </div>

              <button
                type="button"
                onClick={inc}
                className="h-9 w-10 rounded-md border border-primary-color/20 flex items-center justify-center active:scale-[0.97]"
                aria-label="increase"
              >
                <Plus className="w-4 h-4 text-medium-gray" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-black mb-2">
            বিস্তারিত বিবরণ দিন
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="সমস্যাটি বর্ণনা করুন..."
            className="
              w-full min-h-[140px] rounded-md p-3
              bg-white border border-primary-color/20
              outline-none
              focus:border-primary-color/50
              text-black placeholder:text-medium-gray
              resize-none
            "
          />
        </div>
      </div>

      <div className="border-t border-primary-color/10" />

      {/* Attachments */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-black">
            প্রমাণপত্র আপলোড করুন
          </h2>
          <span className="text-sm text-medium-gray">(ঐচ্ছিক)</span>
        </div>

        <div
          className="
            mt-3 rounded-lg border border-dashed border-primary-color/30
            bg-off-white
            p-6 flex flex-col items-center justify-center text-center gap-2
          "
        >
          <Upload className="w-6 h-6 text-medium-gray" />
          <div className="text-sm">
            <button type="button" className="text-blue hover:underline">
              ফাইল ব্রাউজ করতে ক্লিক করুন
            </button>{" "}
            <span className="text-medium-gray">অথবা এখানে টেনে আনুন</span>
          </div>
          <div className="text-xs text-medium-gray">
            PNG, JPG, GIF সর্বোচ্চ 10MB
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {files.map((f) => (
            <Card key={f.id} className="p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-off-white border border-primary-color/10 flex items-center justify-center">
                    <span className="text-medium-gray text-xs">IMG</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">
                      {f.name}
                    </div>
                    <div className="text-xs text-medium-gray">
                      {f.sizeLabelBn}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setFiles((prev) => prev.filter((x) => x.id !== f.id))
                  }
                  className="h-9 w-9 rounded-md border border-primary-color/15 flex items-center justify-center hover:brightness-110 active:scale-[0.97]"
                  aria-label="remove file"
                >
                  <Trash2 className="w-4 h-4 text-medium-gray" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="pt-4 flex items-center justify-end gap-3">
        <SecondaryButton className="px-5 py-2" onClick={() => history.back()}>
          ফিরে যান
        </SecondaryButton>

        <SecondaryButton className="px-5 py-2" onClick={onReset}>
          বাতিল করুন
        </SecondaryButton>

        <PrimaryButton className="px-6 py-2" onClick={onSubmit}>
          আবেদন জমা দিন
        </PrimaryButton>
      </div>

      {/* just to ensure selected used in demo */}
      <div className="hidden">{selected?.id}</div>
    </div>
  );
}
