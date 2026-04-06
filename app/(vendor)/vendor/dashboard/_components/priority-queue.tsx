"use client";

import React from "react";
import Card from "@/components/cards/card";
import { ShoppingCart, Truck, PackageX, ClipboardList } from "lucide-react";
import PrimaryButton from "@/components/buttons/primary-button";

type Row = {
  title: string;
  desc: string;
  metaLeft: string;   // e.g. "Due in 2h"
  metaRight: string;  // e.g. "Client: Directorate ..."
  action: string;
  tone: "teal" | "orange" | "red";
};

const rows: Row[] = [
  {
    title: "Process Order #815",
    desc: "Pending approval for office supplies batch.",
    metaLeft: "Due in 2h",
    metaRight: "Client: Directorate of Secondary Edu.",
    action: "Approve Now",
    tone: "teal",
  },
  {
    title: "Confirm Shipment #010",
    desc: "Shipment ready for dispatch to Chittagong.",
    metaLeft: "Due Today",
    metaRight: "Logistics Partner: Pathao",
    action: "Review Details",
    tone: "orange",
  },
  {
    title: "Resolve Return #RET-04",
    desc: "Defective item report from Ministry of Health.",
    metaLeft: "Immediate Action",
    metaRight: "Status: Pending Review",
    action: "Resolve",
    tone: "red",
  },
];

const toneBar: Record<Row["tone"], string> = {
  teal: "bg-primary-color",
  orange: "bg-secondary",
  red: "bg-primary-color",
};

const toneIcon: Record<Row["tone"], React.ComponentType<{ size?: number; className?: string }>> =
  {
    teal: ShoppingCart,
    orange: Truck,
    red: PackageX,
  };

const toneIconColor: Record<Row["tone"], string> = {
  teal: "text-primary-color",
  orange: "text-primary-color",
  red: "text-primary-color",
};

const toneMetaColor: Record<Row["tone"], string> = {
  teal: "text-primary-color",
  orange: "text-primary-color",
  red: "text-primary-color",
};

export default function PriorityQueue() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      {/* header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <ClipboardList size={16} />
          </span>
          <h3 className="text-sm font-extrabold text-gray">
            প্রায়োরিটি অ্যাকশন কিউ (Priority Action Queue)
          </h3>
        </div>

        <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold text-primary-color">
          3 Urgent
        </span>
      </div>

      {/* list */}
      <div className="mt-4 space-y-4">
        {rows.map((it) => {
          const Icon = toneIcon[it.tone];

          return (
            <div
              key={it.title}
              className="relative overflow-hidden rounded-2xl bg-secondary p-4"
            >
              {/* left colored bar */}
              <span
                className={[
                  "absolute left-0 top-0 h-full w-[3px]",
                  toneBar[it.tone],
                ].join(" ")}
              />

              <div className="flex items-start justify-between gap-4">
                {/* left: icon + content */}
                <div className="flex items-start gap-4">
                  {/* icon square */}
                  <div className="h-12 w-12 rounded-xl bg-white border border-gray/10 flex items-center justify-center">
                    <Icon size={18} className={toneIconColor[it.tone]} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-gray">{it.title}</p>
                    <p className="mt-1 text-xs font-semibold text-gray/50">
                      {it.desc}
                    </p>

                    {/* meta row */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                      <span className={toneMetaColor[it.tone]}>⏱ {it.metaLeft}</span>
                      <span className="text-gray/25">|</span>
                      <span className="text-gray/50">{it.metaRight}</span>
                    </div>
                  </div>
                </div>

                {/* right: action button */}
                {it.tone === "teal" ? (
                  <PrimaryButton className="h-9 bg-primary-color px-4 text-xs font-extrabold text-white">
                    {it.action}
                  </PrimaryButton>
                ) : (
                  <button className="h-9 rounded-md border border-gray/15 bg-white px-4 text-xs font-extrabold text-gray">
                    {it.action}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
