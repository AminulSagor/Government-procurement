"use client";

import React from "react";
import Link from "next/link";
import Card from "@/components/cards/card";
import {
  Check,
  Plus,
  AlertTriangle,
  User,
  Search,
  Calendar,
} from "lucide-react";
import {
  activityItems,
  ActivityType,
} from "@/app/(office)/office/dummy-data/data";

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterType = "all" | ActivityType;

const extraItems = [
  {
    id: "5",
    type: "success" as const,
    title: "বরাদ্দ পত্র #২০৩৯ অনুমোদিত",
    subtitle: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
    timeAgo: "২ দিন আগে",
  },
  {
    id: "6",
    type: "info" as const,
    title: "সিস্টেম আপডেট সম্পন্ন",
    subtitle: "ভার্সন ২.৮.০ সফলভাবে স্থাপন করা হয়েছে",
    timeAgo: "৩ দিন আগে",
  },
];

export default function ActivityDetailsPage() {
  const allItems = React.useMemo(() => [...activityItems, ...extraItems], []);

  const [type, setType] = React.useState<FilterType>("all");
  const [range, setRange] = React.useState<string>("today");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    return allItems.filter((x) => {
      const matchType = type === "all" ? true : x.type === type;

      const matchQuery =
        !q ||
        x.title.toLowerCase().includes(q) ||
        x.subtitle.toLowerCase().includes(q) ||
        x.id.toLowerCase().includes(q);

      // range is UI-only for now (wire to API later)
      const matchRange = !!range;

      return matchType && matchQuery && matchRange;
    });
  }, [allItems, type, range, query]);

  return (
    <div className="">
      <div className="mx-auto w-full px-4 md:px-6 py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-3 flex items-center gap-2 text-sm text-primary-color/70">
          <span>ড্যাশবোর্ড</span>
          <span>&gt;</span>
          <span className="text-primary-color">সাম্প্রতিক কার্যক্রম</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-black mb-5">
          সাম্প্রতিক কার্যক্রম
        </h1>

        <Card>
          {/* Filters */}
          <div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-6 md:items-center">
                {/* Type (shadcn Select) */}
                <div>
                  <p className="text-xs font-semibold text-medium-gray mb-2">
                    কার্যক্রমের ধরন
                  </p>

                  <Select
                    value={type}
                    onValueChange={(v) => setType(v as FilterType)}
                  >
                    <SelectTrigger className="h-11 w-44 rounded-md border border-primary-color/20 text-sm font-semibold text-black focus-visible:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="সব কার্যক্রম" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="all">সব কার্যক্রম</SelectItem>
                      <SelectItem value="success">সাফল্য</SelectItem>
                      <SelectItem value="info">তথ্য</SelectItem>
                      <SelectItem value="warning">সতর্কতা</SelectItem>
                      <SelectItem value="neutral">নিরপেক্ষ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date range (shadcn Select) */}
                <div>
                  <p className="text-xs font-semibold text-medium-gray mb-2">
                    তারিখের পরিসীমা
                  </p>

                  <div className="">
                    <Select value={range} onValueChange={setRange}>
                      <SelectTrigger className="h-11 w-44 rounded-md border border-primary-color/20 text-sm font-semibold text-black focus-visible:ring-0 focus:ring-offset-0">
                        <div className="flex gap-2 items-center">
                          <Calendar className="text-black" />
                          <SelectValue placeholder="আজ পর্যন্ত" />
                        </div>
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="today">আজ পর্যন্ত</SelectItem>
                        <SelectItem value="7d">গত ৭ দিন</SelectItem>
                        <SelectItem value="30d">গত ৩০ দিন</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div>
                <p className="text-xs font-semibold text-medium-gray mb-2">
                  কার্যক্রম খুঁজুন
                </p>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-medium" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="আইডি বা কীওয়ার্ড লিখে খুঁজুন..."
                    className="h-11 w-full sm:max-w-lg lg:min-w-lg rounded-md border border-primary-color/20 bg-white pl-10 pr-4 text-sm text-black outline-none placeholder:text-gray-medium focus:border-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="border-t border-slate-100 mt-4">
            {filtered.map((item, idx) => {
              const meta = metaByType(item.type);
              const isActive = item.type === "warning";
              const isLast = idx === filtered.length - 1;

              return (
                <div
                  key={item.id}
                  className={[
                    "relative flex items-center justify-between gap-4 px-5 md:px-6 py-4",
                    !isLast ? "border-b border-slate-100" : "",
                    isActive
                      ? "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={[
                        "h-9 w-9 rounded-full flex items-center justify-center shrink-0",
                        meta.ring,
                      ].join(" ")}
                    >
                      {meta.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-black truncate">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-medium-gray truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 text-xs text-medium-gray">
                    {item.timeAgo}
                  </p>
                </div>
              );
            })}

            {/* Footer */}
            <div className="px-5 md:px-6 py-6 flex justify-center">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-primary-color/20 text-primary-color bg-white px-6 text-sm font-semibold text-primary-color-70 hover:opacity-90"
              >
                আরও দেখুন
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function metaByType(type: ActivityType) {
  switch (type) {
    case "success":
      return {
        ring: "bg-emerald-50",
        icon: <Check className="h-4 w-4 text-green" />,
      };
    case "info":
      return {
        ring: "bg-sky-50",
        icon: <Plus className="h-4 w-4 text-primary-color-70" />,
      };
    case "warning":
      return {
        ring: "bg-rose-50",
        icon: <AlertTriangle className="h-4 w-4 text-red" />,
      };
    default:
      return {
        ring: "bg-slate-100",
        icon: <User className="h-4 w-4 text-gray-medium" />,
      };
  }
}
