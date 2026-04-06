"use client";

import type { ChartPoint } from "../_types/analytics.types";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function buildPath(values: number[], w: number, h: number, padX: number, padY: number) {
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const dx = (w - padX * 2) / Math.max(values.length - 1, 1);

  const pts = values.map((v, i) => {
    const t = (v - min) / (max - min || 1);
    const x = padX + i * dx;
    const y = padY + (1 - t) * (h - padY * 2);
    return { x, y };
  });

  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) d += ` L ${pts[i].x} ${pts[i].y}`;
  return { d, pts };
}

export default function ProfitLineChart({ data }: { data: ChartPoint[] }) {
  const w = 980;
  const h = 240;
  const padX = 28;
  const padY = 18;

  const total = data.map((d) => d.totalBn);
  const profit = data.map((d) => d.profitBn);

  const totalPath = buildPath(total, w, h, padX, padY);
  const profitPath = buildPath(profit, w, h, padX, padY);

  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.16)] bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-lg bg-[rgba(31,110,128,0.10)]" />
          <div className="text-sm font-bold text-[var(--color-black)]">
            মাস প্রধান বিশ্লেষণ (৬ মাসের চিত্র)
          </div>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-color)]" />
            <span className="text-[var(--color-light-gray)]">মোট সেটেলমেন্ট</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-purple)]" />
            <span className="text-[var(--color-light-gray)]">মোট প্রফিট</span>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h + 36}`}
          className="min-w-[900px]"
          role="img"
          aria-label="profit chart"
        >
          {/* grid */}
          {Array.from({ length: 4 }).map((_, i) => {
            const y = padY + (i * (h - padY * 2)) / 3;
            return (
              <line
                key={i}
                x1={padX}
                y1={y}
                x2={w - padX}
                y2={y}
                stroke="rgba(100,116,139,0.18)"
                strokeDasharray="4 6"
              />
            );
          })}

          {/* total */}
          <path d={totalPath.d} fill="none" stroke="var(--color-primary-color)" strokeWidth="3" />
          {/* profit */}
          <path d={profitPath.d} fill="none" stroke="var(--color-purple)" strokeWidth="3" />

          {/* x labels */}
          {data.map((d, i) => {
            const x = padX + i * ((w - padX * 2) / clamp(data.length - 1, 1, 999));
            return (
              <text
                key={d.key}
                x={x}
                y={h + 26}
                textAnchor="middle"
                fontSize="12"
                fill="var(--color-light-gray)"
              >
                {d.key}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
