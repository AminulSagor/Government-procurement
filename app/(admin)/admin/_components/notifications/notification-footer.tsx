"use client";

import { ArrowBigLeft, ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";

export default function NotificationFooter({ onClose }: { onClose?: () => void }) {
  return (
    <div className="px-5 pt-4 pb-5">
      <Link
        href="/admin/dashboard/inbox"
        onClick={() => onClose?.()}
        className="w-full h-12 rounded-xl bg-light-gray/10 text-primary-color font-semibold hover:bg-light-gray/70 flex items-center justify-center gap-2"
      >
        সব দেখুন <ArrowBigRightIcon size={18} />
      </Link>
    </div>
  );
}
