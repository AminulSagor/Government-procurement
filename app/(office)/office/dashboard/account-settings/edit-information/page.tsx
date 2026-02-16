import ContactInformationForm from "@/app/(office)/office/dashboard/account-settings/_components/contact-information-form";
import OfficeEditHeader from "@/app/(office)/office/dashboard/account-settings/_components/office-edit-header";
import { officeInformationEditDemo } from "@/app/(office)/office/dummy-data/office-information-edit.data";
import Breadcrumb from "@/components/breadCrumb";

export default function InformationEditPage() {
  const data = officeInformationEditDemo;

  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      <Breadcrumb
        items={[
          { label: data.breadcrumb.home, href: "/office/dashboard" },
          {
            label: data.breadcrumb.profile,
            href: "/office/dashboard/account-settings",
          },
          {
            label: data.breadcrumb.officeProfile,
            href: "/office/dashboard/account-settings",
          },
          { label: data.breadcrumb.current },
        ]}
      />

      <OfficeEditHeader data={data.header} />

      <ContactInformationForm initialData={data.form} />
    </div>
  );
}
