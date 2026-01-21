//================ roport details (page view) =====================//
export type SummaryRow = {
  category: string;
  qtyText: string;
  unitPriceText: string;
  totalText: string;
};

export type AuditLogRow = {
  description: string;
  qtyText: string;
  code: string;
  statusText: string;
};

//================ report entry =====================//

export type FY = "২০২৫ - ২০২৬" | "২০২৩ - ২০২৪" | "২০২২ - ২০২৩";

export type AuditRow = {
  id: string;
  itemQuery: string;
  qty: number;
  unitPrice: number;
};

//================ report types =====================//
export type AuditType = "ডেবিট" | "ক্রেডিট";

export type FinancialAuditRow = {
  id: string;
  dateTime: string;
  txid: string;
  code: string;
  description: string;
  type: AuditType;
  amount: string; // "৳৫৪,৮০০.০০"
  balance: string; // "৳১১২৪,৫৫০.০০"
  pdfUrl?: string;
};

//================ documents types =====================//
export type FileType = "uploaded" | "generated" | "receipt";

export type DateType = "all" | "this_month" | "last_30" | "this_year";

export type DocumentRow = {
  id: string;
  title: string;
  uploadedAt: string; // already Bangla formatted
  type: FileType;
  fileUrl: string; // for view/download (pdf url)
};

export const TYPE_LABEL: Record<FileType, string> = {
  uploaded: "আপলোড করা ফাইল",
  generated: "জেনারেট করা ফাইল",
  receipt: "লেনদেন রিসিট",
};
