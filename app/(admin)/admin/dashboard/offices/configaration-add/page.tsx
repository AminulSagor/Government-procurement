import AccessControlCard from "@/app/(admin)/admin/dashboard/offices/_components/AccessControlCard";
import AdministrativeCodeFormCard from "@/app/(admin)/admin/dashboard/offices/_components/AdministrativeCodeFormCard";
import AdministrativeHierarchyForm from "@/app/(admin)/admin/dashboard/offices/_components/AdministrativeHierarchyForm";
import ConfigarationHeader from "@/app/(admin)/admin/dashboard/offices/_components/configaration-header";
import OfficeContactAddressCard from "@/app/(admin)/admin/dashboard/offices/_components/OfficeContactAddressCard";
import OfficeDetailsFormCard from "@/app/(admin)/admin/dashboard/offices/_components/OfficeDetailsFormCard";

const page = () => {
  return (
    <div className=" bg-[#F8F9FA] min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <ConfigarationHeader />

        <AdministrativeHierarchyForm />
        <OfficeDetailsFormCard />
        <AdministrativeCodeFormCard />
        <OfficeContactAddressCard />
        <AccessControlCard />
      </div>
    </div>
  );
};

export default page;
