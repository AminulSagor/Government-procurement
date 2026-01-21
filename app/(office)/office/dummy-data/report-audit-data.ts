import {
  AuditLogRow,
  DocumentRow,
  FinancialAuditRow,
  SummaryRow,
} from "@/app/(office)/office/types/report-audit";

//=============== report details (page view) data===================//

export const SUMMARY_DATA: SummaryRow[] = [
  {
    category: "আইটি হার্ডওয়্যার",
    qtyText: "৪৫ টি",
    unitPriceText: "৳১,২০০.০০",
    totalText: "৳৫৪,০০০.০০",
  },
  {
    category: "অফিস সরঞ্জাম",
    qtyText: "১২৩ ব্যাগ",
    unitPriceText: "৳৮৫.০০",
    totalText: "৳৯,৮০০.০০",
  },
  {
    category: "যানবাহন রক্ষণাবেক্ষণ",
    qtyText: "৩ টি সেবা",
    unitPriceText: "৳৫৬০.০০",
    totalText: "৳১,৫৬০.০০",
  },
];

//================== audit log data  ==================//

export const AUDIT_LOG_DATA: AuditLogRow[] = [
  {
    description: "অফিস সরঞ্জাম",
    qtyText: "৳৫৪,৮০০.০০",
    code: "৩২১১১০১",
    statusText: "অনুমোদিত",
  },
];

export const AUDIT_LOGS: FinancialAuditRow[] = [
  {
    id: "r1",
    dateTime: "২০২৩-১০-২৪ ১৮:২২",
    txid: "TXN-882190",
    code: "৩২১১১০১",
    description: "স্টেশনারি এবং অফিস সরঞ্জাম ক্রয়",
    type: "ডেবিট",
    amount: "৳৫৪,৮০০.০০",
    balance: "৳১১২৪,৫৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r2",
    dateTime: "২০২৩-১০-২৪ ১০:০৫",
    txid: "TXN-882188",
    code: "১১০০০২",
    description: "বাজেটে বরাদ্দ পুনর্গঠন",
    type: "ক্রেডিট",
    amount: "৳৫০,০০০.০০",
    balance: "৳১১২১,১৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r3",
    dateTime: "২০২৩-১০-২৩ ১৬:৪৫",
    txid: "TXN-882185",
    code: "৩২১১১০৫",
    description: "আইটি হার্ডওয়্যার - মাঠ পর্যায়ের কর্মীদের ল্যাপটপ",
    type: "ডেবিট",
    amount: "৳৮৪,০০০.০০",
    balance: "৳৯৭১,১৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r4",
    dateTime: "২০২৩-১০-২২ ১১:০০",
    txid: "TXN-882180",
    code: "৩২১১১২০",
    description: "মাসিক যানবাহন ব্যবহার রক্ষণাবেক্ষণ",
    type: "ডেবিট",
    amount: "৳২,৫৫০.০০",
    balance: "৳৯৩০,৩৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r5",
    dateTime: "২০২৩-১০-২৪ ১৮:২২",
    txid: "TXN-882190",
    code: "৩২১১১০১",
    description: "স্টেশনারি এবং অফিস সরঞ্জাম ক্রয়",
    type: "ডেবিট",
    amount: "৳৫৪,৮০০.০০",
    balance: "৳১১২৪,৫৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r6",
    dateTime: "২০২৩-১০-২৪ ১০:০৫",
    txid: "TXN-882188",
    code: "১১০০০২",
    description: "বাজেটে বরাদ্দ পুনর্গঠন",
    type: "ক্রেডিট",
    amount: "৳৫০,০০০.০০",
    balance: "৳১১২১,১৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r7",
    dateTime: "২০২৩-১০-২৩ ১৬:৪৫",
    txid: "TXN-882185",
    code: "৩২১১১০৫",
    description: "আইটি হার্ডওয়্যার - মাঠ পর্যায়ের কর্মীদের ল্যাপটপ",
    type: "ডেবিট",
    amount: "৳৮৪,০০০.০০",
    balance: "৳৯৭১,১৫০.০০",
    pdfUrl: "#",
  },
  {
    id: "r8",
    dateTime: "২০২৩-১০-২২ ১১:০০",
    txid: "TXN-882180",
    code: "৩২১১১২০",
    description: "মাসিক যানবাহন ব্যবহার রক্ষণাবেক্ষণ",
    type: "ডেবিট",
    amount: "৳২,৫৫০.০০",
    balance: "৳৯৩০,৩৫০.০০",
    pdfUrl: "#",
  },
];

//================= all document's data ======================//
export const DOCUMENTS: DocumentRow[] = [
  {
    id: "d1",
    title: "জুন ২০২৪ মাসিক হিসাব চালান",
    uploadedAt: "২৫ জুলাই, ২০২৪",
    type: "receipt",
    fileUrl: "#",
  },
  {
    id: "d2",
    title: "আগস্ট ২০২৪ অফিস সরঞ্জাম বাজেট কপি",
    uploadedAt: "০২ আগস্ট, ২০২৪",
    type: "uploaded",
    fileUrl: "#",
  },
  {
    id: "d3",
    title: "জুলাই ২০২৪ মেরামত ইনভয়েস - ডিজেল",
    uploadedAt: "৩০ জুলাই, ২০২৪",
    type: "receipt",
    fileUrl: "#",
  },
  {
    id: "d4",
    title: "বার্ষিক কর পরিকল্পনা ২০২৪-২৫",
    uploadedAt: "১৫ জুন, ২০২৪",
    type: "generated",
    fileUrl: "#",
  },
  {
    id: "d5",
    title: "অক্টোবরের সরবরাহকারী চুক্তি নথিপত্র",
    uploadedAt: "১২ আগস্ট, ২০২৪",
    type: "uploaded",
    fileUrl: "#",
  },
  {
    id: "d6",
    title: "অফিস অটোপেমেন্ট পেমেন্ট আউটপুট",
    uploadedAt: "১৮ আগস্ট, ২০২৪",
    type: "generated",
    fileUrl: "#",
  },
];
