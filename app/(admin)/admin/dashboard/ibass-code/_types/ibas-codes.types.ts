export type IBasTab = "parent" | "economic";

export type IbasStatus = "active" | "inactive" | "any";

export type EconomicType = "all" | "procurement_product" | "procurement_service" | "salary_allowance";

export interface ParentHeadItem {
  id: string;
  parentCode4: string; // 4-digit
  expenseCategoryBn: string;
  expenseCategoryEnglish: string;
  totalMappedEconomicCodes: number;
  status: Exclude<IbasStatus, "any">;
}

export interface EconomicCodeItem {
  id: string;
  economicCode7: string; // 7-digit
  nameBn: string;
  nameEn: string;
  parentCode4: string;
  parentTitleBn: string;
  type: Exclude<EconomicType, "all">;
  status: Exclude<IbasStatus, "any">;
}

export interface ParentFiltersState {
  q: string;
  status: IbasStatus;
}

export interface EconomicFiltersState {
  q: string;
  type: EconomicType;
  status: IbasStatus;
}

export interface FilterPopoverState {
  open: boolean;
  parentHeadSearch: string;
  status: IbasStatus;
}
