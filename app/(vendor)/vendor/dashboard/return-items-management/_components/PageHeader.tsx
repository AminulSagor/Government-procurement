// app/(vendor)/vendor/dashboard/return-items-management/_components/PageHeader.tsx
export default function PageHeader({
  titleBn,
  subtitleEn,
}: {
  titleBn: string;
  subtitleEn: string;
}) {
  return (
    <div className="mt-2 flex items-end gap-3">
      <h1 className="text-[22px] font-extrabold text-slate-900">{titleBn}</h1>
      <span className="pb-[2px] text-[13px] font-medium text-slate-500">{subtitleEn}</span>
    </div>
  );
}