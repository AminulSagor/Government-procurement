import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function OrderHeader() {
  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div className="flex items-center gap-3">
        <Link
          href="/vendor/dashboard/active-orders"
          className="flex items-center gap-1 text-sm font-semibold text-light-gray hover:text-light-gray"
        >
          <ArrowLeft size={16} />
          ফিরে যান (Back)
        </Link>

        {/* divider */}
        <span className="h-4 w-px bg-gray/20" />

        {/* req id */}
        <span className="text-base font-extrabold text-gray">
          #REQ-2025-08-015
        </span>

        {/* status pill (FIXED) */}
        <span className="rounded-full bg-blue-100 px-2 py-3 text-xs font-extrabold text-blue-700">
          পেমেন্ট ভেরিফিকেশন চলছে
        </span>
      </div>

      {/* right */}
      <div className="flex items-center gap-2 text-xs font-semibold text-light-gray">
        <CalendarDays size={14} />
        <span>Last updated: 14 Aug 2025</span>
      </div>
    </div>
  );
}
