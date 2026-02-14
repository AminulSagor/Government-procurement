export type AdminSidebarItem = {
  title: string;
  url?: string;
  icon?: string; // image path
  children?: AdminSidebarItem[];
};
