import { DepartmentRowData } from "../_types/admin-dashboard.types";

function tone(pct: number) {
  if (pct >= 90)
    return {
      bar: "bg-[var(--color-red)]",
      pill: "text-[var(--color-red)] bg-[var(--color-red)]/10 border-[var(--color-red)]/20",
    };

  if (pct >= 70)
    return {
      bar: "bg-primary-color",
      pill: "text-primary-color bg-primary-color/10 border-primary-color/20",
    };

  return {
    bar: "bg-[var(--color-green)]",
    pill: "text-[var(--color-green)] bg-[var(--color-green)]/10 border-[var(--color-green)]/20",
  };
}

export default function DepartmentRow({ row }: { row: DepartmentRowData }) {
  const t = tone(row.usagePct);

  return (
    <tr className="text-sm">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-secondary-color text-primary-color grid place-items-center text-xs font-semibold">
            {row.nameBn.slice(0, 2)}
          </div>

          <div>
            <div className="font-semibold text-gray">{row.nameBn}</div>
            <div className="text-xs text-gray">ID: {row.id}</div>
          </div>
        </div>
      </td>

      <td className="px-5 py-4 text-gray">{row.officeBn}</td>

      <td className="px-5 py-4 text-right font-semibold text-gray">{row.budget}</td>
      <td className="px-5 py-4 text-right text-gray">{row.spent}</td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-[170px]">
            <div className="h-2 w-full rounded-full bg-[var(--color-light-gray)] overflow-hidden">
              <div
                className={`h-full rounded-full ${t.bar}`}
                style={{ width: `${row.usagePct}%` }}
              />
            </div>
          </div>

          <span className="text-xs font-semibold text-gray">
            {row.usagePct}%
          </span>

          <span
            className={`rounded-full border px-2.5 py-[2px] text-[11px] font-medium ${t.pill}`}
          >
            {row.usageLabel}
          </span>
        </div>
      </td>

      <td className="px-5 py-4 text-right font-semibold text-gray">
        {row.remaining}
      </td>

      <td className="px-5 py-4 text-right">
        <button className="h-8 rounded-md border border-[var(--color-light-gray)] px-3 text-xs hover:bg-[var(--color-off-white)]">
          View
        </button>
      </td>
    </tr>
  );
}