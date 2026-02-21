import {
  VoucherPaymentEntry,
  VoucherPaymentStep,
} from "@/app/(office)/office/types/voucher-payment";

export const demoVoucherSteps: VoucherPaymentStep[] = [
  { key: "info", titleBn: "তথ্য এন্ট্রি", subtitleBn: "অসম্পন্ন" },
  { key: "upload", titleBn: "নথিপত্র আপলোড", subtitleBn: "অসম্পন্ন" },
  { key: "approval", titleBn: "অনুমোদন", subtitleBn: "অসম্পন্ন" },
];

export const demoVoucherEntry: VoucherPaymentEntry = {
  orderId: "#ORD-4918",
  lastUpdatedBn: "১০ মিনিট আগে",
  statusBn: "স্ট্যাটাস: নতুন",

  officeCode: "1002-Finance-Dept",
  payerName: "",
  amount: 50000,
  referenceNo: "REF-998210",
  note: "",

  step: "info",
};
