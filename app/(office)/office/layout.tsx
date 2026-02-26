import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarItems } from "@/types/types";
import Navbar from "@/app/(office)/office/_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems: SidebarItems[] = [
    {
      title: "Dashboard",
      url: "/office/dashboard",
      icon: "/icons/dashboard-icon.png",
    },
    {
      title: "Budget Management",
      url: "/office/dashboard/budget-management",
      icon: "",
    },
    { title: "Procurement", url: "/office/dashboard/procurement", icon: "" },
    {
      title: "Order & Delivery",
      url: "/office/dashboard/order-management",
      icon: "",
    },
    {
      title: "Report & Audit",
      url: "/office/dashboard/report&audit",
      icon: "",
    },
    {
      title: "Account Settings",
      url: "/office/dashboard/account-settings",
      icon: "/icons/user-icon.png",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar items={sidebarItems} />

        {/* Main column (VERY IMPORTANT: min-w-0) */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-50 w-full">
            <Navbar />
          </header>

          <main className="flex-1 min-w-0 overflow-x-hidden bg-[#F8FAFC] p-3 md:p-4 lg:p-5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
