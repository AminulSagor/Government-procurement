"use client";

import { InstructionCard } from "@/app/(office)/office/types/advance-payment";
import Card from "@/components/cards/card";

export default function Instructions({
  title,
  items,
}: {
  title: string;
  items: InstructionCard[];
}) {
  return (
    <Card className="p-5">
      <h3 className="text-base font-semibold text-black">{title}</h3>

      <div className="mt-4 space-y-3">
        {items.map((it, idx) => (
          <div
            key={`${it.title}-${idx}`}
            className={[
              "rounded-lg border p-4",
              it.active
                ? "border-primary-color/25 bg-off-white"
                : "border-medium-gray/15 bg-white",
            ].join(" ")}
          >
            <p className="text-sm font-semibold text-black">{it.title}</p>
            <p className="mt-2 text-sm text-medium-gray">{it.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
