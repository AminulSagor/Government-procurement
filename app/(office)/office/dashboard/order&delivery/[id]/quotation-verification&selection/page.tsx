"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import {
  Home,
  ChevronLeft,
  FileText,
  Download,
  BadgeCheck,
  Check,
  AlertTriangle,
  Armchair,
  ChevronDown,
  CircleArrowLeft,
} from "lucide-react";

import Card from "@/components/cards/card";
import {
  orders,
  requirementSummaries,
  vendorQuotes,
  type OrderListItem,
  type RequirementSummary,
  type VendorQuote,
} from "@/app/(office)/office/dummy-data/data";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatBDT(amount: number) {
  const bn = new Intl.NumberFormat("bn-BD").format(amount);
  return `৳${bn}`;
}

function CheckDot({ ok }: { ok: boolean }) {
  return (
    <span
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full",
        ok ? "bg-green/10" : "bg-red/10",
      )}
    >
      <Check className={cn("h-4 w-4", ok ? "text-green" : "text-red")} />
    </span>
  );
}

function TinyStat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold text-light-gray">{label}</p>
      <p className="mt-1 text-lg font-extrabold text-black">{value}</p>
    </div>
  );
}

export default function QuotationVerificationAndSelectionPage() {
  // App Router useParams returns Record<string, string | string[]>
  const params = useParams() as { id?: string };
  const orderId = params?.id ?? "";

  const order = React.useMemo<OrderListItem | null>(() => {
    return orders.find((o) => o.id === orderId) ?? null;
  }, [orderId]);

  const req = React.useMemo<RequirementSummary | null>(() => {
    return requirementSummaries.find((r) => r.orderId === orderId) ?? null;
  }, [orderId]);

  const quotes = React.useMemo<VendorQuote[]>(() => {
    return vendorQuotes.filter((q) => q.orderId === orderId);
  }, [orderId]);

  const sortedQuotes = React.useMemo(() => {
    return [...quotes].sort((a, b) => a.totalPrice - b.totalPrice);
  }, [quotes]);

  const lowest = sortedQuotes[0] ?? null;

  const [selectedQuoteId, setSelectedQuoteId] = React.useState<string>(
    lowest?.id ?? "",
  );

  React.useEffect(() => {
    setSelectedQuoteId(lowest?.id ?? "");
  }, [lowest?.id, orderId]);

  if (!orderId) {
    return (
      <Card className="rounded-md bg-white p-6 shadow-sm">
        <p className="text-sm text-light-gray">
          Order ID পাওয়া যায়নি (route এ id পাঠাও)।
        </p>
      </Card>
    );
  }

  if (!order || !req) {
    return (
      <Card className="rounded-md bg-white p-6 shadow-sm">
        <p className="text-sm text-light-gray">ডেটা পাওয়া যায়নি।</p>
      </Card>
    );
  }

  const budgetTotal = req.totalBudget;

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-medium-gray">
        <Home className="h-4 w-4 text-primary-color" />
        <span>হোম</span>
        <span>/</span>
        <span>অর্ডার</span>
        <span>/</span>
        <span className="text-primary-color">অর্ডারের বিস্তারিত</span>
      </div>

      {/* Title row */}
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            aria-label="Back"
          >
            <CircleArrowLeft />
          </button>

          <div>
            <h1 className="text-2xl font-extrabold text-black">
              কোটেশন ম্যাচ ও নির্বাচন
            </h1>
            <p className="mt-1 text-sm text-light-gray">
              দাখিলকৃত কোটেশনসমূহ ম্যাচ করুন এবং{" "}
              <span className="font-extrabold text-primary-color">
                {req.reqRef}
              </span>{" "}
              এর জন্য আপনার পছন্দের দরদাতা নির্বাচন করুন
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-extrabold text-black shadow-sm hover:opacity-90 focus-visible:ring-1 focus-visible:ring-primary-color/20 border"
            onClick={() => console.log("Tender Docs")}
          >
            <FileText className="h-4 w-4 text-light-gray" />
            কোটেশন নথি দেখুন
          </button>

          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-extrabold text-black shadow-sm hover:opacity-90 focus-visible:ring-1 focus-visible:ring-primary-color/20 border"
            onClick={() => console.log("Export")}
          >
            <Download className="h-4 w-4 text-light-gray" />
            এক্সপোর্ট করুন
          </button>
        </div>
      </div>

      {/* Requirement summary */}
      <Card className="mt-5 rounded-md bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          {/* left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-off-white ">
                <Armchair className="h-7 w-7 text-light-gray" />
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-wider text-light-gray">
                  REQUIREMENT
                </p>
                <p className="mt-1 text-xl font-extrabold text-black">
                  {req.title}
                </p>
                <p className="mt-1 text-sm text-light-gray">
                  {req.description}
                </p>
              </div>
            </div>
          </div>

          {/* right stats */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 divide-x divide-off-white rounded-md bg-white">
              <TinyStat
                label="পরিমাণ"
                value={`${new Intl.NumberFormat("bn-BD").format(req.qty)} Pcs`}
              />
              <TinyStat label="ইউনিট বাজেট" value={formatBDT(req.unitBudget)} />
              <TinyStat label="মোট বাজেট" value={formatBDT(req.totalBudget)} />
            </div>
          </div>
        </div>
      </Card>

      {/* Quotes list */}
      <div className="mt-5 space-y-3">
        {sortedQuotes.map((q) => {
          const isLowest = lowest?.id === q.id;
          const isSelected = selectedQuoteId === q.id;
          const isOverBudget = q.totalPrice > budgetTotal;

          const savingVsBudget = Math.max(0, budgetTotal - q.totalPrice);

          const BudgetPill = () => {
            if (isOverBudget) {
              return (
                <span className="inline-flex items-center gap-2 rounded-md bg-red/10 px-4 py-2 text-xs font-extrabold text-red whitespace-nowrap">
                  <AlertTriangle className="h-4 w-4" />
                  বাজেট অতিক্রম করছে
                </span>
              );
            }

            if (isLowest && savingVsBudget > 0) {
              return (
                <span className="inline-flex items-center gap-2 rounded-md bg-green/10 px-4 py-2 text-xs font-extrabold text-green whitespace-nowrap">
                  <Check className="h-4 w-4" />
                  সাশ্রয় {formatBDT(savingVsBudget)}
                </span>
              );
            }

            return (
              <span className="inline-flex items-center rounded-md bg-off-white px-4 py-2 text-xs font-extrabold text-light-gray whitespace-nowrap">
                বাজেটের মধ্যে
              </span>
            );
          };

          return (
            <Card
              key={q.id}
              className={cn(
                "relative overflow-hidden rounded-md bg-white shadow-sm border border-off-white",
              )}
            >
              {/* left accent line (lowest like screenshot) */}
              <div
                className={cn(
                  "absolute left-0 top-0 h-full w-1",
                  isLowest ? "bg-green" : "bg-transparent",
                )}
              />

              {/* lowest badge */}
              {isLowest && (
                <div className="absolute left-0 top-0 z-10">
                  <span className=" bg-green px-3 py-1 text-xs font-extrabold text-white">
                    সর্বনিম্ন দরদাতা
                  </span>
                </div>
              )}

              {/* row grid */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 py-2">
                {/* Vendor */}
                <div
                  className={cn(
                    " p-6 border-b lg:border-b-0 lg:border-r border-off-white",
                    isLowest ? "bg-green/5" : "bg-white",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border",
                        isLowest
                          ? "bg-green/10 border-green/20 text-green"
                          : "bg-off-white border-off-white text-light-gray",
                      )}
                    >
                      <span className="text-base font-extrabold">
                        {q.vendorInitial}
                      </span>
                    </div>

                    <div>
                      <p className="text-lg font-extrabold text-black">
                        {q.vendorName}
                      </p>

                      {q.isVerified && (
                        <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-green">
                          <BadgeCheck className="h-4 w-4" />
                          ভেরিফাইড ভেন্ডর
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Unit + Total price */}
                <div className="px-6">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs font-semibold text-light-gray">
                        ইউনিট দর
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-black">
                        {formatBDT(q.unitPrice)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-light-gray">
                        মোট দর
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-black">
                        {formatBDT(q.totalPrice)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Budget pill + checks */}
                <div className="px-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <BudgetPill />

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <CheckDot ok={q.specsOk} />
                        <span className="text-sm font-semibold text-light-gray">
                          Specs OK
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CheckDot ok={q.taxValid} />
                        <span className="text-sm font-semibold text-light-gray">
                          Tax Valid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="px-6 flex items-center justify-end">
                  <button
                    type="button"
                    disabled={isOverBudget}
                    onClick={() => setSelectedQuoteId(q.id)}
                    className={cn(
                      "h-12 w-full lg:w-[210px] rounded-md px-6 text-sm font-extrabold transition flex items-center justify-center gap-2 whitespace-nowrap",
                      isOverBudget
                        ? "cursor-not-allowed bg-off-white text-medium-gray"
                        : isSelected
                          ? "bg-primary-color text-white hover:opacity-90"
                          : "bg-white text-primary-color border border-primary-color hover:opacity-90",
                    )}
                  >
                    অফার গ্রহণ করুন
                    {isSelected ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
