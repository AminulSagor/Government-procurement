export type InventoryCategory = {
  id: string;
  name: string;
  count: number;
  isAll?: boolean;
};

export type StockStatus = "in_stock" | "out_of_stock" | "unavailable";

export type InventoryProduct = {
  id: string;
  categoryName: string;
  categoryMeta: string; // e.g. (1 of 2450)
  title: string;
  subtitle: string;
  price: number;
  unitLabel: string; // "/ unit" or "/ piece" or "/ month"
  status: StockStatus;
  imageType: "photo" | "placeholder";
  enabled: boolean; // toggle
};

export type InventoryStats = {
  totalItems: number;
  activeOffers: number;
  stockAlerts: number;
};
