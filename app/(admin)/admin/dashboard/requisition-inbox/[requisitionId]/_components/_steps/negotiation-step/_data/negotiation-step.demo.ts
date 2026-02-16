import { NegStepData } from "../_types/negotiation-step.types";

export const negotiationDemo: NegStepData = {
  miniStep: "selected-items",

  leftCards: [
    {
      id: "c1",
      titleBn: "এ৪ পেপার (A4 Paper)",
      subTitleBn: "ID: ০২৫৮৩০১",
      unitPriceBn: "একক মূল্য: ৳ ৮৬০",
      totalBn: "মোট: ৳ ৮৬০০",
      isActive: true,
    },
    {
      id: "c2",
      titleBn: "ক্লিয়ার ফাইল (Clear File)",
      subTitleBn: "ID: ০২৫৮৩০২",
      unitPriceBn: "একক মূল্য: ৳ ৩০",
      totalBn: "মোট: ৳ ৬০০",
      isActive: false,
      disabled: true,
    },
  ],

  filters: {
    qPlaceholderBn: "ভেন্ডর খুঁজুন...",
    select1LabelBn: "নোয়াখালী",
    select2LabelBn: "সদর উপজেলা",
    select3LabelBn: "পণ্য অনুযায়ী অনুসন্ধান",
  },

  header: {
    officeTitleBn: "মেসার্স রহিম এন্টারপ্রাইজ",
    officeSubTitleBn: "সদর উপজেলা, নোয়াখালী",
    tagBn: "অফারকৃত: ০১-০৩",
  },

  table: {
    columns: ["আইটেম", "অর্থনৈতিক কোড", "ইনভেন্টরি স্থিতি", "ভেন্ডর মূল্য"],
    rows: [
      {
        id: "r1",
        itemBn: "এ৪ পেপার",
        economicCode: "৩২৫৮৩০১",
        inventoryStatus: "IN_STOCK",
        vendorPriceBn: "৳ ৮৬০",
      },
      {
        id: "r2",
        itemBn: "ক্লিয়ার ফাইল",
        economicCode: "৩২৫৮৩০২",
        inventoryStatus: "IN_STOCK",
        vendorPriceBn: "৳ ৩০",
      },
    ],
  },
};
