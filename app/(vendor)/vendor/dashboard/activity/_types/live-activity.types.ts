export type ActivityType = "All" | "Payment" | "Bid" | "System";

export type ActivityTone = "green" | "blue" | "amber" | "gray";

export type ActivityStatus =
  | "Approved"
  | "New Opportunity"
  | "System Alert"
  | "Payment Received"
  | "Submitted";

export type ActivityItem = {
  id: string;
  tone: ActivityTone;
  title: string; // bold line
  refText: string; // like #INV-2023-09 / #RFQ-8821 / #BID-9002
  description: string; // small paragraph
  timeText: string; // left meta
  status: ActivityStatus; // badge text
  showDetails: boolean; // show "বিস্তারিত দেখুন →"
  showDismiss?: boolean; // show "সরিয়ে দিন ×"
};
