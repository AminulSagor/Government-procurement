export type BudgetEntryMeta = {
  fiscalYear: string;       // "২০২৪-২৫"
  uploadedAt: string;       // "১২ এপ্রিল ২০২৬"
  officeName: string;       // "উপজেলা সমাজসেবা কার্যালয়, ..."
};

export type BudgetSummary = {
  headsCount: number;       // 2
  totalBudget: string;      // "৳ ৬৬,০৮,০০০"
  remaining: string;        // "৳ ১৩,১০,৫৬৬"
};

export type BudgetRow = {
  code: string;             // "৩২৫৫"
  itemCode: string;         // "১০১"
  description: string;      // "কম্পিউটার সামগ্রী"

  // --- APPROVED (অনুমোদিত) ---
  approvedBudget: string;   // বাজেট
  approvedRevised: string;  // সংশোধিত
  approvedDivision: string; // বিভাজন
  approvedExpected: string; // প্রত্যাশার
  approvedTotal: string;    // মোট
  approvedExpense: string;  // ব্যয় (প্রকৃতপক্ষে)

  // --- ACTUAL (প্রকৃত ব্যয়) ---
  actualExpense: string;    // প্রকৃত ব্যয়
  remaining: string;        // অবশিষ্ট

  // --- RATE ---
  usageRatePct: string;     // "০%" / "২৫%"

  // --- UNAPPROVED (অননুমোদিত) ---
  unapprovedDivision: string; // বিভাজন
  unapprovedExpected: string; // প্রত্যাশার
};

export type BudgetHead = {
  headCode: string;         // "৩২৫৫"
  headTitle: string;        // "মুদ্রণ ও মনিহারি"
  itemsCount: number;       // ২
  totalBudget: string;      // "৳ ০৮৪"
  remaining: string;        // "৳ ১"

  rows: BudgetRow[];

  // subtotal row values (same column list)
  subtotal: Omit<BudgetRow, "code" | "itemCode" | "description" | "usageRatePct"> & {
    usageRatePct?: string; // optional for subtotal
  };
};
