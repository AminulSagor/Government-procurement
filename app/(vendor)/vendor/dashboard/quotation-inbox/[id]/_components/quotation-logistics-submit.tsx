"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Truck, Paperclip, Upload, Send, BadgeCheck } from "lucide-react";

export default function QuotationLogisticsSubmit() {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-6">
      {/* ===== Top Grid ===== */}
      <div className="grid grid-cols-2 gap-8">
        {/* ================= LEFT: LOGISTICS ================= */}
        <div>
          {/* header */}
          <div className="flex items-center gap-2">
            <span className="text-primary-color">
              <BadgeCheck size={20} className="mt-1" />
            </span>
            <p className="text-xs font-extrabold text-gray tracking-wide">
              সরবরাহ শর্তাবলী (LOGISTICS)
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {/* warranty */}
            <div>
              <p className="mb-1 text-[11px] font-semibold text-gray/50">
                ওয়ারেন্টি সময়কাল
              </p>
              <input
                className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
              />
            </div>

            {/* unit */}
            <div>
              <p className="mb-1 text-[11px] font-semibold text-gray/50">
                ইউনিট
              </p>
              <select className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray">
                <option>বছর</option>
                <option>মাস</option>
              </select>
            </div>

            {/* delivery time */}
            <div>
              <p className="mb-1 text-[11px] font-semibold text-gray/50">
                ডেলিভারি সময়
              </p>
              <select className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray">
                <option>৭ দিন</option>
                <option>১০ দিন</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: ATTACHMENTS ================= */}
        <div>
          {/* header */}
          <div className="flex items-center gap-2">
            <span className="text-primary-color">
              <Paperclip size={16} />
            </span>
            <p className="text-xs font-extrabold text-gray tracking-wide">
              প্রয়োজনীয় নথিপত্র (ATTACHMENTS)
            </p>
          </div>

          {/* upload box */}
          <div className="mt-4 flex h-[92px] items-center justify-center rounded-2xl border-2 border-dashed border-primary-color/30 bg-[#F9FBFC]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color/10 text-primary-color">
                <Upload size={18} />
              </span>

              <div>
                <p className="text-xs font-semibold text-gray">
                  কোটেশনের সহায়ক ডকুমেন্ট সংযুক্ত করুন
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-gray/45">
                  PDF, JPG (Max 5MB)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Agreement Box ===== */}
      <div className="mt-6 rounded-2xl border border-primary-color/20 bg-[#F1F8FA] p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 h-4 w-4 accent-primary-color"
          />
          <p className="text-[11px] font-semibold leading-relaxed text-gray/70">
            আমি ঘোষণা করছি যে সরবরাহকৃত পণ্যের সমস্ত তথ্য অফিস কর্তৃক নির্ধারিত
            স্পেসিফিকেশন অনুযায়ী সঠিক। আমি আইবাস+ এর সকল শর্তাবলী মেনে চলতে সম্মত
            এবং ভুল তথ্য প্রদান করলে কর্তৃপক্ষ আমার বিড বাতিল করার অধিকার রাখে।
          </p>
        </label>
      </div>

      {/* ===== Submit Button ===== */}
      <button
        type="button"
        className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary-color text-base font-extrabold text-white shadow-lg hover:opacity-95"
      >
        <Send size={18} />
        কোটেশন দাখিল করুন (Submit Quotation)
      </button>
    </Card>
  );
}
