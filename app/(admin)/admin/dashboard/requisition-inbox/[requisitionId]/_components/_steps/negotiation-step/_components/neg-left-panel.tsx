import { CheckCircle2, Eye, ListChecks } from "lucide-react";
import { NegLeftCard, NegotiationMiniStep } from "../_types/negotiation-step.types";

export default function NegLeftPanel({
  titleBn,
  miniStep,
  onMiniStepChange,
  cards,
  onSelectCard,
}: {
  titleBn: string;
  miniStep: NegotiationMiniStep;
  onMiniStepChange: (s: NegotiationMiniStep) => void;
  cards: NegLeftCard[];
  onSelectCard: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
            <ListChecks className="h-5 w-5" strokeWidth={1.9} />
          </span>
          <p className="text-sm font-semibold text-[var(--color-black)]">{titleBn}</p>
        </div>

        <button
          type="button"
          className="rounded-full bg-[rgba(120,185,181,0.18)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-color)]"
        >
          সব দেখুন
        </button>
      </div>

      <div className="h-px bg-[rgba(100,116,139,0.12)]" />

      {/* mini steps */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-6 text-xs font-semibold">
          <MiniTab
            active={miniStep === "selected-items"}
            onClick={() => onMiniStepChange("selected-items")}
            label="১. মূলতবি আইটেম"
          />
          <MiniTab
            active={miniStep === "credit-setup"}
            onClick={() => onMiniStepChange("credit-setup")}
            label="২. প্রেরিত দরপত্র"
          />
          <MiniTab
            active={miniStep === "offer-setup"}
            onClick={() => onMiniStepChange("offer-setup")}
            label="৩. গৃহীত দরপত্র"
          />
        </div>
      </div>

      {/* cards */}
      <div className="px-5 pb-5 pt-4">
        <div className="space-y-4">
          {cards.map((c) => {
            const active = c.isActive;
            const disabled = !!c.disabled;

            return (
              <div
                key={c.id}
                className={`rounded-2xl border ${
                  active
                    ? "border-[rgba(31,110,128,0.35)]"
                    : "border-[rgba(100,116,139,0.14)]"
                } bg-white p-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-black)]">{c.titleBn}</p>
                    <p className="mt-1 text-xs text-[var(--color-medium-gray)]">{c.subTitleBn}</p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(100,116,139,0.18)] bg-white text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]"
                    aria-label="view"
                  >
                    <Eye className="h-4 w-4" strokeWidth={1.9} />
                  </button>
                </div>

                <div className="mt-4 rounded-xl bg-[rgba(246,247,248,0.65)] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary-color)]">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={1.9} />
                    আইটেমের বাজেটে
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-medium-gray)]">
                    <span>{c.unitPriceBn}</span>
                    <span>{c.totalBn}</span>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => onSelectCard(c.id)}
                  className={`mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold ${
                    disabled
                      ? "bg-[rgba(100,116,139,0.12)] text-[rgba(16,24,25,0.40)]"
                      : active
                      ? "bg-[var(--color-primary-color)] text-white hover:opacity-95"
                      : "bg-[rgba(100,116,139,0.10)] text-[var(--color-primary-color)] hover:bg-[rgba(120,185,181,0.18)]"
                  }`}
                >
                  দরপত্র শুরু করুন
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MiniTab({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative pb-2 ${active ? "text-[var(--color-primary-color)]" : "text-[var(--color-medium-gray)]"}`}
    >
      {label}
      {active ? (
        <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full bg-[var(--color-primary-color)]" />
      ) : null}
    </button>
  );
}
