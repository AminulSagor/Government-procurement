// app/(vendor)/bids/_components/breadcrumb.tsx
"use client";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-gray/50">
      <span>হোম</span>
      <span className="text-gray/20">›</span>
      <span>উদ্ধৃতি</span>
      <span className="text-gray/20">›</span>
      <span className="text-gray">কোটেশন হিস্টোরি</span>
    </div>
  );
}
