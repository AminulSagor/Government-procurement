/* =========================
   Mock Data
========================= */

export const REPORTS: ReportRow[] = [
  {
    id: "#বাজেট-৮৫২০৪",
    fiscalYear: "২০২৩-২০২৪",
    officeCode: "২৩০৫০৮০০",
    totalBudget: 855000,
    hasPdf: true,
    status: "Approved",
    canDownload: true,
  },
  {
    id: "#বাজেট-৮৫২২৯",
    fiscalYear: "২০২৩-২০২৪",
    officeCode: "২৩০৫০৮৯২",
    totalBudget: 5230000,
    hasPdf: true,
    status: "Submitted",
    canEdit: true,
  },
  {
    id: "#বাজেট-৮৫২১৫",
    fiscalYear: "২০২২-২০২৩",
    officeCode: "৪৫২৯২৮০৫",
    totalBudget: 8426500,
    hasPdf: true,
    status: "Draft",
    canEdit: true,
    canDelete: true,
  },
  {
    id: "#বাজেট-৮৫২১০",
    fiscalYear: "২০২৩-২০২৪",
    officeCode: "২৩০৫০৮০০",
    totalBudget: 675000,
    hasPdf: true,
    status: "Approved",
    canDownload: true,
  },
  {
    id: "#বাজেট-৮৫২০২",
    fiscalYear: "২০২৩-২০২৪",
    officeCode: "৮০২৩০৮৫০",
    totalBudget: 1180000,
    hasPdf: true,
    status: "Submitted",
    canEdit: true,
  },
];

export const STATUS_FILTERS: Array<ReportStatus | "All"> = [
  "All",
  "Approved",
  "Submitted",
  "Draft",
];
