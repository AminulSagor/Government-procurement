import {
  VoucherBase,
  VoucherCalculated,
} from "@/app/(office)/office/types/voucher-entry-types";

export function calcVoucher(
  base: VoucherBase,
  enteredUnitVoucherPrice: number,
): VoucherCalculated {
  const qty = Math.max(1, base.qty);

  const totalVoucher = Math.max(0, enteredUnitVoucherPrice) * qty;

  const dutyAmount = (totalVoucher * (base.dutyPercent || 0)) / 100;
  const vatAmount = (totalVoucher * (base.vatPercent || 0)) / 100;
  const aitAmount = (totalVoucher * (base.aitPercent || 0)) / 100;

  const netPayable = totalVoucher + dutyAmount + vatAmount + aitAmount;

  // demo: expected amount equals baseUnitPrice * qty (like budget expectation)
  const expectedAmount = Math.max(0, base.baseUnitPrice) * qty;

  const difference = netPayable - expectedAmount;

  return {
    totalVoucher,
    dutyAmount,
    vatAmount,
    aitAmount,
    netPayable,
    expectedAmount,
    difference,
  };
}

export function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(Math.round(n))}`;
}
