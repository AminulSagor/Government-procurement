/* =========================
   Types
========================= */

type ReportStatus = "Approved" | "Submitted" | "Draft";

type ReportRow = {
  id: string; // e.g. "#বাজেট-৮৫২০৪"
  fiscalYear: string; // e.g. "২০২৩-২০২৪"
  officeCode: string; // e.g. "২৩০৫০৮০০"
  totalBudget: number; // store as number
  hasPdf: boolean;
  status: ReportStatus;
  canDownload?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
};

type StatItem = {
  title: string;
  value: number;
  icon: React.ReactNode;
};
