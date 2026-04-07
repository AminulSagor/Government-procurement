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
import { ChevronDown } from "lucide-react";
import { SidebarItems } from "@/types/navigation";
import { logoutUser } from "@/utils/logout.utils";

export function VendorSidebar({ items }: { items: SidebarItems[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  /* ---------------- helpers ---------------- */

  const isPathActive = React.useCallback(
    (url?: string) =>
      !!url && (pathname === url || pathname.startsWith(`${url}/`)),
    [pathname],
  );

  const activeKey = React.useMemo(() => {
    const hit = items.find((it) => {
      if (it.url && isPathActive(it.url)) return true;
      if (it.children?.length)
        return it.children.some((c) => isPathActive(c.url));
      return false;
    });
    return hit?.title ?? "";
  }, [items, isPathActive]);

  // auto open dropdown if any child active
  React.useEffect(() => {
    const dd = items.find(
      (it) =>
        it.children?.length && it.children.some((c) => isPathActive(c.url)),
    );
    if (dd) setOpenKey(dd.title);
  }, [items, isPathActive]);

  /* ---------------- logout ---------------- */

  const handleLogout = async () => {
    logoutUser();
  };

  /* ---------------- ui ---------------- */

  return (
    <Sidebar className="">
      <SidebarContent className="bg-white px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 mt-3">
              {items.map((item) => {
                const hasChildren = !!item.children?.length;
                const isActive =
                  activeKey === item.title ||
                  (item.url ? isPathActive(item.url) : false);

                // ---------------- dropdown parent ----------------
                if (hasChildren) {
                  const isOpen = openKey === item.title;

                  return (
                    <div key={item.title} className="space-y-2">
                      <SidebarMenuItem className="border rounded-sm">
                        <SidebarMenuButton
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : item.title)}
                          className={[
                            "px-2 py-2 rounded-sm w-full",
                            "hover:bg-primary-color hover:text-white",
                            "data-[active=true]:bg-primary-color data-[active=true]:text-white",
                            isActive ? "bg-primary-color text-white" : "",
                          ].join(" ")}
                          data-active={isActive}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
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
                            </div>

                            <ChevronDown
                              className={[
                                "h-4 w-4 transition-transform",
                                isOpen ? "rotate-180" : "",
                              ].join(" ")}
                            />
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      {/* dropdown children */}
                      {isOpen && (
                        <div className="space-y-2 pl-6">
                          {item.children!.map((child) => {
                            const childActive = isPathActive(child.url);

                            return (
                              <SidebarMenuItem
                                key={child.title}
                                className="border rounded-sm"
                              >
                                <SidebarMenuButton
                                  asChild
                                  className={[
                                    "px-2 py-2 rounded-sm",
                                    "hover:bg-primary-color hover:text-white",
                                    "data-[active=true]:bg-primary-color data-[active=true]:text-white",
                                    childActive
                                      ? "bg-primary-color text-white"
                                      : "",
                                  ].join(" ")}
                                  data-active={childActive}
                                >
                                  <Link
                                    href={child.url}
                                    className="flex items-center gap-3"
                                  >
                                    <span
                                      className={
                                        childActive ? "font-medium" : ""
                                      }
                                    >
                                      {child.title}
                                    </span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // ---------------- normal item ----------------
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
                      <Link
                        href={item.url || "#"}
                        className="flex items-center gap-3"
                      >
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
