export function formatBDT(amount: number) {
  return amount.toLocaleString("en-US", { maximumFractionDigits: 0 });
}