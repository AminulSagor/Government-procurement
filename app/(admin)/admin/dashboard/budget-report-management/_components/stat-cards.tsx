import Card from "@/components/cards/card";
import { BudgetStatCard } from "../_types/budget-report.types";
import {
  FileText,
  CalendarDays,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function accentBar(accent?: BudgetStatCard["accent"]) {
  if (accent === "orange") return "bg-[var(--color-orange)]";
  if (accent === "green") return "bg-[var(--color-green)]";
  if (accent === "red") return "bg-[var(--color-red)]";
  return "bg-[var(--color-primary-color)]";
}

function iconBoxAccent(accent?: BudgetStatCard["accent"]) {
  if (accent === "orange") return "bg-orange-50 text-[var(--color-orange)]";
  if (accent === "green") return "bg-emerald-50 text-[var(--color-green)]";
  if (accent === "red") return "bg-rose-50 text-[var(--color-red)]";
  return "bg-sky-50 text-[var(--color-primary-color)]";
}

function StatIcon({ type }: { type: BudgetStatCard["iconType"] }) {
  const iconProps = { size: 18, strokeWidth: 2 };

  if (type === "cal") return <CalendarDays {...iconProps} />;
  if (type === "check") return <CheckCircle2 {...iconProps} />;
  if (type === "x") return <XCircle {...iconProps} />;

  return <FileText {...iconProps} />;
}

export default function StatCards({ items }: { items: BudgetStatCard[] }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {items.map((it) => (
        <Card key={it.id} className="col-span-12 md:col-span-6 xl:col-span-3 p-0 overflow-hidden">
          <div className="flex">
            {/* left accent line (like screenshot) */}
            <div className={`w-1 ${accentBar(it.accent)}`} />
            <div className="flex-1 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[var(--color-light-gray)]">
                    {it.labelBn}
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-2xl font-bold text-[var(--color-black)]">
                      {it.value}
                    </p>

                    {it.chipText ? (
                      <span className="rounded-full bg-[var(--color-off-white)] px-2 py-0.5 text-xs font-medium text-[var(--color-green)]">
                        {it.chipText}
                      </span>
                    ) : null}
                  </div>

                  {it.suffixBn ? (
                    <p className="mt-1 text-xs text-[var(--color-light-gray)]">
                      {it.suffixBn}
                    </p>
                  ) : null}
                </div>

                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBoxAccent(it.accent)}`}>
                  <StatIcon type={it.iconType} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
