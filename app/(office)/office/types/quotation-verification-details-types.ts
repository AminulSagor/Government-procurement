export type Money = {
  amount: number;
  currencySymbol: string;
};

export type SupplierInfo = {
  name: string;
  ratingLabel: string;
  address: string;
};

export type TaxLine = {
  key: "vat" | "it" | "addVat";
  label: string;
  percent: number;
  amount: Money;
  dot: "blue" | "orange" | "red";
};

export type FinancialBreakdown = {
  budgetCode: string;
  unitPrice: Money;
  totalPrice: Money;
  proposalUnitPrice: Money;
  subTotal: Money;
  taxes: TaxLine[];
  grandTotal: Money;
  advanceTotal: Money;
  paymentTypeLabel: string;
  budgetNote: string;
};

export type WarrantyInfo = {
  years: number;
  note: string;
};

export type TimelineInfo = {
  supplierDays: number;
  supplierSubtitle: string;
  feasibleDays: number;
  feasibleSubtitle: string;
};

export type Attachment = {
  id: string;
  type: "pdf" | "image";
  title: string;
  meta: string;
};

export type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

export type ProductInfo = {
  title: string;
  itemCodeLabel: string;
  description: string;
  brand: string;
  model: string;
  images: ProductImage[];
};

export type QuotationVerificationDetails = {
  rfqCode: string;
  departmentLabel: string;
  statusLabel: string;
  supplier: SupplierInfo;
  product: ProductInfo;
  finance: FinancialBreakdown;
  timeline: TimelineInfo;
  warranty: WarrantyInfo;
  attachments: Attachment[];
};
