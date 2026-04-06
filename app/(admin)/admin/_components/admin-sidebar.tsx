import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import AdminSidebarItemRow from "./admin-sidebar-item";
import { SidebarItems } from "@/types/navigation";

export function AdminSidebar({ items }: { items: SidebarItems[] }) {
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
