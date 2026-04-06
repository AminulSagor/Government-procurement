// app/(admin)/analytics/live-activity-feed/_data/live-activity-feed.demo.ts
import type { LAFDemo } from "../_types/live-activity-feed.types";

export const liveActivityFeedDemo: LAFDemo = {
  header: {
    titleBn: "লাইভ ফিড",
    titleEn: "Live Activity Feed",
    subtitleEn: "Track all your payments, bids, and system alerts in real-time.",
    searchPlaceholderBn: "কার্যক্রম খুঁজুন...",
    activityTypeLabel: "Activity Type:",
  },

  typeOptions: [
    { value: "all", label: "All" },
    { value: "approved", label: "Approved" },
    { value: "new-opportunity", label: "New Opportunity" },
    { value: "system-alert", label: "System Alert" },
    { value: "payment-received", label: "Payment Received" },
    { value: "submitted", label: "Submitted" },
  ],

  items: [
    {
      id: "a1",
      dot: "green",
      titleBn: "অফিস পেমেন্ট অনুমোদন করেছে",
      codeText: "#INV-2023-09",
      descriptionBn:
        "উপজেলা সমাজসেবা কার্যালয় আপনার পেমেন্ট ভাউচারটি অনুমোদন করেছে। বিলটি এখন একাউন্টিং শাখায় প্রক্রিয়াধীন আছে।",
      timeBn: "১৬ আগস্ট ২০২১, ১০:৩৫ পূর্বাহ্ণ",
      statusLabel: "Approved",
      statusType: "approved",
      rightActionText: "বিস্তারিত দেখুন",
      rightActionIcon: "arrow",
    },
    {
      id: "a2",
      dot: "blue",
      titleBn: "নতুন দরপত্র আহ্বান: আইসিটি সরঞ্জাম সরবরাহ",
      codeText: "",
      descriptionBn:
        "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ নতুন একটি দরপত্র #RFQ-8821 প্রকাশ করেছে। শেষ সময়: ১৯ আগস্ট ২০২১।",
      timeBn: "১৬ আগস্ট ২০২১, ০৯:০০ পূর্বাহ্ণ",
      statusLabel: "New Opportunity",
      statusType: "new-opportunity",
      rightActionText: "বিস্তারিত দেখুন",
      rightActionIcon: "arrow",
    },
    {
      id: "a3",
      dot: "orange",
      titleBn: "সিস্টেম রক্ষণাবেক্ষণের বিজ্ঞপ্তি",
      descriptionBn:
        "আগামী শুক্রবার রাত ১০:০০ টা থেকে রাত ১২:০০ টা পর্যন্ত IBAS+ সিস্টেম রক্ষণাবেক্ষণের জন্য বন্ধ থাকবে। জরুরি অনুরোধের জন্য সাপোর্টে যোগাযোগ করুন।",
      timeBn: "১৫ আগস্ট ২০২১, ০৯:০০ পূর্বাহ্ণ",
      statusLabel: "System Alert",
      statusType: "system-alert",
      rightMetaText: "সরিয়ে দিন",
      rightActionIcon: "close",
    },
    {
      id: "a4",
      dot: "green",
      titleBn: "ব্যাংক অ্যাকাউন্টে টাকা জমা হয়েছে",
      descriptionBn:
        "আপনার ব্যাংক অ্যাকাউন্ট (**** 1234) এ ৮,৫০,০০০ টাকা জমা হয়েছে (রেফারেন্স):",
      timeBn: "১৪ আগস্ট ২০২১, ১১:৪৫ পূর্বাহ্ণ",
      statusLabel: "Payment Received",
      statusType: "payment-received",
      rightMetaText: "Bill #INV-2023-05",
      rightActionText: "বিস্তারিত দেখুন",
      rightActionIcon: "arrow",
    },
    {
      id: "a5",
      dot: "gray",
      titleBn: "বিড জমা দেওয়া হয়েছে #BID-9002",
      descriptionBn:
        "শিক্ষা মন্ত্রণালয়ের 'সেকেন্ডারি কারিকুলাম' প্রকল্পের জন্য আপনার বিড সফলভাবে জমা হয়েছে।",
      timeBn: "১৪ আগস্ট ২০২১, ০৯:৩০ পূর্বাহ্ণ",
      statusLabel: "Submitted",
      statusType: "submitted",
      rightActionText: "বিস্তারিত দেখুন",
      rightActionIcon: "arrow",
    },
  ],

  meta: { total: 48, page: 1, limit: 5, totalPages: 8 },
};
