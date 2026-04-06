"use client";

import React from "react";
import { Monitor, Mouse, Box } from "lucide-react";

import SecondaryButton from "@/components/buttons/secondary-button";
import {
  OrderItemDialogIcon,
  OrderItemsDetailsDialogProps,
} from "@/app/(office)/office/types/order-items-details-dialog.type";
import Dialog from "@/components/dialog/dialog";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function itemIcon(icon?: OrderItemDialogIcon) {
  const cls = "h-5 w-5 text-light-gray";
  if (icon === "laptop") return <Monitor className={cls} />;
  if (icon === "mouse") return <Mouse className={cls} />;
  return <Box className={cls} />;
}

export default function OrderItemsDetailsDialog({
  open,
  onOpenChange,
  title = "অর্ডারকৃত সকল পণ্যের বিস্তারিত তথ্য",
  items,
}: OrderItemsDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} size="xl" className="p-0">
      <div className="p-0">
        <div className="flex items-center justify-between border-b border-primary-color/10 px-6 py-4">
          <h3 className="text-base font-extrabold text-black">{title}</h3>
        </div>

        <div className="max-h-[calc(100vh-180px)] overflow-y-auto px-6 py-5 space-y-6">
          {items.map((it) => (
            <div key={it.id} className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-off-white">
                  {itemIcon(it.icon)}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-black">{it.name}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-primary-color/20 bg-secondary-color/10 px-3 py-1 text-xs font-extrabold text-primary-color">
                      {it.codeText}
                    </span>

                    {it.categoryText ? (
                      <span className="rounded-md bg-off-white px-3 py-1 text-xs font-extrabold text-light-gray">
                        {it.categoryText}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold text-light-gray">
                  {it.techTitle ?? "প্রযুক্তিগত বৈশিষ্ট্য"}
                </p>

                <div className="mt-2 rounded-md border border-primary-color/10 bg-off-white/60 p-4">
                  {it.techDescription ? (
                    <p className="text-xs font-bold text-light-gray">
                      {it.techDescription}
                    </p>
                  ) : null}

                  {it.techBullets?.length ? (
                    <ul
                      className={cn(
                        "mt-2 space-y-1",
                        it.techDescription && "mt-3",
                      )}
                    >
                      {it.techBullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-bold text-light-gray flex gap-2"
                        >
                          <span className="mt-[6px] h-[5px] w-[5px] rounded-full bg-light-gray/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold text-light-gray">
                  আর্থিক বিবরণ
                </p>

                <div className="mt-2 overflow-x-auto rounded-md border border-primary-color/10">
                  <table className="w-full min-w-[700px] text-left">
                    <thead>
                      <tr className="bg-off-white/70 text-xs font-extrabold text-light-gray">
                        <th className="px-4 py-3">বিবরণ</th>
                        <th className="px-4 py-3 text-center">সাধারণ মূল্য</th>
                        <th className="px-4 py-3 text-right">ভ্যাটসহ মূল্য</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-primary-color/10">
                        <td className="px-4 py-4 text-xs font-extrabold text-black">
                          একক মূল্য
                        </td>
                        <td className="px-4 py-4 text-xs font-extrabold text-light-gray text-center">
                          {it.pricing.regularUnitPriceText}
                        </td>
                        <td className="px-4 py-4 text-right text-xs font-extrabold text-primary-color">
                          {it.pricing.vatUnitPriceText}
                        </td>
                      </tr>

                      <tr className="border-t border-primary-color/10">
                        <td className="px-4 py-4 text-xs font-extrabold text-black">
                          মোট মূল্য ({it.pricing.qty} টি)
                        </td>
                        <td className="px-4 py-4 text-xs font-extrabold text-light-gray text-center">
                          {it.pricing.regularTotalText}
                        </td>
                        <td className="px-4 py-4 text-right text-xs font-extrabold text-primary-color">
                          {it.pricing.vatTotalText}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-primary-color/10 pt-6" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-primary-color/10 px-6 py-4">
          <SecondaryButton
            className="px-6 py-2 text-sm"
            onClick={() => onOpenChange(false)}
          >
            বন্ধ করুন
          </SecondaryButton>
        </div>
      </div>
    </Dialog>
  );
}
