export type VIStage =
  | "requisition"
  | "negotiation"
  | "office-confirm"
  | "payment-verify"
  | "shipment"
  | "final-settlement";

export const VI_STEPS: VIStage[] = [
  "requisition",
  "negotiation",
  "office-confirm",
  "payment-verify",
  "shipment",
  "final-settlement",
];

export function normalizeStep(v?: string | null): VIStage {
  const s = (v || "").toLowerCase();
  if (VI_STEPS.includes(s as VIStage)) return s as VIStage;
  return "requisition";
}


export type VIItem = {
  id: string;
  nameBn: string;
  qtyBn: string;
};

export type VIBudgetState = "OK" | "NOT_OK";

export type VIBudgetInfo = {
  totalBudgetBn: string; // ৮,৫০,০০০ ৳
  requisitionAmountBn: string; // ১,২০,০০০ ৳
  state: VIBudgetState; // OK => green, NOT_OK => red
  titleBn: string; // "তহবিল পর্যাপ্ত" / "তহবিল অপর্যাপ্ত"
  noteBn: string;
};

export type VIHeaderMeta = {
  officeBn: string;
  lotBn: string; // লট: ০৩৫৪
  dateBn: string; // ২৪ অক্টোবর ২০২৪
};

export type VIPageData = {
  requisitionId: string;
  titleEn: string; // VENDOR INVENTORY & OFFER ALLOCATION
  subtitleBn: string;
  meta: VIHeaderMeta;

  activeStage: VIStage;
  items: VIItem[];
  budget: VIBudgetInfo;

  procurementMethodTitleBn: string;
  procurementMethodValue: string; // DPM (Direct Procurement Method)
};
