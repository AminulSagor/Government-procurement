import Card from "@/components/cards/card";
import Link from "next/link";
import { PendingActionsData, QuickLinkData } from "../_types/admin-dashboard.types";
import { ClipboardList, Building2, BadgeCheck, CreditCard } from "lucide-react";

function itemIcon(key?: string) {
  // you can change mapping based on your backend keys
  if (key === "vendor") return Building2;
  if (key === "dealer") return BadgeCheck;
  if (key === "payment") return CreditCard;
  return ClipboardList;
}

function toneStyles(tone?: string) {
  // matches the screenshot vibe (orange / blue / green)
  if (tone === "orange")
    return { wrap: "bg-[#FFF1E6] text-[#F28C28]", dot: "bg-[#F28C28]" };
  if (tone === "blue")
    return { wrap: "bg-[#EAF2FF] text-[#2F6FED]", dot: "bg-[#2F6FED]" };
  return { wrap: "bg-[#E9FBF2] text-[#19A974]", dot: "bg-[#19A974]" }; // green default
}

export default function PendingActionsCard({
  data,
  items,
}: {
  data: PendingActionsData;
  items: QuickLinkData[];
}) {
  return (
    <Card className="rounded-2xl border border-[#F6D6D6] bg-[#FFF6F6] p-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white border border-[#F6D6D6]">
            <ClipboardList className="h-4 w-4 text-[var(--color-primary-color)]" />
          </span>
          <p className="text-sm font-semibold text-gray-900">{data.titleBn}</p>
        </div>

        <span className="h-2 w-2 rounded-full bg-[var(--color-primary-color)]" />
      </div>

      {/* big count box */}
      <div className="mt-3 rounded-2xl bg-white border border-[#F6D6D6] px-4 py-4 text-center">
        <div className="text-[32px] leading-none font-extrabold text-gray-900">
          {data.total}টি
        </div>
        <div className="mt-2 text-sm font-semibold text-[var(--color-primary-color)]">
          অ্যাকশন বাকি
        </div>
        <div className="mt-1 text-xs text-gray-500">{data.subtitleBn}</div>
      </div>

      {/* action rows */}
      <div className="mt-4 space-y-3">
        {items.map((it) => {
          const Icon = itemIcon((it as any).iconKey);
          const tone = toneStyles((it as any).tone); // tone: "orange" | "blue" | "green"

          return (
            <Link
              key={it.href}
              href={it.href}
              className="flex items-center justify-between rounded-2xl border border-[#F6D6D6] bg-white px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-full ${tone.wrap}`}>
                  <Icon className="h-4 w-4" />
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {it.labelBn}
                </span>
              </div>

              {typeof it.badge === "number" ? (
                <span className="min-w-[30px] rounded-full bg-[#FFE9E9] px-2 py-1 text-center text-xs font-bold text-[var(--color-primary-color)]">
                  {it.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      {/* see all */}
      <div className="mt-4 text-center">
        <Link
          href="/admin/dashboard/requisition-inbox"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-color)]"
        >
          সব দেখুন <span>→</span>
        </Link>
      </div>
    </Card>
  );
}
