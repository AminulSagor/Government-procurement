import {
  Check,
  Handshake,
  ShieldCheck,
  BadgeDollarSign,
  Truck,
  ReceiptText,
} from "lucide-react";
import { VIStage } from "../_types/vendor-inventory.types";

const steps: { key: VIStage; bn: string; en: string; Icon: React.ElementType }[] =
  [
    { key: "requisition", bn: "রিকুইজিশন", en: "(REQUISITION)", Icon: Check },
    { key: "negotiation", bn: "আলোচনা", en: "(NEGOTIATION)", Icon: Handshake },
    { key: "office-confirm", bn: "অফিস কনফার্ম", en: "(OFFICE CONFIRM)", Icon: ShieldCheck },
    { key: "payment-verify", bn: "পেমেন্ট ভেরিফাই", en: "(PAYMENT VERIFY)", Icon: BadgeDollarSign },
    { key: "shipment", bn: "শিপমেন্ট", en: "(SHIPMENT)", Icon: Truck },
    { key: "final-settlement", bn: "ফাইনাল সেটেলমেন্ট", en: "(FINAL SETTLEMENT)", Icon: ReceiptText },
  ];

export default function VIStepper({ active }: { active: VIStage }) {
  const activeIndex = Math.max(0, steps.findIndex((s) => s.key === active));

  return (
    <div className="mt-5 rounded-2xl border border-[rgba(100,116,139,0.20)] bg-white px-10 py-8 shadow-sm">
      <div className="relative">
        {/* base line */}
        <div className="absolute left-[30px] right-[30px] top-[22px] h-[2px] bg-[rgba(145,145,145,0.20)]" />

        {/* green progress line */}
        <div
          className="absolute left-[30px] top-[22px] h-[2px] bg-[var(--color-green)]"
          style={{
            width:
              activeIndex <= 0
                ? "0%"
                : `calc(${(activeIndex / (steps.length - 1)) * 100}% )`,
          }}
        />

        <div className="flex items-start justify-between">
          {steps.map((s, idx) => {
            const isDone = idx < activeIndex;     // completed
            const isCurrent = idx === activeIndex; // current active
            const Icon = s.Icon;

            return (
              <div key={s.key} className="flex flex-col items-center text-center">
                {/* ✅ ring wrapper only for current step */}
                <div
                  className={[
                    "flex h-[52px] w-[52px] items-center justify-center rounded-full z-10",
                    isCurrent ? "bg-[var(--color-primary-color)] text-white" : "",
                  ].join(" ")}
                >
                  {/* circle */}
                  <div
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-full text-white z-10",
                      isDone
                        ? "border-[var(--color-green)] bg-[var(--color-green)] text-white"
                        : "border-[rgba(145,145,145,0.25)] text-[rgba(145,145,145,0.80)]",
                    ].join(" ")}
                  >
                    {isDone ? (
                      <Check className="h-5 w-5" strokeWidth={2.6} />
                    ) : (
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    )}
                  </div>
                </div>

                {/* labels */}
                <div
                  className={[
                    "mt-2 text-sm font-semibold",
                    isDone ? "text-[var(--color-green)]" : "text-[var(--color-medium-gray)]",
                  ].join(" ")}
                >
                  {s.bn}
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--color-medium-gray)]">
                  {s.en}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
