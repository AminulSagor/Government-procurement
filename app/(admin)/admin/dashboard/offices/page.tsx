import OfficeManagementHeader from "@/app/(admin)/admin/dashboard/offices/_components/office-management-header";
import OfficeManagementTable from "@/app/(admin)/admin/dashboard/offices/_components/office-management-table";
import OfficeManagementToolbar from "@/app/(admin)/admin/dashboard/offices/_components/office-management-toolbar";

const page = () => {
  return (
    <div className="space-y-7">
      <OfficeManagementHeader />
      <OfficeManagementToolbar />
      <OfficeManagementTable />
    </div>
  );
};

export default page;
