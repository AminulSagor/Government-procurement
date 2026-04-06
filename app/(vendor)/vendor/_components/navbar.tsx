"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, ShoppingCart } from "lucide-react";
import Logo from "@/components/main-logo";
import CartDrawer from "@/app/(office)/office/_components/cart";
import { vendorNavItems } from "@/constants/navigation-links";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState<boolean>(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const handleCart = () => {
    setOpen(true);
  };

  return (
    <div className="w-full bg-[#1F6E7F] text-white py-1">
      <div className="h-14 px-4 flex items-center gap-6 justify-between">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <Logo />
          <span className="text-lg font-semibold tracking-wide">IBAS+</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 2xl:gap-12  text-sm font-medium">
          {vendorNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "transition-opacity",
                isActive(item.href)
                  ? "opacity-100"
                  : "opacity-90 hover:opacity-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="items-center gap-3 flex">
          {/* cart  */}
          <button
            type="button"
            className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center cursor-pointer"
            onClick={handleCart}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="h-9 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-sm font-semibold"
          >
            ২০২৪-২০২৫
          </button>

          <button
            type="button"
            className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center"
          >
            <Bell className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-3 pl-3 border-l border-white/20">
            <div className="text-right leading-tight">
              <div className="text-sm font-semibold">
                উপজেলা সমাজসেবা কার্যালয়
              </div>
              <div className="text-xs text-white/80">অফিস এডমিন</div>
            </div>

            <div className="h-9 w-9 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
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
      {/* cart management */}
      <CartDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
