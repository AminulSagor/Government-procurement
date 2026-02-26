"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SidebarItems } from "@/types/navigation";

export function AppSidebar({ items }: { items: SidebarItems[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeUrl = React.useMemo(() => {
    const matches = items
      .filter(
        (it) =>
          it.url && (pathname === it.url || pathname.startsWith(`${it.url}/`)),
      )
      .sort((a, b) => (b.url?.length ?? 0) - (a.url?.length ?? 0));

    return matches[0]?.url ?? "";
  }, [items, pathname]);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch {}

    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    router.push("/login");
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-white px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 mt-3">
              {items.map((item) => {
                const isActive = activeUrl === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className="border rounded-sm"
                  >
                    <SidebarMenuButton
                      asChild
                      className={[
                        "px-2 py-2 rounded-sm",
                        "hover:bg-primary-color hover:text-white",
                        "data-[active=true]:bg-primary-color data-[active=true]:text-white",
                        isActive ? "bg-primary-color text-white" : "",
                      ].join(" ")}
                      data-active={isActive}
                    >
                      {item.url ? (
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          {item.icon && (
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={22}
                              height={22}
                            />
                          )}
                          <span className={isActive ? "font-medium" : ""}>
                            {item.title}
                          </span>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 cursor-default">
                          {item.icon && (
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={22}
                              height={22}
                            />
                          )}
                          <span className={isActive ? "font-medium" : ""}>
                            {item.title}
                          </span>
                        </div>
                      )}
                    </SidebarMenuButton>

                    {/* Render children if any */}
                    {item.children && item.children.length > 0 && (
                      <SidebarMenu className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <Link
                                href={child.url}
                                className={`flex items-center gap-3 px-2 py-1 rounded-sm hover:bg-primary-color hover:text-white ${
                                  activeUrl === child.url
                                    ? "bg-primary-color text-white"
                                    : ""
                                }`}
                              >
                                {child.title}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    )}
                  </SidebarMenuItem>
                );
              })}

              {/* Logout */}
              <SidebarMenuItem className="border rounded-sm">
                <SidebarMenuButton
                  asChild
                  className="px-2 py-2 rounded-sm hover:bg-primary-color hover:text-white"
                >
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full cursor-pointer"
                  >
                    <Image
                      src="/icons/logout-icon.png"
                      alt="logout"
                      width={22}
                      height={22}
                    />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
