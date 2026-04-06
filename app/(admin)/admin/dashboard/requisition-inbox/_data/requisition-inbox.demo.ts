import {
  FiltersState,
  PaginationState,
  RequisitionRow,
  SelectOption,
  StatCard,
} from "../_types/requisition-inbox.types";

export const statCards: StatCard[] = [
  {
    key: "total",
    titleBn: "মোট চাহিদাপত্র",
    value: 450,
    icon: "file",
    accent: "primary",
  },
  {
    key: "newOrUnassigned",
    titleBn: "নতুন/অ্যাসাইনডনয়",
    value: 42,
    icon: "badge",
    accent: "secondary",
  },
  {
    key: "inProgress",
    titleBn: "কাজের চলমান",
    value: 110,
    icon: "hourglass",
    accent: "secondary",
  },
  {
    key: "completed",
    titleBn: "সম্পূর্ণ ক্রয়াদেশ",
    value: 298,
    icon: "check",
    accent: "green",
  },
];

export const demoRows: RequisitionRow[] = [
  {
    id: "REQ-2025-001",
    date: "15/01/2025",
    officeNameBn: "জেলা প্রশাসকের কার্যালয়, ঢাকা",
    officeId: "DC-DHK-101",
    economicCode: "311101",
    productCountBn: "১২ টি",
    totalAmountBn: "৳ ৫,৫০,০০০",
    status: "IN_PROGRESS",
    statusHintBn: "৩ টি অর্ডার বাকি",
  },
  {
    id: "REQ-2025-002",
    date: "14/01/2025",
    officeNameBn: "উপজেলা মাধ্যমিক শিক্ষা অফিস",
    officeId: "USEO-SAV-04",
    economicCode: "221101",
    productCountBn: "০৫ টি",
    totalAmountBn: "৳ ১,২০,০০০",
    status: "FULLY_ORDERED",
    actionDisabled: true,
  },
  {
    id: "REQ-2025-005",
    date: "12/01/2025",
    officeNameBn: "সিভিল সার্জন কার্যালয়, গাজীপুর",
    officeId: "CS-GZP-01",
    economicCode: "311113",
    productCountBn: "০৮ টি",
    totalAmountBn: "৳ ৮৪,০০০",
    status: "NOT_STARTED",
  },
  {
    id: "REQ-2025-009",
    date: "10/01/2025",
    officeNameBn: "মৎস্য অধিদপ্তর, সদর দপ্তর",
    officeId: "DOF-HQ-22",
    economicCode: "311105",
    productCountBn: "৫০ টি",
    totalAmountBn: "৳ ১৫,২০,০০০",
    status: "IN_PROGRESS",
    statusHintBn: "২ টি অর্ডার বাকি",
  },
];

export const economicCodeOptions: SelectOption[] = [
  { label: "অর্থনৈতিক কোড (All)", value: "all" },
  { label: "311101", value: "311101" },
  { label: "221101", value: "221101" },
  { label: "311113", value: "311113" },
  { label: "311105", value: "311105" },
];

export const ministryOrDivisionOptions: SelectOption[] = [
  { label: "মন্ত্রণালয়/বিভাগ (All)", value: "all" },
  { label: "সকল মন্ত্রণালয়", value: "all_ministry" },
  { label: "সকল বিভাগ", value: "all_division" },
];

export const statusOptions: SelectOption[] = [
  { label: "ক্রয়াদেশ স্থিতি (All)", value: "all" },
  { label: "IN PROGRESS", value: "IN_PROGRESS" },
  { label: "FULLY ORDERED", value: "FULLY_ORDERED" },
  { label: "NOT STARTED", value: "NOT_STARTED" },
];

export const initialFilters: FiltersState = {
  q: "",
  economicCode: "all",
  ministryOrDivision: "all",
  status: "all",
  advanced: {
    division: "",
    district: "",
    upazila: "",
    ministry: "",
    office: "",
    amountMin: "",
    amountMax: "",
    dateFrom: "",
    dateTo: "",
  },
};

export const initialPagination: PaginationState = {
  page: 1,
  pageSize: 10,
  total: 450,
};
