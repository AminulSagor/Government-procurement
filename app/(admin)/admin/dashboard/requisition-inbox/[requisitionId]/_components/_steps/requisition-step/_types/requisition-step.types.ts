export type ReqItem = {
  id: string;
  nameBn: string;
  qtyBn: string;
};

export type ReqBudgetState = "OK" | "NOT_OK";

export type ReqBudget = {
  totalBudgetBn: string;
  requisitionAmountBn: string;
  state: ReqBudgetState;
  titleBn: string;
  noteBn: string;
};

export type ReqStepData = {
  items: ReqItem[];
  budget: ReqBudget;
  procurementMethodValue: string;
};
