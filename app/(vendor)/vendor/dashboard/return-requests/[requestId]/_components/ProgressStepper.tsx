// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/ProgressStepper.tsx
import { Check } from "lucide-react";
import type { Step } from "../_types/return-request-details.types";

export default function ProgressStepper({ steps }: { steps: Step[] }) {
  const doneCount = steps.filter((s) => s.done).length;
  const progressPct =
    steps.length <= 1 ? 0 : Math.max(0, ((doneCount - 1) / (steps.length - 1)) * 100);

  return (
    <div className="rounded-2xl bg-white px-8 py-8 shadow-[0_12px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
      <div className="relative">
        {/* base line */}
        <div className="absolute left-10 right-10 top-[22px] h-[2px] bg-slate-200" />

        {/* progress line */}
        <div
          className="absolute  top-[22px] h-[2px] bg-[var(--color-primary-color)]"
          style={{ width: `calc(${progressPct}% * (100% - 80px) / 100)` }}
        />

        <div className="flex items-start justify-between">
          {steps.map((s) => (
            <div key={s.key} className="flex w-full flex-1 flex-col items-center text-center">
              {/* circle */}
              <div
                className={[
                  "z-10 grid h-12 w-12 place-items-center rounded-full",
                  s.done ? "bg-[var(--color-primary-color)]" : "bg-slate-200",
                ].join(" ")}
              >
                <Check className="h-5 w-5 text-white" />
              </div>

              {/* labels */}
              <p className="mt-3 text-[13px] font-semibold text-[color:var(--color-primary-color)]">
                {s.titleBn}
              </p>
              <p className="mt-1 text-[12px] font-medium text-slate-500">
                {s.titleEn ?? ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}