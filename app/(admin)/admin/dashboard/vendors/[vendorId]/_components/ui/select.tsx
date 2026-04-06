"use client";

type Option = { label: string; value: string };

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function Select({ value, options, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-700 outline-none focus:ring-4 focus:ring-sky-100"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}