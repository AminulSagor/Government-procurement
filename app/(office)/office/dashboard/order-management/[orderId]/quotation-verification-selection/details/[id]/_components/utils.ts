import { Money } from "@/app/(office)/office/types/quotation-verification-details-types";

export function formatMoney(m: Money) {
  const formatted = new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(m.amount);

  return `${m.currencySymbol} ${formatted}`;
}
