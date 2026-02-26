"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { SidebarItems } from "@/types/navigation";

export default function AdminSidebarItemRow({ item }: { item: SidebarItems }) {
  const pathname = usePathname();
  const isActive = pathname === item.url;

  const base =
    "w-full flex items-center gap-3 rounded-md border px-3 py-3 text-sm transition";
  const active = "bg-[#1F6F86] text-white border-[#1F6F86]";
  const normal = "bg-white text-gray-900 border-gray-200 hover:bg-gray-50";

  const renderIcon = () => {
    if (!item.icon) {
      return <span className="inline-block h-[18px] w-[18px]" />;
    }

    // image path
    if (typeof item.icon === "string") {
      return <Image src={item.icon} alt={item.title} width={18} height={18} />;
    }

    // component icon
    const IconComponent = item.icon;
    return <IconComponent className="h-[18px] w-[18px]" />;
  };

  const content = (
    <>
      {renderIcon()}
      <span className="truncate">{item.title}</span>
    </>
  );

  if (!item.url) {
    return (
      <button type="button" className={`${base} ${normal}`} disabled>
        {content}
      </button>
    );
  }

  return (
    <Link href={item.url} className={`${base} ${isActive ? active : normal}`}>
      {content}
    </Link>
  );
}
