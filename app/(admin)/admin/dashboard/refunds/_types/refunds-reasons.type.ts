export type RefundReasonId = "damaged" | "orderCancel" | "wrongSupply";

export type RefundReasonItem = {
  id: RefundReasonId;
  labelBn: string;
  cases: number;
};