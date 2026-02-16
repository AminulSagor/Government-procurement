import type { RequisitionItem, RequisitionMeta, SummaryCard, VendorRow } from "../_types/negotiation-assign.types";

export const demoMeta: RequisitionMeta = {
  officeNameBn: "অর্ডার বরাদ্দকরণ পুল (ADMIN)",
  fiscalYearBn: "অর্থবছর: ২০২৩-২০২৪",
  requisitionNoBn: "রিকুইজিশন নং: ২০২৩-০০১",
  itemsCountBn: "মোট আইটেম: ০৩টি",
  totalVendorsBn: "মোট ভেন্ডর: ০৪টি",
};

export const demoItems: RequisitionItem[] = [
  {
    id: "i1",
    nameBn: "এ৪ পেপার (A4 Paper)",
    code: "3255101",
    unitBn: "রিম",
    qtyBn: "৫০",
    estimatedPriceBn: "৳ ৩২,৫০০",
    isActive: true,
    specLines: [
      { labelBn: "জি এস এম", valueBn: "৮০" },
      { labelBn: "উৎপাদন দেশ", valueBn: "বাংলাদেশ" },
      { labelBn: "ব্র্যান্ড", valueBn: "যেকোনো" },
    ],
  },
  {
    id: "i2",
    nameBn: "ক্লিয়ার ফাইল (Clear File)",
    code: "3255102",
    unitBn: "পিস",
    qtyBn: "৪০",
    estimatedPriceBn: "৳ ১২,০০০",
    specLines: [{ labelBn: "সাইজ", valueBn: "A4" }],
  },
  {
    id: "i3",
    nameBn: "পেন (Pen)",
    code: "3255103",
    unitBn: "পিস",
    qtyBn: "২০০",
    estimatedPriceBn: "৳ ৮,০০০",
  },
];

export const demoVendorRows: VendorRow[] = [
  {
    id: "v1",
    itemId: "i1",
    itemNameBn: "এ৪ পেপার (A4 Paper)",
    itemCode: "3255101",
    unitBn: "রিম",
    vendorPriceBn: "৳ ৩২০",
    adminBudgetBn: "৩২০",
    status: "ok",
    statusTextBn: "✓ ঠিক",
  },
  {
    id: "v2",
    itemId: "i2",
    itemNameBn: "ক্লিয়ার ফাইল (Clear File)",
    itemCode: "3255102",
    unitBn: "পিস",
    vendorPriceBn: "৳ ২৫",
    adminBudgetBn: "২৫",
    status: "ok",
    statusTextBn: "✓ ঠিক",
  },
  {
    id: "v3",
    itemId: "i3",
    itemNameBn: "পেন (Pen)",
    itemCode: "3255103",
    unitBn: "পিস",
    vendorPriceBn: "৳ ১০",
    adminBudgetBn: "১০",
    status: "warn",
    statusTextBn: "⚠ ঠিক নয়",
  },
];

export const demoSummary: SummaryCard[] = [
  { id: "s1", titleBn: "মোট প্রস্তাব মূল্য", valueBn: "৳ ১২,৩০০", subBn: "ভেন্ডর প্রাইস", accent: "default" },
  { id: "s2", titleBn: "মোট বরাদ্দ মূল্য", valueBn: "৳ ১২,৩০০", subBn: "এডমিন বাজেট", accent: "primary" },
  { id: "s3", titleBn: "মোট সাশ্রয়", valueBn: "৳ ২,০০০", subBn: "প্রস্তাব বনাম বরাদ্দ", accent: "default" },
  { id: "s4", titleBn: "ফাইনাল বরাদ্দ", valueBn: "৳ ২,৮০০", subBn: "সাবমিটের পর", accent: "green" },
];
