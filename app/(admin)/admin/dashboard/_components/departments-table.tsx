import Card from "@/components/cards/card";
import { DepartmentRowData } from "../_types/admin-dashboard.types";
import DepartmentRow from "./department-row";

export default function DepartmentsTable({ rows }: { rows: DepartmentRowData[] }) {
  return (
    <Card className="border border-[var(--color-light-gray)] bg-white p-0 overflow-hidden">
      <div className="border-b border-[var(--color-light-gray)] px-5 py-3">
        <p className="text-sm font-semibold text-gray">Departments</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-[var(--color-off-white)] text-[11px] text-gray">
            <tr>
              <th className="px-5 py-3 text-left font-semibold">বিভাগের নাম ও আইডি</th>
              <th className="px-5 py-3 text-left font-semibold">অফিস</th>
              <th className="px-5 py-3 text-right font-semibold">বাজেট</th>
              <th className="px-5 py-3 text-right font-semibold">ব্যয়</th>
              <th className="px-5 py-3 text-left font-semibold">ব্যবহারের হার</th>
              <th className="px-5 py-3 text-right font-semibold">অবশিষ্ট</th>
              <th className="px-5 py-3 text-right font-semibold">ACT</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--color-light-gray)]">
            {rows.map((r) => (
              <DepartmentRow key={r.id} row={r} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 text-xs text-gray">
        <span>Showing 1 to {rows.length} of 42 departments</span>
        <div className="flex items-center gap-2">
          <button className="h-8 rounded-md border border-[var(--color-light-gray)] px-3 hover:bg-[var(--color-off-white)]">
            Previous
          </button>
          <button className="h-8 rounded-md border border-[var(--color-light-gray)] px-3 hover:bg-[var(--color-off-white)]">
            Next
          </button>
        </div>
      </div>
    </Card>
  );
}