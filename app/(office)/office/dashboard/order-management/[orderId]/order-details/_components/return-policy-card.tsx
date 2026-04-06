"use client";

import { ShieldCheck } from "lucide-react";

export default function ReturnPolicyCard() {
  return (
    <div
      className="
        rounded-lg
        border border-primary-color/10
        bg-[rgba(234,179,8,0.10)]
        p-5
      "
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-md bg-[rgba(234,179,8,0.18)] flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-orange" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black">ফেরত নীতিমালা</h3>
        </div>
      </div>

      <ul className="mt-4 space-y-3 text-sm text-black">
        <li className="flex gap-2">
          <span className="mt-1 text-orange">•</span>
          <span>পণ্য প্রাপ্তির পরে উল্লেখ দিনের মধ্যে আবেদন করতে হবে</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 text-orange">•</span>
          <span>আসল প্যাকেজিং অক্ষত ও undamaged থাকতে হবে</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 text-orange">•</span>
          <span>পণ্যটি অব্যবহৃত অবস্থায় থাকতে হবে</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 text-orange">•</span>
          <span>ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ পণ্যের জন্য ছবির প্রমাণ প্রয়োজন।</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 text-orange">•</span>
          <span>ফেরতযোগ্য পণ্যের জন্য রিস্টকিং ফি প্রযোজ্য হতে পারে।</span>
        </li>
      </ul>
    </div>
  );
}