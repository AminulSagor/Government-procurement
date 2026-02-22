import { VIBudgetInfo } from "../_types/vendor-inventory.types";
import { CreditCard, Check, AlertTriangle } from "lucide-react";

export default function VIBudgetVerification({ budget }: { budget: VIBudgetInfo }) {
  const ok = budget.state === "OK";

  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm">
      {/* header */}
      <div className="flex items-center gap-3 px-6 py-5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(120,185,181,0.18)] text-[var(--color-primary-color)]">
          <CreditCard className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <p className="text-lg font-semibold text-[var(--color-black)]">বাজেট যাচাইকরণ</p>
      </div>

      <div className="h-px bg-[rgba(100,116,139,0.12)]" />

      <div className="px-6 pb-6 pt-6">
        {/* top boxes */}
        <div className="grid grid-cols-2 gap-5">
          <InfoBox label="উপলব্ধ বাজেট (কোড)" value={budget.totalBudgetBn} />
          <InfoBox
            label="আনুমানিক ব্যয়"
            value={budget.requisitionAmountBn}
            valueClass={ok ? "text-[var(--color-primary-color)]" : "text-[var(--color-red)]"}
          />
        </div>

        {/* ✅ different UI by state */}
        {ok ? <SuccessBox title={budget.titleBn} note={budget.noteBn} /> : <ErrorBox title={budget.titleBn} note={budget.noteBn} />}
      </div>
    </div>
  );
}

function SuccessBox({ title, note }: { title: string; note: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-[rgba(7,136,52,0.18)] bg-[rgba(7,136,52,0.08)] px-6 py-6">
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
          <Check className="h-8 w-8" strokeWidth={2.6} />
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[var(--color-green)]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[rgba(16,24,25,0.70)]">{note}</p>
        </div>
      </div>
    </div>
  );
}

function ErrorBox({ title, note }: { title: string; note: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-[rgba(231,53,8,0.18)] bg-[rgba(231,53,8,0.08)] px-6 py-6">
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-red)] text-white">
          <AlertTriangle className="h-8 w-8" strokeWidth={2.2} />
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[var(--color-red)]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[rgba(16,24,25,0.70)]">{note}</p>
        </div>
      </div>
    </div>
  );
}

function InfoBox({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.10)] bg-[rgba(246,247,248,0.55)] px-6 py-6">
      <p className="text-sm text-[var(--color-medium-gray)]">{label}</p>
      <p className={`mt-4 text-[32px] font-semibold leading-none ${valueClass ?? "text-[var(--color-black)]"}`}>
        {value}
      </p>
    </div>
  );
}
