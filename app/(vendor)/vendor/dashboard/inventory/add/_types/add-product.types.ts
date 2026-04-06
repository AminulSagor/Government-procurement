export type ItemType = "product" | "service";

export type AddProductForm = {
  masterSearch: string;
  useIbasDirect: boolean;

  itemType: ItemType;

  productName: string;
  ibasCode: string;
  unitPrice: string;
  availableQty: string;
  unit: string;

  active: boolean;

  description: string;

  imageFileName?: string;
};
