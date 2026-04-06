export type RefundDecisionStatus = "approved" | "rejected" | "arbitration";

export type RefundRecentDecisionItem = {
  id: string;
  status: RefundDecisionStatus;
  titleBn: string;
  descriptionBn: string;
  timeAgoBn: string;
};