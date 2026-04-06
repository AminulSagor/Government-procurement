export type BreadcrumbItem = { label: string; href?: string };

export type Money = number;

export type VendorQuoteStatus = "within-budget" | "over-budget";
export type VendorRecommendation = "best" | "none";

export type VendorQuote = {
  id: string;
  vendorName: string;
  vendorTagline: string; // e.g. "যাচাইকৃত সরবরাহকারী"
  avatarLetter: string; // K, H, P...
  unitPrice: Money;
  totalPrice: Money;
  status: VendorQuoteStatus;
  recommendation: VendorRecommendation;
};

export type QuotationProduct = {
  id: string;
  title: string; // "পণ্য ০১: অফিস চেয়ার"
  subtitle: string; // small line under title
  quantity: number;
  unitBudget: Money;
  totalBudget: Money;
  quotes: VendorQuote[];
  selectedQuoteId?: string; // for selection
};

export type QuotationVerificationPageData = {
  breadcrumb: BreadcrumbItem[];
  rfqId: string; // "RFQ-2023-009"
  title: string; // "দরপত্র যাচাই ও নির্বাচন"
  subtitle: string; // line under title
  topRightBtnText: string; // "তুলনামূলক বিবরণী এক্সপোর্ট"
  products: QuotationProduct[];

  summary: {
    title: string; // "নির্বাচিত পণ্যের সারাংশ"
    columns: {
      product: string;
      vendor: string;
      qty: string;
      unit: string;
      total: string;
    };
    draftBtnText: string; // "খসড়া সংরক্ষণ"
  };
};
