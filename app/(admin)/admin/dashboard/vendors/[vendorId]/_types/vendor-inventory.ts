export type StockStatus = "in_stock" | "out_stock";

export type InventoryItem = {
  id: string;
  title: string;
  subTitle: string;
  ibasCode: string;
  unitPrice: number;
  stock: number;
  status: StockStatus;
};

export type VendorInventorySummary = {
  totalListed: number;
  outOfStock: number;
  totalValueLakhs: number;
};

export type VendorInventoryFilters = {
  categories: string[];
  stockStatuses: string[];
};

export type VendorInventoryData = {
  vendorId: string;
  summary: VendorInventorySummary;
  filters: VendorInventoryFilters;
  items: InventoryItem[];
};