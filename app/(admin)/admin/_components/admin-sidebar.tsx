"use client";

import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import AdminSidebarItemRow from "./admin-sidebar-item";
import { AdminSidebarItem } from "../_types/admin-sidebar.types";

export function AdminSidebar({ items }: { items: AdminSidebarItem[] }) {
  return (
    <Sidebar>
      <SidebarContent className="bg-white px-3 py-4">
        <div className="space-y-2">
          {items.map((it, idx) => (
            <AdminSidebarItemRow key={`${it.title}-${idx}`} item={it} />
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
