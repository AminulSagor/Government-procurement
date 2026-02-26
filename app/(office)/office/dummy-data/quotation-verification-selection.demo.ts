import { QuotationVerificationPageData } from "@/app/(office)/office/types/quotation-verification-selection.types";

export const quotationVerificationDemo: QuotationVerificationPageData = {
  breadcrumb: [
    { label: "হোম", href: "/office/dashboard" },
    { label: "অর্ডার", href: "/office/dashboard/order-management" },
    { label: "অর্ডারের বিস্তারিত" },
  ],

  rfqId: "RFQ-2023-009",
  title: "দরপত্র যাচাই ও নির্বাচন",
  subtitle: "এর জন্য জমাকৃত দরপত্র পর্যালোচনা এবং ভেন্ডর নির্বাচন করুন।",
  topRightBtnText: "তুলনামূলক বিবরণী এক্সপোর্ট",

  products: [
    {
      id: "p1",
      title: "পণ্য ০১: অফিস চেয়ার",
      subtitle: "স্ট্যান্ডার্ড এক্সিকিউটিভ চেয়ার, এরগোনমিক মেশ ব্যাক।",
      quantity: 5,
      unitBudget: 30000,
      totalBudget: 150000,
      selectedQuoteId: "v1",
      quotes: [
        {
          id: "v1",
          vendorName: "মেসার্স করিম ফার্নিচার",
          vendorTagline: "যাচাইকৃত সরবরাহকারী",
          avatarLetter: "K",
          unitPrice: 22800,
          totalPrice: 114000,
          status: "within-budget",
          recommendation: "best",
        },
        {
          id: "v2",
          vendorName: "HATIL",
          vendorTagline: "প্রিমিয়াম ব্র্যান্ড",
          avatarLetter: "H",
          unitPrice: 30500,
          totalPrice: 152500,
          status: "over-budget",
          recommendation: "none",
        },
        {
          id: "v3",
          vendorName: "পার্টেক্স",
          vendorTagline: "লোকাল ব্র্যান্ড",
          avatarLetter: "P",
          unitPrice: 22950,
          totalPrice: 114750,
          status: "within-budget",
          recommendation: "none",
        },
      ],
    },

    {
      id: "p2",
      title: "পণ্য ০২: এক্সিকিউটিভ ডেস্ক",
      subtitle: "এল-আকৃতির কাঠের ডেস্ক, ড্রয়ার ইউনিটসহ, ফ্রেমিং × ফিটিং।",
      quantity: 2,
      unitBudget: 15000,
      totalBudget: 30000,
      selectedQuoteId: "v4",
      quotes: [
        {
          id: "v4",
          vendorName: "HATIL",
          vendorTagline: "প্রিমিয়াম ব্র্যান্ড",
          avatarLetter: "H",
          unitPrice: 14500,
          totalPrice: 29000,
          status: "within-budget",
          recommendation: "best",
        },
        {
          id: "v5",
          vendorName: "ব্রাদার্স ফার্নিচার",
          vendorTagline: "কাস্টম ম্যানুফ্যাকচারার",
          avatarLetter: "B",
          unitPrice: 15200,
          totalPrice: 30400,
          status: "over-budget",
          recommendation: "none",
        },
      ],
    },
  ],

  summary: {
    title: "নির্বাচিত পণ্যের সারাংশ",
    columns: {
      product: "পণ্যের নাম",
      vendor: "নির্বাচিত সরবরাহকারী",
      qty: "পরিমাণ",
      unit: "একক দর",
      total: "মোট খরচ",
    },
    draftBtnText: "খসড়া সংরক্ষণ",
  },
};
