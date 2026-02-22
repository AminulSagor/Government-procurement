export type RefundStatVariant = "primary" | "orange" | "green" | "blue";
export type RefundStatIconKey = "clipboard" | "clock" | "money" | "badgeCheck";
export type RefundStatItem = {
  id:
    | "totalReceived"
    | "receivedPending"
    | "totalReceivableAmount"
    | "resolvedToday";
  titleBn: string;
  value: number | string;
  variant: RefundStatVariant;
  iconKey: RefundStatIconKey;
  highlighted?: boolean;
};
