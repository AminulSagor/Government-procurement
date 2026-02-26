import { RefundStatItem } from "@/app/(admin)/admin/dashboard/refunds/_types/refund-stats-type";

export const REFUNDS_STATS_DATA: RefundStatItem[] = [
  {
    id: "totalReceived",
    titleBn: "মোট রিসিভড দাবি",
    value: 124,
    variant: "primary",
    iconKey: "clipboard",
  },
  {
    id: "receivedPending",
    titleBn: "রিসিভড পেন্ডিং",
    value: 18,
    variant: "orange",
    iconKey: "clock",
    highlighted: true,
  },
  {
    id: "totalReceivableAmount",
    titleBn: "মোট রিসিভযোগ্য অর্থ",
    value: "৳ ৪,৫০,০০০",
    variant: "green",
    iconKey: "money",
  },
  {
    id: "resolvedToday",
    titleBn: "নিষ্পত্তিকৃত (আজ)",
    value: 9,
    variant: "blue",
    iconKey: "badgeCheck",
  },
];
