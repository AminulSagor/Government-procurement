"use client";

import { useState } from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import type { RequisitionItem } from "../_types/order-management.type";

type SetTab = "details" | "records";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function FinalSettlementPanel({ item }: { item: RequisitionItem }) {
  const [tab, setTab] = useState<SetTab>("details");
  const s = item.settlement;

  return (
    <Card className="p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-black font-bold text-lg">ফাইনাল সেটেলমেন্ট ও অ্যাকাউন্ট ক্লোজিং</div>
          <div className="text-light-gray text-sm">Procurement cycle final stage</div>
        </div>
        {s.status === "PENDING_DETAIL" && (
          <span className="px-3 py-1 rounded-full text-xs border border-orange/20 bg-orange/10 text-orange">
            PENDING DETAIL
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setTab("details")}
          className={[
            "px-3 py-2 rounded-md border text-sm",
            tab === "details" ? "border-primary-color bg-secondary-color/15 text-primary-color font-semibold" : "border-primary-color/10 bg-white text-light-gray",
          ].join(" ")}
        >
          সেটেলমেন্ট বিবরণী
        </button>
        <button
          onClick={() => setTab("records")}
          className={[
            "px-3 py-2 rounded-md border text-sm",
            tab === "records" ? "border-primary-color bg-secondary-color/15 text-primary-color font-semibold" : "border-primary-color/10 bg-white text-light-gray",
          ].join(" ")}
        >
          রেকর্ড ও সারাংশ
        </button>
      </div>

      {tab === "details" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-4">
              <div className="text-light-gray text-xs">মোট (TOTAL)</div>
              <div className="text-black text-xl font-bold">{formatBDT(s.total.amount)}</div>
            </Card>
            <Card className="p-4">
              <div className="text-light-gray text-xs">পরিশোধিত (CLEARED)</div>
              <div className="text-green text-xl font-bold">{formatBDT(s.cleared.amount)}</div>
            </Card>
            <Card className="p-4">
              <div className="text-light-gray text-xs">বকেয়া পরিমাণ</div>
              <div className="text-orange text-xl font-bold">{formatBDT(s.pending.amount)}</div>
            </Card>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-white overflow-hidden">
            <div className="px-4 py-3 border-b border-primary-color/10 text-black font-semibold">
              বকেয়া কাটছাঁটের ব্রেকডাউন
            </div>
            <table className="w-full text-sm">
              <thead className="bg-off-white text-light-gray">
                <tr>
                  <th className="text-left py-2 px-4">খাত / বিবরণ</th>
                  <th className="text-right py-2 px-4">টাকার পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                {s.deductions.map((d) => (
                  <tr key={d.label} className="border-t border-primary-color/10">
                    <td className="py-3 px-4 text-black">
                      <div className="font-semibold">{d.label}</div>
                      <div className="text-light-gray text-xs">{d.percentText}</div>
                    </td>
                    <td className="py-3 px-4 text-right text-black font-semibold">{formatBDT(d.amount.amount)}</td>
                  </tr>
                ))}
                <tr className="border-t border-primary-color/10 bg-off-white">
                  <td className="py-3 px-4 text-black font-bold">সর্বমোট বকেয়া (Grand Total Pending)</td>
                  <td className="py-3 px-4 text-right text-primary-color font-bold">{formatBDT(s.pending.amount)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-blue/10 p-4">
            <div className="text-black text-sm">
              এই পেইজের পেমেন্ট সম্পূর্ণ না হলে ফাইনাল অ্যাকাউন্ট ক্লোজ করা যাবে না।
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <PrimaryButton className="px-4 py-3 text-sm w-full">বকেয়া পরিশোধের জন্য অফিসকে অবহিত করুন</PrimaryButton>
            <SecondaryButton className="px-4 py-3 text-sm w-full">পেমেন্ট তথ্য আপলোড করুন</SecondaryButton>
          </div>
        </>
      ) : (
        <Card className="p-6">
          {s.ledgerRows.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-black font-semibold">কোন রেকর্ড ইতিহাস নেই</div>
              <div className="text-light-gray text-sm mt-1">স্ট্যাটাস: সেটেলমেন্ট ক্লোজ</div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-black font-semibold">পেমেন্ট ইতিহাস ও ট্রান্সাকশন লগ</div>
              <div className="rounded-lg border border-primary-color/10 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-off-white text-light-gray">
                    <tr>
                      <th className="text-left py-2 px-4">তারিখ</th>
                      <th className="text-left py-2 px-4">রেফারেন্স</th>
                      <th className="text-right py-2 px-4">পরিমাণ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.ledgerRows.map((r) => (
                      <tr key={r.refNo} className="border-t border-primary-color/10">
                        <td className="py-3 px-4 text-light-gray">{r.date}</td>
                        <td className="py-3 px-4 text-black font-semibold">{r.refNo}</td>
                        <td className="py-3 px-4 text-right text-black font-semibold">{formatBDT(r.amount.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end gap-3">
                <SecondaryButton className="px-4 py-2 text-sm">প্রিন্ট</SecondaryButton>
                <PrimaryButton className="px-4 py-2 text-sm">সমন্বিত অডিট রিপোর্ট ডাউনলোড</PrimaryButton>
              </div>
            </div>
          )}
        </Card>
      )}
    </Card>
  );
}