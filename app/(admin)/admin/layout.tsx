"use client";

import React from "react";
import AdminNavbar from "./_components/admin-navbar";

import "../../globals.css";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AdminSidebar } from "./_components/admin-sidebar";
import { adminSidebarItems } from "./_data/admin-sidebar.data";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {/* ✅ Sidebar (controlled by SidebarTrigger automatically) */}
      <Sidebar>
        <SidebarContent>
          <AdminSidebar items={adminSidebarItems} />
        </SidebarContent>
      </Sidebar>

      {/* ✅ Main area */}
      <SidebarInset>
        <AdminNavbar />
        <main className="py-16 bg-[#F8F9FA]">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
