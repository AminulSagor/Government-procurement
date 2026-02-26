export interface SidebarItems {
  title: string;
  url?: string;
  icon?: string;
  children?: { title: string; url: string }[];
}

export type NavItem = { label: string; href: string };
