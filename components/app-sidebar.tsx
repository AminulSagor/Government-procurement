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
import { SidebarItems } from "@/types/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ items }: { items: SidebarItems[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeUrl = React.useMemo(() => {
    const matches = items
      .filter((it) => pathname === it.url || pathname.startsWith(`${it.url}/`))
      .sort((a, b) => b.url.length - a.url.length);

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
    <Sidebar className="">
      <SidebarContent className="bg-white px-2 w">
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
                      <Link href={item.url} className="flex items-center gap-3">
                        {typeof item.icon === "string" && item.icon ? (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={22}
                            height={22}
                          />
                        ) : typeof item.icon === "function" ? (
                          <item.icon className="h-5 w-5" />
                        ) : null}

                        <span className={isActive ? "font-medium" : ""}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}

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
                      src={"/icons/logout-icon.png"}
                      alt={"logout-image"}
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
