import type { RefundRecentDecisionItem } from "../_types/refunds-recent-decisions.type";

export const REFUNDS_RECENT_DECISIONS_DATA: RefundRecentDecisionItem[] = [
  {
    id: "d1",
    status: "approved",
    titleBn: "রিফান্ড অনুমোদিত",
    descriptionBn: "অর্ডার #REF-9921 এর জন্য পূর্ণ রিফান্ড মঞ্জুর করা হয়েছে।",
    timeAgoBn: "২ মিনিট আগে",
  },
  {
    id: "d2",
    status: "rejected",
    titleBn: "রিফান্ড প্রত্যাখ্যাত",
    descriptionBn: "অর্ডার #REF-8832: অভিযোগের সম্পর্কে যথেষ্ট তথ্য নেই।",
    timeAgoBn: "১৫ মিনিট আগে",
  },
  {
    id: "d3",
    status: "arbitration",
    titleBn: "আর্বিট্রেশন শুরু",
    descriptionBn: "ভেন্ডর 'টেক সলিউশনস' এর সাথে শুনানি শুরু হয়েছে।",
    timeAgoBn: "১ ঘন্টা আগে",
  },
];