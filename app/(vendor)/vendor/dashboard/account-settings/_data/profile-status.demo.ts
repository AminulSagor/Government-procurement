import { ProfileStatusData } from "../_types/profile-status.types";

export const demoProfileStatus: ProfileStatusData = {
  completionPercent: 100,
  completionLabel: "প্রোফাইল সম্পূর্ণতা",
  completionHint: "অভিনন্দন! আপনার প্রোফাইল এবং নথিপত্র সম্পূর্ণরূপে ভেরিফাইড।",

  business: {
    name: "M/S Rahim Traders",
    typeText: "প্রোফাইল টাইপ",
    statusText: "প্রোফাইল সম্পূর্ণ",
    address: "১২০, পশ্চিম রোড, ধানমন্ডি ৩২, ঢাকা",
    phone: "০১৭১২-৩৪৫৬৭৮",
    email: "info@rahimtraders.com",
    logoText: "RT",
  },

  verification: [
    {
      key: "trade_license",
      title: "ট্রেড লাইসেন্স",
      value: "TRD-88293021",
      status: "Verified",
    },
    {
      key: "tin",
      title: "ই-টিন সার্টিফিকেট",
      value: "TIN-4452123",
      status: "Verified",
    },
    {
      key: "bin",
      title: "ভ্যাট রেজিস্ট্রেশন (BIN)",
      value: "BIN-00288312",
      status: "Verified",
    },
  ],

  bank: {
    bankName: "Sonali Bank PLC",
    accountName: "M/S Rahim Traders",
    accountNumberMasked: "**** **** **** 1234",
    routingNumber: "185273892",
    secureLabel: "SECURE",
  },

  security: {
    twoFAEnabled: true,
  },
};
