"use client";

import React, { useState } from "react";
import Card from "@/components/cards/card";
import type { ReturnRequestItem } from "../../../_types/return-request.types";
import { CheckCircle2, Image as ImageIcon, Info } from "lucide-react";

function KV({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] font-semibold text-light-gray">{label}</div>
      <div className="mt-1 text-sm font-semibold text-medium-gray">{value}</div>
    </div>
  );
}

export default function PendingPanel({ active }: { active: ReturnRequestItem }) {
  const [verdict, setVerdict] = useState("");
  const [justification, setJustification] = useState("");

  return (
    <Card className="rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-medium-gray">
          <span className="h-2 w-2 rounded-full bg-primary-color" />
          পণ্য ফেরত আবেদনের প্রক্রিয়াকরণ: #{active.id}
        </div>
        <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
          অপেক্ষমাণ
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-primary-color/10 bg-off-white p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KV label="CASE ID" value={`#${active.caseId}`} />
          <KV label="PRODUCT NAME" value={active.productName} />
          <KV
            label="RETURN REASON"
            value={<span className="text-red font-semibold">{active.returnReason}</span>}
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-primary-color/10 bg-white p-4">
        <div className="text-xs font-semibold text-light-gray">কারণ</div>
        <div className="mt-2 rounded-lg bg-off-white p-3 text-sm text-medium-gray">
          {active.officeClaimText}
        </div>

        <div className="mt-4 text-xs font-semibold text-light-gray">সংযুক্ত ছবি</div>
        <div className="mt-2 flex h-[120px] w-[160px] flex-col items-center justify-center rounded-xl border border-primary-color/10 bg-off-white">
          <ImageIcon className="h-6 w-6 text-light-gray" />
          <div className="mt-2 text-[11px] font-semibold text-medium-gray">
            {active.evidence?.[0]?.name ?? "NO_FILE"}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-primary-color/10 bg-white">
        {active.checks.map((c, i) => (
          <div
            key={c.label}
            className={[
              "flex items-center justify-between px-4 py-3",
              i !== active.checks.length - 1 ? "border-b border-primary-color/10" : "",
            ].join(" ")}
          >
            <div className="text-sm text-medium-gray">{c.label}</div>
            <div className="flex items-center gap-2 text-sm font-semibold text-green">
              <CheckCircle2 className="h-4 w-4" />
              {c.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-primary-color/10 bg-white p-4">
        <div className="text-xs font-semibold text-light-gray">এডমিন সিদ্ধান্ত</div>

        <select
          value={verdict}
          onChange={(e) => setVerdict(e.target.value)}
          className="mt-2 w-full rounded-xl border border-primary-color/10 bg-off-white px-4 py-3 text-sm text-medium-gray outline-none focus:border-primary-color/30"
        >
          <option value="">সিদ্ধান্ত করুন...</option>
          <option value="accepted">রিকোয়েস্ট গ্রহণ</option>
          <option value="denied">রিকোয়েস্ট বাতিল</option>
          <option value="waiting">ভেন্ডর রেসপন্সের জন্য অপেক্ষা</option>
        </select>

        <div className="mt-4 text-xs font-semibold text-light-gray">ব্যাখ্যা</div>
        <textarea
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-primary-color/10 bg-off-white px-4 py-3 text-sm text-medium-gray outline-none focus:border-primary-color/30"
          placeholder="এডমিন সিদ্ধান্তের বিবরণ লিখুন..."
        />

        <div className="mt-4 rounded-xl border border-blue/20 bg-blue/5 p-3">
          <div className="flex items-start gap-2 text-xs text-blue">
            <Info className="mt-0.5 h-4 w-4" />
            সিদ্ধান্ত চূড়ান্ত করার আগে সকল প্রমাণ যাচাই করুন।
          </div>
        </div>
      </div>
    </Card>
  );
}