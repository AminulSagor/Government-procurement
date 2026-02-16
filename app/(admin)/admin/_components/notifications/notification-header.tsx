"use client";

import { Settings } from "lucide-react";

export default function NotificationHeader() {
  return (
    <div className="px-5 pt-4 pb-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[20px] font-extrabold text-[#0F172A]">
          নোটিফিকেশন
        </h3>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-[14px] font-semibold text-[#0F172A]/70 hover:text-[#0F172A]"
          >
            সব পঠিত হিসেবে চিহ্নিত করুন
          </button>

          <button
            type="button"
            className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-black/5"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5 text-[#0F172A]/60" />
          </button>
        </div>
      </div>
    </div>
  );
}
