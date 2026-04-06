// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/ui/summary-card.tsx
import Card from "../../ui/card";

export default function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="px-6 py-5">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <div className="text-xs font-bold text-slate-500">{label}</div>
          <div className="mt-1 text-2xl font-extrabold text-slate-900">{value}</div>
        </div>
      </div>
    </Card>
  );
}