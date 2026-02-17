export type OrderStage = "NEGOTIATION" | "COMPLETED" | "PAYMENT" | "PROCESSING";

export type OrderStatKey = "totalOrders" | "processing" | "paymentPending" | "completed";

export type OrderStatCard = {
  key: OrderStatKey;
  labelBn: string;
  value: number;
  iconBg: "blue" | "orange" | "red" | "green";
};

export type OrderRow = {
  id: string;
  orderId: string; // like #ORD-8892
  date: string; // 12/01/2025
  officeNameBn: string;
  officeId: string; // ID: DC-NOA-001
  economicCode: string;
  vendor: string;
  totalAmountBn: string; // ৳ ৫,৫০,০০০
  stage: OrderStage;
};

export type OrderFilterOptions = {
  economicCodes: { label: string; value: string }[];
  offices: { label: string; value: string }[];
  stages: { label: string; value: OrderStage | "all" }[];
};
