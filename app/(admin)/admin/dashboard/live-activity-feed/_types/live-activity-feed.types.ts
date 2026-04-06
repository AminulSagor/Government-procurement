// app/(admin)/analytics/live-activity-feed/_types/live-activity-feed.types.ts
export type LAFDot = "green" | "blue" | "orange" | "gray";

export type LAFActivityType =
  | "all"
  | "approved"
  | "new-opportunity"
  | "system-alert"
  | "payment-received"
  | "submitted";

export type LAFItem = {
  id: string;

  dot: LAFDot;

  titleBn: string;
  codeText?: string; // #INV-2023-09 etc
  descriptionBn: string;

  timeBn: string; // "১৬ আগস্ট ২০২১, ১০:৩৫ পূর্বাহ্ণ"
  statusLabel: string; // "Approved" etc (keep as screenshot)
  statusType: Exclude<LAFActivityType, "all">;

  rightActionText?: string; // "বিস্তারিত দেখুন"
  rightActionIcon?: "arrow" | "close";
  rightMetaText?: string; // "Bill #INV-2023-05"
};

export type LAFMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type LAFDemo = {
  header: {
    titleBn: string;
    titleEn: string;
    subtitleEn: string;
    searchPlaceholderBn: string;
    activityTypeLabel: string; // "Activity Type:"
  };

  typeOptions: { value: LAFActivityType; label: string }[];
  items: LAFItem[];
  meta: LAFMeta;
};
