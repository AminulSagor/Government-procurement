import { CorrectionReasonOption, ProductDetails } from "../_types/requisition-popups.types";

export const correctionReasons: CorrectionReasonOption[] = [
  { key: "table-mismatch", label: "তফসিল অস্পষ্ট" },
  { key: "wrong-amount", label: "অর্থনৈতিক কোড/পরিমাণ ভুল" },
  { key: "missing-doc", label: "প্রয়োজনীয় সংযুক্তি নেই" },
  { key: "other", label: "অন্যান্য" },
];

export const demoProductDetails: ProductDetails = {
  titleBn: "ল্যাপটপ",
  titleEn: "(Laptop)",
  quantityText: "৪টি",
  descriptionBn:
    "সরকারি দপ্তরের দৈনন্দিন কার্যাবলী এবং উন্নয়নমূলক কাজের জন্য ব্যবহাযোগ্য ল্যাপটপ...\n\n" +
    "মাদারবোর্ড/প্রসেসর/র‍্যাম/স্টোরেজ/ডিসপ্লে সংক্রান্ত ন্যূনতম স্পেসিফিকেশন...\n\n" +
    "ওয়ারেন্টি ও সার্ভিসিং শর্তাবলী...",
  attachments: [
    {
      id: "a1",
      fileName: "Technical_Spec_Laptop_v2.pdf",
      sizeText: "২.৪ এমবি",
      dateText: "২৪ অক্টোবর ২০২৪",
      fileType: "pdf",
    },
  ],
};
