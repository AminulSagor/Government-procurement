export const onlyDigits = (v: string) => (v || "").replace(/\D/g, "");

export const clampDigits = (v: string, len: number) =>
  onlyDigits(v).slice(0, len);

export const isExactDigits = (v: string, len: number) =>
  onlyDigits(v).length === len;
