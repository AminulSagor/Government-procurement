"use client";

import React from "react";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";

type Tag = "NEW RFQ" | "HIGH VALUE" | "OPEN" | "URGENT";

type Opp = {
  id: string;
  tag: Tag;
  title: string;
  org: string;
  closingIn: string;
};

const demo: Opp[] = [
  {
    id: "RFQ-8821",
    tag: "NEW RFQ",
    title: "অফিস স্টেশনারি সরবরাহ",
    org: "Ministry of Public Administration",
    closingIn: "02d 14h 30m",
  },
  {
    id: "RFQ-9902",
    tag: "HIGH VALUE",
    title: "ল্যাপটপ মেরামত ও রক্ষণাবেক্ষণ",
    org: "ICT Division",
    closingIn: "05d 08h 15m",
  },
  {
    id: "RFQ-7745",
    tag: "OPEN",
    title: "এসি সার্ভিসিং (বার্ষিক চুক্তি)",
    org: "Department of Health",
    closingIn: "12d 04h 00m",
  },
  {
    id: "RFQ-6612",
    tag: "URGENT",
    title: "প্রিন্টিং পেপার সরবরাহ (AA)",
    org: "Education Board",
    closingIn: "04h 22m 10s",
  },
];

const tagStyles: Record<Tag, { bg: string; text: string }> = {
  "NEW RFQ": { bg: "bg-secondary", text: "text-primary-color" },
  "HIGH VALUE": { bg: "bg-secondary", text: "text-primary-color" },
  OPEN: { bg: "bg-secondary", text: "text-green" },
  URGENT: { bg: "bg-secondary", text: "text-primary-color" },
};

export default function NewOpportunities() {
  return (
    <div className="space-y-3">
      {/* header (no card wrapper like screenshot) */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            {/* <Settings size={16} /> */}
            <BadgeCheck size={18} />
          </span>
          <h3 className="text-xl font-extrabold text-gray">
            নতুন সুযোগ (New Opportunities)
          </h3>
        </div>

        <Link
          href="/vendor/opportunities"
          className="text-xs font-bold text-primary-color"
        >
          View All RFQs
        </Link>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {demo.map((it) => {
          const t = tagStyles[it.tag];

          return (
            <Card
              key={it.id}
              className="rounded-2xl border border-gray/15 bg-white p-4"
            >
              {/* top row: tag + id */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={[
                    "rounded-md px-2 py-1 text-[10px] font-extrabold",
                    t.bg,
                    t.text,
                  ].join(" ")}
                >
                  {it.tag}
                </span>

                <span className="text-[10px] text-light-gray">
                  #{it.id}
                </span>
              </div>

              {/* title + org */}
              <p className="mt-3 text-sm font-extrabold text-gray leading-5">
                {it.title}
              </p>
              <p className="mt-1 text-xs text-light-gray">
                {it.org}
              </p>

              {/* divider */}
              <div className="my-3 h-px w-full bg-gray/10" />

              {/* closing row */}
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-light-gray">Closing In:</span>
                <span
                  className={
                    it.tag === "URGENT"
                      ? "text-primary-color font-extrabold"
                      : "text-gray font-extrabold"
                  }
                >
                  {it.closingIn}
                </span>
              </div>

              {/* CTA */}
              <PrimaryButton
                type="button"
                className="mt-3 w-full bg-primary-color px-3 py-2 text-xs  text-white"
              >
                বিড করুন (Bid Now)
              </PrimaryButton>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
