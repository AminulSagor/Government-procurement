export default function RequisitionInboxHeader() {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h1 className="text-[22px] font-semibold text-[var(--color-black)]">
          চাহিদাপত্র ইনবক্স <span className="font-semibold">(Requisition Inbox)</span>
        </h1>
        <p className="mt-1 text-sm text-[var(--color-medium-gray)]">
          অর্ডার তৈরির আগে চাহিদাপত্রগুলো পর্যালোচনা ও ক্লাসিফাই করুন।
        </p>
      </div>
    </div>
  );
}
