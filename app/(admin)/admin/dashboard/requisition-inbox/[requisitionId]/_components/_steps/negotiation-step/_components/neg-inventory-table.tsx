import { NegInventoryRow } from "../_types/negotiation-step.types";

export default function NegInventoryTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: NegInventoryRow[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white">
      <table className="min-w-full">
        <thead className="bg-[rgba(246,247,248,0.65)]">
          <tr className="text-left text-xs font-semibold text-[var(--color-medium-gray)]">
            {columns.map((c) => (
              <th key={c} className="px-5 py-4">
                {c}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-[rgba(100,116,139,0.12)] text-sm">
              <td className="px-5 py-4 text-[var(--color-black)]">{r.itemBn}</td>
              <td className="px-5 py-4 text-[var(--color-medium-gray)]">{r.economicCode}</td>
              <td className="px-5 py-4">
                <StatusPill status={r.inventoryStatus} />
              </td>
              <td className="px-5 py-4 text-right font-semibold text-[var(--color-black)]">
                {r.vendorPriceBn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({ status }: { status: "IN_STOCK" | "OUT_OF_STOCK" }) {
  const ok = status === "IN_STOCK";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        ok
          ? "bg-[rgba(7,136,52,0.12)] text-[var(--color-green)]"
          : "bg-[rgba(231,53,8,0.10)] text-[var(--color-red)]"
      }`}
    >
      {ok ? "IN STOCK" : "OUT OF STOCK"}
    </span>
  );
}
