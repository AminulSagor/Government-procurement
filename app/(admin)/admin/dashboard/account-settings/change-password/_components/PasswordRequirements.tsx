"use client";

import { CheckCircle2 } from "lucide-react";
import type { PasswordRule, PasswordRuleKey } from "../_types/change-password.types";

export default function PasswordRequirements({
  titleBn,
  titleEn,
  rules,
  state,
}: {
  titleBn: string;
  titleEn: string;
  rules: PasswordRule[];
  state: Record<PasswordRuleKey, boolean>;
}) {
  return (
    <div className="rounded-xl border border-[rgba(100,116,139,0.12)] bg-[var(--color-off-white)] p-4">
      <p className="text-xs font-extrabold text-[var(--color-light-gray)]">
        {titleBn} <span className="font-black">({titleEn}):</span>
      </p>

      <ul className="mt-3 space-y-2">
        {rules.map((r) => {
          const ok = !!state[r.key];
          return (
            <li key={r.key} className="flex items-start gap-2 text-sm">
              {ok ? (
                <CheckCircle2
                  className="mt-[2px] h-4 w-4 text-[var(--color-green)]"
                  strokeWidth={2.4}
                />
              ) : (
                <span className="mt-[5px] inline-block h-3 w-3 rounded-full border border-[rgba(100,116,139,0.35)] bg-white" />
              )}

              <span className="text-[13px] font-medium text-[var(--color-light-gray)]">
                {r.bn}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
