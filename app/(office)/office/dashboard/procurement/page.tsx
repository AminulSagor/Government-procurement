"use client";

import React from "react";
import {
  Home,
  Search,
  ArrowRight,
  FileText,
  Monitor,
  Sofa,
  Printer,
  Sparkles,
  Car,
  Plug,
  BriefcaseMedical,
} from "lucide-react";
import {
  ProcurementHead,
  procurementHeads,
} from "@/app/(office)/office/dummy-data/data";
import Card from "@/components/cards/card";
import Link from "next/link";

type TabKey = "all" | "available" | "unavailable";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "সবগুলো (All)" },
  { key: "available", label: "পর্যাপ্ত উপলব্ধি" },
  { key: "unavailable", label: "উপলব্ধি নেই" },
];

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

const Procurement = () => {
  const [activeTab, setActiveTab] = React.useState<TabKey>("all");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    const bySearch = procurementHeads.filter((x) => {
      if (!q) return true;
      return (
        x.code.toLowerCase().includes(q) ||
        x.titleBn.toLowerCase().includes(q) ||
        x.titleEn.toLowerCase().includes(q)
      );
    });

    if (activeTab === "available") {
      return bySearch.filter((x) => x.isAvailable && x.balance > 0);
    }

    if (activeTab === "unavailable") {
      return bySearch.filter((x) => !x.isAvailable || x.balance <= 0);
    }

    return bySearch;
  }, [activeTab, query]);

  const handleSelect = (head: ProcurementHead) => {
    if (!head.isAvailable || head.balance <= 0) return;
    console.log("Selected:", head);
  };

  return (
    <div>
      <div className="mx-auto w-full">
        {/* Top breadcrumb + avatar */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-light-gray">
              <Home className="h-4 w-4 text-primary-color" />
              <span>হোম</span>
              <span>/</span>
              <span>ক্রয়</span>
              <span>/</span>
              <span className="text-black">খাত নির্বাচন</span>
            </div>

            <div className="mt-4 flex items-end gap-3">
              <h1 className="text-2xl font-bold text-black">
                বাজেট খাত নির্বাচন করুন
              </h1>
              <span className="text-sm font-medium text-blue">
                (Select Procurement Head)
              </span>
            </div>

            <p className="mt-2 text-sm text-primary-color/70">
              চলতি বাজেটের অবশিষ্ট উপলব্ধি অনুযায়ী ক্রয় খাত নির্বাচন করুন
            </p>
          </div>
        </div>

        {/* Tabs + Search */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full items-center rounded-md bg-white p-1 shadow-sm">
            {TABS.map((t) => {
              const isActive = t.key === activeTab;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  className={[
                    "h-9 flex-1 rounded-md px-4 text-sm font-semibold transition cursor-pointer",
                    isActive
                      ? "bg-primary-color text-white"
                      : "text-primary-color hover:opacity-80",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="w-full md:w-lg">
            <div className="flex items-center gap-2 rounded-md bg-white shadow-sm px-3 py-3">
              <Search className="h-4 w-4 text-primary-color" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="কোড বা নাম দিয়ে খুঁজুন..."
                className="w-full bg-transparent text-sm text-black placeholder:text-primary-color outline-none"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((head) => {
            const disabled = !head.isAvailable || head.balance <= 0;

            return (
              <Card
                key={head.id}
                className="rounded-md border-0 bg-white p-5 shadow-sm"
              >
                {/* top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
                    {iconMap[head.iconKey]}
                  </div>

                  <span className="rounded-md bg-off-white px-2.5 py-1 text-xs font-semibold text-primary-color/70">
                    {head.code}
                  </span>
                </div>

                {/* title */}
                <div className="mt-4">
                  <h3
                    className={[
                      "text-lg font-bold",
                      disabled ? "text-medium-gray" : "text-black",
                    ].join(" ")}
                  >
                    {head.titleBn}
                  </h3>
                  <p
                    className={[
                      "mt-1 text-sm",
                      disabled ? "text-medium-gray" : "text-primary-color/70",
                    ].join(" ")}
                  >
                    {head.titleEn}
                  </p>
                </div>

                {/* divider */}
                <div className="mt-4 h-px w-full bg-off-white" />

                {/* balance */}
                <div className="mt-4">
                  <p
                    className={` ${disabled ? "text-medium-gray" : "text-primary-color/70"} text-sm`}
                  >
                    অবশিষ্ট বাজেট (Balance)
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <p
                      className={[
                        "text-xl font-bold",
                        head.balance <= 0 ? "text-red" : "text-primary-color",
                      ].join(" ")}
                    >
                      {formatBDT(head.balance)}
                    </p>

                    {disabled && (
                      <span className="rounded-md bg-off-white px-2.5 py-1 text-xs font-semibold text-red">
                        উপলব্ধ নেই
                      </span>
                    )}
                  </div>
                </div>

                {/* action */}
                <Link href={`/office/dashboard/procurement/${head.id}`}>
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => handleSelect(head)}
                    className={[
                      "mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold transition ",
                      disabled
                        ? "cursor-not-allowed bg-off-white text-medium-gray"
                        : "bg-primary-color/10 text-primary-color hover:opacity-90 cursor-pointer",
                    ].join(" ")}
                  >
                    {disabled ? (
                      "উপলব্ধ নেই"
                    ) : (
                      <>
                        নির্বাচন করুন <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Procurement;
