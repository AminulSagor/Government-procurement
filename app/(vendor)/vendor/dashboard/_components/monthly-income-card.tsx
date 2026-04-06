"use client";

import React from "react";
import Card from "@/components/cards/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Point = {
  name: string;   // e.g. "Jan"
  income: number; // solid line
  target: number; // dashed line
};

const demoData: Point[] = [
  { name: "জানু", income: 22, target: 12 },
  { name: "ফেব", income: 38, target: 18 },
  { name: "মার্চ", income: 56, target: 28 },
  { name: "এপ্রিল", income: 64, target: 36 },
  { name: "মে", income: 61, target: 34 },
  { name: "জুন", income: 70, target: 40 },
];

export default function MonthlyIncomeCard({
  data = demoData,
}: {
  data?: Point[];
}) {
  return (
    <Card className="h-[360px] rounded-2xl border border-gray/15 bg-white p-5 flex flex-col">
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-extrabold text-gray">
            মাসিক আয় প্রবণতা (Monthly Income)
          </h3>
          <p className="mt-1 text-xs font-semibold text-light-gray">
            Growth Comparison: Current vs Last Year
          </p>
        </div>

        {/* legend */}
        <div className="flex items-center gap-3 text-xs  text-gray/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary-color" />
            <span className="text-primary-color">Income</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-light-gray" />
            <span className="text-light-gray">Target</span>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="mt-4 h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={30}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              labelStyle={{ fontWeight: 700 }}
            />

            {/* income line (primary) */}
            <Line
              type="monotone"
              dataKey="income"
              stroke="var(--primary-color)"
              strokeWidth={3}
              dot={false}
            />

            {/* target line (dashed gray) */}
            <Line
              type="monotone"
              dataKey="target"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
