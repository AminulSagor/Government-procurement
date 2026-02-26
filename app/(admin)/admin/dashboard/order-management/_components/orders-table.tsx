import Link from "next/link";
import { Eye, FileText } from "lucide-react";
import StatusPill from "./status-pill";
import type { OrderListRow } from "../_types/order-management.type";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function OrdersTable({ rows }: { rows: OrderListRow[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm min-w-255">
        <thead className="text-light-gray">
          <tr className="border-b border-primary-color/10">
            <th className="text-left py-3">অর্ডার আইডি</th>
            <th className="text-left py-3">তারিখ</th>
            <th className="text-left py-3">দপ্তরের নাম ও আইডি</th>
            <th className="text-left py-3">অর্থনৈতিক কোড</th>
            <th className="text-left py-3">ভেন্ডর</th>
            <th className="text-left py-3">মোট মূল্য</th>
            <th className="text-left py-3">বর্তমান ধাপ</th>
            <th className="text-right py-3">অ্যাকশন</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.orderId} className="border-b border-primary-color/10">
              <td className="py-4">
                <Link
                  className="text-primary-color font-semibold hover:underline"
                  href={`/admin/dashboard/order-management/${r.orderId}`}
                >
                  #{r.orderId}
                </Link>
              </td>
              <td className="py-4 text-light-gray">{r.date}</td>
              <td className="py-4">
                <div className="text-black font-semibold">{r.officeName}</div>
                <div className="text-light-gray text-xs">
                  ID: {r.officeCode}
                </div>
              </td>
              <td className="py-4 text-black">{r.economicCode}</td>
              <td className="py-4 text-black">{r.vendorName}</td>
              <td className="py-4 text-black font-semibold">
                {formatBDT(r.total.amount)}
              </td>
              <td className="py-4">
                <StatusPill stage={r.currentStage} />
              </td>
              <td className="py-4">
                <div className="flex justify-end gap-3">
                  <Link
                    href={`/admin/dashboard/order-management/${r.orderId}`}
                    className="text-primary-color"
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                  <button className="text-light-gray">
                    <FileText className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pt-4 flex items-center justify-between text-xs text-light-gray">
        <span>সর্বমোট {rows.length} টি অর্ডার দেখানো হচ্ছে</span>
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 rounded-md border border-primary-color/20 bg-white text-black">
            ‹
          </button>
          <button className="h-8 w-8 rounded-md bg-primary-color text-white">
            1
          </button>
          <button className="h-8 w-8 rounded-md border border-primary-color/20 bg-white text-black">
            2
          </button>
          <button className="h-8 w-8 rounded-md border border-primary-color/20 bg-white text-black">
            3
          </button>
          <button className="h-8 w-8 rounded-md border border-primary-color/20 bg-white text-black">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
