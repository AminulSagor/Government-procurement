import type { ProductDetails } from "../_types/product-details";

export function productDetailsDemo(vendorId: string, productId: string): ProductDetails {
  return {
    id: productId,
    vendorId,

    title: "ল্যাপটপ (HP ProBook 450 G8)",
    subTitle: "ক্যাটাগরি: আইটি ও ইলেকট্রনিক্স",
    ibasCode: "8412201",

    status: "in_stock",

    unitPrice: 45000,
    stock: 12,

    description:
      "এই পণ্যটি বিশ্বখ্যাত ব্র্যান্ড এইচপি (HP) এর একটি প্রিমিয়াম ল্যাপটপ, যার মডেল হচ্ছে ProBook 450 G8। এতে রয়েছে অত্যন্ত শক্তিশালী Intel Core i5, 11th Generation প্রসেসর যা দ্রুত কাজ করার নিশ্চয়তা দেয়। সিস্টেমের স্মুথনেস ও মাল্টিটাস্কিং সুবিধার জন্য এতে রয়েছে 8GB DDR4 RAM এবং ডাটা সংরক্ষণের জন্য 512GB NVMe SSD স্টোরেজ প্রযুক্তি। ল্যাপটপটির ডিসপ্লে সাইজ 15.6 ইঞ্চি FHD IPS ডিসপ্লে, যা চমৎকার ও প্রাণবন্ত ভিজ্যুয়াল অভিজ্ঞতা প্রদান করে। এটি আধুনিক কর্মক্ষেত্রে ব্যবহারের জন্য একটি আদর্শ এবং নির্ভরযোগ্য ডিভাইস।",

    // use your real urls later. For demo, keep placeholders.
    images: ["/photos/laptop-1.png", "/photos/laptop-2.png", "/photos/laptop-3.png", "/photos/laptop-4.png", "/photos/laptop-5.png"],
  };
}