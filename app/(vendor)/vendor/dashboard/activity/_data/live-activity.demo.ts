import { ActivityItem } from "../_types/live-activity.types";

export const demoActivities: ActivityItem[] = [
  {
    id: "a1",
    tone: "green",
    title: "অফিস পেমেন্ট অনুমোদন করেছে",
    refText: "#INV-2023-09",
    description:
      "আপনার ইনভয়েস পেমেন্ট অনুমোদিত হয়েছে। অফিস থেকে চূড়ান্ত যাচাই সম্পন্ন হলে আপনার একাউন্টে জমা হবে।",
    timeText: "১৬ আগস্ট ২০২৪, ১০:৩২ পূর্বাহ্ণ",
    status: "Approved",
    showDetails: true,
  },
  {
    id: "a2",
    tone: "blue",
    title: "নতুন দরপত্র আহবান: আইটি সার্ভিস সরবরাহ",
    refText: "#RFQ-8821",
    description:
      "নতুন একটি দরপত্র প্রকাশ করা হয়েছে। আপনার ক্যাটাগরি অনুযায়ী এটি প্রাসঙ্গিক। অংশগ্রহণ করতে বিস্তারিত দেখুন।",
    timeText: "১৫ আগস্ট ২০২৪, ০৯:০০ পূর্বাহ্ণ",
    status: "New Opportunity",
    showDetails: true,
  },
  {
    id: "a3",
    tone: "amber",
    title: "সিস্টেম আপডেটের জন্য বিজ্ঞপ্তি",
    refText: "",
    description:
      "আজ রাত ১২:০০ ঘটিকা পর্যন্ত IBAS+ সার্ভিস সাময়িকভাবে বন্ধ থাকতে পারে। জরুরি কাজ আগে সম্পন্ন করুন।",
    timeText: "১৫ আগস্ট ২০২৪, ০৮:০০ পূর্বাহ্ণ",
    status: "System Alert",
    showDetails: false,
    showDismiss: true,
  },
  {
    id: "a4",
    tone: "green",
    title: "ব্যাংক অ্যাকাউন্টে টাকা জমা হয়েছে",
    refText: "#INV-2023-05",
    description:
      "আপনার ব্যাংক অ্যাকাউন্টে (শেষ ৪ সংখ্যা: ১২৩৪) ৳ ৮,৫০,০০০ জমা হয়েছে। রেফারেন্স: Bill #INV-2023-05",
    timeText: "১৪ আগস্ট ২০২৪, ১১:৪৫ পূর্বাহ্ণ",
    status: "Payment Received",
    showDetails: true,
  },
  {
    id: "a5",
    tone: "gray",
    title: "বিড জমা দেয়া হয়েছে",
    refText: "#BID-9002",
    description:
      "আপনার বিড সফলভাবে জমা হয়েছে। প্রক্রিয়াধীন অবস্থায় আছে এবং পরবর্তীতে ফলাফল জানানো হবে।",
    timeText: "১৪ আগস্ট ২০২৪, ০৯:৩০ পূর্বাহ্ণ",
    status: "Submitted",
    showDetails: true,
  },
];
