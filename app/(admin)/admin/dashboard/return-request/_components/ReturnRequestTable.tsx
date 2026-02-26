import { Eye } from "lucide-react";
import StatusPill from "./StatusPill";
import { ReturnRequestRow } from "../_types/return-request.types";
import { formatBdt } from "../_utils/return-request.utils";

type Props = {
  rows: ReturnRequestRow[];
};

export default function ReturnRequestTable({ rows }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px]">
          <thead>
            <tr className="bg-off-white">
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                অর্ডার আইডি
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                আবেদনের তারিখ
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                অফিস (OFFICE)
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                ভেন্ডর (VENDOR)
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                পণ্য (PRODUCT)
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                পরিমাণ
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                বিল্ড পরিমাণ
              </th>
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-light-gray">
                অবস্থা (STATUS)
              </th>
              <th className="px-6 py-4 text-right text-[12px] font-semibold text-light-gray">
                অ্যাকশন
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={r.orderId}
                className="border-t border-border/60 hover:bg-off-white/40"
              >
                <td className="px-6 py-5 text-[13px] font-semibold text-blue">
                  {r.orderId}
                </td>

                <td className="px-6 py-5 text-[13px] font-medium text-light-gray">
                  {r.requestDate}
                </td>

                <td className="px-6 py-5">
                  <div className="text-[13px] font-semibold text-black">
                    {r.officeTitleBn}
                  </div>
                  <div className="mt-1 text-[12px] font-medium text-light-gray">
                    {r.officeSubtitleBn}
                  </div>
                </td>

                <td className="px-6 py-5 text-[13px] font-medium text-black/80">
                  {r.vendor}
                </td>

                <td className="px-6 py-5 text-[13px] font-medium text-black/80">
                  {r.product}
                </td>

                <td className="px-6 py-5 text-[13px] font-semibold text-black/80">
                  {String(r.qty).padStart(2, "0")}
                </td>

                <td className="px-6 py-5 text-[13px] font-semibold text-black/80">
                  {formatBdt(r.amountBdt)}
                </td>

                <td className="px-6 py-5">
                  <StatusPill status={r.status} />
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-off-white px-3 text-[12px] font-semibold text-primary-color hover:bg-off-white/70"
                    >
                      <Eye className="h-4 w-4" />
                      দেখুন
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td colSpan={9} className="px-6 py-12 text-center text-sm text-light-gray">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer bar (same like screenshot) */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-off-white px-6 py-4">
        <p className="text-[13px] font-medium text-light-gray">
          Showing 1 to 5 of 18 results
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-9 rounded-lg border border-border bg-white px-4 text-[13px] font-medium text-light-gray"
          >
            Previous
          </button>
          <button
            type="button"
            className="h-9 rounded-lg border border-border bg-white px-4 text-[13px] font-semibold text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}