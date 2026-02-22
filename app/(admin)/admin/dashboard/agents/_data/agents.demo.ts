import type { Agent, AgentStats, AgentsMeta, Option } from "../_types/agents.types";

export const demoStats: AgentStats = {
  totalAgents: 64,
  activeAgents: 120, // screenshot অনুযায়ী
  deliveries: 450,
};

export const demoMeta: AgentsMeta = {
  total: 64,
  page: 1,
  limit: 10,
  totalPages: 7,
  hasNextPage: true,
  hasPrevPage: false,
};

export const districtOptions: Option[] = [
  { label: "District", value: "all" },
  { label: "নোয়াখালী সদর", value: "নোয়াখালী সদর" },
  { label: "Begumganj", value: "Begumganj" },
  { label: "Chatkhil", value: "Chatkhil" },
  { label: "Sonaimuri", value: "Sonaimuri" },
];

export const statusOptions: Option[] = [
  { label: "Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export const demoAgents: Agent[] = [
  {
    id: "agt_1",
    name: "Rafiqul Islam",
    role: "Senior Field Executive",
    agentCode: "AGT-2025-001",
    district: "নোয়াখালী সদর",
    phone: "+৮৮০ ১৭১২-৩০৪৫৬৭",
    totalOrdersHandled: 1250,
    performance: "high",
    status: "active",
    avatarUrl: "",
  },
  {
    id: "agt_2",
    name: "Karim Ahmed",
    role: "Field Agent",
    agentCode: "AGT-2025-002",
    district: "Begumganj",
    phone: "+৮৮০ ১৭৯৫-১১২২০০",
    totalOrdersHandled: 45,
    performance: "none",
    status: "inactive",
    avatarUrl: "",
  },
  {
    id: "agt_3",
    name: "Arif Hossain",
    role: "Delivery Hero",
    agentCode: "AGT-2025-042",
    district: "Chatkhil",
    phone: "+৮৮০ ১৭৩৯-৮৪৪৫৬৬",
    totalOrdersHandled: 820,
    performance: "none",
    status: "active",
    avatarUrl: "",
  },

  // extra rows to make pagination feel real
  ...Array.from({ length: 61 }, (_, i) => {
    const n = i + 4;
    return {
      id: `agt_${n}`,
      name: `Agent ${n}`,
      role: (n % 3 === 0
        ? "Delivery Hero"
        : n % 2 === 0
        ? "Field Agent"
        : "Senior Field Executive") as const,
      agentCode: `AGT-2025-${String(n).padStart(3, "0")}`,
      district:
        n % 4 === 0
          ? "Begumganj"
          : n % 4 === 1
          ? "নোয়াখালী সদর"
          : n % 4 === 2
          ? "Chatkhil"
          : "Sonaimuri",
      phone: "+৮৮০ ১৭০০-০০০০০০",
      totalOrdersHandled: 20 + (n * 7) % 900,
      performance: n % 11 === 0 ? "high" : "none",
      status: n % 5 === 0 ? "inactive" : "active",
      avatarUrl: "",
    } satisfies Agent;
  }),
];
