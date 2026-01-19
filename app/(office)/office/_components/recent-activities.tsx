"use client";

import Card from "@/components/cards/card";
import Link from "next/link";
import { Check, Plus, AlertTriangle, User } from "lucide-react";
import {
  activityItems,
  ActivityType,
} from "@/app/(office)/office/dummy-data/data";

export default function RecentActivities() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-black">সাম্প্রতিক কার্যক্রম</h3>
        <Link
          href="/office/dashboard/activity-details"
          className="text-sm font-semibold text-primary-color-70 hover:opacity-80 text-primary-color/70"
        >
          সব দেখুন
        </Link>
      </div>

      <div className="mt-5 space-y-6">
        {activityItems.map((item, idx) => {
          const meta = metaByType(item.type);
          const isLast = idx === activityItems.length - 1;

          return (
            <div key={item.id} className="relative flex gap-4">
              <div className="relative flex flex-col items-center">
                <div
                  className={[
                    "h-9 w-9 rounded-full flex items-center justify-center",
                    meta.ring,
                  ].join(" ")}
                >
                  {meta.icon}
                </div>

                {!isLast && <div className="mt-2 w-px flex-1 bg-slate-200" />}
              </div>

              <div className="min-w-0 pb-1">
                <p className="text-sm font-bold text-black truncate">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-medium-gray truncate">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-xs text-medium-gray">{item.timeAgo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
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
