export type ProductStatus = "in_stock" | "out_stock";

export type ProductDetails = {
  id: string;
  vendorId: string;

  title: string;
  subTitle: string; // category text
  ibasCode: string;

  status: ProductStatus;

  unitPrice: number;
  stock: number;

  description: string;

  images: string[]; // urls
};