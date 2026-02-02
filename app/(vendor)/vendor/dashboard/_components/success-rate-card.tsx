"use client";

import React from "react";
import Card from "@/components/cards/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Props = {
  winRate?: number; // %
  wins?: number;
  losses?: number;
};

export default function SuccessRateCard({
  winRate = 65,
  wins = 12,
  losses = 4,
}: Props) {
  const data = [
    { name: "win", value: winRate },
    { name: "rest", value: 100 - winRate },
  ];

  return (
    <Card className="h-[360px] rounded-2xl border border-gray/15 bg-white p-5 flex flex-col">
      {/* header */}
      <div>
        <h3 className="text-sm font-extrabold text-gray">
          সাফল্যের হার (Success Rate)
        </h3>
        <p className="mt-1 text-xs text-primary-color">
          Bid Win Ratio
        </p>
      </div>

      {/* donut (fills remaining space, centered) */}
      <div className="relative mt-4 flex-1 w-full flex items-center justify-center">
        <div className="h-[190px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={62}
                outerRadius={82}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
                stroke="transparent"
              >
                <Cell fill="var(--primary-color)" />
                <Cell fill="rgba(0,0,0,0.10)" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* center text */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-extrabold text-gray">{winRate}%</p>
          <p className="text-xs text-primary-color">Win Rate</p>
        </div>
      </div>

      {/* bottom stats */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-secondary p-3 text-center">
          <p className="text-lg font-extrabold text-primary-color">{wins}</p>
          <p className="text-xs text-primary-color">Wins</p>
        </div>

        <div className="rounded-xl bg-secondary p-3 text-center">
          <p className="text-lg font-extrabold text-gray/60">{losses}</p>
          <p className="text-xs text-primary-color">Losses</p>
        </div>
      </div>
    </Card>
  );
}
