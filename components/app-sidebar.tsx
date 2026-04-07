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
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { SidebarItems } from "@/types/navigation";
import { logoutUser } from "@/utils/logout.utils";
import { IMAGE } from "@/constants/image-path";

export function AppSidebar({ items }: { items: SidebarItems[] }) {
  const pathname = usePathname();

  /* ---------------- active url ---------------- */
  const activeUrl = React.useMemo(() => {
    const matches = items
      .filter(
        (it) =>
          it.url && (pathname === it.url || pathname.startsWith(`${it.url}/`)),
      )
      .sort((a, b) => (b.url?.length ?? 0) - (a.url?.length ?? 0));

    return matches[0]?.url ?? "";
  }, [items, pathname]);

  /* ---------------- logout ---------------- */
  const handleLogout = async () => {
    logoutUser();
  };

  /* ---------------- render icon ---------------- */
  const renderIcon = (icon: SidebarItems["icon"], title: string) => {
    if (!icon) return null;

    // image path
    if (typeof icon === "string") {
      return <Image src={icon} alt={title} width={22} height={22} />;
    }

    // component icon
    const IconComponent = icon;
    return <IconComponent className="h-5 w-5" />;
  };

  /* ---------------- ui ---------------- */
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
                      className={`px-2 py-2 rounded-sm ${
                        isActive
                          ? "bg-primary-color text-white"
                          : "hover:bg-primary-color hover:text-white"
                      }`}
                    >
                      {item.url ? (
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          {renderIcon(item.icon, item.title)}
                          <span className={isActive ? "font-medium" : ""}>
                            {item.title}
                          </span>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 cursor-default">
                          {renderIcon(item.icon, item.title)}
                          <span className={isActive ? "font-medium" : ""}>
                            {item.title}
                          </span>
                        </div>
                      )}
                    </SidebarMenuButton>

                    {/* Children */}
                    {item.children?.length ? (
                      <SidebarMenu className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => {
                          const childActive = activeUrl === child.url;

                          return (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={child.url}
                                  className={`flex items-center gap-3 px-2 py-1 rounded-sm ${
                                    childActive
                                      ? "bg-primary-color text-white"
                                      : "hover:bg-primary-color hover:text-white"
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    ) : null}
                  </SidebarMenuItem>
                );
              })}

              {/* Logout */}
              <SidebarMenuItem className="border rounded-sm">
                <SidebarMenuButton
                  asChild
                  className="px-2 py-2 rounded-sm hover:bg-transparent hover:text-inherit"
                >
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="px-2 py-2 rounded-sm flex items-center gap-3 w-full hover:bg-primary-color cursor-pointer hover:text-red"
                  >
                    <Image
                      src={IMAGE.logout}
                      alt="logout"
                      width={22}
                      height={22}
                    />
                    Logout
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
