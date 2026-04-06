import {
  ReturnableProduct,
  ReturnReasonOption,
  UploadFileItem,
} from "@/app/(office)/office/types/return-product";
import { IMAGE } from "@/constants/image-path";

export const demoReturnableProducts: ReturnableProduct[] = [
  {
    id: "p-1",
    nameBn: "এইচপি লেজারজেট টোনার 85A",
    orderId: "#GVT-84521",
    sellerNameBn: "অসিস সাপ্লাইস কোঃ",
    purchaseDateBn: "১৫ অক্টোবর ২০২৩",
    imageUrl: IMAGE.printer,
    returnableDaysLeftTextBn: "ফেরতযোগ্য - ২ দিন বাকি",
  },
];

export const demoReturnReasons: ReturnReasonOption[] = [
  { value: "damaged", labelBn: "পণ্য ক্ষতিগ্রস্ত/ভাঙা ছিল" },
  { value: "wrong_item", labelBn: "ভুল পণ্য এসেছে" },
  { value: "missing_parts", labelBn: "অংশ/এক্সেসরিজ অনুপস্থিত" },
  { value: "not_as_described", labelBn: "বর্ণনা অনুযায়ী নয়" },
];

export const demoUploadedFiles: UploadFileItem[] = [
  { id: "f-1", name: "ভাঙা_টোনার.jpg", sizeLabelBn: "১.২ এমবি" },
];
