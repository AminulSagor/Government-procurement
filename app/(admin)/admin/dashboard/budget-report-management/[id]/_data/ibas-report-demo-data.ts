import type { IbasReportDemo } from "../_types/ibas-report.types";

export const demoIbasReport: IbasReportDemo = {
  pdf: {
    titleBn: "সংযুক্ত নথিপত্র (IBAS Report)",
    url: "/sample.pdf",
  },
  system: {
    titleBn: "অধিদপ্তর তথ্য (System Data)",
  },
  rows: [
    { id: "1", code: "3255101", headBn: "কম্পিউটার ও যন্ত্রাংশ", amount: 500000 },
    { id: "2", code: "3243101", headBn: "পেট্রোল/লুব্রিকেন্ট", amount: 250000 },
  ],
};

export function formatBDT(value: number) {
  return value.toLocaleString("en-US");
}
