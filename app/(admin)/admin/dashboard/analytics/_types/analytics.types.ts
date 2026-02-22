export type StatTrend = {
  valueBn: string; // "+৮.৪%"
  labelBn: string; // "গত মাসের তুলনায়"
};

export type StatCard = {
  id: string;
  titleBn: string;
  valueBn: string; // "৮০২.৪০ কোটি"
  trend?: StatTrend;
  active?: boolean; // middle card selected look
};

export type ChartPoint = {
  key: string; // "জানুয়ারি"
  totalBn: number; // series 1
  profitBn: number; // series 2
};

export type AnalyticsHeaderData = {
  titleBn: string;
  subtitleBn: string;
  actionExportBn: string;
  dateBadgeBn: string;
};

export type ProfitRow = {
  id: string;
  dateBn: string;
  requisitionNo: string; // "#REQ-8892"
  officeBudgetBn: string; // "৫৫,০০০"
  vendorRateBn: string; // "৫০,০০০"
  systemSavingBn: string; // "+৪,০০০"
  vatTaxBn: string; // "-৯৫০"
  netProfitBn: string; // "+৩,১৫০"
};

export type TableMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type CashSettlement = {
  titleBn: string;
  subtitleBn: string;
  amountTitleBn: string;
  amountBn: string;
  ctaBn: string;
  noteBn: string;
};

export type AnalyticsFilters = {
  startDate: string;
  endDate: string;
  vendorId: "all" | string;
  officeId: "all" | string;
  minProfit: string;
  maxProfit: string;
};

export type ProfitTableData = {
  rows: ProfitRow[];
  meta: TableMeta;
  cashSettlement: CashSettlement;
};
