import { Pencil, User, Phone, Mail, Save, UserPlus } from "lucide-react";
import Card from "../ui/card";
import type { VendorDetails } from "../../_types/vendor-details";

type Props = {
  vendor: VendorDetails;
};

export default function ProfileSummaryCard({ vendor }: Props) {
  return (
    <Card className="overflow-hidden p-0">
      {/* header */}
      <div className="flex items-start justify-between gap-3 px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-primary-color">
            <User className="h-[18px] w-[18px]" />
          </span>

          <div className="text-[15px] font-extrabold text-slate-900">
            প্রোফাইল সংরক্ষণ ও{" "}
            <span className="block leading-5">ব্যবস্থাপনা</span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs font-extrabold text-primary-color hover:underline"
        >
          <Pencil className="h-4 w-4" />
          তথ্য সংরক্ষণ করুন
        </button>
      </div>

      <div className="mt-4 h-px w-full bg-slate-200/70" />

      {/* content */}
      <div className="px-6 py-6">
        <div className="space-y-5">
          {/* org name */}
          <Block label="প্রতিষ্ঠানের পূর্ণ নাম">
            <div className="text-sm font-extrabold text-slate-900">
              {vendor.orgName}
            </div>
          </Block>

          {/* owner */}
          <Block label="মালিকের নাম ও পদবি">
            <div className="text-sm font-extrabold text-slate-900">
              {vendor.ownerName}
            </div>
          </Block>

          {/* address */}
          <Block label="প্রতিষ্ঠানের পূর্ণ ঠিকানা">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700">
              {vendor.address}
            </div>
          </Block>

          {/* phone */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500">যোগাযোগ নম্বর</div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <Phone className="h-4 w-4 text-slate-500" />
              {vendor.phone}
            </div>
          </div>

          {/* email */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500">
              লগইন ইমেইল (EMAIL)
            </div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <Mail className="h-4 w-4 text-slate-500" />
              {vendor.loginEmail}
            </div>
          </div>

          {/* note */}
          <div className="border-l-2 border-slate-200 pl-3 text-[11px] leading-5 text-slate-500">
            <span className="font-bold">বিঃদ্রঃ</span> প্রতিষ্ঠানের ঠিকানাসহ
            যেকোনো তথ্য সংরক্ষণের ক্ষেত্রে প্রয়োজনীয় প্রমাণক দলিলাদি আপলোড করা
            বাধ্যতামূলক।
          </div>

          {/* actions */}
          <div className="pt-1 space-y-3">
            <button
              type="button"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-extrabold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
            >
              <Save className="h-4 w-4" />
              পরিবর্তন সংরক্ষণ করুন
            </button>

            <button
              type="button"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-primary-color bg-white text-sm font-extrabold text-primary-color hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
            >
              <UserPlus className="h-4 w-4" />
              নতুন প্রোফাইল হিসেবে সংরক্ষণ করুন
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-bold text-slate-500">{label}</div>
      {children}
    </div>
  );
}