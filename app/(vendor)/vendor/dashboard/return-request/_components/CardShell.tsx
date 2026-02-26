// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/CardShell.tsx
import React from "react";

export default function CardShell({
  title,
  icon,
  children,
  className = "",
  headerRight,
}: {
  title: string;
  icon?: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={[
        "rounded-2xl bg-white",
        "border border-slate-200",
        "shadow-[0_8px_20px_rgba(15,23,42,0.06)]",
        className,
      ].join(" ")}
    >
      <header className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[--color-primary-color]">{icon}</span>
          <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
        </div>
        {headerRight}
      </header>

      <div className="px-5 py-4">{children}</div>
    </section>
  );
}