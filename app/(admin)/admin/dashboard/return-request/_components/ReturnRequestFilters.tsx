import { Search, ChevronDown } from "lucide-react";
import { DamageType, OfficeFilter, StatusFilter } from "../_types/return-request.types";

export type ReturnRequestFiltersValue = {
  query: string;
  damageType: DamageType;
  office: OfficeFilter;
  status: StatusFilter;
};

type Props = {
  value: ReturnRequestFiltersValue;
  onChange: (next: ReturnRequestFiltersValue) => void;
};

function SelectField({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full md:w-[190px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-xl border border-border bg-white px-4 pr-10 text-[13px] font-medium text-black outline-none focus:ring-2 focus:ring-ring/30"
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
    </div>
  );
}

export default function ReturnRequestFilters({ value, onChange }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* Search */}
        <div className="relative w-full flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          <input
            value={value.query}
            onChange={(e) => onChange({ ...value, query: e.target.value })}
            placeholder="Search by Order ID, Office or Vendor..."
            className="h-11 w-full rounded-xl border border-border bg-white pl-11 pr-4 text-[13px] font-medium text-black outline-none placeholder:font-normal placeholder:text-medium-gray focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <SelectField
          value={value.damageType}
          onChange={(v) => onChange({ ...value, damageType: v as DamageType })}
        >
          <option value="all">ক্ষতির ধরন (All)</option>
          <option value="damaged">Damaged</option>
          <option value="wrong_item">Wrong Item</option>
          <option value="missing_parts">Missing Parts</option>
        </SelectField>

        <SelectField
          value={value.office}
          onChange={(v) => onChange({ ...value, office: v as OfficeFilter })}
        >
          <option value="all">দপ্তর (All Offices)</option>
          <option value="gazipur">Gazipur</option>
          <option value="noakhali">Noakhali</option>
          <option value="savar">Savar</option>
          <option value="nilphamari">Nilphamari</option>
        </SelectField>

        <SelectField
          value={value.status}
          onChange={(v) => onChange({ ...value, status: v as StatusFilter })}
        >
          <option value="all">স্ট্যাটাস (Status)</option>
          <option value="PENDING_REVIEW">Pending Review</option>
          <option value="SETTLED">Settled</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="REJECTED">Rejected</option>
        </SelectField>
      </div>
    </div>
  );
}