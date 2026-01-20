"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Search,
  Plus,
  ChevronRight,
  Package,
  Truck,
  ClipboardList,
  FileText,
  CalendarDays,
  Pencil,
  Trash2,
  ArrowRight,
} from "lucide-react";

import Card from "@/components/cards/card";
import {
  orders,
  type OrderListStatus,
} from "@/app/(office)/office/dummy-data/data";
import OrderStepper, {
  OrderStepKey,
} from "@/app/(office)/office/_components/order-stepper";

type TabKey = "pending_quote" | "active" | "shipped" | "previous" | "draft";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "pending_quote", label: "পেন্ডিং কোটেশন" },
  { key: "active", label: "সক্রিয় অর্ডার" },
  { key: "shipped", label: "শিপড" },
  { key: "previous", label: "পূর্ববর্তী অর্ডার" },
  { key: "draft", label: "ড্রাফট লিস্ট" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function statusAccent(status: OrderListStatus) {
  // only using your provided colors
  if (status === "shipped") return "before:bg-blue";
  if (status === "pending_quote") return "before:bg-red";
  if (status === "draft") return "before:bg-green";
  return "before:bg-transparent";
}

function badgeStyle(status: OrderListStatus) {
  if (status === "active") return "bg-green/10 text-green";
  if (status === "shipped") return "bg-blue/10 text-blue";
  if (status === "pending_quote") return "bg-red/10 text-red";
  if (status === "draft") return "bg-green/10 text-green";
  return "bg-off-white text-light-gray";
}

function leftIcon(status: OrderListStatus) {
  if (status === "active")
    return <Package className="h-5 w-5 text-primary-color" />;
  if (status === "shipped") return <Truck className="h-5 w-5 text-blue" />;
  if (status === "pending_quote")
    return <ClipboardList className="h-5 w-5 text-red" />;
  if (status === "draft") return <FileText className="h-5 w-5 text-green" />;
  return <Package className="h-5 w-5 text-light-gray" />;
}

function mapStepper(
  status: OrderListStatus,
  step?: OrderStepKey,
): OrderStepKey {
  if (step) return step;
  if (status === "active") return "processing";
  if (status === "shipped") return "in_transit";
  return "confirmed";
}

export default function OrderAndDelivery() {
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState<TabKey>("active");
  const [query, setQuery] = React.useState("");

  const counts = React.useMemo(() => {
    const base = {
      pending_quote: 0,
      active: 0,
      shipped: 0,
      previous: 0,
      draft: 0,
    };
    for (const o of orders) base[o.status as TabKey] += 1;
    return base;
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    const tabbed = orders.filter((o) => o.status === activeTab);

    if (!q) return tabbed;

    return tabbed.filter((o) => {
      const hay =
        `${o.ref} ${o.title} ${o.meta1 ?? ""} ${o.meta2 ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [activeTab, query]);

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-light-gray">
        <Home className="h-4 w-4 text-primary-color" />
        <span>হোম</span>
        <span>/</span>
        <span className="text-black">অর্ডার</span>
      </div>

      {/* Header */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">
            অর্ডার ট্র্যাকিং ও ম্যানেজমেন্ট
          </h1>
          <p className="mt-1 text-sm text-light-gray">
            আপনার চলমান প্রকিউরমেন্ট অর্ডারগুলো ট্র্যাক করুন এবং ড্রাফটগুলো
            সম্পন্ন করুন
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/office/dashboard/procurement")}
          className="flex h-11 items-center gap-2 rounded-md bg-primary-color px-5 text-sm font-extrabold text-white shadow-sm hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          নতুন অর্ডার
        </button>
      </div>

      {/* Search */}
      <div className="mt-5">
        <div className="flex items-center gap-2 rounded-md bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-primary-color" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="অর্ডার আইডি, ভেন্ডর অথবা আইটেম দিয়ে খুঁজুন..."
            className="w-full bg-transparent text-sm text-black placeholder:text-light-gray outline-none  rounded-md"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-5 flex flex-wrap items-center gap-6">
        {TABS.map((t) => {
          const isActive = t.key === activeTab;
          const count = counts[t.key];

          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              className={cn(
                "relative flex items-center gap-2 pb-2 text-sm font-extrabold transition",
                isActive
                  ? "text-primary-color"
                  : "text-light-gray hover:text-black",
              )}
            >
              <span>{t.label}</span>
              <span
                className={cn(
                  "flex h-5 min-w-5 items-center justify-center rounded-md px-1.5 text-xs font-extrabold",
                  isActive
                    ? "bg-primary-color/10 text-primary-color"
                    : "bg-off-white text-light-gray",
                )}
              >
                {count}
              </span>

              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-color" />
              )}
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className="mt-5 space-y-4">
        {filtered.map((o) => {
          const showStepper =
            o.status === "active" ||
            o.status === "shipped" ||
            o.status === "previous";
          const stepCurrent = mapStepper(o.status, o.stepCurrent);

          const hasAccent =
            o.status === "shipped" ||
            o.status === "pending_quote" ||
            o.status === "draft";

          return (
            <Card
              key={o.id}
              className={cn(
                "relative rounded-md bg-white p-5 shadow-sm",
                hasAccent &&
                  "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-md",
                hasAccent && statusAccent(o.status),
              )}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Left icon box */}
                <div className="flex  gap-4 lg:min-w-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-color/10">
                    {leftIcon(o.status)}
                  </div>

                  {/* Main */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-base font-extrabold text-primary-color">
                        {o.ref}
                      </p>

                      <span
                        className={cn(
                          "rounded-md px-2 py-1 text-xs font-extrabold",
                          badgeStyle(o.status),
                        )}
                      >
                        {o.badgeLabel}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-bold text-black">
                      {o.title}
                    </p>

                    {/* meta lines */}
                    {(o.meta1 || o.meta2) && (
                      <div className="mt-1 text-xs text-light-gray">
                        {o.meta1 && <p>{o.meta1}</p>}
                        {o.meta2 && <p>{o.meta2}</p>}
                      </div>
                    )}
                  </div>
                </div>

                {/* Middle stepper */}
                {showStepper && (
                  <div className="w-full">
                    <OrderStepper current={stepCurrent} />
                  </div>
                )}

                {/* Right side actions */}
                {o.status === "draft" ? (
                  <div className="lg:ml-auto flex items-center gap-3">
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white hover:opacity-90"
                      aria-label="Delete draft"
                      onClick={() => console.log("delete draft", o.id)}
                    >
                      <Trash2 className="h-4 w-4 text-light-gray" />
                    </button>

                    <button
                      type="button"
                      className="flex h-10 items-center gap-2 rounded-md bg-off-white px-4 text-sm font-extrabold text-black hover:opacity-90"
                      onClick={() => console.log("edit draft", o.id)}
                    >
                      <Pencil className="h-4 w-4 text-light-gray" />
                      এডিট
                    </button>

                    <button
                      type="button"
                      className="flex h-10 items-center gap-2 rounded-md bg-primary-color px-5 text-sm font-extrabold text-white hover:opacity-90"
                      onClick={() =>
                        router.push(`/office/dashboard/order&delivery/`)
                      }
                    >
                      অর্ডার সম্পন্ন করুন <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : o.status === "pending_quote" ? (
                  <div className="flex justify-end w-full">
                    <div className="flex flex-col gap-4">
                      {/* simple avatar stack */}
                      <div className="flex items-center">
                        {Array.from({
                          length: Math.min(2, o.peopleCount ?? 3),
                        }).map((_, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "h-8 w-8 rounded-full border-2 border-white bg-primary-color",
                              idx !== 0 && "-ml-2",
                            )}
                          />
                        ))}

                        {(o.peopleCount ?? 0) > 3 && (
                          <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-off-white text-xs font-extrabold text-light-gray">
                            +{(o.peopleCount ?? 0) - 3}
                          </div>
                        )}
                      </div>
                      <p className="text-black font-semibold text-xs">
                        ৩ টি কোটেশন রিসিভ হয়েছে
                      </p>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-extrabold text-primary-color hover:opacity-90 cursor-pointer"
                        onClick={() =>
                          router.push(
                            `/office/dashboard/order&delivery/${o.id}/quotation-verification&selection`,
                          )
                        }
                      >
                        রিভিউ এবং সিলেক্ট <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer flex justify-end"
                    aria-label="View"
                    onClick={() =>
                      router.push(
                        `/office/dashboard/order&delivery/${o.id}/active-order`,
                      )
                    }
                  >
                    <ArrowRight className="text-medium-gray" />
                  </button>
                )}
              </div>

              {/* Draft extra small meta icons*/}
              {o.status === "draft" && (
                <div className="mt-3 flex flex-col gap-1 text-xs text-light-gray">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-light-gray" />
                    <span>{o.meta1}</span>
                  </div>
                </div>
              )}
            </Card>
          );
        })}

        {filtered.length === 0 && (
          <Card className="rounded-md bg-white p-8 text-center shadow-sm">
            <p className="text-sm text-light-gray">কোনো অর্ডার পাওয়া যায়নি।</p>
          </Card>
        )}
      </div>
    </div>
  );
}
