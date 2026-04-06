import { ReqStepData } from "../_types/requisition-step.types";

export const requisitionDemoOk: ReqStepData = {
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
      "এই রিকুইজিশনের জন্য অর্থনৈতিক কোডে পর্যাপ্ত বাজেট বরাদ্দ রয়েছে এবং কাজ শুরু করা সম্ভব।",
  },
  procurementMethodValue: "DPM (Direct Procurement Method)",
};

export const requisitionDemoNotOk: ReqStepData = {
  ...requisitionDemoOk,
  budget: {
    totalBudgetBn: "৳ ২,০০,০০০",
    requisitionAmountBn: "৳ ১,২০,০০০",
    state: "NOT_OK",
    titleBn: "তহবিল অপর্যাপ্ত",
    noteBn:
      "এই রিকুইজিশনের জন্য নির্ধারিত অর্থনৈতিক কোডে পর্যাপ্ত বাজেট বরাদ্দ নেই। বাজেট বৃদ্ধি/সমন্বয় প্রয়োজন।",
  },
};
