import Card from "@/components/cards/card";
import Link from "next/link";
import { QuickLinkData } from "../_types/admin-dashboard.types";


export default function QuickLinks({ items }: { items: QuickLinkData[] }) {
  return (
    <Card className="border border-gray-200 bg-white p-4">
      <p className="text-sm font-semibold text-gray-900">Quick Actions</p>

      <div className="mt-3 space-y-2">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">{it.iconText}</span>
              <span className="text-sm text-gray-800">{it.labelBn}</span>
            </div>

            {typeof it.badge === "number" ? (
              <span className="min-w-[26px] rounded-full bg-gray-100 px-2 py-0.5 text-center text-xs font-semibold text-gray-700">
                {it.badge}
              </span>
            ) : null}
          </Link>
        ))}
      </div>

      <div className="mt-3">
        <Link href="/admin/dashboard/requisition-inbox" className="text-sm font-medium text-rose-600 hover:underline">
          সব দেখুন →
        </Link>
      </div>
    </Card>
  );
}
