export type RefundType = "full" | "partial";

export type RefundStatus = "pending" | "in_review" | "approved";

export type RefundRequestQueueItem = {
  id: string; // internal
  orderId: string; // #REF-8892
  dateBn: string; // ২৪ অক্টোবর ২০২৪
  officeNameBn: string;
  officeCodeBn?: string; // কোড: ৩৫৫৫
  vendorNameBn: string;
  productSummaryBn: string; // ৪৫ পেপার (৫০ রিম)
  refundType: RefundType;
  amount: number; // 6000
  status: RefundStatus;
};