// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/RequestHeader.tsx
export default function RequestHeader({
  requestNo,
  badgeBn,
}: {
  requestNo: string;
  badgeBn: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h1 className="text-[20px] font-extrabold tracking-tight text-slate-900">
        {requestNo}
      </h1>

      <span
        className={[
          "rounded-full px-3 py-1",
          "text-[11px] font-semibold",
          "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
        ].join(" ")}
      >
        {badgeBn}
      </span>
    </div>
  );
}