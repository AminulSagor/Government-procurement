import OfficeManagementHeader from "@/app/(admin)/admin/dashboard/offices/_components/office-management-header";
import OfficeManagementTable from "@/app/(admin)/admin/dashboard/offices/_components/office-management-table";
import OfficeManagementToolbar from "@/app/(admin)/admin/dashboard/offices/_components/office-management-toolbar";

const page = () => {
  return (
    <div className="space-y-6 p-6 bg-[#F8F9FA] min-h-screen ">
      <OfficeManagementHeader />
      <OfficeManagementToolbar />
      <OfficeManagementTable />
    </div>
  );
};

export default page;
