import type { AreaOptions, CreateAgentFormState } from "../_types/create-agent.types";

export const demoCreateAgent: CreateAgentFormState = {
  fullNameBn: "পুরো নাম লিখুন",
  phonePrimary: "+৮৮০ ০১××××-××××××",
  email: "example@domain.com",
  nidNumber: "জাতীয় পরিচয়পত্র নম্বর",
  presentAddressBn: "নির্ধারিত বর্তমান ঠিকানা",
  permanentAddressBn: "নির্ধারিত স্থায়ী ঠিকানা",
  phoneSecondary: "+৮৮০ ০১××××-××××××",

  division: "",
  district: "",
  upazila: "",
  roleBn: "পদবি লিখুন",

  uploads: {
    signatureCard: { key: "signatureCard" },
    cv: { key: "cv" },
    agreement: { key: "agreement" },
  },
};

export const demoSelectOptions: AreaOptions = {
  divisions: [
    { label: "বিভাগ নির্বাচন করুন", value: "" },
    { label: "চট্টগ্রাম বিভাগ", value: "ctg" },
  ],
  districts: [
    { label: "জেলা নির্বাচন করুন", value: "" },
    { label: "নোয়াখালী জেলা", value: "noakhali" },
  ],
  upazilas: [
    { label: "উপজেলা নির্বাচন করুন", value: "" },
    { label: "নোয়াখালী সদর", value: "sadar" },
  ],
  roles: [
    { label: "পদবি লিখুন", value: "" },
    { label: "এলাকা কো-অর্ডিনেটর", value: "coordinator" },
    { label: "ফিল্ড এজেন্ট", value: "agent" },
  ],
};
