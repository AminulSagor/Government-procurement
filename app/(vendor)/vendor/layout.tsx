import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./_components/navbar";
import { VendorSidebar } from "../../../components/sidebars/vendor-sidebar";
import { vendorSidebarItems } from "@/constants/navigation-links";

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
