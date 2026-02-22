export type AgentStatus = "active" | "inactive";
export type AgentRole = "Senior Field Executive" | "Field Agent" | "Delivery Hero";

export interface Agent {
  id: string;
  name: string;
  role: AgentRole;
  agentCode: string;

  district: string; // e.g. "নোয়াখালী সদর"
  phone: string; // e.g. "+৮৮০ ১৭১২-৩০৪৫৬৭"

  totalOrdersHandled: number;

  performance?: "high" | "none";
  status: AgentStatus;

  avatarUrl?: string;
}

export interface AgentStats {
  totalAgents: number;
  activeAgents: number;
  deliveries: number;
}

export interface AgentFilters {
  q: string;
  district: string | "all";
  status: AgentStatus | "all";
}

export interface AgentsMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface Option {
  label: string;
  value: string;
}
