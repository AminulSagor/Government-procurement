import { OrderFilterOptions, OrderRow, OrderStatCard } from "../_types/order-management.types";

export const orderStatsDemo: OrderStatCard[] = [
  { key: "totalOrders", labelBn: "মোট অর্ডার", value: 1245, iconBg: "blue" },
  { key: "processing", labelBn: "প্রক্রিয়াধীন", value: 84, iconBg: "orange" },
  { key: "paymentPending", labelBn: "পেমেন্ট পেন্ডিং", value: 15, iconBg: "red" },
  { key: "completed", labelBn: "সম্পন্ন", value: 1146, iconBg: "green" },
];

export const orderRowsDemo: OrderRow[] = [
  {
    id: "r1",
    orderId: "#ORD-8892",
    date: "12/01/2025",
    officeNameBn: "নোয়াখালী সদর",
    officeId: "DC-NOA-001",
    economicCode: "2111113",
    vendor: "Computer Source Ltd",
    totalAmountBn: "৳ ৫,৫০,০০০",
    stage: "NEGOTIATION",
  },
  {
    id: "r2",
    orderId: "#ORD-8875",
    date: "10/01/2025",
    officeNameBn: "উপজেলা নির্বাহী অফিস",
    officeId: "UNO-SAV-04",
    economicCode: "2211101",
    vendor: "Global Brand Pvt Ltd",
    totalAmountBn: "৳ ১,২০,০০০",
    stage: "COMPLETED",
  },
  {
    id: "r3",
    orderId: "#ORD-8850",
    date: "08/01/2025",
    officeNameBn: "জেলা প্রশাসকের কার্যালয়",
    officeId: "DC-GZP-01",
    economicCode: "2111113",
    vendor: "Flora Limited",
    totalAmountBn: "৳ ৮,৯৫,০০০",
    stage: "PAYMENT",
  },
  {
    id: "r4",
    orderId: "#ORD-8812",
    date: "05/01/2025",
    officeNameBn: "মন্ত্রণালয় অধিদপ্তর",
    officeId: "DOF-HQ-22",
    economicCode: "3111105",
    vendor: "Smart Technologies",
    totalAmountBn: "৳ ৬,২০,০০০",
    stage: "PROCESSING",
  },
];

export const orderFiltersDemo: OrderFilterOptions = {
  economicCodes: [
    { label: "অর্থনৈতিক কোড (All)", value: "all" },
    { label: "2111113", value: "2111113" },
    { label: "2211101", value: "2211101" },
    { label: "3111105", value: "3111105" },
  ],
  offices: [
    { label: "দপ্তর (All)", value: "all" },
    { label: "ID: DC-NOA-001", value: "DC-NOA-001" },
    { label: "ID: UNO-SAV-04", value: "UNO-SAV-04" },
    { label: "ID: DC-GZP-01", value: "DC-GZP-01" },
    { label: "ID: DOF-HQ-22", value: "DOF-HQ-22" },
  ],
  stages: [
    { label: "স্থিতি (All)", value: "all" },
    { label: "NEGOTIATION", value: "NEGOTIATION" },
    { label: "COMPLETED", value: "COMPLETED" },
    { label: "PAYMENT", value: "PAYMENT" },
    { label: "PROCESSING", value: "PROCESSING" },
  ],
};
