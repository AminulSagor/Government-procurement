import { RequisitionRow } from "../_types/requisition-inbox.types";

function StatusPill({
  status,
  hint,
}: {
  status: RequisitionRow["status"];
  hint?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold";

  if (status === "IN_PROGRESS") {
    return (
      <div className="inline-flex flex-col">
        <span className={`${base} border-[rgba(120,185,181,0.35)] bg-[rgba(120,185,181,0.16)] text-[var(--color-primary-color)]`}>
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary-color)]" />
          IN PROGRESS
        </span>
        {hint ? (
          <span className="mt-1 text-[11px] text-[var(--color-medium-gray)]">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }

  if (status === "FULLY_ORDERED") {
    return (
      <span className={`${base} border-[rgba(7,136,52,0.25)] bg-[rgba(7,136,52,0.10)] text-[var(--color-green)]`}>
        <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
        FULLY ORDERED
      </span>
    );
  }

  return (
    <span className={`${base} border-[rgba(145,145,145,0.30)] bg-[rgba(145,145,145,0.10)] text-[var(--color-medium-gray)]`}>
      <span className="h-2 w-2 rounded-full bg-[var(--color-medium-gray)]" />
      NOT STARTED
    </span>
  );
}

export default function RequisitionTable({
  rows,
  onView,
  onStart,
}: {
  rows: RequisitionRow[];
  onView: (id: string) => void;
  onStart: (id: string, status: string) => void;
}) {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.20)] bg-white ">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full">
          <thead className="bg-[rgba(246,247,248,0.75)]">
            <tr className="text-left text-xs font-semibold text-[var(--color-medium-gray)]">
              <th className="px-5 py-4">চাহিদাপত্র আইডি</th>
              <th className="px-5 py-4">তারিখ</th>
              <th className="px-5 py-4">অফিসের নাম ও আইডি</th>
              <th className="px-5 py-4">অর্থনৈতিক কোড</th>
              <th className="px-5 py-4">পণ্যের সংখ্যা</th>
              <th className="px-5 py-4">সর্বমোট ব্যয়</th>
              <th className="px-5 py-4">ক্রয়াদেশ স্থিতি</th>
              <th className="px-5 py-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className="border-t border-[rgba(100,116,139,0.12)] text-sm text-[var(--color-black)]"
              >
                <td className="px-5 py-5">
                  <span className="font-semibold text-[var(--color-primary-color)]">
                    #{r.id}
                  </span>
                </td>

                <td className="px-5 py-5 text-[var(--color-medium-gray)]">{r.date}</td>

                <td className="px-5 py-5">
                  <p className="font-semibold">{r.officeNameBn}</p>
                  <p className="mt-1 text-xs text-[var(--color-medium-gray)]">
                    ID: {r.officeId}
                  </p>
                </td>

                <td className="px-5 py-5 text-[var(--color-medium-gray)]">{r.economicCode}</td>
                <td className="px-5 py-5 text-[var(--color-medium-gray)]">{r.productCountBn}</td>
                <td className="px-5 py-5 text-[var(--color-medium-gray)]">{r.totalAmountBn}</td>

                <td className="px-5 py-5">
                  <StatusPill status={r.status} hint={r.statusHintBn} />
                </td>

                <td className="px-5 py-5">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      disabled={!!r.actionDisabled}
                      onClick={() => onStart(r.id,r.status)}
                      className={`h-9 rounded-lg px-4 text-sm font-semibold text-white ${
                        r.actionDisabled
                          ? "bg-[rgba(100,116,139,0.20)] text-[rgba(16,24,25,0.35)]"
                          : "bg-[var(--color-primary-color)] hover:opacity-95"
                      }`}
                    >
                      প্রক্রিয়া শুরু করুন
                    </button>

                    <button
                      type="button"
                      onClick={() => onView(r.id)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(100,116,139,0.20)] bg-white text-[var(--color-medium-gray)] hover:bg-[var(--color-off-white)]"
                      aria-label="view"
                    >
                      {/* eye */}
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer spacing like image */}
      <div className="h-2 bg-white" />
    </div>
  );
}
