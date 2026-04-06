import type { VendorInventoryData } from "../_types/vendor-inventory";

export function vendorInventoryDemo(vendorId: string): VendorInventoryData {
  return {
    vendorId,
    summary: {
      totalListed: 50,
      outOfStock: 5,
      totalValueLakhs: 15.5,
    },
    filters: {
      categories: ["ক্যাটাগরি", "স্টেশনারি", "আইটি সরঞ্জাম"],
      stockStatuses: ["স্টক স্থিতি", "ইন স্টক", "স্টক শেষ"],
    },
    items: [
      {
        id: "p1",
        title: "অফিস পেপার A4 (80 GSM)",
        subTitle: "কাগজ ও স্টেশনারি",
        ibasCode: "03565001",
        unitPrice: 550,
        stock: 1200,
        status: "in_stock",
      },
      {
        id: "p2",
        title: "ক্যাশিও সাইন্টিফিক ক্যালকুলেটর",
        subTitle: "মডেল: FX-991ES Plus",
        ibasCode: "03565002",
        unitPrice: 2800,
        stock: 5,
        status: "out_stock",
      },
      {
        id: "p3",
        title: "অ্যান্টিভাইরাস সফটওয়্যার",
        subTitle: "কম্পিউটার ও সিকিউরিটি",
        ibasCode: "8412201",
        unitPrice: 3500,
        stock: 15,
        status: "in_stock",
      },
    ],
  };
}