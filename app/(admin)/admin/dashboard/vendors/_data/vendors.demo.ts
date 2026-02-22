import type { VendorRow, VendorStats, VendorsMeta } from "../_types/vendors.types";

export const demoVendorStats: VendorStats = {
  totalVendors: 450,
  registered: 420,
  pending: 30,
  totalSalesAmount: 82500000, // 8,25,00,000
};

export const demoVendorsMeta: VendorsMeta = {
  total: 450,
  page: 1,
  limit: 4,
  totalPages: 84,
};

export const demoVendorsRows: VendorRow[] = [
  {
    id: "v1",
    vendorId: "VEN-2024-001",
    vendorName: "New Age IT",
    ownerName: "Rahim Ahmed",
    location: "Dhaka",
    category: "নির্বাচিত নয়",
    totalNegotiatedItems: 0,
    totalSalesCount: 0,
    totalSalesAmount: 0,
    status: "pending",
  },
  {
    id: "v2",
    vendorId: "VEN-2024-002",
    vendorName: "M/s Rahim Traders",
    ownerName: "Abdur Rahim",
    location: "Noakhali",
    category: "মনিহারি (Stationery)",
    totalNegotiatedItems: 50,
    totalSalesCount: 165,
    totalSalesAmount: 1050000,
    status: "active",
  },
  {
    id: "v3",
    vendorId: "VEN-2024-003",
    vendorName: "Solution Tech Ltd",
    ownerName: "Kamal Uddin",
    location: "Sylhet",
    category: "আইটি সেবা",
    totalNegotiatedItems: 11,
    totalSalesCount: 89,
    totalSalesAmount: 520000,
    status: "active",
  },
  {
    id: "v4",
    vendorId: "VEN-2024-004",
    vendorName: "Bashundhara Paper Mills",
    ownerName: "Ahmed Akbar",
    location: "Chittagong",
    category: "মনিহারি (Stationery)",
    totalNegotiatedItems: 85,
    totalSalesCount: 441,
    totalSalesAmount: 4830000,
    status: "active",
  },
];
