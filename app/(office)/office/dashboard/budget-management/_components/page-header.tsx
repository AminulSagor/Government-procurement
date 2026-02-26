import PrimaryButton from "@/components/buttons/primary-button";
import { Plus } from "lucide-react";
import Link from "next/link";

function PageHeader() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          তৈরি করা বাজেট রিপোর্টের তালিকা
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          আপনার অফিসের জন্য সাম্প্রতিক সকল বাজেট একত্রে দেখুন ও পরিচালনা করুন।
        </p>
      </div>

      <PrimaryButton>
        <Link
          href={"/office/dashboard/budget-management/create"}
          className="flex items-center gap-2 justify-center"
        >
          <Plus className="mr-2 h-4 w-4" />
          <span>নতুন রিপোর্ট তৈরি করুন</span>
        </Link>
      </PrimaryButton>
    </div>
  );
}

export default PageHeader;
