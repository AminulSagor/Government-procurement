import { StatCard } from "../_types/requisition-inbox.types";

function StatIcon({ type }: { type: StatCard["icon"] }) {
  // no dependency, small inline svg icons
  if (type === "file") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "badge") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 3l2.2 2.1 3-.6.7 3 2.6 1.6-1.6 2.6 1.6 2.6-2.6 1.6-.7 3-3-.6L12 21l-2.2-2.1-3 .6-.7-3L3.5 14l1.6-2.6L3.5 8.8 6 7.2l.7-3 3 .6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  if (type === "hourglass") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 3h10M7 21h10M8 3c0 6 8 6 8 12s-8 6-8 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function accentRing(accent: StatCard["accent"]) {
  if (accent === "green") return "border-[rgba(7,136,52,0.16)] bg-[rgba(7,136,52,0.08)] text-[var(--color-green)]";
  if (accent === "secondary") return "border-[rgba(120,185,181,0.18)] bg-[rgba(120,185,181,0.10)] text-[var(--color-primary-color)]";
  return "border-[rgba(31,110,128,0.18)] bg-[rgba(31,110,128,0.10)] text-[var(--color-primary-color)]";
}

export default function RequisitionStats({ cards }: { cards: StatCard[] }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.key}
          className="rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4 "
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full border ${accentRing(
                c.accent
              )}`}
            >
              <StatIcon type={c.icon} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-[var(--color-medium-gray)]">{c.titleBn}</p>
              <p className="mt-1 text-2xl font-semibold text-[var(--color-black)]">
                {c.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
