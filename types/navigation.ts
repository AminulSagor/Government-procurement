import { ComponentType } from "react";

export interface SidebarChild {
  title: string;
  url: string;
}

export interface SidebarItems {
  title: string;
  url?: string;
  icon?: string | ComponentType<{ className?: string }>;
  children?: SidebarChild[];
}

export type NavItem = { label: string; href: string };
