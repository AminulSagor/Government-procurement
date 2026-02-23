// app/(admin)/admin/_components/admin-navbar.tsx
"use client";

import Logo from "@/components/main-logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import NotificationPopup from "./notifications/notification-popup";


export default function AdminNavbar() {
  const [openNoti, setOpenNoti] = useState(false);
  const bellRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="h-14 w-full bg-[#1F6F86] px-5 flex items-center justify-between text-white fixed">
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2 font-semibold">
        <SidebarTrigger />
        <Logo />
        <span className="text-lg">IBAS+</span>
      </div>

      {/* CENTER: Nav items */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/admin/dashboard" className="hover:opacity-90">
          ড্যাশবোর্ড
        </Link>
        <Link
          href="/admin/dashboard/requisition-inbox"
          className="hover:opacity-90"
        >
          চাহিদাপত্র (Requisition)
        </Link>
        <Link
          href="/admin/dashboard/order-management"
          className="hover:opacity-90"
        >
          অর্ডার (Orders)
        </Link>
        <Link href="/admin/dashboard/analytics" className="hover:opacity-90">
          এনালিটিক্স (Analytics)
        </Link>
      </nav>

      {/* RIGHT: Bell + User */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            ref={bellRef}
            type="button"
            onClick={() => setOpenNoti((v) => !v)}
            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          <NotificationPopup
            open={openNoti}
            onClose={() => setOpenNoti(false)}
            anchorRef={bellRef}
          />
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <span className="text-sm">এডমিন</span>
          <div className="h-8 w-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
            <Image
              src="/avatars/user-avatar.png"
              alt="Profile"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
