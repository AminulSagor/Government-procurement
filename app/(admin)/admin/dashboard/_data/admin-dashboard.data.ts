import {
  DashboardFilterState,
  DashboardHeaderData,
  DepartmentRowData,
  PendingActionsData,
  QuickLinkData,
  StatCardData,
} from "../_types/admin-dashboard.types";

export const demoDashboardHeader: DashboardHeaderData = {
  titleBn: "ড্যাশবোর্ড",
  subtitle:
    "Monitor budget allocation, expenditure, and utilization across all departments.",
  ctaLabel: "নতুন বাজেট অনুমোদন",
};

export const demoBudgetStats: StatCardData[] = [
  {
    id: "budget",
    icon: "budget",
    variant: "default",
    titleBn: "মোট বরাদ্দ",
    titleEn: "TOTAL BUDGET",
    value: 12450000000,
    chip: { bg: "bg-white", icon: "dot", label: "+5.2%" },
    note: "Increased from last FY",
  },
  {
    id: "spent",
    icon: "spent",
    variant: "default",
    titleBn: "মোট ব্যয়",
    titleEn: "TOTAL SPENT",
    value: 8932450000,
    chip: { bg: "bg-white", icon: "dot", label: "71.7% Used" },
    note: "of total budget",
  },
  {
    id: "remaining",
    icon: "remaining",
    variant: "teal",
    titleBn: "অবশিষ্টাংশ",
    titleEn: "REMAINING",
    value: 3517550000,
    chip: { bg: "bg-primary-color", icon: "check", label: "Healthy" },
    note: "Balance available",
  },
];

export const demoFilterState: DashboardFilterState = {
  q: "",
  fiscalYear: "2023-24",
  status: "all",
};

export const demoDepartments: DepartmentRowData[] = [
  {
    id: "102-3398-11933",
    nameBn: "তথ্য ও প্রযুক্তি বিভাগ",
    officeBn: "ঢাকা",
    budget: "৳ 12,00,00,000",
    spent: "৳ 11,40,00,000",
    remaining: "৳ 60,00,000",
    usagePct: 95,
    usageLabel: "Critical",
  },
  {
    id: "105-2201-44821",
    nameBn: "স্বাস্থ্যসেবা ও মানবসম্পদ",
    officeBn: "ঢাকা",
    budget: "৳ 8,50,00,000",
    spent: "৳ 6,37,50,000",
    remaining: "৳ 2,12,50,000",
    usagePct: 75,
    usageLabel: "Moderate",
  },
  {
    id: "201-9938-12003",
    nameBn: "স্থানীয় সরকার প্রকৌশল",
    officeBn: "চট্টগ্রাম",
    budget: "৳ 45,00,00,000",
    spent: "৳ 18,00,00,000",
    remaining: "৳ 27,00,00,000",
    usagePct: 40,
    usageLabel: "On Track",
  },
  {
    id: "305-1120-55921",
    nameBn: "প্রাথমিক ও গণশিক্ষা",
    officeBn: "রাজশাহী",
    budget: "৳ 22,00,00,000",
    spent: "৳ 11,00,00,000",
    remaining: "৳ 11,00,00,000",
    usagePct: 50,
    usageLabel: "On Track",
  },
  {
    id: "411-8822-00192",
    nameBn: "কৃষি উন্নয়ন",
    officeBn: "খুলনা",
    budget: "৳ 35,00,00,000",
    spent: "৳ 32,55,00,000",
    remaining: "৳ 2,45,00,000",
    usagePct: 93,
    usageLabel: "Critical",
  },
];

export const demoPendingActions: PendingActionsData = {
  titleBn: "পেন্ডিং অ্যাকশন",
  total: 12,
  subtitleBn: "আজকের জন্য প্রয়োজন",
  items: [
    { labelBn: "ভেন্ডর যাচাই", count: 5, iconText: "📦" },
    { labelBn: "বরাদ্দ রিপোর্ট যাচাই", count: 4, iconText: "💳" },
    { labelBn: "পেমেন্ট ক্লিয়ারেন্স", count: 3, iconText: "🧾" },
  ],
};

export const demoQuickLinks: QuickLinkData[] = [
  {
    href: "/x",
    labelBn: "ভেন্ডর যাচাই",
    badge: 5,
    iconKey: "vendor",
    tone: "orange",
  },
  {
    href: "/y",
    labelBn: "ব্র্যান্ড রিপোর্ট যাচাই",
    badge: 4,
    iconKey: "dealer",
    tone: "blue",
  },
  {
    href: "/z",
    labelBn: "পেমেন্ট ক্লিয়ারেন্স",
    badge: 3,
    iconKey: "payment",
    tone: "green",
  },
];
