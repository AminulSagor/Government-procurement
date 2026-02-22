export type CodeCreateFlowStep =
  | "select"
  | "parent_form"
  | "econ_form"
  | "success_parent"
  | "success_econ"
  | "parent_details"
  | "econ_details";

export type CodeKind = "PARENT" | "ECON";

export type EconomicCodeType = "PRODUCT" | "SERVICE" | "NON_PROCUREMENT";

export type ParentCategory = {
  parentCode4: string;
  expenseCategoryBangla: string;
  expenseCategoryEnglish: string;
  description?: string;
  isActive?: boolean;
};

export type EconomicCode = {
  economicCode7: string;
  codeNameBangla: string;
  codeNameEnglish: string;
  parentCode4: string;
  econType: EconomicCodeType;
  description?: string;
  isActive?: boolean;
};
