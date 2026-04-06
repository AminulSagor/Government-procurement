// app/(admin)/account-settings/change-password/_components/ChangePasswordPageView.tsx
"use client";

import type { ChangePasswordDemo } from "../_types/change-password.types";
import ChangePasswordCard from "./ChangePasswordCard";

export default function ChangePasswordPageView({ demo }: { demo: ChangePasswordDemo }) {
  return (
    <div className="w-full">
      {/* Title (same like screenshot) */}
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-extrabold text-[var(--color-black)]">
          {demo.copy.pageTitleBn}{" "}
          <span className="font-bold text-[var(--color-black)]">
            ({demo.copy.pageTitleEn})
          </span>
        </h1>
      </div>

      {/* Center card */}
      <div className="px-6 pb-10">
        <div className="mt-4 flex w-full justify-center">
          <div className="w-full max-w-[920px]">
            <ChangePasswordCard demo={demo} />
          </div>
        </div>
      </div>
    </div>
  );
}
