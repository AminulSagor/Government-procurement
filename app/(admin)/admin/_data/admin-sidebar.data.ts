import { AdminSidebarItem } from "../_types/admin-sidebar.types";


export const adminSidebarItems: AdminSidebarItem[] = [
  { title: "Dashboard", url: "/admin/dashboard", icon: "/icons/dashboard-icon.png" },

  { title: "Budget Report Management", url: "/admin/dashboard/budget-report-management" },
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

  { title: "Account Settings", url: "/admin/dashboard/account-settings/change-password", icon: "/icons/user-icon.png" },
  { title: "Logout", url: "/admin/logout", icon: "/icons/logout-icon.png" },
];
