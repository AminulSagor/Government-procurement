"use client";

import Card from "@/components/cards/card";
import { Building2, Store, Eye, TrendingUp, ReceiptText } from "lucide-react";
import type { LeftTabKey, RequisitionItem, SettlementSnapshot } from "../_types/refund-queue-details.type";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <div className="text-medium-gray">{label}</div>
      <div className="text-black font-semibold">{value}</div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  highlighted,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        highlighted ? "border-primary-color/25 bg-secondary-color/10" : "border-primary-color/15 bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-secondary-color/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-xs text-medium-gray">{title}</div>
      </div>
      <div className="mt-2 text-xl font-bold text-black">{value}</div>
    </div>
  );
}

export default function SettlementDetailsPanel({
  activeLeftTab,
  activeItem,
  settlement,
}: {
  activeLeftTab: LeftTabKey;
  activeItem: RequisitionItem;
  settlement: SettlementSnapshot;
}) {
  // NOTE: activeLeftTab exists for future differences (your UI changes by left tab).
  // Here we render the “Settlement Details” layout shown in screenshots.

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary-color" />
            <div className="font-semibold text-black">দপ্তরের তথ্য</div>
          </div>
          <div className="space-y-3">
            <InfoRow label="নাম:" value={settlement.officeNameBn} />
            <InfoRow label="কোড:" value={settlement.officeCodeBn} />
            <InfoRow label="বাজেট কোড:" value={settlement.budgetCodeBn} />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Store className="h-5 w-5 text-primary-color" />
            <div className="font-semibold text-black">ভেন্ডরের তথ্য</div>
          </div>
          <div className="space-y-3">
            <InfoRow label="নাম:" value={settlement.vendorNameBn} />
            <InfoRow label="টিন (TIN):" value={settlement.vendorTinBn} />
            <InfoRow label="ব্যাংক অ্যাকাউন্ট:" value={settlement.vendorBankMaskedBn} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <StatCard icon={<ReceiptText className="h-5 w-5 text-primary-color" />} title="মোট অফিস বরাদ্দ" value={formatBDT(settlement.totalOfficeAmount)} />
        <StatCard icon={<ReceiptText className="h-5 w-5 text-primary-color" />} title="মোট এডমিন ব্যয়" value={formatBDT(settlement.totalAdminCost)} />
        <StatCard icon={<ReceiptText className="h-5 w-5 text-primary-color" />} title="সমষ্টিগত রিফান্ড" value={formatBDT(settlement.totalRefund)} />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-primary-color" />}
          title="অডিটেড প্রফিট"
          value={formatBDT(settlement.auditedProfit)}
          highlighted
        />
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-primary-color/10 font-semibold text-black">
          পেমেন্ট হিস্টোরি ও ট্রানজ্যাকশন লগ
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-off-white text-medium-gray">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">তারিখ</th>
                <th className="text-left px-5 py-3 font-semibold">রেফারেল নং</th>
                <th className="text-right px-5 py-3 font-semibold">পরিমাণ</th>
                <th className="text-right px-5 py-3 font-semibold">রসিদ</th>
              </tr>
            </thead>
            <tbody>
              {settlement.payments.map((p) => (
                <tr key={p.refNo} className="border-t border-primary-color/10">
                  <td className="px-5 py-3 text-black">{p.dateBn}</td>
                  <td className="px-5 py-3 text-black font-semibold">{p.refNo}</td>
                  <td className="px-5 py-3 text-right text-black font-semibold">{formatBDT(p.amount)}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-off-white"
                      >
                        <Eye className="h-4 w-4 text-medium-gray" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary-color" />
          <div className="font-semibold text-black">আর্থিক লাভ-ক্ষতি বিশ্লেষণ</div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="text-medium-gray">
            মোট অফিস বরাদ্দ <span className="ml-2 font-semibold text-black">{formatBDT(settlement.totalOfficeAmount)}</span>
          </div>
          <div className="text-medium-gray">
            মোট এডমিন ব্যয় <span className="ml-2 font-semibold text-black">{formatBDT(settlement.totalAdminCost)}</span>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-primary-color/15 bg-secondary-color/10 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary-color text-white flex items-center justify-center">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-primary-color font-semibold">অডিটেড প্রফিট</div>
              <div className="text-2xl font-bold text-black">{formatBDT(settlement.auditedProfit)}</div>
            </div>
          </div>

          <button
            type="button"
            className="rounded-full border border-primary-color/20 bg-white px-4 py-2 text-sm text-primary-color font-semibold hover:brightness-105"
          >
            সকল প্রফিট মার্জিন
          </button>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <ReceiptText className="h-5 w-5 text-primary-color" />
          <div className="font-semibold text-black">অডিটেড ট্যাক্স ও অডিট রেকর্ডস</div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-primary-color/15 bg-white p-4">
            <div className="text-xs text-medium-gray font-semibold">VAT (৫%)</div>
            <div className="mt-2 text-xl font-bold text-black">{formatBDT(settlement.vat)}</div>
            <div className="mt-2 inline-flex rounded-md bg-blue/10 px-2 py-1 text-xs text-blue font-semibold">
              অডিটেড
            </div>
          </div>

          <div className="rounded-lg border border-primary-color/15 bg-white p-4">
            <div className="text-xs text-medium-gray font-semibold">IT (১%)</div>
            <div className="mt-2 text-xl font-bold text-black">{formatBDT(settlement.it)}</div>
            <div className="mt-2 inline-flex rounded-md bg-blue/10 px-2 py-1 text-xs text-blue font-semibold">
              অডিটেড
            </div>
          </div>

          <div className="rounded-lg border border-primary-color/15 bg-white p-4">
            <div className="text-xs text-medium-gray font-semibold">ADD. VAT (০.৫%)</div>
            <div className="mt-2 text-xl font-bold text-black">{formatBDT(settlement.addVat)}</div>
            <div className="mt-2 inline-flex rounded-md bg-blue/10 px-2 py-1 text-xs text-blue font-semibold">
              অডিটেড
            </div>
          </div>
        </div>
      </Card>

      {/* active item reference (optional, for debugging) */}
      <div className="text-xs text-light-gray">
        Active Item: <span className="text-black font-semibold">{activeItem.titleBn}</span>
      </div>
    </div>
  );
}