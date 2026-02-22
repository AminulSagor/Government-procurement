"use client";

import React from "react";

export default function CodeTypeCard({
  title,
  subtitle,
  icon,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group w-full rounded-2xl bg-white text-center transition",
        "border border-[rgba(31,110,128,0.18)]",
        "hover:border-[rgba(31,110,128,0.35)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]",
        "px-8 py-10",
      ].join(" ")}
    >
      {/* icon circle */}
      <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[rgba(31,110,128,0.08)] text-[var(--color-primary-color)]">
        <div className="scale-[1.05]">{icon}</div>
      </div>

      <h3 className="mt-8 text-[22px] font-bold text-[var(--color-black)]">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-6 text-[var(--color-light-gray)]">
        {subtitle}
      </p>
    </button>
  );
}
