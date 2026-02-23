export type DashboardHeaderData = {
  titleBn: string;
  subtitle: string;
  ctaLabel: string;
};

export type StatCardIconKey = "budget" | "spent" | "remaining";

export type StatCardData = {
  id: string;
  icon: "budget" | "spent" | "remaining";
  variant?: "default" | "teal" | "white";

  titleBn: string;
  titleEn: string;

  value: number | string;

  chip?: {
    bg?: string;
    icon?: "check" | "dot";
    label: string;
  };

  note?: string;
};

export type DashboardFilterState = {
  q: string;
  fiscalYear: string;
  status: "all" | "critical" | "moderate" | "on_track";
};

export type DepartmentRowData = {
  id: string;
  nameBn: string;
  officeBn: string;
  budget: string;
  spent: string;
  remaining: string;
  usagePct: number; // 0-100
  usageLabel: "Critical" | "Moderate" | "On Track";
};

export type PendingActionsData = {
  titleBn: string;
  total: number;
  subtitleBn: string;
  items: { labelBn: string; count: number; iconText: string }[];
};

export type QuickLinkData = {
  labelBn: string;
  href: string;
  badge?: number;

  iconKey: string;
  tone: string;
};
