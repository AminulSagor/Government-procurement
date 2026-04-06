export type OrderListStage =
  | "NEGOTIATION"
  | "PROCESSING"
  | "PAYMENT"
  | "SHIPMENT"
  | "FINAL_SETTLEMENT"
  | "COMPLETED";

export type FlowStepKey =
  | "requisition"
  | "discussion"
  | "office_confirmation"
  | "payment_verify"
  | "shipment"
  | "final_settlement";

export type PaymentVerifyTab = "office" | "vendor";

export type Money = {
  currency: "BDT";
  amount: number;
};

export type OrderListRow = {
  orderId: string;
  date: string;
  officeName: string;
  officeCode: string;
  economicCode: string;
  vendorName: string;
  total: Money;
  currentStage: OrderListStage;
};

export type PaymentStatus =
  | "PENDING"
  | "MATCHED"
  | "VERIFIED"
  | "REJECTED"
  | "COMPLETED";

export type PaymentTransaction = {
  id: string;
  date: string;
  refNo: string;
  amount: Money;
  status: PaymentStatus;
  receiptUrl?: string;
};

export type EvidenceFile = {
  id: string;
  name: string;
  sizeText: string;
  uploadedOn: string;
  url?: string;
};

export type PaymentVerification = {
  officeCode: string;
  payeeName: string;
  refNo: string;
  enteredAmount: Money;
  matchStatus: "MATCHED" | "UNMATCHED";
  notes: string;
  invoice: EvidenceFile;
  status: PaymentStatus;
  transactions: PaymentTransaction[];
  pendingAmount: Money;
  totalAmount: Money;
};

export type VendorPaymentStatus = "LOCKED" | "OPEN" | "PENDING" | "COMPLETED";

export type VendorBankInfo = {
  bankName: string;
  accountName: string;
  accountNo: string;
  routingNo: string;
  branchName: string;
};

export type VendorPaymentWorkspace = {
  status: VendorPaymentStatus;

  invoiceTotal: Money;

  officeAdvancePercent: number;
  officeAdvanceAmount: Money;

  vendorDuePercent: number;
  vendorDueAmount: Money;

  pendingAmount: Money;

  bank: VendorBankInfo;
};

export type ShipmentStatus =
  | "AGENT_REQUIRED"
  | "AGENT_ASSIGNED"
  | "IN_TRANSIT"
  | "DELIVERED";

export type DeliveryAgent = {
  id: string;
  name: string;
  phone: string;
  deliveriesCount: number;
  status: "ACTIVE" | "INACTIVE";
};

export type ShipmentInfo = {
  status: ShipmentStatus;
  agent?: DeliveryAgent;
  courierName?: string;
  trackingId?: string;
  estDelivery?: string;
  notes?: string;
  evidence?: EvidenceFile;
  officeReceivedNote?: string;
};

export type SettlementStatus = "PENDING_DETAIL" | "READY" | "CLOSED";

export type DeductionRow = {
  label: string;
  percentText: string;
  amount: Money;
};

export type SettlementSummary = {
  status: SettlementStatus;
  total: Money;
  cleared: Money;
  pending: Money;
  deductions: DeductionRow[];
  ledgerRows: Array<{
    date: string;
    refNo: string;
    amount: Money;
  }>;
};

export type RequisitionItem = {
  itemId: string;
  title: string;
  orderId: string;
  internalId: string;

  payment: {
    office: PaymentVerification;
    vendor: VendorPaymentWorkspace;
  };

  shipment: ShipmentInfo;
  settlement: SettlementSummary;
};

export type RequisitionCase = {
  reqId: string;
  officeName: string;
  createdAt: string;
  currentStep: FlowStepKey;
  steps: Array<{ key: FlowStepKey; label: string; done: boolean }>;
  items: RequisitionItem[];
};