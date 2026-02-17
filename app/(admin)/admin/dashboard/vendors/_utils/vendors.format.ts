export function bnNumber(n: number) {
  try {
    return n.toLocaleString("bn-BD");
  } catch {
    return String(n);
  }
}

export function bdtBn(amount: number) {
  // "৳ ১০,৫০,০০০" style (bn)
  return `৳ ${bnNumber(amount)}`;
}
