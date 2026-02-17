"use client";

import { ClipboardList, Loader2, CreditCard, CheckCircle2 } from "lucide-react";
import { OrderStatCard } from "../_types/order-management.types";

function iconByKey(key: OrderStatCard["key"]) {
  if (key === "totalOrders") return ClipboardList;
  if (key === "processing") return Loader2;
  if (key === "paymentPending") return CreditCard;
  return CheckCircle2;
}

function iconRing(bg: OrderStatCard["iconBg"]) {
  if (bg === "blue")
    return "bg-[color-mix(in_oklab,var(--color-blue)_10%,white)] text-[var(--color-blue)] ring-1 ring-[color-mix(in_oklab,var(--color-blue)_18%,white)]";
  if (bg === "orange")
    return "bg-[color-mix(in_oklab,var(--color-orange)_10%,white)] text-[var(--color-orange)] ring-1 ring-[color-mix(in_oklab,var(--color-orange)_18%,white)]";
  if (bg === "red")
    return "bg-[color-mix(in_oklab,var(--color-red)_10%,white)] text-[var(--color-red)] ring-1 ring-[color-mix(in_oklab,var(--color-red)_18%,white)]";
  return "bg-[color-mix(in_oklab,var(--color-green)_10%,white)] text-[var(--color-green)] ring-1 ring-[color-mix(in_oklab,var(--color-green)_18%,white)]";
}

export default function OrderStats({ items }: { items: OrderStatCard[] }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((it) => {
        const Icon = iconByKey(it.key);

        return (
          <div
            key={it.key}
            className="flex items-center justify-between rounded-2xl border border-border bg-white px-6 py-5 shadow-sm"
          >
            {/* LEFT: icon */}
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconRing(it.iconBg)}`}>
              <Icon className="h-6 w-6" />
            </div>

            {/* RIGHT: text */}
            <div className="text-right">
              <p className="text-sm font-medium text-[var(--color-light-gray)]">{it.labelBn}</p>
              <p className="mt-1 text-3xl font-semibold leading-none text-[var(--color-black)]">
                {it.value.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
