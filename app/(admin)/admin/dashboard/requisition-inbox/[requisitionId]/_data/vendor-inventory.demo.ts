import { VIPageData } from "../_types/vendor-inventory.types";

export const demoOk: VIPageData = {
  requisitionId: "REQ-2025-001",
  titleEn: "VENDOR INVENTORY & OFFER ALLOCATION",
  subtitleBn: "অর্ডার নিশ্চিতকরণে ধাপ: ইনভেন্টরি ভেরিফিকেশন ও ভেন্ডর অ্যাসাইনমেন্ট",
  meta: {
    officeBn: "মোঘালপাড়া সদর উপজেলা",
    lotBn: "০৩৫৪",
    dateBn: "২৪ অক্টোবর ২০২৪",
  },
  activeStage: "requisition",
  items: [
    { id: "i1", nameBn: "ল্যাপটপ", qtyBn: "পরিমাণ: ০৫টি" },
    { id: "i2", nameBn: "লেজার প্রিন্টার", qtyBn: "পরিমাণ: ০২টি" },
  ],
  budget: { 
    totalBudgetBn: "৮,৫০,০০০ ৳",
    requisitionAmountBn: "১,২০,০০০ ৳",
    state: "OK",
    titleBn: "তহবিল পর্যাপ্ত",
    noteBn:
      "এই রিকুইজিশনের জন্য নির্ধারিত অর্থনৈতিক কোডে পর্যাপ্ত বাজেট বরাদ্দ রয়েছে এবং কাজ শুরু করা সম্ভব।",
  },
  procurementMethodTitleBn: "ক্রয় পদ্ধতি (Procurement Method)",
  procurementMethodValue: "DPM (Direct Procurement Method)",
};

export const demoNotOk: VIPageData = {
  ...demoOk,
  budget: {
    totalBudgetBn: "৳ ২,০০,০০০",
    requisitionAmountBn: "৳ ১,২০,০০০",
    state: "NOT_OK",
    titleBn: "তহবিল অপর্যাপ্ত",
    noteBn:
      "এই রিকুইজিশনের জন্য নির্ধারিত অর্থনৈতিক কোডে পর্যাপ্ত বাজেট বরাদ্দ নেই। চাহিদাপত্রটি যাচাই করে কাজ শুরু করুন অথবা বাজেট বৃদ্ধি/সমন্বয় করুন।",
  },
};
