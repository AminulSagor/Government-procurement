import { BriefcaseBusiness, Building2, Home, CalendarDays } from "lucide-react";

export default function VIHeader({
  titleEn,
  subtitleBn,
  officeBn,
  lotBn,
  dateBn,
}: {
  titleEn: string;
  subtitleBn: string;
  officeBn: string;
  lotBn: string;
  dateBn: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      {/* LEFT */}
      <div className="flex items-start gap-4">
        {/* square icon box (same like image) */}
        <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.22)] text-[var(--color-primary-color)]">
          <BriefcaseBusiness className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h1 className="text-[20px] font-semibold leading-6 text-[var(--color-black)]">
            {titleEn}
          </h1>
          <p className="mt-1 text-sm leading-5 text-[var(--color-medium-gray)]">
            {subtitleBn}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <MetaPill icon={<Building2 className="h-5 w-5" strokeWidth={1.8} />} label="অফিস" value={officeBn} />
        <MetaPill icon={<Home className="h-5 w-5" strokeWidth={1.8} />} label="লট" value={lotBn} />
        <MetaPill icon={<CalendarDays className="h-5 w-5" strokeWidth={1.8} />} label="তারিখ" value={dateBn} />
      </div>
    </div>
  );
}

function MetaPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white px-4 py-3 shadow-sm">
      <div className="text-[var(--color-medium-gray)]">{icon}</div>

      <div className="leading-tight">
        <div className="text-[11px] font-medium text-[var(--color-medium-gray)]">
          {label}
        </div>
        <div className="mt-0.5 whitespace-nowrap text-sm font-semibold text-[var(--color-black)]">
          {value}
        </div>
      </div>
    </div>
  );
}
