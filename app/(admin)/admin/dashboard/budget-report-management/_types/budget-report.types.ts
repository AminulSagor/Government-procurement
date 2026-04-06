export type BudgetStatus = "Pending" | "In Review" | "Approved";

export type BudgetStatCard = {
  id: "total" | "remaining" | "submitted" | "rejected";
  labelBn: string;
  value: number;
  suffixBn?: string; // ex: "মোট টাকা"
  chipText?: string; // ex: "+12.5%"
  iconType: "doc" | "cal" | "check" | "x";
  accent?: "primary" | "orange" | "green" | "red";
};

export type BudgetReportRow = {
  id: string;
  ministryBn: string;          // মন্ত্রণালয়/বিভাগ
  date: string;                // "12 Oct 2023"
  officeNameBn: string;        // দপ্তরের নাম
  officeSubBn?: string;        // optional sub text
  orgCode: string;             // প্রাতিষ্ঠানিক কোড
  itemCount: number;           // পণ্যের সংখ্যা
  amount: number;              // সর্বমোট ব্যয়
  status: BudgetStatus;
  actionLabelBn: string;       // "যাচাই করুন" / "রিভিউ দেখুন" etc
};

export type BudgetFiltersState = {
  officeCode: string;          // "all"
  hierarchy: string;           // "all"
  dateFrom: string;            // yyyy-mm-dd
  dateTo: string;              // yyyy-mm-dd
};
