import type { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function FormCard({ title, icon, children }: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-3 px-6 pt-6">
        {icon ? (
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-primary-color">
            {icon}
          </div>
        ) : null}

        <div className="text-lg font-extrabold text-slate-900">{title}</div>
      </div>

      <div className="mt-4 h-px w-full bg-slate-200/70" />

      <div className="px-6 py-6">{children}</div>
    </section>
  );
}