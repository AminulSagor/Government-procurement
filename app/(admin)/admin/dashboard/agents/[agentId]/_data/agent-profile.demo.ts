import type { AgentProfile, HandledOrderRow, PerformanceSummary } from "../_types/agent-profile.types";

export const demoAgentProfile: AgentProfile = {
  id: "agt_2025_001",
  nameBn: "জনাব রফিকুল ইসলাম",
  districtBn: "নোয়াখালী সদর",
  roleBn: "এলাকা কো-অর্ডিনেটর",
  agentCode: "AGT-2025-001",
  joinDateBn: "১৫ জানুয়ারি ২০২৫",
  avatarUrl: "",
  onlineStatus: "online",

  contact: {
    email: "rafiq.agent@ibas.gov.bd",
    phonePrimary: "+৮৮০ ১৭১২-৩০৪৫৬৭",
    phoneSecondary: "+৮৮০ ১৮৩৩-৯৮৪২০৯",
  },

  identity: {
    nidNumber: "১৯৯০-৩০৮৯-০৯৮৯-১৯০",
    dobBn: "১৫ মে ১৯৯০",
    presentAddressBn: "সাবাহী রোড, নোয়াখালী সদর, নোয়াখালী",
    nidPhotoUrl: "",
  },
};

export const demoHandledOrders: HandledOrderRow[] = [
  {
    id: "o1",
    dateBn: "০১ আগস্ট ২০২৫",
    orderCode: "#REQ-8892",
    centerBn: "নোয়াখালী মিশন",
    areaBn: "সোনাইমুড়ী কান্দিপাড়া",
    status: "delivered",
    deliveryCount: 15,
  },
  {
    id: "o2",
    dateBn: "০২ আগস্ট ২০২৫",
    orderCode: "#REQ-8841",
    centerBn: "জয়নাল স্টোরস",
    areaBn: "উপজেলা প্রশাসক সদর",
    status: "delivered",
    deliveryCount: 12,
  },
];

export const demoPerformanceSummary: PerformanceSummary = {
  totalOrders: 124,
  totalDeliveries: 482,
  successRatePct: 98,
  activeDays: 452,
};
