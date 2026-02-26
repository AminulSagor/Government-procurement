export type ReturnRequestStatus = "pending" | "waiting" | "accepted" | "denied";

export type DamageType = "all" | "damaged" | "wrong_item" | "missing_parts";
export type OfficeFilter = "all" | "gazipur" | "noakhali" | "savar" | "nilphamari";
export type StatusFilter = "all" | ReturnRequestStatus;

export type ReturnRequestRow = {
  orderId: string;          // "#ORD-8892"
  requestDate: string;      // "12 Jan 2025"
  officeTitleBn: string;    // "নোয়াখালী সদর"
  officeSubtitleBn: string; // "জেলা প্রশাসকের কার্যালয়"
  vendor: string;           // "Computer Source Ltd"
  product: string;          // "HP Toner 85A"
  qty: number;              // 02
  amountBdt: number;        // 9000
  status: ReturnRequestStatus;
  damageType: Exclude<DamageType, "all">;
  officeKey: Exclude<OfficeFilter, "all">;
};


export type ReturnRequestItem = {
  id: string; // e.g. "REQ-8892"
  caseId: string; // e.g. "RET-2025-001"
  orderId: string; // e.g. "ORD-4918"
  productName: string;
  vendorName: string;
  officeName: string;
  createdAt: string; // "12 Jan 2025"
  returnReason: string;
  status: ReturnRequestStatus;
  vendorClaimText: string;
  officeClaimText: string;
  evidence: Array<{ name: string; url?: string }>;
  checks: Array<{ label: string; value: string; ok: boolean }>;
};

