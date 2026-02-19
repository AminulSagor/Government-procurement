import { ChevronDown, Search } from "lucide-react";

interface Props {
  activeTab: TabKey;
  setActiveTab: (v: TabKey) => void;
  query: string;
  setQuery: (v: string) => void;
}
type TabKey = "all" | "available" | "unavailable";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "সবগুলো (All)" },
  { key: "available", label: "পর্যাপ্ত তহবিল" },
  { key: "unavailable", label: "তহবিল নেই" },
];

const ProcurementToolbar = ({
  activeTab,
  setActiveTab,
  query,
  setQuery,
}: Props) => {
  return (
    <div>
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center rounded-md bg-white p-1 shadow-sm">
          {TABS.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={[
                  "h-9 flex-1 rounded-md px-4 text-sm font-semibold transition cursor-pointer",
                  isActive
                    ? "bg-primary-color text-white"
                    : "text-primary-color hover:opacity-80",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-lg">
          <div className="flex items-center gap-2 rounded-md bg-white shadow-sm px-3 py-3">
            <Search className="h-4 w-4 text-primary-color" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="কোড বা নাম দিয়ে খুঁজুন..."
              className="w-full bg-transparent text-sm text-black placeholder:text-primary-color outline-none"
            />
          </div>
        </div>

        <div className="relative w-55">
          <select
            name="fiscalYear"
            className="w-full h-12 appearance-none rounded-lg border border-[rgba(100,116,139,0.14)] bg-white px-5 pr-10 text-sm font-medium text-primary-color outline-none
  "
          >
            <option value="2026">২০২৬ - ২০২৭</option>
            <option value="2025">২০২৫ - ২০২৬</option>
            <option value="2024">২০২৪ - ২০২৫</option>
            <option value="2023">২০২৩ - ২০২৪</option>
          </select>

          {/* dropdown icon */}
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-medium-gray" />
        </div>
      </div>
    </div>
  );
};

export default ProcurementToolbar;
