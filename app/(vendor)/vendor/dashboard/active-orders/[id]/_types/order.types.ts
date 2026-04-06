export type PaymentStatus = "pending_verification" | "advance_paid" | "paid";

export type OrderStatus = "confirmed" | "advance_paid" | "shipment" | "received";

export type BreakdownLine = { label: string; value: number };

export type OrderItem = {
  id: string;
  name: string;
  brand?: string;
  qtyLabel: string;

  unitPrice: number;
  totalPrice: number;
  breakdown: BreakdownLine[];

  vendorUnitPrice: number;
  vendorTotalPrice: number;
  vendorBreakdown: BreakdownLine[];
};

export type Order = {
  id: string;
  reqNo: string;
  lastUpdated: string;

  status: OrderStatus;
  paymentStatus: PaymentStatus;

  title: string;
  officeName: string;
  category: string;

  refCode: string;
  orderDateBn: string;

  totalPayable: number;
  advancePaid: number;

  items: OrderItem[];
  shipment?: ShipmentInfo;
};


export type ShipmentStatus =
  | "initiated"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "received";

export type ShipmentTrackingStep = {
  key: ShipmentStatus;
  titleBn: string;
  titleEn: string;
  time?: string;
  desc?: string;
};

export type ShipmentInfo = {
  courierName: string;
  trackingId: string;
  status: ShipmentStatus;
  steps: ShipmentTrackingStep[];
};
