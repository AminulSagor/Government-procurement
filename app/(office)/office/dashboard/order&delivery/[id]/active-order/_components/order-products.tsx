"use client";

import React, { JSX } from "react";
import Card from "@/components/cards/card";
import { Monitor, Mouse, PlugZap } from "lucide-react";

// ----------------------------------
// Types
// ----------------------------------
type OrderItem = {
  id: string;
  name: string;
  code: string;
  subtitle?: string;
  qty: number;
  unitPrice: number;
  icon?: "monitor" | "mouse" | "plug";
};

type Props = {
  orderId: string;
  items?: OrderItem[];
  totalOverride?: number;
};

// ----------------------------------
// Helpers
// ----------------------------------
const formatBDT = (amount: number) =>
  `৳ ${new Intl.NumberFormat("bn-BD").format(amount)}`;

// ----------------------------------
// Icon component
// ----------------------------------
const iconMap: Record<NonNullable<OrderItem["icon"]>, JSX.Element> = {
  monitor: <Monitor className="h-4.5 w-4.5" />,
  mouse: <Mouse className="h-4.5 w-4.5" />,
  plug: <PlugZap className="h-4.5 w-4.5" />,
};

const IconBox = ({ icon }: { icon?: OrderItem["icon"] }) => {
  const base =
    "flex h-9 w-9 items-center justify-center rounded-md bg-off-white border border-off-white text-light-gray";

  return (
    <div className={base}>
      {icon ? iconMap[icon] : <Monitor className="h-4.5 w-4.5" />}
    </div>
  );
};

// ----------------------------------
// Main Component
// ----------------------------------
export default function OrderProducts({
  orderId,
  items = [
    {
      id: "i1",
      name: "ডেল ল্যাটিটিউড ৫৪২০",
      code: "কোড: ০৫৬০৯১",
      subtitle: "কোর i7, ১৬জিবি র‍্যাম, ৫১২জিবি এসএসডি",
      qty: 5,
      unitPrice: 120000,
      icon: "monitor",
    },
    {
      id: "i2",
      name: "লজিটেক MX মাস্টার ৩",
      code: "কোড: ০৫৬০৯১",
      subtitle: "ওয়্যারলেস মাউস, গ্রাফাইট",
      qty: 5,
      unitPrice: 10500,
      icon: "mouse",
    },
    {
      id: "i3",
      name: "ডেল ডকিং স্টেশন WD19",
      code: "কোড: ০২৮৫৩৫০৫",
      subtitle: "USB-C ১৮০W",
      qty: 2,
      unitPrice: 22000,
      icon: "plug",
    },
  ],
  totalOverride,
}: Props) {
  const totalAmount =
    totalOverride ?? items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0);

  return (
    <Card className="px-0 py-5">
      {/* Title */}
      <div className="px-6 pt-5 pb-3 py-2">
        <p className="text-base font-extrabold text-black">
          অর্ডারকৃত পণ্যসমূহ
        </p>
      </div>

      {/* Table */}
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-primary-color/10 border-y border-off-white">
            <tr className="text-xs font-extrabold text-light-gray">
              <th className="px-6 py-3 text-left w-96">পণ্যের নাম</th>
              <th className="px-6 py-3 text-center">পরিমাণ</th>
              <th className="px-6 py-3 text-center">একক মূল্য</th>
              <th className="px-6 py-3 text-right">মোট</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-off-white">
            {items.map((item) => {
              const lineTotal = item.qty * item.unitPrice;

              return (
                <tr key={item.id}>
                  {/* Product */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3 min-w-0">
                      <IconBox icon={item.icon} />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-extrabold text-black">
                            {item.name}
                          </p>
                          <span className="rounded-md bg-primary-color/10 px-2 py-0.5 text-xs font-extrabold text-primary-color border border-primary-color/10">
                            {item.code}
                          </span>
                        </div>
                        {item.subtitle && (
                          <p className="mt-1 text-xs text-light-gray">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-extrabold text-black">
                      {new Intl.NumberFormat("bn-BD").format(item.qty)}
                    </span>
                  </td>

                  {/* Unit Price */}
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-extrabold text-black">
                      {formatBDT(item.unitPrice)}
                    </span>
                  </td>

                  {/* Line Total */}
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-extrabold text-black">
                      {formatBDT(lineTotal)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>

          {/* Table Footer */}
          <tfoot className="border-t border-off-white">
            <tr>
              <td />
              <td />
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-extrabold text-light-gray">
                  সর্বমোট পরিমাণ
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-lg font-extrabold text-primary-color">
                  {formatBDT(totalAmount)}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
}
