import { OrderStepKey } from "@/app/(office)/office/_components/order-stepper";

export type ActivityType = "success" | "info" | "warning" | "neutral";

export type ActivityItem = {
  id: string;
  type: ActivityType;
  title: string;
  subtitle: string;
  timeAgo: string;
};

export const activityItems: ActivityItem[] = [
  {
    id: "1",
    type: "success",
    title: "ইনভয়েস #২১৪৪ অনুমোদিত",
    subtitle: "অর্থ মন্ত্রণালয় • সেন্টার ৪১",
    timeAgo: "২ ঘন্টা আগে",
  },
  {
    id: "2",
    type: "info",
    title: "নতুন বাজেট পুনর্বারদ্দ",
    subtitle: 'অবকাঠামো প্রকল্প "ডেল্টা"',
    timeAgo: "৫ ঘন্টা আগে",
  },
  {
    id: "3",
    type: "warning",
    title: "অডিট অ্যালার্ট: সেন্টার ১২",
    subtitle: "বেতন খাতে ব্যত্যয়তার থাকায়",
    timeAgo: "১ দিন আগে",
  },
  {
    id: "4",
    type: "neutral",
    title: "ইউজার লগইন: Admin_2",
    subtitle: "আইপি এবং লোকেশন লগ: ১৯২.১৬৮.১.১",
    timeAgo: "১ দিন আগে",
  },
];

//========= cart dummy data ==========//
export type CartItem = {
  id: string;
  icon: "paper" | "file" | "printer";
  title: string;
  meta: string; // e.g. "পরিমাণ: ২ রিম"
  price: number;
};

export const initialItems: CartItem[] = [
  {
    id: "1",
    icon: "paper",
    title: "সাদা কাগজ (A4)",
    meta: "পরিমাণ: ২ রিম",
    price: 520,
  },
  {
    id: "2",
    icon: "file",
    title: "প্লাস্টিক ফাইল",
    meta: "পরিমাণ: ১০ টি",
    price: 120,
  },
  {
    id: "3",
    icon: "printer",
    title: "অফিস চেয়ার",
    meta: "পরিমাণ: ১ টি",
    price: 15000,
  },
];

//========= procurement dummy data ==========//
export type ProcurementHead = {
  id: string;
  code: string;
  titleBn: string;
  titleEn: string;
  balance: number;
  isAvailable: boolean;
  iconKey:
    | "stationery"
    | "computer"
    | "furniture"
    | "printing"
    | "cleaning"
    | "vehicle"
    | "electrical"
    | "medical";
};

export const procurementHeads: ProcurementHead[] = [
  {
    id: "1",
    code: "০২৫০৫০৫",
    titleBn: "অন্যান্য মনিহার",
    titleEn: "Other Stationery",
    balance: 5000,
    isAvailable: true,
    iconKey: "stationery",
  },
  {
    id: "2",
    code: "০২৫০৫০১",
    titleBn: "কম্পিউটার সামগ্রী",
    titleEn: "Computer Consumables",
    balance: 12600,
    isAvailable: true,
    iconKey: "computer",
  },
  {
    id: "3",
    code: "০৪১০১০৮",
    titleBn: "আসবাবপত্র",
    titleEn: "Furniture",
    balance: 0,
    isAvailable: false,
    iconKey: "furniture",
  },
  {
    id: "4",
    code: "০২৫০৫০২",
    titleBn: "ছাপা ও বাঁধাই",
    titleEn: "Printing & Binding",
    balance: 8760,
    isAvailable: true,
    iconKey: "printing",
  },
  {
    id: "5",
    code: "০২৫০৫০৩",
    titleBn: "পরিষ্কার পরিচ্ছন্নতা সামগ্রী",
    titleEn: "Cleaning Supplies",
    balance: 10200,
    isAvailable: true,
    iconKey: "cleaning",
  },
  {
    id: "6",
    code: "০৪১০১০৬",
    titleBn: "মোটরযান খুচরা যন্ত্রাংশ",
    titleEn: "Motor Vehicle Spares",
    balance: 0,
    isAvailable: false,
    iconKey: "vehicle",
  },
  {
    id: "7",
    code: "০২৫০৫০৪",
    titleBn: "বৈদ্যুতিক সরঞ্জাম",
    titleEn: "Electrical Goods",
    balance: 21800,
    isAvailable: true,
    iconKey: "electrical",
  },
  {
    id: "8",
    code: "০২৫০৫০৮",
    titleBn: "ঔষধ ও শল্য চিকিৎসা",
    titleEn: "Medical Supplies",
    balance: 50000,
    isAvailable: true,
    iconKey: "medical",
  },
];

//========= procurement product & requisition draft dummy data ==========//
export type ProcurementProduct = {
  id: string;
  headId: string;
  code: string;
  name: string;
  unitPrice: number;
};

export type RequisitionDraft = {
  id: string;
  headId: string;
  vatRate: number;
  method: "DPM" | "OTM" | "RFQ";
  budgetTotal: number;
  remainingBudget: number;
  items: { productId: string; qty: number }[];
};

export const procurementProducts: ProcurementProduct[] = [
  {
    id: "p1",
    headId: "2",
    code: "10255",
    name: "A4 Paper (Double A, 80GSM)",
    unitPrice: 500,
  },
  {
    id: "p2",
    headId: "2",
    code: "22019",
    name: "Plastic File Folder (L-Shape)",
    unitPrice: 40,
  },
  // add more later...
];

export const requisitionDrafts: RequisitionDraft[] = [
  {
    id: "REQ-2023-0892",
    headId: "2",
    vatRate: 0.05,
    method: "DPM",
    budgetTotal: 2000,
    remainingBudget: 1560,
    items: [
      { productId: "p1", qty: 2 }, // 2 x 500 = 1000
      { productId: "p2", qty: 5 }, // 5 x 40  = 200
    ],
  },
];

//================== orders page orders data=================//
export type OrderListStatus =
  | "pending_quote"
  | "active"
  | "shipped"
  | "previous"
  | "draft";

export type OrderListItem = {
  id: string;
  ref: string; // #ORD-4921
  title: string;
  status: OrderListStatus;

  // small badge like Active / Shipped / Waiting for Quotes
  badgeLabel: string;

  // left small info lines
  meta1?: string;
  meta2?: string;

  // stepper current key for ORD items
  stepCurrent?: OrderStepKey;

  // for req card (avatar summary)
  peopleCount?: number;
};

export const orders: OrderListItem[] = [
  {
    id: "1",
    ref: "#ORD-4921",
    title: "Office Laptops (Dell Latitude 5000)",
    status: "active",
    badgeLabel: "Active",
    meta1: "Vendor: TechSolutions Ltd.",
    meta2: "Date: Oct 24, 2023",
    stepCurrent: "processing",
  },
  {
    id: "2",
    ref: "#ORD-4918",
    title: "Stationery Supplies Batch A",
    status: "shipped",
    badgeLabel: "Shipped",
    meta1: "Courier: Sundarban Courier",
    meta2: "Tracking: SD-882190",
    stepCurrent: "in_transit",
  },
  {
    id: "3",
    ref: "#REQ-1102",
    title: "Office Chairs (Ergonomic Mesh) - 50 Units",
    status: "pending_quote",
    badgeLabel: "Waiting for Quotes",
    meta1: "Requested by: Admin Dept.",
    meta2: "Due: Oct 30, 2023",
    peopleCount: 4,
  },
  {
    id: "4",
    ref: "#DRF-1102",
    title: "Office Chairs (Ergonomic Mesh) - 50 Units",
    status: "draft",
    badgeLabel: "খসড়া হিসাবে সংরক্ষিত",
    meta1: "শেষ তারিখ: Due: Oct 30, 2023",
    meta2: "২ টি আইটেম যোগ করা হয়েছে",
  },
];

//================== orders page requirement summary & vendor quotes data=================//

export type RequirementSummary = {
  orderId: string; // orders[].id
  reqRef: string; // #REQ-1102
  title: string; // Swivel Chair
  description: string;
  qty: number;
  unitBudget: number;
  totalBudget: number;
};

export type VendorQuote = {
  id: string;
  orderId: string;
  vendorName: string;
  vendorInitial: string;
  isVerified: boolean;
  unitPrice: number;
  totalPrice: number;
  specsOk: boolean;
  taxValid: boolean;
};

export const requirementSummaries: RequirementSummary[] = [
  {
    orderId: "3",
    reqRef: "#REQ-1102",
    title: "Swivel Chair",
    description: "Standard executive chair, ergonomic mesh back.",
    qty: 5,
    unitBudget: 3000,
    totalBudget: 15000,
  },
];

export const vendorQuotes: VendorQuote[] = [
  {
    id: "q1",
    orderId: "3",
    vendorName: "M/s Karim Furniture",
    vendorInitial: "K",
    isVerified: true,
    unitPrice: 2800,
    totalPrice: 14000,
    specsOk: true,
    taxValid: true,
  },
  {
    id: "q2",
    orderId: "3",
    vendorName: "HATIL",
    vendorInitial: "H",
    isVerified: true,
    unitPrice: 3500,
    totalPrice: 17500,
    specsOk: true,
    taxValid: true,
  },
  {
    id: "q3",
    orderId: "3",
    vendorName: "Partex",
    vendorInitial: "P",
    isVerified: true,
    unitPrice: 2950,
    totalPrice: 14750,
    specsOk: true,
    taxValid: true,
  },
];
