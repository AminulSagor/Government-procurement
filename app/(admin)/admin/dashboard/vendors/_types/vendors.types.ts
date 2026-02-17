export type VendorStatus = "pending" | "active";

export type VendorCategory =
  | "নির্বাচিত নয়"
  | "মনিহারি (Stationery)"
  | "আইটি সেবা"
  | "আসবাবপত্র"
  | "অন্যান্য";

export interface VendorStats {
  totalVendors: number;
  registered: number;
  pending: number;
  totalSalesAmount: number; // number in BDT
}

export interface VendorRow {
  id: string; // internal id
  vendorId: string; // shown id e.g. VEN-2024-001
  vendorName: string;

  ownerName: string;
  location: string;
  category: VendorCategory;

  totalNegotiatedItems: number; // screenshot-ish column
  totalSalesCount: number;
  totalSalesAmount: number;

  status: VendorStatus;
}

export interface VendorsMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface VendorsFiltersState {
  q: string;
  status: "all" | VendorStatus;
  category: "all" | VendorCategory;
}
