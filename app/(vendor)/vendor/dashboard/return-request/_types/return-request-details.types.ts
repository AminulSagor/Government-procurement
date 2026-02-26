// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_types/return-request-details.types.ts

export type StepKey =
  | "order_confirmed"
  | "return_approved"
  | "in_process"
  | "product_received";

export type Step = {
  key: StepKey;
  titleBn: string;
  titleEn?: string;
  done: boolean;
};

export type ShipmentStatus =
  | "shipment_initiated"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "product_received";

export type ShipmentEvent = {
  key: ShipmentStatus;
  titleBn: string;
  titleEn: string;
  noteBn?: string;
  dateText?: string; // optional small timestamp line
  done: boolean;
  active?: boolean;
};

export type ReturnStatus = "under_verification" | "approved" | "rejected";

export type MoneyLine = {
  labelBn: string;
  amountText: string;
  positive?: boolean;
};

export type ReturnRequestDetails = {
  requestNo: string; // #REQ-2025-08-015
  breadcrumbsBn: string; // "ক্রয় / অর্ডার / ..."
  headerBadgeBn: string; // "রিটার্ন অনুরোধ প্রাপ্ত"
  steps: Step[];

  shipment: {
    courierNameBn: string;
    trackingId: string;
    statusBn: string; // "পণ্য গ্রহণ (Received)"
    statusPill: { textBn: string; tone: "success" | "warning" | "neutral" };
    events: ShipmentEvent[];
  };

  returnCard: {
    titleBn: string; // "পণ্য ফেরত আবেদন"
    invoiceNo: string; // #RET-2025-08-020
    buyerNameBn: string;
    returnStatus: { textBn: string; status: ReturnStatus };
    ctaTextBn: string; // "আবেদন গ্রহণ করুন"
  };

  payment: {
    titleBn: string; // "পেমেন্ট স্ট্যাটাস ও বকেয়া"
    totalText: string; // "৳ ১,২৫,০০০"
    lines: MoneyLine[];
    grandText: string;
  };

  orderInfo: {
    titleBn: string; // "অর্ডার তথ্য"
    productName: string;
    qtyText: string;
    addressBn: string;
  };
};