"use client";

import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";

import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  ArrowLeft,
  Pencil,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Info,
} from "lucide-react";

/* ---------------- demo data ---------------- */

type ChallanStatus = "draft" | "submitted" | "verified";

const challanDemo = {
  challanNo: "CH-20231205-8892",
  status: "verified" as ChallanStatus,

  officeFrom: {
    name: "সরকারি প্রিন্টিং প্রেস",
    address: "ঢাকা-১০০০",
  },
  officeTo: {
    name: "জেলা প্রশাসকের কার্যালয়",
    address: "ঢাকা",
  },

  issueDate: "১২ আগস্ট ২০২৫",
  deliveryDate: "২০ আগস্ট ২০২৫",

  items: [
    {
      sl: 1,
      name: "Printer Paper A4",
      qty: 500,
      unit: "Reams",
      rate: 250,
      amount: 125000,
    },
  ],

  total: 125000,
};

/* ---------------- helpers ---------------- */

function statusBadge(status: ChallanStatus) {
  if (status === "verified") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green/10 px-3 py-1 text-xs font-extrabold text-green">
        <CheckCircle2 size={14} />
        যাচাইকৃত (Verified)
      </span>
    );
  }
  if (status === "submitted") {
    return (
      <span className="inline-flex rounded-full bg-amber/10 px-3 py-1 text-xs font-extrabold text-amber">
        জমা দেওয়া হয়েছে
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full bg-gray/10 px-3 py-1 text-xs font-extrabold text-light-gray">
      ড্রাফট
    </span>
  );
}

function money(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

/* ---------------- page ---------------- */

export default function EditChallanPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  const challan = useMemo(() => challanDemo, []);
  if (!challan) return notFound();

  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* breadcrumb + back */}
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-light-gray">
          <span>হোম</span>/<span>অর্ডার</span>/<span>#{id}</span>/<span className="text-primary">চালান সংশোধন</span>
        </div>

        <Link
          href={`/vendor/active-orders/${id}`}
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-light-gray hover:text-gray"
        >
          <ArrowLeft size={16} />
          ফিরে যান
        </Link>

        <p className="mb-4 text-xl font-extrabold text-gray">
          চালান তথ্য সংশোধন{" "}
          <span className="text-sm font-semibold text-light-gray">
            (Edit Challan Information)
          </span>
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px]">
          {/* LEFT: challan preview */}
          <Card className="rounded-2xl border border-gray/15 bg-white p-4">
            <div className="mx-auto max-w-[700px] border border-gray/15 p-6 text-sm">
              <div className="mb-4 text-center">
                <p className="text-xs font-semibold text-light-gray">
                  গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                </p>
                <p className="text-sm font-extrabold text-gray">
                  অফিস চালান
                </p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-light-gray">প্রেরক</p>
                  <p className="font-extrabold">{challan.officeFrom.name}</p>
                  <p>{challan.officeFrom.address}</p>
                </div>

                <div>
                  <p className="font-semibold text-light-gray">প্রাপক</p>
                  <p className="font-extrabold">{challan.officeTo.name}</p>
                  <p>{challan.officeTo.address}</p>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-2 text-xs">
                <p>চালান নং: {challan.challanNo}</p>
                <p className="text-right">তারিখ: {challan.issueDate}</p>
              </div>

              <table className="w-full border border-gray/15 text-xs">
                <thead className="bg-gray/5">
                  <tr>
                    <th className="border px-2 py-1">ক্রমিক</th>
                    <th className="border px-2 py-1">পণ্যের বিবরণ</th>
                    <th className="border px-2 py-1">পরিমাণ</th>
                    <th className="border px-2 py-1">দর</th>
                    <th className="border px-2 py-1">মূল্য</th>
                  </tr>
                </thead>
                <tbody>
                  {challan.items.map((it) => (
                    <tr key={it.sl}>
                      <td className="border px-2 py-1 text-center">{it.sl}</td>
                      <td className="border px-2 py-1">{it.name}</td>
                      <td className="border px-2 py-1 text-center">
                        {it.qty} {it.unit}
                      </td>
                      <td className="border px-2 py-1 text-right">
                        {money(it.rate)}
                      </td>
                      <td className="border px-2 py-1 text-right">
                        {money(it.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-3 text-right text-xs font-extrabold">
                মোট: {money(challan.total)}
              </div>
            </div>
          </Card>

          {/* RIGHT: status + actions */}
          <div className="space-y-4">
            <Card className="rounded-2xl border border-gray/15 bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-gray">
                  চালান সংশোধন করুন
                </p>

                <div className="grid h-8 w-8 place-items-center rounded-lg bg-secondary">
                  <Pencil size={14} className="text-light-gray" />
                </div>
              </div>

              <div className="mt-3">{statusBadge(challan.status)}</div>

              <div className="mt-4 rounded-xl border border-amber/20 bg-amber/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} className="text-amber mt-[2px]" />
                  <p className="text-xs font-semibold text-amber/90">
                    চালান যাচাই সম্পন্ন হয়েছে। শুধুমাত্র প্রয়োজন হলে সংশোধন করুন।
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <Button className="w-full" variant="primary">
                  পরিবর্তন সংরক্ষণ করুন
                </Button>

                <Button className="w-full" variant="outline">
                  বাতিল
                </Button>
              </div>

              <div className="mt-4 rounded-xl border border-blue/20 bg-blue/5 p-4">
                <div className="flex items-start gap-3">
                  <Info size={16} className="text-blue mt-[2px]" />
                  <p className="text-xs font-semibold text-blue/90">
                    চালান সংশোধন করলে অফিসকে পুনরায় নোটিফিকেশন যাবে।
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl border border-gray/15 bg-white p-5">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-light-gray" />
                <p className="text-xs font-extrabold text-light-gray">
                  নির্দেশনা
                </p>
              </div>
              <p className="mt-2 text-xs font-semibold text-light-gray">
                নিশ্চিত করুন যে চালানের তথ্য অর্ডারের সাথে মিল রয়েছে।
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
