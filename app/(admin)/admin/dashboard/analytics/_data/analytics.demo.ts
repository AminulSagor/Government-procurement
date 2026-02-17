import type {
  AnalyticsHeaderData,
  ChartPoint,
  ProfitTableData,
  StatCard,
} from "../_types/analytics.types";

export const demoAnalyticsHeader: AnalyticsHeaderData = {
  titleBn: "সিস্টেম রেকর্ডিং ও প্রফিট ম্যানেজমেন্ট",
  subtitleBn: "ভেন্ডর রেটের তুলনায়মক থেকে প্রফিট রেকর্ডিং ও বিশ্লেষণ সিস্টেম",
  actionExportBn: "এক্সপোর্ট ডেটা",
  dateBadgeBn: "০২-২০২৪",
};

export const demoStats: StatCard[] = [
  {
    id: "s1",
    titleBn: "মোট ভেন্ডর সেটেলমেন্ট",
    valueBn: "৮০২.৪০ কোটি",
    trend: { valueBn: "+৮.৪%", labelBn: "গত মাসের তুলনায়" },
  },
  {
    id: "s2",
    titleBn: "সর্বমোট প্রফিট/সেভিংস",
    valueBn: "৯১.৩৫ কোটি",
    trend: { valueBn: "+১১.৮%", labelBn: "গত মাসের তুলনায়" },
    active: true,
  },
  {
    id: "s3",
    titleBn: "মোট সিস্টেম সেভিংস (এই মাসে)",
    valueBn: "৮১২.৮ লক্ষ",
    trend: { valueBn: "+৮.৪%", labelBn: "গত মাসের তুলনায়" },
  },
];

export const demoChart: ChartPoint[] = [
  { key: "জানুয়ারি", totalBn: 35, profitBn: 18 },
  { key: "ফেব্রুয়ারি", totalBn: 55, profitBn: 25 },
  { key: "মার্চ", totalBn: 45, profitBn: 22 },
  { key: "এপ্রিল", totalBn: 70, profitBn: 30 },
  { key: "মে", totalBn: 65, profitBn: 28 },
  { key: "জুন", totalBn: 85, profitBn: 36 },
];

export const demoTable: ProfitTableData = {
  rows: [
    {
      id: "r1",
      dateBn: "২৮ মে, ২০২৪",
      requisitionNo: "#REQ-8892",
      officeBudgetBn: "৫৫,০০০",
      vendorRateBn: "৫০,০০০",
      systemSavingBn: "+৪,০০০",
      vatTaxBn: "-৯৫০",
      netProfitBn: "+৩,১৫০",
    },
    {
      id: "r2",
      dateBn: "২৬ মে, ২০২৪",
      requisitionNo: "#REQ-8891",
      officeBudgetBn: "১,২০,০০০",
      vendorRateBn: "১,১০,০০০",
      systemSavingBn: "+১০,০০০",
      vatTaxBn: "-১,৬০০",
      netProfitBn: "+৮,৪০০",
    },
    {
      id: "r3",
      dateBn: "২৫ মে, ২০২৪",
      requisitionNo: "#REQ-8890",
      officeBudgetBn: "৮২,০০০",
      vendorRateBn: "৮০,০০০",
      systemSavingBn: "+৪,০০০",
      vatTaxBn: "-৯৫০",
      netProfitBn: "+৩,১৫০",
    },
    {
      id: "r4",
      dateBn: "২১ মে, ২০২৪",
      requisitionNo: "#REQ-8889",
      officeBudgetBn: "৪৯,০০০",
      vendorRateBn: "৪০,০০০",
      systemSavingBn: "+৬,০০০",
      vatTaxBn: "-৯৫০",
      netProfitBn: "+৪,১৫০",
    },
    {
      id: "r5",
      dateBn: "২০ মে, ২০২৪",
      requisitionNo: "#REQ-8888",
      officeBudgetBn: "২,২০,০০০",
      vendorRateBn: "১,৮৫,০০০",
      systemSavingBn: "+৩৫,০০০",
      vatTaxBn: "-২,৫০০",
      netProfitBn: "+৩২,৫০০",
    },
  ],
  meta: { total: 85, page: 1, limit: 5, totalPages: 17 },
  cashSettlement: {
    titleBn: "ক্যাশ সেটেলমেন্ট",
    subtitleBn: "সর্বমোট প্রফিট অ্যামাউন্ট ব্যালেন্স",
    amountTitleBn: "বর্তমান সেটেলমেন্টের জন্য প্রফিট",
    amountBn: "৯১.৩৫ কোটি",
    ctaBn: "সরকারি কোষাগারে জমা দিন",
    noteBn: "সমস্ত সেটেলমেন্ট সম্পন্ন হলে প্রফিট সরকারি কোষাগারে জমা দিতে হবে।",
  },
};
