"use client";

import React from "react";
import AdminSidebarItemRow from "./admin-sidebar-item";
import { AdminSidebarItem } from "../_types/admin-sidebar.types";

export function AdminSidebar({ items }: { items: AdminSidebarItem[] }) {
  return (
    <div className="px-3 py-4">
      <div className="space-y-2">
        {items.map((it, idx) => (
          <AdminSidebarItemRow key={`${it.title}-${idx}`} item={it} />
        ))}
      </div>
    </div>
  );
}
