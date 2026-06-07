export type CodeType = "parent" | "operational";

export type OperationalCodeType = "product" | "service" | "salary";

export type EconomicCodeFormType = "PRODUCT" | "SERVICE" | "NON_PROCUREMENT";

export type ParentCodeCreatePayload = {
  code: string;
  codeType: "parent";
  expenseCategoryBangla: string;
  expenseCategoryEnglish: string;
  details: string;
};

export type OperationalCodeCreatePayload = {
  code: string;
  codeType: "operational";
  codeNameBangla: string;
  codeNameEnglish: string;
  operationalCodeType: OperationalCodeType;
  details: string;
};

export type CodeCreateResponse = {
  id: string;
  code: string;
  codeType: CodeType;
  expenseCategoryBangla?: string;
  expenseCategoryEnglish?: string;
  codeNameBangla?: string;
  codeNameEnglish?: string;
  parentCode?: string;
  operationalCodeType?: OperationalCodeType;
  details?: string;
};

export type ParentCodeFormValues = {
  parentCode4: string;
  expenseCategoryBangla: string;
  expenseCategoryEnglish: string;
  details: string;
};

export type OperationalCodeFormValues = {
  economicCode7: string;
  codeNameBangla: string;
  codeNameEnglish: string;
  parentCode4: string;
  econType: EconomicCodeFormType;
  details: string;
};

export type GetParentCodesParams = {
  page?: number;
  limit?: number;
  status?: boolean;
  search?: string;
  filterCode?: string;
};

export type ParentCodeListItem = {
  type: "parent";
  code: string;
  expenseCategoryBangla: string;
  expenseCategoryEnglish: string;
  status: boolean;
  operationalCount: number;
  details?: string;
};

export type ParentCodesResponse = {
  success: boolean;
  statusCode: number;
  data: {
    data: ParentCodeListItem[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  timestamp: string;
  path: string;
};

export type GetOperationalCodesParams = {
  page?: number;
  limit?: number;
  status?: boolean;
  search?: string;
  operationalTypeFilter?: OperationalCodeType | "all";
  filterCode?: string;
};

export type OperationalCodeListItem = {
  type: "operational";
  code: string;
  codeNameBangla: string;
  codeNameEnglish: string;
  parentCode: string;
  expenseCategoryBangla: string;
  expenseCategoryEnglish: string;
  operationalCodeType: OperationalCodeType;
  status: boolean;
  details?: string;
};

export type OperationalCodesResponse = {
  success: boolean;
  statusCode: number;
  data: {
    data: OperationalCodeListItem[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  timestamp: string;
  path: string;
};
