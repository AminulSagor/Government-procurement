import { Download } from "lucide-react";

export default function ReturnRequestHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-[24px] font-semibold leading-[30px] text-black">
          ফেরত আবেদন ইনবক্স
        </h1>
        <p className="mt-1 text-[13px] leading-[18px] text-light-gray">
          Return Request Inbox Queue Management
        </p>
      </div>

      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-white px-4 text-sm font-medium text-black shadow-sm hover:bg-off-white"
      >
        <Download className="h-4 w-4 text-light-gray" />
        এক্সপোর্ট রিপোর্ট
      </button>
    </div>
  );
}