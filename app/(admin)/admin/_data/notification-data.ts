import type { LucideIcon } from "lucide-react";
import { ClipboardList, FileText, CreditCard, Building2 } from "lucide-react";

export type NotificationItemType = {
  id: string;
  icon: LucideIcon;
  iconBg: string;     // circle bg
  iconColor: string;  // icon color
  title: string;
  desc?: string;
  time: string;
  unread?: boolean;
};

export const notificationList: NotificationItemType[] = [
  {
    id: "1",
    icon: ClipboardList,
    iconBg: "bg-[#FFF1E9]",
    iconColor: "text-[#F97316]",
    title: "ভেন্ডর যাচাই:",
    desc: "মোশার রহিম এন্টারপ্রাইজ-এর নতুন এনআইডি\nনথি আপলোড করা হয়েছে।",
    time: "১০ মিনিট আগে",
    unread: true,
  },
  {
    id: "2",
    icon: FileText,
    iconBg: "bg-[#EAF2FF]",
    iconColor: "text-[#2563EB]",
    title: "বরাদ্দ রিপোর্ট:",
    desc: "মোয়াখালী সদর উপজেলা থেকে সেপ্টেম্বার\nমাসের বাজেট রিপোর্ট জমা হয়েছে।",
    time: "১ ঘন্টা আগে",
    unread: true,
  },
  {
    id: "3",
    icon: CreditCard,
    iconBg: "bg-[#E9FBF2]",
    iconColor: "text-[#16A34A]",
    title: "পেমেন্ট রিকোয়েস্ট:",
    desc: "#REQ-8892 অর্ডারের ৫০% অগ্রিম\nপেমেন্ট অনুমোদনের জন্য অপেক্ষমান।",
    time: "৩ ঘন্টা আগে",
    unread: true,
  },
  {
    id: "4",
    icon: Building2,
    iconBg: "bg-[#EEF2F6]",
    iconColor: "text-[#64748B]",
    title: "সফটটেক সলিউশনস এর কাগজপত্র যাচাই সফল হয়েছে।",
    time: "গতকাল",
    unread: false,
  },
];
