export type ProcurementMethodKey = "dpm" | "otm" | "rfq";

export type ProcurementMethod = {
  key: ProcurementMethodKey;
  label: string; // e.g. "DPM (Direct Procurement Method)"
};

export type CartBudgetInfo = {
  categoryBn: string; // "কম্পিউটার সামগ্রী"
  budgetCodeBn: string; // "৩২৫৫৩০৫"
  remainingBudget: number; // 1450
  usedRatio: number; // 0.55 (for progress)
};

export type CartItemType = "product" | "service";

export type CartItem = {
  id: string;
  title: string;
  code: string;
  stockLabel: string; // "STOCK: 45"
  type: CartItemType;

  unitPrice: number; // base unit price
  qty: number;

  vatPercent: number;
  aitPercent: number;
  serviceVatPercent: number;

  specText: string;
  attachmentLabel: string; // "PDF আপলোড করুন"

  recommendedRangeBn: string; // "রেঞ্জ: ৳ ৫০০ - ১,৫০০"
};

export type CartSlipLine = {
  id: string;
  title: string;
  qty: number;
  unitPrice: number;
  currency: "BDT";
};

export type CartSlip = {
  requisitionId: string; // "#REQ-2023-0892"
  lines: CartSlipLine[];
};