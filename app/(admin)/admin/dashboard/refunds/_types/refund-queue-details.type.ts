export type RefundType = "full" | "partial";
export type RefundStatus = "pending" | "in_review" | "approved";

export type RefundRequestQueueItem = {
  id: string;
  orderId: string;
  dateBn: string;
  officeNameBn: string;
  officeCodeBn?: string;
  vendorNameBn: string;
  productSummaryBn: string;
  refundType: RefundType;
  amount: number;
  status: RefundStatus;
};

export type LeftTabKey = "due_settlement" | "vendor_due_payment";
export type RightTabKey = "settlement_details" | "refund_adjustment";

export type HeaderData = {
  reqCode: string; // #REQ-8892
  statusTextBn: string; // সমন্বয় প্রক্রিয়াধীন
  officePillLabelBn: string; // অফিস
  officeNameBn: string;
};

export type RequisitionItem = {
  id: string;
  titleBn: string;
  orderCode: string; // #ORD-4918
  internalIdBn: string; // ০২৫৫৫১১
  totalPrice: number;
  paidPercentTextBn: string; // ১০০% সম্পন্ন
  refundPercentTextBn?: string; // ২.৫% রিফান্ডেড
  isPaidDone: boolean;
};

export type SettlementSnapshot = {
  officeNameBn: string;
  officeCodeBn: string;
  budgetCodeBn: string;

  vendorNameBn: string;
  vendorTinBn: string;
  vendorBankMaskedBn: string;

  totalOfficeAmount: number;
  totalAdminCost: number;
  totalRefund: number;
  auditedProfit: number;

  payments: Array<{ dateBn: string; refNo: string; amount: number }>;

  vat: number;
  it: number;
  addVat: number;
};

export type RefundAdjustmentRow = {
  itemTitleBn: string;
  unitPrice: number;
  vatLabelBn: string;
  vatAmount: number;
  itLabelBn: string;
  itAmount: number;
  addVatLabelBn: string;
  addVatAmount: number;
  totalUnitPrice: number;
  refundStatusAmount: number;
};