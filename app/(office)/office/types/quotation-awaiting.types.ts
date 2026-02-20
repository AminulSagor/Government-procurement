export type Attachment = {
  label: string;
  href?: string;
};

export type AwaitingQuotationItem = {
  id: string;
  title: string;
  code: string;
  stageLabel: string; // e.g. "স্টেজঃ ৪৫"
  tagLabel: string; // e.g. "পণ্য"

  specificationLabel: string;
  specificationValue: string;

  attachmentLabel: string;
  attachment?: Attachment;

  unitPriceLabel: string;
  unitPrice: number;

  vatLabel: string;
  vatPercent: number;

  aitLabel: string;
  aitPercent: number;

  additionalVatLabel: string;
  additionalVatPercent: number;

  totalUnitLabel: string;
  totalUnit: number;

  quantityLabel: string;
  quantity: number;

  estimatedTotalLabel: string;
  estimatedTotal: number;
};

export type QuotationSlipItem = {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
  metaLine: string;
};

export type QuotationAwaitingPageData = {
  top: {
    backLabel: string;
    statusLabel: string; // "অনুমোদনের অপেক্ষায় (Awaiting Approval)"
    budgetCodeLabel: string; // "বাজেট কোডঃ ..."
    balanceLabel: string; // "অবশিষ্ট বাজেট"
    balanceAmountText: string; // "৯,৫৮০ ৳"
    progressValue: number; // 0..100
    warningText: string;
  };

  sectionTitle: string; // "দাখিলকৃত পণ্য তালিকা (Finalized Items)"
  items: AwaitingQuotationItem[];

  slip: {
    title: string; // "Requisition Slip" (same as ss)
    subtitle: string; // "Allocated Budget Breakdown • ID: #REQ-2024-001"
    columnsLeft: string;
    columnsRight: string;
    items: QuotationSlipItem[];
    subtotalLabel: string;
    subtotalText: string;
    totalLabel: string;
    totalText: string;
    procurementMethodLabel: string;
    procurementMethodValue: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
};
