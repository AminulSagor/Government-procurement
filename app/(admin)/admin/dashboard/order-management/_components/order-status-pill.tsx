"use client";

import { OrderStage } from "../_types/order-management.types";

function pillStyle(stage: OrderStage) {
  if (stage === "NEGOTIATION")
    return "bg-[color-mix(in_oklab,var(--color-blue)_12%,white)] text-[var(--color-blue)]";
  if (stage === "COMPLETED")
    return "bg-[color-mix(in_oklab,var(--color-green)_12%,white)] text-[var(--color-green)]";
  if (stage === "PAYMENT")
    return "bg-[color-mix(in_oklab,var(--color-orange)_12%,white)] text-[var(--color-orange)]";
  return "bg-[color-mix(in_oklab,var(--color-secondary-color)_16%,white)] text-[var(--color-primary-color)]";
}

function dotStyle(stage: OrderStage) {
  if (stage === "NEGOTIATION") return "bg-[var(--color-blue)]";
  if (stage === "COMPLETED") return "bg-[var(--color-green)]";
  if (stage === "PAYMENT") return "bg-[var(--color-orange)]";
  return "bg-[var(--color-secondary-color)]";
}

export default function OrderStatusPill({ stage }: { stage: OrderStage }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${pillStyle(
        stage
      )}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotStyle(stage)}`} />
      {stage}
    </span>
  );
}
