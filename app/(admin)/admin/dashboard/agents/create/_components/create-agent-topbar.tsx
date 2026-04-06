"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateAgentTopbar() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[22px] font-extrabold text-[var(--color-black)]">
          নতুন এজেন্ট নিবন্ধন
        </h1>
        <p className="mt-1 text-sm text-[var(--color-medium-gray)]">
          এজেন্টের ব্যক্তিগত তথ্য, এলাকা এবং নথিপত্র প্রদান করুন।
        </p>
      </div>

      <Link
        href="/admin/dashboard/agents"
        className="inline-flex items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary-color)] "
      >
        <ArrowLeft className="h-4 w-4" />
        পেছনে যান
      </Link>
    </div>
  );
}
