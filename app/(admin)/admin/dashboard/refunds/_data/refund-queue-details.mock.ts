import type {
  HeaderData,
  RequisitionItem,
  SettlementSnapshot,
  RefundAdjustmentRow,
} from "../_types/refund-queue-details.type";

export function makeHeaderData(id: string): HeaderData {
  return {
    reqCode: `#REQ-${id.replaceAll("#", "")}`,
    statusTextBn: "সমন্বয় প্রক্রিয়াধীন",
    officePillLabelBn: "অফিস",
    officeNameBn: "নোয়াখালী সদর উপজেলা",
  };
}

export const requisitionsMock: RequisitionItem[] = [
  {
    id: "item-1",
    titleBn: "এ৪ পেপার",
    orderCode: "#ORD-4918",
    internalIdBn: "০২৫৫৫১১",
    totalPrice: 15000,
    paidPercentTextBn: "১০০% সম্পন্ন",
    refundPercentTextBn: "২.৫% রিফান্ডেড",
    isPaidDone: true,
  },
  {
    id: "item-2",
    titleBn: "মনিটর (LED)",
    orderCode: "#ORD-4919",
    internalIdBn: "০২৫৫৫০৫",
    totalPrice: 8500,
    paidPercentTextBn: "১০০% সম্পন্ন",
    isPaidDone: true,
  },
];

export const settlementMock: SettlementSnapshot = {
  officeNameBn: "নোয়াখালী সদর উপজেলা দপ্তর",
  officeCodeBn: "১২৩-৪৫৬-৭৮৯",
  budgetCodeBn: "অফিস সরবরাহাদি (৪১১১০০১)",

  vendorNameBn: "মেসার্স আইটি সলিউশন",
  vendorTinBn: "১২৩৪৫৬৭৮৯০১২",
  vendorBankMaskedBn: "১২২০-XXXX-XXXX-৮৫৭৯",

  totalOfficeAmount: 15000,
  totalAdminCost: 11000,
  totalRefund: 376.25,
  auditedProfit: 3620,

  payments: [
    { dateBn: "১২ মে, ২০২৪", refNo: "EFT-992312-A", amount: 5000 },
    { dateBn: "১৫ মে, ২০২৪", refNo: "EFT-992455-B", amount: 3000 },
    { dateBn: "১৮ মে, ২০২৪", refNo: "EFT-992678-C", amount: 2000 },
  ],

  vat: 500,
  it: 200,
  addVat: 50,
};

export const adjustmentRowsMock: RefundAdjustmentRow[] = [
  {
    itemTitleBn: "এ৪ পেপার - ০ রিম",
    unitPrice: 650,
    vatLabelBn: "ভ্যাট (৫%)",
    vatAmount: 17.5,
    itLabelBn: "আইটি (১%)",
    itAmount: 9,
    addVatLabelBn: "অতিরিক্ত ভ্যাট (০.৫%)",
    addVatAmount: 1.75,
    totalUnitPrice: 676.25,
    refundStatusAmount: 1128.75,
  },
];