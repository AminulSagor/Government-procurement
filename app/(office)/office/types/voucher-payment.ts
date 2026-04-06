export type VoucherPaymentStatus = "new" | "processing" | "approved";

export type VoucherPaymentStepKey = "info" | "upload" | "approval";

export type VoucherPaymentStep = {
  key: VoucherPaymentStepKey;
  titleBn: string;
  subtitleBn: string;
};

export type VoucherPaymentEntry = {
  orderId: string;
  lastUpdatedBn: string;
  statusBn: string;

  officeCode: string;
  payerName: string;
  amount: number;
  referenceNo: string;
  note: string;

  step: VoucherPaymentStepKey;
};