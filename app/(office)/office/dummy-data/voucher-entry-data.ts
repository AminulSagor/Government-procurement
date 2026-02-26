import { VoucherEntryModel } from "@/app/(office)/office/types/voucher-entry-types";

export const demoVoucherEntry: VoucherEntryModel = {
  headerIdBn: "আইডিঃ #VCH-2024-8188",
  item: {
    productNameBn: "ডেস্কটপ কম্পিউটার",
    qtyBn: "৫টি",
  },
  base: {
    baseUnitPrice: 75000,
    qty: 5,
    dutyPercent: 10,
    vatPercent: 15,
    aitPercent: 7,
  },
  enteredUnitVoucherPrice: 78000,
};
