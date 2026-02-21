"use client";

export default function VoucherHintBar() {
  return (
    <div className="rounded-lg border border-primary-color/10 bg-white p-4 flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-[rgba(29,78,216,0.10)] flex items-center justify-center">
        <span className="text-blue font-bold">i</span>
      </div>
      <p className="text-sm text-medium-gray leading-6">
        বাজে প্রাপ্তির তথ্য অনুযায়ী রিড-অনলি এবং এই তথ্য ইনভয়েস থেকে স্বয়ংক্রিয়ভাবে সংগ্রহীত হয়েছে।
      </p>
    </div>
  );
}