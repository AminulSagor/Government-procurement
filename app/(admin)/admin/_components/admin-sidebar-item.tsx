"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AdminSidebarItem } from "../_types/admin-sidebar.types";


export default function AdminSidebarItemRow({
  item,
}: {
  item: AdminSidebarItem;
}) {
  const pathname = usePathname();

  const isActive =
    item.url && (pathname === item.url || pathname.startsWith(item.url + "/"));

  const base =
    "w-full flex items-center gap-3 rounded-md border px-3 py-3 text-sm transition";
  const active = "bg-[#1F6F86] text-white border-[#1F6F86]";
  const normal = "bg-white text-gray-900 border-gray-200 hover:bg-gray-50";

  const content = (
    <>
      {item.icon ? (
        <Image src={item.icon} alt="" width={18} height={18} />
      ) : (
        <span className="inline-block h-[18px] w-[18px]" />
      )}
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
