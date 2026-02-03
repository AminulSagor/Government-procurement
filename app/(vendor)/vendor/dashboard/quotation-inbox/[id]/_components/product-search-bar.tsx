"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Search } from "lucide-react";

type Props = {
  label?: string;
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
};

export default function ProductSearchBar({
  label = "পণ্য খুঁজুন এবং নির্বাচন করুন",
  value = "",
  onChange,
  placeholder = "পণ্যের নাম বা মডেল লিখে খুঁজুন...",
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-4">
      <div className="flex items-center gap-4">
        {/* left label */}
        <p className="shrink-0 text-xs font-extrabold text-gray/70">
          {label}
        </p>

        {/* input */}
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray/35">
            <Search size={18} />
          </span>

          <input
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className={[
              "h-12 w-full rounded-2xl border border-gray/15 bg-white",
              "pl-12 pr-4 text-xs font-semibold text-gray",
              "placeholder:text-gray/35",
              "focus:outline-none focus:ring-0",
            ].join(" ")}
          />
        </div>
      </div>
    </Card>
  );
}
