/* =====================================================
   Negotiation Assign Types
===================================================== */

export type RequisitionMeta = {
  officeNameBn: string;
  fiscalYearBn: string;
  requisitionNoBn: string;
  itemsCountBn: string;
  totalVendorsBn: string;
};

/* =====================================================
   Requisition Item (LEFT PANEL CARD)
===================================================== */

export type RequisitionItem = {
  id: string;

  nameBn: string;
  code: string;

  unitBn: string;
  qtyBn: string;

  estimatedPriceBn?: string;
  isActive?: boolean;

  /* 🔹 Office budget summary band (NEW UI) */
  unitPriceBn?: string;   // এককঃ ৳ ৩৫০
  totalPriceBn?: string;  // মোটঃ ৳ ১৭,৫০০

  /* 🔹 Budget analysis expandable section (NEW UI) */
  breakdown?: {
    baseBn?: string;        // একক দর
    vatBn?: string;         // ভ্যাট
    aitBn?: string;         // আইটি
    advanceVatBn?: string;  // অতিরিক্ত ভ্যাট
    finalUnitBn?: string;   // সর্বমোট একক দর
  };

  /* optional extra specs (if used elsewhere) */
  specLines?: {
    labelBn: string;
    valueBn: string;
  }[];
};

/* =====================================================
   Vendor Assign Table (RIGHT SIDE)
===================================================== */

export type VendorRow = {
  id: string;
  itemId: string;

  itemNameBn: string;
  itemCode: string;
  officeBudgetBn?: string;
  unitBn: string;
  vendorPriceBn: string;

  adminBudgetBn: string;

  status: "ok" | "warn";
  statusTextBn: string;
};

/* =====================================================
   Summary Cards
===================================================== */

export type SummaryCard = {
  id: string;
  titleBn: string;
  valueBn: string;
  subBn?: string;
  accent: "default" | "primary" | "green";
  percentBn?: string;
};


type BudgetBreakdown = {
  baseBn: string;        // একক দর
  vatBn: string;         // ভ্যাট (৫%)
  aitBn: string;         // আইটি (০%)
  advanceVatBn: string;  // অতিরিক্ত ভ্যাট (১%)
  finalUnitBn: string;   // সর্বমোট একক দর
  totalBudgetBn: string; // মোট বাজেট (বক্স)
};

export type ProductDetailsDialogItem = {
  nameBn: string;      // "এ৪ পেপার (A4 Paper)"
  qtyBn: string;       // "৫০"
  unitBn: string;      // "রিম"
  code: string;        // "3255101"
  specTextBn: string;  // left big text
  budget: BudgetBreakdown;
};