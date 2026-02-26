import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/app/(office)/office/_components/navbar";
import { OfficeSidebarItems } from "@/constants/navigation-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar items={OfficeSidebarItems} />

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
