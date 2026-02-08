export type LedgerStatus = "পরিশোধিত" | "প্রক্রিয়াধীন" | "ব্যর্থ";

export type LedgerRow = {
  id: string;
  dateText: string;
  transactionId: string;
  title: string;
  invoiceText: string;
  billAmount: number; // টাকা
  vatOrTax?: number; // +/- টাকা (optional)
  totalPaid: number; // টাকা
  status: LedgerStatus;
};

export type LedgerStatCard = {
  key: string;
  title: string;
  value: number;
  hint?: string;
  hintTone?: "green" | "amber" | "red" | "gray";
  icon: "wallet" | "trophy" | "scissors" | "calendar";
};
