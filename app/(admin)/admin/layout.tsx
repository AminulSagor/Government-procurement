import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./_components/admin-sidebar";
import { adminSidebarItems } from "./_data/admin-sidebar.data";
import AdminNavbar from "./_components/admin-navbar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {/* Whole page row */}
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar items={adminSidebarItems} />

        {/* Main column (VERY IMPORTANT: min-w-0) */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-50 w-full">
            <AdminNavbar />
          </header>

          <main className="flex-1 min-w-0 overflow-x-hidden bg-[#F8FAFC] p-3 md:p-4 lg:p-5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
