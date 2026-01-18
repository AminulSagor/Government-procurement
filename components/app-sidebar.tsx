import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarItems } from "@/types/types";
import Image from "next/image";

export function AppSidebar({ items }: { items: SidebarItems[] }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      {/* ICON RENDER LOGIC */}
                      {typeof item.icon === "string" && item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                        />
                      ) : typeof item.icon === "function" ? (
                        <item.icon className="h-5 w-5" />
                      ) : null}

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
