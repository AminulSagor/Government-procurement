export interface ProcurementProduct {
  id: string;
  code: string;
  name: string;
  description?: string;
  unit: string;
  unitPriceMin: number;
  unitPriceMax: number;
  quantity: number;
}

export interface ProcurementCategory {
  id: string;
  code: string;
  titleBn: string;
  titleEn: string;
  balance: number;
  isAvailable: boolean;
  products?: ProcurementProduct[];
  iconKey:
    | "stationery"
    | "computer"
    | "furniture"
    | "printing"
    | "cleaning"
    | "vehicle"
    | "electrical"
    | "medical";
}
