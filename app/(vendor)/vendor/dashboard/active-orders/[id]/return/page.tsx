// app/(vendor)/vendor/active-orders/[id]/return/page.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";

import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Building2,
  Paperclip,
  Package,
  Clock3,
  ChevronDown,
  Eye,
} from "lucide-react";

type ReturnStatus = "pending" | "approved" | "resolved";
type BadgeTone = "red" | "green" | "gray" | "orange" | "blue";

type ReturnBadge = { label: string; tone: BadgeTone };

type ReturnTicket = {
  ticketNo: string; // e.g. 9901
  orderId: string; // e.g. REQ-9901
  officeName: string;

  itemName: string;
  itemMeta: string; // defect text
  qtyText: string; // "Qty: 1"
  userNote: string;

  evidenceCountText: string; // "1 Attachment"
  evidenceImageUrl: string; // demo image url

  statusBadges: ReturnBadge[]; // e.g. [New, Under Verification, Admin Verified]

  actionRequiredTitle: string;
  actionRequiredText: string;

  pickupTimes: string[];
};

type ResolvedReturn = {
  title: string;
  subtitle: string;
  dateText: string;
};

const demoTickets: ReturnTicket[] = [
  {
    ticketNo: "9901",
    orderId: "REQ-9901",
    officeName: "জেলা প্রশাসকের কার্যালয় (DC Office)",

    itemName: "HP LaserJet Toner 85A",
    itemMeta: "Defect: Leaking powder cartridge",
    qtyText: "Qty: 1",
    userNote: "কার্টিজ লিক করছে। দয়া করে পরিবর্তন করে দিন।",

    evidenceCountText: "1 Attachment",
    // ✅ replace with your real asset later
    evidenceImageUrl:
      "https://images.unsplash.com/photo-1605664041952-4a2855d9363e?auto=format&fit=crop&w=900&q=60",

    statusBadges: [
      { label: "নতুন ফেরত অনুরোধ", tone: "gray" },
      { label: "ফেরত অনুমোদিত", tone: "red" },
      { label: "Admin Verified", tone: "green" },
    ],

    actionRequiredTitle: "Action Required",
    actionRequiredText:
      "ভেন্ডর হিসেবে আপনার পণ্যটি যাচাই করে দেখুন এবং ফেরত নেওয়ার ব্যবস্থা করুন।",

    pickupTimes: ["আজ (৫-৭টা)", "কাল (১০-১২টা)", "কাল (২-৪টা)"],
  },
];

const demoResolved: ResolvedReturn[] = [
  {
    title: "Stapler (Wrong Size)",
    subtitle: "সমাধানকৃত (Resolved)",
    dateText: "Product Exchanged on 01 Aug 2025",
  },
];

function toneCls(tone: BadgeTone) {
  if (tone === "red") return "border-red/20 bg-red/10 text-red";
  if (tone === "green") return "border-green/20 bg-green/10 text-green";
  if (tone === "orange") return "border-amber/20 bg-amber/10 text-amber";
  if (tone === "blue") return "border-primary/20 bg-primary/10 text-primary";
  return "border-gray/15 bg-gray/5 text-light-gray";
}

function Badge({ label, tone }: ReturnBadge) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-[6px] text-xs font-extrabold",
        toneCls(tone)
      )}
    >
      {label}
    </span>
  );
}

export default function ReturnItemsManagementPage() {
  const params = useParams<{ id: string }>();
  const id = decodeURIComponent(params?.id || "");

  // demo: just show first ticket always (later connect by id)
  const ticket = useMemo(() => demoTickets[0], []);
  if (!ticket) return notFound();

  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* breadcrumb-ish */}
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-light-gray">
          <span>হোম</span>
          <span>/</span>
          <span>অর্ডার</span>
          <span>/</span>
          <span className="text-primary">#{id || "REQ-2025-08-015"}</span>
          <span>/</span>
          <span className="text-primary">রিটার্ন (Return)</span>
        </div>

        {/* back */}
        <div className="mb-5">
          <Link
            href="/vendor/active-orders"
            className="inline-flex items-center gap-2 text-sm font-semibold text-light-gray hover:text-gray"
          >
            <ArrowLeft size={16} />
            ফিরে যান (Back)
          </Link>
        </div>

        {/* title */}
        <div className="mb-4">
          <p className="text-xl font-extrabold text-gray">
            ফেরত ব্যবস্থাপনা{" "}
            <span className="text-sm font-semibold text-light-gray">
              (Return Items Management)
            </span>
          </p>
        </div>

        {/* warning banner */}
        <div className="mb-4 rounded-2xl border border-amber/20 bg-amber/5 p-4">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber/10">
              <AlertTriangle size={16} className="text-amber" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray">
                ১টি নতুন ফেরত অনুরোধ অনুমোদিত হয়েছে! দয়া করে ব্যবস্থা নিন।
              </p>
              <p className="mt-1 text-xs font-semibold text-amber/90">
                1 new return request approved. Please take action immediately.
              </p>
            </div>
          </div>
        </div>

        {/* main ticket card */}
        <Card className="rounded-2xl border border-gray/15 bg-white p-0 overflow-hidden">
          {/* top row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-red/10">
                <Package size={18} className="text-red" />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-extrabold text-gray">
                  নতুন ফেরত অনুরোধ
                </p>

                {ticket.statusBadges.map((b, idx) => (
                  <Badge key={idx} label={b.label} tone={b.tone} />
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-gray/15 bg-secondary px-3 py-2 text-xs font-semibold text-light-gray">
              <ClipboardCheck size={14} />
              Ticket #{ticket.ticketNo}
            </div>
          </div>

          {/* content grid */}
          <div className="grid grid-cols-1 gap-4 px-6 py-5 lg:grid-cols-[1fr_320px]">
            {/* left */}
            <div className="space-y-4">
              {/* meta row */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-light-gray">
                    ORDER ID
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-gray">
                    #{ticket.orderId}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-light-gray">OFFICE</p>
                  <div className="mt-1 flex items-start gap-2">
                    <Building2 size={14} className="mt-[2px] text-light-gray" />
                    <p className="text-sm font-extrabold text-gray">
                      {ticket.officeName}
                    </p>
                  </div>
                </div>
              </div>

              {/* item details */}
              <div className="rounded-2xl border border-gray/15 bg-white p-4">
                <p className="text-xs font-extrabold text-light-gray">
                  ITEM DETAILS
                </p>

                <div className="mt-3 flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber/10">
                    <Package size={18} className="text-amber" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-gray">
                      {ticket.itemName}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-light-gray">
                      {ticket.itemMeta} • {ticket.qtyText}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-gray/10 bg-secondary p-4">
                  <p className="text-xs font-extrabold text-light-gray">
                    ফেরতের বিবরণ
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray">
                    {ticket.userNote}
                  </p>
                </div>

                {/* action message */}
                <div className="mt-4 rounded-2xl border border-amber/20 bg-amber/5 p-4">
                  <p className="text-xs font-extrabold text-amber">
                    ভেন্ডরের সতর্কতা
                  </p>
                  <p className="mt-2 text-xs font-semibold text-amber/90">
                    ভেন্ডর হিসেবে আপনার পণ্যটি যাচাই করা হয়েছে। দয়া করে ফেরত
                    নেওয়ার ব্যবস্থা করুন।
                  </p>
                </div>
              </div>

              {/* action required */}
              <div className="rounded-2xl border border-gray/15 bg-white p-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-amber/10">
                    <AlertTriangle size={16} className="text-amber" />
                  </div>
                  <p className="text-sm font-extrabold text-gray">
                    {ticket.actionRequiredTitle}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px] md:items-end">
                  <div>
                    <p className="text-xs font-semibold text-light-gray">
                      Schedule Pickup Time
                    </p>

                    <div className="mt-2 relative">
                      <select className="h-11 w-full appearance-none rounded-xl border border-gray/15 bg-white px-4 pr-10 text-sm font-semibold text-gray outline-none focus:border-primary">
                        <option value="">সময় নির্বাচন করুন</option>
                        {ticket.pickupTimes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-light-gray"
                      />
                    </div>

                    <label className="mt-3 flex items-center gap-2 text-xs font-semibold text-light-gray">
                      <input type="checkbox" className="h-4 w-4" />
                      আমি পণ্যটি পরিবর্তন করে দেব{" "}
                      <span className="text-[11px]">(I will exchange the product)</span>
                    </label>
                  </div>

                  <Button className="h-11 w-full bg-amber text-white hover:bg-amber/90">
                    পিকআপের ব্যবস্থা করুন
                  </Button>
                </div>
              </div>
            </div>

            {/* right evidence */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold text-light-gray">প্রমাণ (EVIDENCE)</p>

                <span className="inline-flex items-center gap-2 rounded-full border border-gray/15 bg-secondary px-3 py-2 text-xs font-semibold text-light-gray">
                  <Paperclip size={14} />
                  {ticket.evidenceCountText}
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray/15 bg-white">
                {/* image */}
                {/* using normal img for demo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ticket.evidenceImageUrl}
                  alt="evidence"
                  className="h-[210px] w-full object-cover"
                />
                <div className="p-3">
                  <p className="text-xs font-semibold text-light-gray">
                    জমাকৃত প্রমাণপত্র
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* resolved list (bottom) */}
        <div className="mt-4">
          {demoResolved.map((r) => (
            <Card
              key={r.title}
              className="rounded-2xl border border-gray/15 bg-white p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gray/5">
                    <CheckCircle2 size={18} className="text-light-gray" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-gray">{r.title}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-[6px] text-xs font-extrabold text-primary">
                        {r.subtitle}
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-light-gray">
                        <Clock3 size={14} />
                        {r.dateText}
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="h-10 px-4">
                  <Eye size={16} />
                  <span className="ml-2">বিস্তারিত</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
