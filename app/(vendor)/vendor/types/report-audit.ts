/* ---------------- types (vendor only) ---------------- */

export type VendorSidebarChild = {
  title: string;
  url: string;
};

export type VendorSidebarItem = {
  title: string;
  url?: string; // dropdown parent can be optional
  icon?: string | React.ComponentType<{ className?: string }>;
  children?: VendorSidebarChild[];
};
