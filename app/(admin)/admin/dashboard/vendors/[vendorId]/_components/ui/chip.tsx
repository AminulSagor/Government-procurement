export default function Chip({ left, label }: { left: string; label: string }) {
  return (
    <span className="inline-flex items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <span className="bg-primary-color px-3 py-2 text-xs font-extrabold text-white">
        {left}
      </span>
      <span className="px-4 py-2 text-xs font-extrabold text-slate-700">
        {label}
      </span>
    </span>
  );
}