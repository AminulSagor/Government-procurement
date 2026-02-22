import type { VendorDetails } from "../_types/vendor-details";

export function vendorDetailsDemo(vendorId: string): VendorDetails {
  return {
    id: vendorId,
    orgName: "M/s Rahim Traders",
    ownerName: "মোঃ আব্দুর রহিম (স্বত্বাধিকারী)",
    address: "হাঁট নম্বর ৪২, ওয়ার্ড নম্বর ০৭, পোস্টিং ০৪, উত্তর বাজার টাউন, ঢাকা-১২০১",
    phone: "০১৩০০-০০০০০০",
    loginEmail: "uno.noakhali@social.gov.bd",

    legalDocs: [
      { key: "trade_license", title: "ট্রেড লাইসেন্স", iconName: "file", status: "verifiable" },
      { key: "tin", title: "TIN সার্টিফিকেট", iconName: "tin", status: "verifiable" },
      { key: "nid", title: "এনআইডি (NID)", iconName: "nid", status: "verifiable" },
      { key: "bank_docs", title: "ব্যাংক ডকুমেন্ট (Bank Documents)", iconName: "bank", status: "verifiable" },
    ],

    tags: [
      { name: "মনিটরিং", code: "03565001" },
      { name: "আইটি সরঞ্জাম", code: "8412201" },
    ],

    totalItems: 54,
  };
}