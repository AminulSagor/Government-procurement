import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function OfficeManagementHeader() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-black">অফিস ব্যবস্থাপনা</h1>
        <p className="mt-1 text-sm text-medium-gray">
          সিস্টেমের সকল নিবন্ধিত অফিসের তালিকা এবং তথ্য পরিচালনা করুন
        </p>
      </div>

      <Link
        href={"/admin/dashboard/offices/configaration-add"}
        className="px-5 py-2 flex items-center gap-2 bg-primary-color text-white rounded-md"
      >
        <PlusCircle className="w-5 h-5" />
        নতুন অফিস যুক্ত করুন
      </Link>
    </div>
  );
}
