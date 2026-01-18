import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarItems } from "@/types/types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems: SidebarItems[] = [
    {
      title: "Dashboard",
      url: "office/dashboard",
      icon: "/icons/dashboard-icon.png",
    },
    {
      title: "Budget Management",
      url: "office/dashboard/budget-management",
      icon: "",
    },
    {
      title: "Procurement",
      url: "office/dashboard/procurement",
      icon: "",
    },
    {
      title: "Order & Delivery",
      url: "office/dashboard/order&delivery",
      icon: "",
    },
    {
      title: "Report & Audit",
      url: "office/dashboard/report&audit",
      icon: "",
    },
    {
      title: "Account Settings",
      url: "office/dashboard/account-settings",
      icon: "/icons/user-icon.png",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar items={sidebarItems} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
