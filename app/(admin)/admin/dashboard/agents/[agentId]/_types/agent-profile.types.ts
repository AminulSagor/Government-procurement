export type AgentOnlineStatus = "online" | "offline";

export type OrderDeliveryStatus = "delivered" | "pending" | "cancelled";

export interface AgentProfile {
  id: string;
  nameBn: string;
  districtBn: string;

  roleBn: string;
  agentCode: string;
  joinDateBn: string;

  avatarUrl?: string;
  onlineStatus: AgentOnlineStatus;

  contact: {
    email: string;
    phonePrimary: string;
    phoneSecondary?: string;
  };

  identity: {
    nidNumber: string;
    dobBn: string;
    presentAddressBn: string;
    nidPhotoUrl?: string;
  };
}

export interface HandledOrderRow {
  id: string;
  dateBn: string;
  orderCode: string;
  centerBn: string;
  areaBn: string;
  status: OrderDeliveryStatus;
  deliveryCount: number;
}

export interface PerformanceSummary {
  totalOrders: number;
  totalDeliveries: number;
  successRatePct: number; // 0-100
  activeDays: number;
}
