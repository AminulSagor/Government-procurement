"use client";

import React from "react";
import {
  Home,
  ChevronLeft,
  Save,
  Search,
  PlusCircle,
  FileText,
  Monitor,
  Sofa,
  Printer,
  Sparkles,
  Car,
  Plug,
  BriefcaseMedical,
  Trash2,
  Minus,
  Plus,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

import Card from "@/components/cards/card";
import {
  procurementHeads,
  type ProcurementHead,
  procurementProducts,
  requisitionDrafts,
  type ProcurementProduct,
  type RequisitionDraft,
} from "@/app/(office)/office/dummy-data/data";
import { useParams } from "next/navigation";
import AddNewItemDialog from "@/app/(office)/office/dashboard/procurement/[id]/add-new-item-dialog";

const iconMap: Record<ProcurementHead["iconKey"], React.ReactNode> = {
  stationery: <FileText className="h-5 w-5 text-primary-color" />,
  computer: <Monitor className="h-5 w-5 text-primary-color" />,
  furniture: <Sofa className="h-5 w-5 text-primary-color" />,
  printing: <Printer className="h-5 w-5 text-primary-color" />,
  cleaning: <Sparkles className="h-5 w-5 text-primary-color" />,
  vehicle: <Car className="h-5 w-5 text-primary-color" />,
  electrical: <Plug className="h-5 w-5 text-primary-color" />,
  medical: <BriefcaseMedical className="h-5 w-5 text-primary-color" />,
};

function formatBDT(amount: number) {
  const bn = new Intl.NumberFormat("bn-BD").format(amount);
  return `৳ ${bn}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ProcurementDetailsPage() {
  const params = useParams<{ id: string }>();
  const headId = params?.id ?? "2";
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const head = React.useMemo(() => {
    return procurementHeads.find((h) => h.id === headId) ?? procurementHeads[0];
  }, [headId]);

  const draft = React.useMemo<RequisitionDraft>(() => {
    return (
      requisitionDrafts.find((d) => d.headId === headId) ?? requisitionDrafts[0]
    );
  }, [headId]);

  const headProducts = React.useMemo(() => {
    return procurementProducts.filter((p) => p.headId === headId);
  }, [headId]);

  // Local editable state (later you’ll swap to API)
  const [method, setMethod] = React.useState<RequisitionDraft["method"]>(
    draft.method,
  );

  const [items, setItems] = React.useState(() => draft.items);

  React.useEffect(() => {
    // when route changes
    setMethod(draft.method);
    setItems(draft.items);
  }, [draft]);

  const [searchText, setSearchText] = React.useState("");

  const selected = React.useMemo(() => {
    return items
      .map((it) => {
        const product = headProducts.find((p) => p.id === it.productId);
        if (!product) return null;
        return { ...it, product, lineTotal: it.qty * product.unitPrice };
      })
      .filter(Boolean) as Array<{
      productId: string;
      qty: number;
      product: ProcurementProduct;
      lineTotal: number;
    }>;
  }, [items, headProducts]);

  const subTotal = React.useMemo(() => {
    return selected.reduce((sum, x) => sum + x.lineTotal, 0);
  }, [selected]);

  const vat = React.useMemo(() => {
    return Math.round(subTotal * draft.vatRate);
  }, [subTotal, draft.vatRate]);

  const totalEstimate = subTotal + vat;

  const isBudgetInsufficient = totalEstimate > draft.remainingBudget;

  const usedBudget = clamp(
    draft.budgetTotal - draft.remainingBudget,
    0,
    draft.budgetTotal,
  );
  const usedPct =
    draft.budgetTotal === 0
      ? 0
      : Math.round((usedBudget / draft.budgetTotal) * 100);

  const addItem = () => {
    const q = searchText.trim().toLowerCase();
    if (!q) return;

    const found =
      headProducts.find((p) => p.name.toLowerCase() === q) ||
      headProducts.find((p) => p.name.toLowerCase().includes(q)) ||
      headProducts.find((p) => p.code.includes(q));

    if (!found) return;

    setItems((prev) => {
      const existing = prev.find((x) => x.productId === found.id);
      if (existing) {
        return prev.map((x) =>
          x.productId === found.id ? { ...x, qty: x.qty + 1 } : x,
        );
      }
      return [...prev, { productId: found.id, qty: 1 }];
    });

    setSearchText("");
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((x) => x.productId !== productId));
  };

  const incQty = (productId: string) => {
    setItems((prev) =>
      prev.map((x) =>
        x.productId === productId ? { ...x, qty: x.qty + 1 } : x,
      ),
    );
  };

  const decQty = (productId: string) => {
    setItems((prev) =>
      prev
        .map((x) =>
          x.productId === productId ? { ...x, qty: Math.max(1, x.qty - 1) } : x,
        )
        .filter(Boolean),
    );
  };

  return (
    <div>
      <div className=" w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-light-gray">
          <Home className="h-4 w-4 text-primary-color" />
          <span>হোম</span>
          <span>/</span>
          <span>ক্রয়</span>
          <span>/</span>
          <span>খাত নির্বাচন</span>
          <span>/</span>
          <span className="text-black">{head.titleBn}</span>
        </div>

        {/* Title row */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
              onClick={() => window.history.back()}
              aria-label="Back"
            >
              <ChevronLeft className="h-5 w-5 text-primary-color" />
            </button>

            <div>
              <h1 className="text-2xl font-bold text-black">
                নতুন ক্রয়াদেশ তৈরি করুন
              </h1>
              <p className="mt-1 text-sm text-light-gray">
                বাজেট কোড ({head.code}) অনুযায়ী প্রয়োজনীয় পণ্য যুক্ত করুন এবং
                ক্রয়ের জন্য চাহিদাপত্র প্রস্তুত করুন।
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-md bg-primary-color px-4 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            onClick={() => console.log("Draft Saved")}
          >
            <Save className="h-4 w-4" />
            ড্রাফট সংরক্ষণ করুন
          </button>
        </div>

        {/* Head summary card */}
        <Card>
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
                {iconMap[head.iconKey]}
              </div>

              <div>
                <h2 className="text-base font-bold text-black">
                  {head.titleBn}
                </h2>
                <p className="mt-1 text-sm text-light-gray">
                  বাজেট খাতের কোড:{" "}
                  <span className="text-black">{head.code}</span>
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-primary-color">অবশিষ্ট বাজেট</p>
              <p className="mt-1 text-lg font-extrabold text-black">
                {formatBDT(draft.remainingBudget)} BDT
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-2 w-full rounded-md bg-primary-color/10">
              <div
                className="h-2 rounded-md bg-primary-color"
                style={{ width: `${clamp(usedPct, 0, 100)}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Main grid */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            {/* Search + Add */}
            <Card className="rounded-md bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-primary-color" />
                <h3 className="text-base font-bold text-black">
                  পণ্য অনুসন্ধান ও সংযোজন
                </h3>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2 rounded-md bg-off-white px-3 py-3">
                  <FileText className="h-4 w-4 text-primary-color" />
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="পণ্যের নাম দিয়ে খুঁজুন (e.g. Paper, Printer)..."
                    className="w-full bg-transparent text-sm text-black placeholder:text-light-gray outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={addItem}
                  className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary-color px-5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <PlusCircle className="h-4 w-4" />
                  যুক্ত করুন
                </button>
              </div>

              <p className="mt-2 text-xs text-light-gray">
                আইটেম যোগ করতে নাম/কোড লিখে “যুক্ত করুন” চাপুন
              </p>
            </Card>

            {/* Selected items header */}
            <div className="mt-5 flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-primary-color">
                নির্বাচিত পণ্য তালিকা <span>(Selected Items)</span>
              </h3>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-light-gray">
                  {selected.length} টি
                </span>
                {isBudgetInsufficient && (
                  <span className="text-sm font-semibold text-red">
                    টাকা অপর্যাপ্ত
                  </span>
                )}
              </div>
            </div>

            {/* Selected list */}
            <div className="mt-3 space-y-4">
              {selected.map((x) => (
                <Card
                  key={x.productId}
                  className="rounded-md bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left info */}
                    <div>
                      <p className="text-sm font-bold text-black">
                        {x.product.name}
                      </p>
                      <p className="mt-1 text-xs text-light-gray">
                        Code : {x.product.code}
                      </p>
                    </div>

                    {/* Right controls */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Unit price */}
                      <div className="w-[150px]">
                        <p className="text-xs font-semibold text-primary-color">
                          ইউনিট মূল্য (BDT)
                        </p>
                        <div className="mt-1 flex h-10 items-center justify-end rounded-md bg-off-white px-3 text-sm font-bold text-black">
                          {new Intl.NumberFormat("bn-BD").format(
                            x.product.unitPrice,
                          )}
                        </div>
                      </div>

                      {/* Qty stepper */}
                      <div className="w-[140px]">
                        <p className="text-xs font-semibold text-light-gray">
                          পরিমাণ
                        </p>
                        <div className="mt-1 flex h-10 items-center justify-between rounded-md bg-off-white px-2">
                          <button
                            type="button"
                            onClick={() => decQty(x.productId)}
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm hover:opacity-90"
                            aria-label="Decrease"
                          >
                            <Minus className="h-4 w-4 text-primary-color" />
                          </button>

                          <span className="text-sm font-bold text-black">
                            {x.qty}
                          </span>

                          <button
                            type="button"
                            onClick={() => incQty(x.productId)}
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm hover:opacity-90"
                            aria-label="Increase"
                          >
                            <Plus className="h-4 w-4 text-primary-color" />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(x.productId)}
                        className="mt-5 flex h-10 w-10 items-center justify-center rounded-md bg-off-white hover:opacity-90 sm:mt-0"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4 text-light-gray" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}

              {selected.length === 0 && (
                <Card className="rounded-md bg-white p-6 text-center shadow-sm">
                  <p className="text-sm text-light-gray">
                    কোনো পণ্য নির্বাচিত হয়নি।
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <Card className="rounded-md bg-white p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
                  <ClipboardList className="h-5 w-5 text-primary-color" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold text-black">
                    Requisition Slip
                  </h3>
                  <p className="mt-1 text-xs text-primary-color">
                    Allocated Budget Breakdown - ID: #{draft.id}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-off-white" />

              {/* Table header */}
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-light-gray">
                <span>ITEM DETAILS (QTY X PRICE)</span>
                <span>SUBTOTAL</span>
              </div>

              {/* Items */}
              <div className="mt-3 space-y-3">
                {selected.map((x) => (
                  <div
                    key={`slip-${x.productId}`}
                    className="flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-bold text-black">
                        {x.product.name}
                      </p>
                      <p className="mt-1 text-xs text-primary-color">
                        {x.qty} <span className="text-light-gray">x</span>{" "}
                        {new Intl.NumberFormat("bn-BD").format(
                          x.product.unitPrice,
                        )}{" "}
                        <span className="text-light-gray">BDT</span>
                      </p>
                    </div>

                    <p className="text-sm font-extrabold text-black">
                      {formatBDT(x.lineTotal)}
                    </p>
                  </div>
                ))}
              </div>

              {selected.length === 0 && (
                <div className="mt-10 text-center text-sm text-light-gray">
                  কোনো আইটেম যুক্ত হয়নি
                </div>
              )}

              <div className="mt-4 h-px w-full bg-off-white" />

              <p className="mt-3 text-center text-xs text-light-gray">
                মোট হিসাব স্বয়ংক্রিয়ভাবে আপডেট হয়
              </p>

              {/* Totals */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-light-gray">
                    উপমোট বাজেট (Subtotal)
                  </span>
                  <span className="font-bold text-black">
                    {formatBDT(subTotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-light-gray">
                    ভ্যাট ({Math.round(draft.vatRate * 100)}%)
                  </span>
                  <span className="font-bold text-black">{formatBDT(vat)}</span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-extrabold text-primary-color">
                    সর্বমোট বাজেট (Total Estimate)
                  </span>
                  <span className="text-base font-extrabold text-black">
                    {formatBDT(totalEstimate)}
                  </span>
                </div>
              </div>

              {/* Method */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-black">
                  ক্রয় পদ্ধতি (PROCUREMENT METHOD)
                </p>

                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value as any)}
                  className="mt-2 h-11 w-full rounded-md bg-off-white px-3 text-sm font-semibold text-black outline-none"
                >
                  <option value="DPM">DPM (Direct Procurement Method)</option>
                  <option value="OTM">OTM (Open Tender Method)</option>
                  <option value="RFQ">RFQ (Request For Quotation)</option>
                </select>

                <div className="mt-3 rounded-md bg-off-white p-3 text-xs text-light-gray">
                  নির্বাচিত পদ্ধতি অনুযায়ী ক্রয় প্রক্রিয়া অনুসরণ করুন এবং
                  নীতিমালা/নিয়ম-নীতি নিশ্চিত করুন।
                </div>
              </div>

              {/* Place order */}
              <button
                type="button"
                disabled={selected.length === 0 || isBudgetInsufficient}
                className={[
                  "mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md text-sm font-extrabold shadow-sm transition",
                  selected.length === 0 || isBudgetInsufficient
                    ? "cursor-not-allowed bg-off-white text-medium-gray"
                    : "bg-primary-color text-white hover:opacity-90",
                ].join(" ")}
                onClick={() => setOpenDrawer(true)}
              >
                Place Order <CheckCircle2 className="h-4 w-4" />
              </button>

              <AddNewItemDialog
                open={openDrawer}
                onOpenChange={setOpenDrawer}
                onSubmit={(data) => {
                  console.log("New item:", data);
                }}
              />
            </Card>
          </div>
        </div>

        {/* Floating avatar (optional like screenshot) */}
        <div className="fixed bottom-6 left-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-color text-white shadow">
            M
          </div>
        </div>
      </div>
    </div>
  );
}
