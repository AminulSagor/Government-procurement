"use client";

import { NotificationItemType } from "../../_data/notification-data";



export default function NotificationItem({ item }: { item: NotificationItemType }) {
  const Icon = item.icon;

  return (
    <div className="px-5">
      <button
        type="button"
        className="w-full py-4 text-left"
      >
        <div className="flex items-start gap-4">
          {/* Left Icon */}
          <div
            className={`h-11 w-11 rounded-full flex items-center justify-center ${item.iconBg}`}
          >
            <Icon className={`h-5 w-5 ${item.iconColor}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-[16px] leading-[1.35] text-[#0F172A]">
              <span className="font-extrabold">{item.title}</span>{" "}
              {item.desc ? (
                <span className="font-medium text-[#0F172A]/70 whitespace-pre-line">
                  {item.desc}
                </span>
              ) : null}
            </p>

            <p className="mt-2 text-[13px] text-[#94A3B8]">{item.time}</p>
          </div>

          {/* Right unread dot (same position) */}
          {item.unread ? (
            <div className="pt-2">
              <span className="block h-3 w-3 rounded-full bg-[#EF4444]" />
            </div>
          ) : (
            <div className="pt-2 w-3" />
          )}
        </div>
      </button>

      {/* Divider (same-to-same light line) */}
      <div className="h-px bg-[#E7EEF5]" />
    </div>
  );
}
