import { NavItem, SidebarItems } from "@/types/navigation";

//========office panel========//
export const OfficeSidebarItems: SidebarItems[] = [
  {
    title: "Dashboard",
    url: "/office/dashboard",
    icon: "/icons/dashboard-icon.png",
  },
  {
    title: "Budget Management",
    url: "/office/dashboard/budget-management",
  },
  { title: "Procurement", url: "/office/dashboard/procurement" },
  {
    title: "Order & Delivery",
    url: "/office/dashboard/order-management",
  },
  {
    title: "Report & Audit",
    url: "/office/dashboard/report&audit",
  },
  {
    title: "Account Settings",
    url: "/office/dashboard/account-settings",
    icon: "/icons/user-icon.png",
  },
];

export const officeNavItems: NavItem[] = [
  { label: "ড্যাশবোর্ড", href: "/office/dashboard" },
  { label: "ক্রয় (Procurement)", href: "/office/dashboard/procurement" },
  { label: "রিপোর্ট (Reports)", href: "/office/dashboard/report&audit" },
  { label: "অর্ডার (Orders)", href: "/office/dashboard/order-management" },
];

//========vendor panel========//
export const vendorSidebarItems: SidebarItems[] = [
  {
    title: "Dashboard",
    url: "/vendor/dashboard",
    icon: "/icons/dashboard-icon.png",
  },
  {
    title: "Sales & Bidding",
    children: [
      { title: "Quotation Inbox", url: "/vendor/dashboard/quotation-inbox" },
      { title: "My Bids", url: "/vendor/dashboard/my-bids" },
      { title: "Active Orders", url: "/vendor/dashboard/active-orders" },
      { title: "Return Requests", url: "/vendor/dashboard/return-request" },
    ],
  },
  { title: "Inventory", url: "/vendor/dashboard/inventory" },
  { title: "Finance & Payment Ledger", url: "/vendor/dashboard/ledger" },
  { title: "Live Activity Feed", url: "/vendor/dashboard/activity" },
  {
    title: "Account Settings",
    icon: "/icons/user-icon.png",
    url: "/vendor/dashboard/account-settings",
  },
];

export const vendorNavItems: NavItem[] = [
  { label: "ড্যাশবোর্ড", href: "/vendor/dashboard" },
  { label: "কোটেশন (Quotation)", href: "/vendor/dashboard/quotation" },
  { label: "ইনভেন্টরি (Inventory)", href: "/vendor/dashboard/inventory" },
  { label: "অর্ডার (Orders)", href: "/vendor/dashboard/orders" },
];

//========admin panel========//
export const adminSidebarItems: SidebarItems[] = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: "/icons/dashboard-icon.png",
  },
  {
    title: "Budget Report Management",
    url: "/admin/dashboard/budget-report-management",
  },
  { title: "IBASS Code", url: "/admin/dashboard/ibass-code" },
  { title: "Requisition Inbox", url: "/admin/dashboard/requisition-inbox" },
  { title: "Order Management", url: "/admin/dashboard/order-management" },
  { title: "Return Request", url: "/admin/dashboard/return-request" },
  { title: "Refunds", url: "/admin/dashboard/refunds" },
  { title: "Offices", url: "/admin/dashboard/offices" },
  { title: "Vendors", url: "/admin/dashboard/vendors" },
  { title: "Agents", url: "/admin/dashboard/agents" },
  { title: "Analytics", url: "/admin/dashboard/analytics" },
  { title: "Live Activity Feed", url: "/admin/dashboard/live-activity-feed" },
  {
    title: "Account Settings",
    url: "/admin/dashboard/account-settings/change-password",
    icon: "/icons/user-icon.png",
  },
  { title: "Logout", url: "/admin/logout", icon: "/icons/logout-icon.png" },
];

export const adminNavLinks: NavItem[] = [
  { label: "ড্যাশবোর্ড", href: "/admin/dashboard" },
  {
    label: "চাহিদাপত্র (Requisition)",
    href: "/admin/dashboard/requisition-inbox",
  },
  { label: "অর্ডার (Orders)", href: "/admin/dashboard/order-management" },
  { label: "এনালিটিক্স (Analytics)", href: "/admin/dashboard/analytics" },
];
