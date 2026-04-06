export type RequisitionStatus = "IN_PROGRESS" | "FULLY_ORDERED" | "NOT_STARTED";

export type StatCard = {
  key: "total" | "newOrUnassigned" | "inProgress" | "completed";
  titleBn: string;
  value: number;
  icon: "file" | "badge" | "hourglass" | "check";
  accent: "primary" | "secondary" | "green";
};

export type SelectOption = { label: string; value: string };

export type RequisitionRow = {
  id: string; // e.g. "REQ-2025-001"
  date: string; // "15/01/2025"
  officeNameBn: string;
  officeId: string; // e.g. "DC-DHK-101"
  economicCode: string; // e.g. "311101"
  productCountBn: string; // e.g. "১২ টি"
  totalAmountBn: string; // e.g. "৳ ৫,৫০,০০০"
  status: RequisitionStatus;
  statusHintBn?: string; // e.g. "৩ টি অর্ডার বাকি"
  actionDisabled?: boolean;
};

export type AdvancedFiltersState = {
  division: string;
  district: string;
  upazila: string;
  ministry: string;
  office: string;
  amountMin: string;
  amountMax: string;
  dateFrom: string;
  dateTo: string;
};

export type FiltersState = {
  q: string;
  economicCode: string; // "all" or code
  ministryOrDivision: string; // "all"
  status: "all" | RequisitionStatus;
  advanced: AdvancedFiltersState;
};

export type PaginationState = {
  page: number;
  pageSize: number;
  total: number;
};
