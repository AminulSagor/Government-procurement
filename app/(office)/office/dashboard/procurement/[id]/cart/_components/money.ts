export function formatBDT(n: number) {
  return new Intl.NumberFormat("bn-BD").format(Math.round(n));
}