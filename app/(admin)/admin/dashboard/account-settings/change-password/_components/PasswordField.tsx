"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordField({
  labelBn,
  labelEn,
  value,
  onChange,
  hint,
}: {
  labelBn: string;
  labelEn: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[var(--color-black)]">
        {labelBn} <span className="font-semibold">({labelEn})</span>
      </label>

      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={show ? "text" : "password"}
          className={[
            "h-11 w-full rounded-lg border bg-white px-4 pr-12 text-sm",
            "border-[rgba(100,116,139,0.22)]",
            "placeholder:text-[var(--color-medium-gray)]",
            "focus:outline-none focus:ring-2 focus:ring-[rgba(31,110,128,0.18)]",
          ].join(" ")}
          placeholder=""
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)] hover:text-[var(--color-primary-color)]"
          aria-label="toggle password"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      {hint ? (
        <p className="text-xs font-semibold text-[var(--color-red)]">{hint}</p>
      ) : null}
    </div>
  );
}
