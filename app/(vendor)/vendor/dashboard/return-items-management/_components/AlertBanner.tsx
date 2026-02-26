// app/(vendor)/vendor/dashboard/return-items-management/_components/AlertBanner.tsx
import { AlertCircle } from "lucide-react";

export default function AlertBanner({ text }: { text: string }) {
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
      <span className="mt-0.5 text-orange-600">
        <AlertCircle className="h-5 w-5" />
      </span>
      <p className="text-[12px] font-semibold text-orange-700">{text}</p>
    </div>
  );
}