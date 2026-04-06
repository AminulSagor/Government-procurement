import { formatBDT } from "../_utils/money";

export default function ProductStatsCard({
  unitPrice,
  stock,
}: {
  unitPrice: number;
  stock: number;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-xs font-bold text-slate-500">ইউনিট মূল্য</div>
          <div className="mt-2 text-xl font-extrabold text-slate-900">
            ৳ {formatBDT(unitPrice)}
          </div>
        </div>

        <div className="border-l border-slate-200 pl-6">
          <div className="text-xs font-bold text-slate-500">বর্তমান স্টক</div>
          <div className="mt-2 text-xl font-extrabold text-slate-900">
            {toBnDigits(stock)}টি
          </div>
        </div>
      </div>
    </section>
  );
}

function toBnDigits(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n).replace(/[0-9]/g, (d) => map[d]);
}