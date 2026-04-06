import ChangePasswordCard from "@/app/(office)/office/dashboard/account-settings/_components/change-password-card";
import OfficeMiniHeader from "@/app/(office)/office/dashboard/account-settings/_components/office-mini-header";
import Breadcrumb from "@/components/breadCrumb";

export default function ChangePasswordPage() {
  return (
    <div className="space-y-5 max-w-5xl mx-auto">
      <Breadcrumb
        items={[
          { label: "হোম", href: "/office/dashboard" },
          {
            label: "সেটিংস",
            href: "/office/dashboard/account-settings",
          },
          { label: "পাসওয়ার্ড পরিবর্তন" },
        ]}
      />
      {/* title line like screenshot */}
      <div className="px-1">
        <h1 className="text-xl font-bold text-black">
          পাসওয়ার্ড পরিবর্তন{" "}
          <span className="text-medium-gray font-semibold">
            (Change Password)
          </span>
        </h1>
      </div>

      <OfficeMiniHeader />
      <ChangePasswordCard />
    </div>
  );
}
