export type CorrectionReasonKey =
  | "table-mismatch"
  | "wrong-amount"
  | "missing-doc"
  | "other";

export type CorrectionReasonOption = {
  key: CorrectionReasonKey;
  label: string;
};

export type ProductAttachment = {
  id: string;
  fileName: string;
  sizeText: string;   // e.g. "২.৪ এমবি"
  dateText: string;   // e.g. "২৪ অক্টোবর ২০২৪"
  fileType?: "pdf" | "doc" | "img";
};

export type ProductDetails = {
  titleBn: string;     // "ল্যাপটপ"
  titleEn?: string;    // "(Laptop)"
  quantityText: string; // "৪টি"
  descriptionBn: string;
  attachments?: ProductAttachment[];
};
