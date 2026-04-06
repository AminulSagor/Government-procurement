import {
  CartBudgetInfo,
  CartItem,
  CartSlip,
  ProcurementMethod,
} from "@/app/(office)/office/types/cart";

export const demoBudget: CartBudgetInfo = {
  categoryBn: "কম্পিউটার সামগ্রী",
  budgetCodeBn: "৩২৫৫৩০৫",
  remainingBudget: 1450,
  usedRatio: 0.55,
};

export const demoProcurementMethods: ProcurementMethod[] = [
  { key: "dpm", label: "DPM (Direct Procurement Method)" },
  { key: "otm", label: "OTM (Open Tendering Method)" },
  { key: "rfq", label: "RFQ (Request for Quotation)" },
];

export const demoCartItems: CartItem[] = [
  {
    id: "i-1",
    title: "A4 Paper (Double A, 80GSM)",
    code: "10255",
    stockLabel: "STOCK: 45",
    type: "product",
    unitPrice: 500,
    qty: 2,
    vatPercent: 5,
    aitPercent: 0,
    serviceVatPercent: 2,
    specText: "",
    attachmentLabel: "PDF আপলোড করুন",
    recommendedRangeBn: "রেঞ্জ: ৳ ৫০০ - ১,৫০০",
  },
  {
    id: "i-2",
    title: "Plastic File Folder (L-Shape)",
    code: "10255",
    stockLabel: "STOCK: 45",
    type: "service",
    unitPrice: 80,
    qty: 5,
    vatPercent: 0,
    aitPercent: 0,
    serviceVatPercent: 0,
    specText: "",
    attachmentLabel: "PDF আপলোড করুন",
    recommendedRangeBn: "রেঞ্জ: ৳ ৩০ - ৮০",
  },
];

export const demoSlip: CartSlip = {
  requisitionId: "#REQ-2023-0892",
  lines: [
    {
      id: "s-1",
      title: "A4 Paper (Double A)",
      qty: 2,
      unitPrice: 500,
      currency: "BDT",
    },
    {
      id: "s-2",
      title: "Plastic File Folder",
      qty: 5,
      unitPrice: 80,
      currency: "BDT",
    },
  ],
};
