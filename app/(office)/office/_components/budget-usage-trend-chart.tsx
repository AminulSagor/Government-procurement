"use client";

import Card from "@/components/cards/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TrendPoint = {
  month: string;
  actual: number;
  planned: number;
};

const data: TrendPoint[] = [
  { month: "জুলাই", actual: 30, planned: 22 },
  { month: "আগস্ট", actual: 64, planned: 38 },
  { month: "সেপ্টেম্বর", actual: 42, planned: 35 },
  { month: "অক্টোবর", actual: 58, planned: 45 },
  { month: "নভেম্বর", actual: 18, planned: 28 },
  { month: "ডিসেম্বর", actual: 78, planned: 50 },
  { month: "জানুয়ারি", actual: 62, planned: 48 },
];

export default function BudgetUsageTrendChart() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-black">
            বাজেট ব্যবহারের প্রবণতা
          </h3>
          <p className="mt-1 text-sm text-gray-medium">
            মাসিক ব্যয় বনাম বরাদ্দ
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-5 text-sm text-gray-medium">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-color  " />
            <span>প্রকৃত ব্যয়</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span>প্রাক্কলিত</span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-70 md:h-82.5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity={0.22} />
                <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="plannedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CBD5E1" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#E2E8F0" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
            />

            <YAxis hide />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="planned"
              stroke="#CBD5E1"
              strokeWidth={3}
              fill="url(#plannedFill)"
              dot={false}
              activeDot={{ r: 5 }}
            />

            <Area
              type="monotone"
              dataKey="actual"
              stroke="var(--primary-color-70)"
              strokeWidth={4}
              fill="url(#actualFill)"
              dot={false}
              activeDot={{ r: 6 }}
              style={{ color: "var(--primary-color-70)" }}
            />

            <Legend wrapperStyle={{ display: "none" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function CustomTooltip({
  // active,
  // payload,
  label,
}: {
  active?: boolean;
  // payload?: any[];
  label?: string;
}) {
  // if (!active || !payload?.length) return null;

  // const actual = payload.find((p) => p.dataKey === "actual")?.value ?? 0;
  // const planned = payload.find((p) => p.dataKey === "planned")?.value ?? 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <p className="text-sm font-semibold text-black">{label}</p>
      <div className="mt-1 space-y-1">
        <div className="flex items-center justify-between gap-6 text-sm">
          <span className="text-gray-medium">প্রকৃত ব্যয়</span>
          <span className="font-semibold text-black"></span>
        </div>
        <div className="flex items-center justify-between gap-6 text-sm">
          <span className="text-gray-medium">প্রাক্কলিত</span>
          <span className="font-semibold text-black"></span>
        </div>
      </div>
    </div>
  );
}
