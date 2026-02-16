"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddProductHeader() {
  return (
    <div className="space-y-2">
      {/* Back */}
      <Link
        href="/vendor/dashboard/inventory/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-light-gray/70 hover:text-light-gray"
      >
        <ArrowLeft size={14} />
        ফিরে যান
      </Link>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray">
        পণ্য ইনভেন্টরিতে যুক্ত করুন (Add Product to Inventory)
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-light-gray/70">
        Search the master catalog or manually add product details to your inventory.
      </p>
    </div>
  );
}
