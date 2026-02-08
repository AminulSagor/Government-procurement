"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddProductHeader() {
  return (
    <div>
      <Link
        href="/vendor/dashboard/inventory/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray hover:underline"
      >
        <ArrowLeft size={14} /> ফিরে যান
      </Link>

      <h1 className="mt-2 text-2xl font-semibold text-gray">
        পণ্য ইনভেন্টরিতে যুক্ত করুন (Add Product to Inventory)
      </h1>
      <p className="mt-1 text-sm text-gray">
        Search the master catalog or manually add product details to your inventory.
      </p>
    </div>
  );
}
