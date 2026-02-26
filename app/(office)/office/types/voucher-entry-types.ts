export type VoucherItemSummary = {
  productNameBn: string;
  qtyBn: string; // e.g. "৫টি"
};

export type VoucherBase = {
  baseUnitPrice: number; // "আসল একক মূল্য"
  qty: number;

  dutyPercent: number; // শুল্ক
  vatPercent: number;  // ভ্যাট
  aitPercent: number;  // আইটি
};

export type VoucherCalculated = {
  totalVoucher: number;

  dutyAmount: number;
  vatAmount: number;
  aitAmount: number;

  netPayable: number;     // পরিশোধযোগ্য
  expectedAmount: number; // প্রত্যাশিত (বাজেট/চাহিদা) (left yellow card)
  difference: number;     // ভাউচার ও চূড়ান্ত পার্থক্য
};

export type VoucherEntryModel = {
  headerIdBn: string; // e.g. "আইডিঃ #VCH-2024-8188"

  item: VoucherItemSummary;
  base: VoucherBase;

  enteredUnitVoucherPrice: number; // right input
};