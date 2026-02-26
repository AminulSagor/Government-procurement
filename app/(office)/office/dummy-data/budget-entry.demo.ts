import {
  BudgetEntryMeta,
  BudgetHead,
  BudgetSummary,
} from "@/app/(office)/office/types/budget-entry.types";

export const demoMeta: BudgetEntryMeta = {
  fiscalYear: "২০২৪-২৫",
  uploadedAt: "১২ এপ্রিল ২০২৬",
  officeName: "উপজেলা সমাজসেবা কার্যালয়, রোয়াংছড়ি সদর, রোয়াংছড়ি",
};

export const demoSummary: BudgetSummary = {
  headsCount: 2,
  totalBudget: "৳ ৬৬,০৮,০০০",
  remaining: "৳ ১৩,১০,৫৬৬",
};

export const demoHeads: BudgetHead[] = [
  {
    headCode: "৩২৫৫",
    headTitle: "মুদ্রণ ও মনিহারি",
    itemsCount: 2,
    totalBudget: "৳ ০৮৪",
    remaining: "৳ ১",
    rows: [
      {
        code: "৩২৫৫",
        itemCode: "১০১",
        description: "কম্পিউটার সামগ্রী",

        approvedBudget: "০",
        approvedRevised: "০",
        approvedDivision: "০৩২",
        approvedExpected: "০",
        approvedTotal: "০৩২",
        approvedExpense: "০",

        actualExpense: "০৩২",
        remaining: "০",
        usageRatePct: "০%",

        unapprovedDivision: "০",
        unapprovedExpected: "০",
      },
      {
        code: "৩২৫৫",
        itemCode: "১০২",
        description: "স্ট্যাপল ও পিন",

        approvedBudget: "০",
        approvedRevised: "০",
        approvedDivision: "২৪",
        approvedExpected: "০",
        approvedTotal: "২০",
        approvedExpense: "০",

        actualExpense: "২০",
        remaining: "১",
        usageRatePct: "২৫%",

        unapprovedDivision: "০",
        unapprovedExpected: "০",
      },
    ],
    subtotal: {
      approvedBudget: "৮০",
      approvedRevised: "৮০",
      approvedDivision: "৮০৪৪",
      approvedExpected: "৮০",
      approvedTotal: "৮০২০",
      approvedExpense: "৮০",

      actualExpense: "৮০২০",
      remaining: "৮১",

      unapprovedDivision: "৮০",
      unapprovedExpected: "৮০",
    },
  },
  {
    headCode: "৩২১১",
    headTitle: "প্রশাসনিক ব্যয়",
    itemsCount: 7,
    totalBudget: "৳ ২৮৯",
    remaining: "৳ ১০২",
    rows: [],
    subtotal: {
      approvedBudget: "০",
      approvedRevised: "০",
      approvedDivision: "০",
      approvedExpected: "০",
      approvedTotal: "০",
      approvedExpense: "০",

      actualExpense: "০",
      remaining: "০",

      unapprovedDivision: "০",
      unapprovedExpected: "০",
    },
  },
];
