"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import type { RequisitionItem } from "../_types/order-management.type";

type ShipmentTab = "agent_assign" | "shipment_info" | "received";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function ShipmentPanel({ item }: { item: RequisitionItem }) {
  const [tab, setTab] = useState<ShipmentTab>(() => {
    if (item.shipment.status === "AGENT_REQUIRED") return "agent_assign";
    if (item.shipment.status === "DELIVERED") return "received";
    return "shipment_info";
  });

  const badge = useMemo(() => {
    const st = item.shipment.status;
    if (st === "DELIVERED") return "DELIVERED";
    if (st === "IN_TRANSIT") return "IN TRANSIT";
    if (st === "AGENT_ASSIGNED") return "AGENT ASSIGNED";
    return "AGENT REQUIRED";
  }, [item.shipment.status]);

  return (
    <Card className="p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-black font-bold text-lg">শিপমেন্ট ও ডেলিভারি ট্র্যাকিং</div>
          <div className="text-light-gray text-sm">পণ্য শিপমেন্ট ও প্রাপ্তি নিশ্চিতকরণ</div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs border border-primary-color/20 text-primary-color bg-secondary-color/15">
          {badge}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { k: "agent_assign", t: "১. এজেন্ট নিয়োগ" },
          { k: "shipment_info", t: "২. শিপমেন্ট তথ্য" },
          { k: "received", t: "৩. অর্ডার গ্রহণ" },
        ].map((x) => (
          <button
            key={x.k}
            onClick={() => setTab(x.k as ShipmentTab)}
            className={[
              "px-3 py-2 rounded-md border text-sm",
              tab === x.k ? "border-primary-color bg-secondary-color/15 text-primary-color font-semibold" : "border-primary-color/10 bg-white text-light-gray",
            ].join(" ")}
          >
            {x.t}
          </button>
        ))}
      </div>

      {tab === "agent_assign" && (
        <Card className="p-5 space-y-4">
          <div className="text-black font-semibold">ডেলিভারি এজেন্ট নিয়োগ</div>

          <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm">
            <input className="w-full outline-none text-black placeholder:text-light-gray" placeholder="নাম বা মোবাইল নম্বর দিয়ে সার্চ করুন..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["বিভাগ", "জেলা", "উপজেলা"].map((t) => (
              <div key={t} className="px-3 py-2 rounded-md border border-primary-color/20 bg-white text-sm text-black flex justify-between">
                <span>{t}</span>
                <span className="text-light-gray">▾</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-off-white p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white border border-primary-color/15" />
              <div>
                <div className="text-black font-semibold">মোঃ আব্দুল করিম</div>
                <div className="text-light-gray text-xs">০১৭০০-১১১২৩৩ (১৪২ ডেলিভারি)</div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs bg-green/10 text-green border border-green/20">অ্যাক্টিভ</span>
          </div>

          <div className="flex justify-end">
            <PrimaryButton className="px-4 py-2 text-sm">এজেন্ট নিশ্চিত করুন ও নোটিফাই করুন</PrimaryButton>
          </div>
        </Card>
      )}

      {tab === "shipment_info" && (
        <Card className="p-5 space-y-4">
          <div className="text-black font-semibold">ভেন্ডর কর্তৃক প্রেরিত শিপমেন্ট তথ্য</div>

          <div className="rounded-lg border border-primary-color/10 bg-off-white p-4 flex items-center justify-between">
            <div className="text-black font-semibold">{item.shipment.agent?.name ?? "এজেন্ট নেই"}</div>
            <span className="px-3 py-1 rounded-full text-xs bg-green/10 text-green border border-green/20">নিয়ুক্ত</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="text-light-gray text-xs">কুরিয়ারের নাম</div>
              <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
                {item.shipment.courierName ?? "সুন্দরবন কুরিয়ার সার্ভিস"}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-light-gray text-xs">ট্র্যাকিং আইডি</div>
              <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
                {item.shipment.trackingId ?? "TRK-XXXX"}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <div className="text-light-gray text-xs">সম্ভাব্য সরবরাহের তারিখ</div>
              <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
                {item.shipment.estDelivery ?? "২৭ অক্টোবর ২০২৪"}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <div className="text-light-gray text-xs">শিপমেন্ট নোট</div>
              <div className="rounded-md border border-primary-color/20 bg-white px-3 py-3 text-sm text-black">
                {item.shipment.notes ?? "পণ্যগুলো সুরক্ষিতভাবে প্যাকেজিং করা হয়েছে।"}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-white p-4 flex items-center justify-between">
            <div>
              <div className="text-black font-semibold">{item.shipment.evidence?.name ?? "ভেন্ডর চালান (Mushak-6.3)"}</div>
              <div className="text-light-gray text-xs">{item.shipment.evidence?.sizeText ?? "1.2 MB"} • {item.shipment.evidence?.uploadedOn ?? "24 Oct, 2024"}</div>
            </div>
            <SecondaryButton className="px-3 py-2 text-sm">পিডিএফ দেখুন</SecondaryButton>
          </div>

          <div className="flex justify-end">
            <PrimaryButton className="px-4 py-2 text-sm">অর্ডার প্রাপ্তি নিশ্চিতকরণের জন্য অফিসকে নোটিফাই করুন</PrimaryButton>
          </div>
        </Card>
      )}

      {tab === "received" && (
        <Card className="p-5 space-y-4">
          <div className="text-black font-semibold">অর্ডার প্রাপ্তি ও পণ্য গ্রহণের তথ্য</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-4">
              <div className="text-light-gray text-xs">ডেলিভারি এজেন্ট</div>
              <div className="text-black font-semibold">{item.shipment.agent?.name ?? "মোঃ আব্দুল করিম"}</div>
            </Card>
            <Card className="p-4">
              <div className="text-light-gray text-xs">ডেলিভারির তারিখ</div>
              <div className="text-black font-semibold">{item.shipment.estDelivery ?? "২৯ অক্টোবর ২০২৪"}</div>
            </Card>
            <Card className="p-4">
              <div className="text-light-gray text-xs">বর্তমান স্ট্যাটাস</div>
              <div className="text-green font-semibold">DELIVERED</div>
            </Card>
          </div>

          <div className="space-y-2">
            <div className="text-light-gray text-xs">অফিস ফিডব্যাক / মন্তব্য</div>
            <div className="rounded-md border border-primary-color/20 bg-white px-3 py-3 text-sm text-black">
              {item.shipment.officeReceivedNote ?? "পণ্যগুলো অক্ষত অবস্থায় গ্রহণ করা হয়েছে।"}
            </div>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-white p-4 flex items-center justify-between">
            <div className="text-black font-semibold">অফিস কর্তৃক স্বাক্ষরিত চালান (Mushak-6.3)</div>
            <SecondaryButton className="px-3 py-2 text-sm">স্বাক্ষরিত ফাইল দেখুন</SecondaryButton>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-primary-color/10 bg-off-white p-3">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-primary-color" />
            <span className="text-sm text-black">আমি নিশ্চিত করছি যে অফিস পণ্যগুলো গ্রহণ করেছে এবং সকল বিবরণ সঠিক আছে।</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-light-gray text-sm">রিপোর্ট ডাউনলোড</span>
            <div className="flex gap-3">
              <SecondaryButton className="px-4 py-2 text-sm">রিসিপ্ট ডাউনলোড করুন</SecondaryButton>
              <PrimaryButton className="px-4 py-2 text-sm">ফাইনাল সেটেলমেন্টে যান</PrimaryButton>
            </div>
          </div>
        </Card>
      )}

      <div className="rounded-lg border border-primary-color/10 bg-off-white p-4">
        <div className="flex items-center justify-between">
          <div className="text-light-gray text-sm">বকেয়া</div>
          <div className="text-orange font-bold">{formatBDT(item.settlement.pending.amount)}</div>
        </div>
      </div>
    </Card>
  );
}