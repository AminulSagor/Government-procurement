"use client";

import { PasswordRequirement } from "@/app/(office)/office/types/change-password.types";

export default function PasswordRequirements({
  items,
}: {
  items: PasswordRequirement[];
}) {
  return (
    <div className="rounded-lg border border-light-gray/20 bg-off-white p-4">
      <p className="text-xs font-bold tracking-wide text-medium-gray mb-3">
        পাসওয়ার্ডের শর্তাবলী (PASSWORD REQUIREMENTS):
      </p>

      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.id} className="flex items-start gap-2">
            <span
              className={`
                mt-[3px] h-3 w-3 rounded-full border
                ${it.passed ? "bg-green border-green" : "bg-white border-light-gray"}
              `}
            />
            <p className="text-sm text-medium-gray">{it.labelBn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
