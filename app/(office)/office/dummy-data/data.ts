export type ActivityType = "success" | "info" | "warning" | "neutral";

export type ActivityItem = {
  id: string;
  type: ActivityType;
  title: string;
  subtitle: string;
  timeAgo: string;
};

export const activityItems: ActivityItem[] = [
  {
    id: "1",
    type: "success",
    title: "ইনভয়েস #২১৪৪ অনুমোদিত",
    subtitle: "অর্থ মন্ত্রণালয় • সেন্টার ৪১",
    timeAgo: "২ ঘন্টা আগে",
  },
  {
    id: "2",
    type: "info",
    title: "নতুন বাজেট পুনর্বারদ্দ",
    subtitle: 'অবকাঠামো প্রকল্প "ডেল্টা"',
    timeAgo: "৫ ঘন্টা আগে",
  },
  {
    id: "3",
    type: "warning",
    title: "অডিট অ্যালার্ট: সেন্টার ১২",
    subtitle: "বেতন খাতে ব্যত্যয়তার থাকায়",
    timeAgo: "১ দিন আগে",
  },
  {
    id: "4",
    type: "neutral",
    title: "ইউজার লগইন: Admin_2",
    subtitle: "আইপি এবং লোকেশন লগ: ১৯২.১৬৮.১.১",
    timeAgo: "১ দিন আগে",
  },
];

//========= cart dummy data ==========//
export type CartItem = {
  id: string;
  icon: "paper" | "file" | "printer";
  title: string;
  meta: string; // e.g. "পরিমাণ: ২ রিম"
  price: number;
};

export const initialItems: CartItem[] = [
  {
    id: "1",
    icon: "paper",
    title: "সাদা কাগজ (A4)",
    meta: "পরিমাণ: ২ রিম",
    price: 520,
  },
  {
    id: "2",
    icon: "file",
    title: "প্লাস্টিক ফাইল",
    meta: "পরিমাণ: ১০ টি",
    price: 120,
  },
  {
    id: "3",
    icon: "printer",
    title: "অফিস চেয়ার",
    meta: "পরিমাণ: ১ টি",
    price: 15000,
  },
];
