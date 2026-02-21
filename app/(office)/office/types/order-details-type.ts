export type OrderStepKey =
  | "confirmed"
  | "processing"
  | "in_transit"
  | "received";

export type OrderStatus = "active" | "shipped" | "previous" | "received";

export type PaymentType = "advance" | "final" | "refund";

export type PaymentHistoryItem = {
  id: string;
  dateText: string;
  typeLabel: string;
  type: PaymentType;
  amountText: string;
  docLabel?: string;
};

export type ShippingUpdateItem = {
  id: string;
  title: string;
  timeText: string;
  locationText?: string;
  isCurrent?: boolean;
};

export type OrderPartyInfo = {
  name: string;
  codeText: string;
  contactName: string;
  email: string;
  avatarColor?: "orange" | "green" | "teal" | "gold";
};

export type ShippingInfo = {
  courierName: string;
  trackingId: string;
  estimatedDeliveryText: string;
  agentNumberText: string;
  categoryCodeText: string;
};

export type OrderProduct = {
  id: string;
  name: string;
  subText?: string;
  codeText: string;
  qty: number;
  unitPriceText: string;
  totalText: string;
  unitVatText: string;
  totalVatText: string;
  iconType?: "laptop" | "mouse" | "cable" | "box";
};

export type OrderPaymentSummary = {
  totalPaidText: string;
  alreadyPaidText: string;
  alreadyPaidHintText?: string;
  dueText: string;
  dueHintText?: string;
};

export type OrderDetails = {
  id: string;
  ref: string;
  title: string;
  createdMetaText: string;
  statusLabel: string;
  status: OrderStatus;
  stepCurrent: OrderStepKey;

  party: OrderPartyInfo;
  shipping: ShippingInfo;

  paymentSummary: OrderPaymentSummary;
  paymentHistory: PaymentHistoryItem[];

  products: OrderProduct[];
  productsTotals: {
    subtotalText: string;
    totalVatText: string;
  };

  shippingUpdates?: ShippingUpdateItem[];

  canConfirmReceive?: boolean;
  canReportIssue?: boolean;
};
