"use client";

import Logo from "@/components/main-logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import NotificationPopup from "./notifications/notification-popup";
import { adminNavLinks } from "@/constants/navigation-links";

// ----- COMPONENT -----
export default function AdminNavbar() {
  const [openNoti, setOpenNoti] = useState(false);
  const bellRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full bg-[#1F6F86] text-white py-1">
      <div className="h-14 px-5 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2 font-semibold">
          <SidebarTrigger />
          <Logo />
          <span className="text-lg">IBAS+</span>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {adminNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-90">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
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

          {/* Profile */}
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
      </div>
    </div>
  );
}
