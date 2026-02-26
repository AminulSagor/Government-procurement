import { QuotationAwaitingPageData } from "@/app/(office)/office/types/quotation-awaiting.types";

export const quotationAwaitingDemo: QuotationAwaitingPageData = {
  top: {
    backLabel: "ফিরে যান",
    statusLabel: "অনুমোদনের অপেক্ষায় (Awaiting Approval)",
    budgetCodeLabel: "বাজেট কোডঃ ০২৩৫৫৫০৫",
    balanceLabel: "অবশিষ্ট বাজেট",
    balanceAmountText: "৯,৫৮০ ৳",
    progressValue: 38,
    warningText:
      "ভেন্ডর পক্ষ থেকে কোনো কোটেশন পাঠানো হয়নি (No quotation was sent from the vendor's side)",
  },

  sectionTitle: "দাখিলকৃত পণ্য তালিকা (Finalized Items)",

  items: [
    {
      id: "item-1",
      title: "A4 Paper (Double A, 80GSM)",
      code: "10255",
      stageLabel: "স্টেজঃ ৪৫",
      tagLabel: "পণ্য",

      specificationLabel: "স্পেসিফিকেশন (SPECIFICATION)",
      specificationValue: "80 GSM, 500 Sheets per ream, White",

      attachmentLabel: "ফাইল (ATTACHMENT)",
      attachment: { label: "A4_Spec_Final.pdf" },

      unitPriceLabel: "ইউনিট মূল্য",
      unitPrice: 500,

      vatLabel: "ভ্যাট (%)",
      vatPercent: 5,

      aitLabel: "এআইটি (%)",
      aitPercent: 3,

      additionalVatLabel: "অতিরিক্ত ভ্যাট (%)",
      additionalVatPercent: 2,

      totalUnitLabel: "সর্বমোট একক মূল্য",
      totalUnit: 550,

      quantityLabel: "পরিমাণ",
      quantity: 2,

      estimatedTotalLabel: "আনুমানিক মোট বাজেট",
      estimatedTotal: 1100,
    },
    {
      id: "item-2",
      title: "Plastic File Folder (L-Shape)",
      code: "22019",
      stageLabel: "স্টেজঃ ১২০",
      tagLabel: "পণ্য",

      specificationLabel: "স্পেসিফিকেশন (SPECIFICATION)",
      specificationValue: "Clear transparent, A4 size",

      attachmentLabel: "ফাইল (ATTACHMENT)",
      attachment: { label: "সংযুক্ত ফাইল নেই" },

      unitPriceLabel: "ইউনিট মূল্য",
      unitPrice: 40,

      vatLabel: "ভ্যাট (%)",
      vatPercent: 0,

      aitLabel: "এআইটি (%)",
      aitPercent: 0,

      additionalVatLabel: "অতিরিক্ত ভ্যাট (%)",
      additionalVatPercent: 0,

      totalUnitLabel: "সর্বমোট একক মূল্য",
      totalUnit: 40,

      quantityLabel: "পরিমাণ",
      quantity: 5,

      estimatedTotalLabel: "আনুমানিক মোট বাজেট",
      estimatedTotal: 200,
    },
  ],

  slip: {
    title: "Requisition Slip",
    subtitle: "Allocated Budget Breakdown • ID: #REQ-2024-001",
    columnsLeft: "ITEM DETAILS (QTY X PRICE)",
    columnsRight: "ITEM TOTAL",
    items: [
      {
        id: "s1",
        name: "A4 Paper (Double A)",
        qty: 2,
        unitPrice: 550,
        total: 1100,
        metaLine: "ভ্যাট: ৫.০০, এআইটি: ৩.০০, অতিরিক্ত ভ্যাট: ২.০০",
      },
      {
        id: "s2",
        name: "Plastic File Folder",
        qty: 5,
        unitPrice: 40,
        total: 200,
        metaLine: "ভ্যাট: ০.০০, এআইটি: ০.০০, অতিরিক্ত ভ্যাট: ০.০০",
      },
    ],
    subtotalLabel: "উপ-মোট (Subtotal)",
    subtotalText: "১,৩০০.০০ ৳",
    totalLabel: "সর্বমোট (Total Estimate)",
    totalText: "১,৩০০.০০ ৳",
    procurementMethodLabel: "ক্রয় পদ্ধতি (PROCUREMENT METHOD)",
    procurementMethodValue: "DPM (Direct Procurement Method)",
    primaryBtnText: "চাহিদাপত্র প্রিন্ট করুন",
    secondaryBtnText: "পূর্ববর্তী পাতায় ফিরে যান",
  },
};
