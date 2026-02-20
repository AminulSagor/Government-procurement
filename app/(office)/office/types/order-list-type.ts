export type OrderListStatus =
  | "pending_quote"
  | "active"
  | "shipped"
  | "previous"
  | "draft";

export type OrderStepKey = "confirmed" | "processing" | "in_transit" | "received";

type BaseOrder = {
  id: string;
  ref: string;
  title: string;
  status: OrderListStatus;
  badgeLabel: string;
  meta1?: string;
  meta2?: string;
};

export type ActiveOrShippedOrder = BaseOrder & {
  status: "active" | "shipped" | "previous";
  stepCurrent?: OrderStepKey;
  totalAmountText: string;
  dueAmountText: string;
  trackingCode?: string;
};

export type PendingQuoteOrder = BaseOrder & {
  status: "pending_quote";
  quotesReceivedCount: number;
  peopleCount?: number;
};

export type DraftOrder = BaseOrder & {
  status: "draft";
  dueDateText?: string;
  itemsAddedText?: string;
};

export type Orders = ActiveOrShippedOrder | PendingQuoteOrder | DraftOrder;
