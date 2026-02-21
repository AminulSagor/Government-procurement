import type { OrderItemDetailsDialogItem } from "../types/order-items-details-dialog.type";

export const ORDER_ITEMS_DETAILS_DIALOG_MOCK: OrderItemDetailsDialogItem[] = [
  {
    id: "pr1",
    name: "ডেল ল্যাপটপ ৫৪২০",
    codeText: "কোড: ০২৫৬০১",
    categoryText: "ক্যাটাগরি: ল্যাপটপ",
    icon: "laptop",
    techTitle: "প্রযুক্তিগত বৈশিষ্ট্য",
    techDescription:
      "Intel Core i7 11th Gen প্রসেসর, ১৬ জিবি DDR4 র‍্যাম, ৫১২ জিবি NVMe SSD স্টোরেজ এবং ১৪ ইঞ্চি FHD (1920x1080) ডিসপ্লে।",
    techBullets: [
      "ইন্টেল আইরিস এক্স গ্রাফিক্স",
      "ব্যাকলিট কীবোর্ড এবং ফিঙ্গারপ্রিন্ট রিডার",
      "উইন্ডোজ ১০ প্রি-ইনস্টল করা",
      "৪-সেল ব্যাটারি এবং ফাস্ট চার্জিং সাপোর্ট",
    ],
    pricing: {
      qty: 5,
      regularUnitPriceText: "৳ ১,২০,০০০",
      vatUnitPriceText: "৳ ১,২৫,০০০",
      regularTotalText: "৳ ৬,০০,০০০",
      vatTotalText: "৳ ৬,২৫,০০০",
    },
  },
  {
    id: "pr2",
    name: "লজিটেক MX মাউস ৩",
    codeText: "কোড: ০২৫৬০২",
    categoryText: "ক্যাটাগরি: কম্পিউটার এক্সেসরিজ",
    icon: "mouse",
    techTitle: "প্রযুক্তিগত বৈশিষ্ট্য",
    techDescription:
      "অ্যাল্ট্রা-ফাস্ট ম্যাগস্পিড স্ক্রলিং হুইল, 8000 DPI, ডার্কফিল্ড সেন্সর যা কাঁচের উপরও নির্ভুলভাবে কাজ করে।",
    techBullets: ["এর্গোনোমিক ডিজাইন", "USB-C চার্জিং", "মাল্টি-ডিভাইস সাপোর্ট"],
    pricing: {
      qty: 5,
      regularUnitPriceText: "৳ ১০,৫০০",
      vatUnitPriceText: "৳ ১১,০০০",
      regularTotalText: "৳ ৫২,৫০০",
      vatTotalText: "৳ ৫৫,০০০",
    },
  },
];