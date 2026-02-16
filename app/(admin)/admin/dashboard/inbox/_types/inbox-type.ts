export type InboxTabKey = "budget" | "payment";

export type BudgetRow = {
  id: string;
  date: string;
  time: string;
  officeName: string;
  reportType: string;
  fiscalYear: string;
  codeCount: string;
  status: "Pending";
};

export type PaymentRow = {
  id: string;
  date: string;
  time: string;
  officeName: string;
  orderId: string;
  amount: string;
  paymentType: string;
  status: "Pending";
};