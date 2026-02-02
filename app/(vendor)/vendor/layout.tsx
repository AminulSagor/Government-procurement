import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./_components/navbar";
import { VendorSidebar } from "./_components/vendor-sidebar";
import "../../globals.css";

const vendorSidebarItems = [
  {
    title: "Dashboard",
    url: "/vendor/dashboard",
    icon: "/icons/dashboard-icon.png",
  },
  {
    title: "Sales & Bidding",
    icon: "",
    children: [
      { title: "Quotation Inbox", url: "/vendor/dashboard/quotation-inbox" },
      { title: "My Bids", url: "/vendor/dashboard/my-bids" },
      { title: "Active Orders", url: "/vendor/dashboard/active-orders" },
    ],
  },
  { title: "Inventory", url: "/vendor/dashboard/inventory" },
  { title: "Finance & Payment Ledger", url: "/vendor/dashboard/ledger" },
  { title: "Live Activity Feed", url: "/vendor/dashboard/activity" },
  { title: "Account Settings",
     icon: "/icons/user-icon.png",
     url: "/vendor/dashboard/account-settings" },
];

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <VendorSidebar items={vendorSidebarItems} />

      <div className="min-h-screen w-full flex flex-col">
        <header className="sticky top-0 z-50 w-full">
          <Navbar />
        </header>

        <main className="flex-1 w-full bg-[#F8FAFC] p-3 md:p-4 lg:p-5">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
