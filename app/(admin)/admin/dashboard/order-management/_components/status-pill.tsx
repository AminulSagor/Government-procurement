import type { OrderListStage } from "../_types/order-management.type";

function styles(stage: OrderListStage) {
  if (stage === "COMPLETED") return "bg-green/10 text-green border-green/20";
  if (stage === "PAYMENT") return "bg-orange/10 text-orange border-orange/20";
  if (stage === "PROCESSING") return "bg-blue/10 text-blue border-blue/20";
  return "bg-secondary-color/15 text-primary-color border-primary-color/20";
}

export default function StatusPill({ stage }: { stage: OrderListStage }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${styles(stage)}`}>
      <span className="h-2 w-2 rounded-full bg-current" />
      {stage}
    </span>
  );
}