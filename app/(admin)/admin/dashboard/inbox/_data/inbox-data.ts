import { BudgetRow, PaymentRow } from "../_types/inbox-type";


export const inboxStats = {
  pendingReview: 4,
  awaitingApproval: 3,
};

export const budgetRows: BudgetRow[] = [
  {
    id: "b1",
    date: "15 Oct, 2023",
    time: "10:45 AM",
    officeName: "মোয়াখালী সদর উপজেলা",
    reportType: "মাসিক বরাদ্দ রিপোর্ট",
    fiscalYear: "২০২৩-২৪",
    codeCount: "১২টি",
    status: "Pending",
  },
  {
    id: "b2",
    date: "15 Oct, 2023",
    time: "02:30 PM",
    officeName: "উপজেলা সমাজসেবা, বগুড়া",
    reportType: "ত্রৈমাসিক রিপোর্ট",
    fiscalYear: "২০২৩-২৪",
    codeCount: "০৮টি",
    status: "Pending",
  },
  {
    id: "b3",
    date: "14 Oct, 2023",
    time: "11:15 AM",
    officeName: "জেলা শিক্ষা অফিস, ঢাকা",
    reportType: "সমন্বিত বরাদ্দ",
    fiscalYear: "২০২৩-২৪",
    codeCount: "০৯টি",
    status: "Pending",
  },
  {
    id: "b4",
    date: "14 Oct, 2023",
    time: "04:45 PM",
    officeName: "বিভাগীয় কমিশনার কার্যালয়, চট্টগ্রাম",
    reportType: "বার্ষিক বরাদ্দ",
    fiscalYear: "২০২৩-২৪",
    codeCount: "২০টি",
    status: "Pending",
  },
];

export const paymentRows: PaymentRow[] = [
  {
    id: "p1",
    date: "15 Oct, 2023",
    time: "10:45 AM",
    officeName: "মোয়াখালী সদর উপজেলা",
    orderId: "#REQ-8892",
    amount: "৳ ৭,০০০",
    paymentType: "অগ্রিম (৫০%)",
    status: "Pending",
  },
  {
    id: "p2",
    date: "15 Oct, 2023",
    time: "02:30 PM",
    officeName: "সমাজসেবা অধিদপ্তর",
    orderId: "#REQ-7741",
    amount: "৳ ২৫,০০০",
    paymentType: "চূড়ান্ত পেমেন্ট",
    status: "Pending",
  },
  {
    id: "p3",
    date: "14 Oct, 2023",
    time: "11:15 AM",
    officeName: "জেলা শিক্ষা অফিস, ঢাকা",
    orderId: "#REQ-9012",
    amount: "৳ ১২,০০০",
    paymentType: "অগ্রিম (৩০%)",
    status: "Pending",
  },
];
