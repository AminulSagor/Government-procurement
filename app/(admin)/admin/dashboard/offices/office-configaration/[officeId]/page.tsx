"use client";

import OfficeConfigurationDetailsCard from "@/app/(admin)/admin/dashboard/offices/_components/office-configuration-details-card";
import OfficeConfigurationDetailsHeader from "@/app/(admin)/admin/dashboard/offices/_components/office-configuration-details-header";
import OfficeProfileCard from "@/app/(admin)/admin/dashboard/offices/_components/office-profile-card";
import OfficeStructureCard from "@/app/(admin)/admin/dashboard/offices/_components/office-structure-card";
import { OFFICE_CONFIGURATION_DETAILS_DEMO } from "@/app/(admin)/admin/dashboard/offices/_types/office-configuration-details.data";

export default function OfficeConfigurationDetailsPage() {
  return (
    <div className=" bg-[#F8F9FA] min-h-screen p-6">
      <div className="space-y-6 max-w-7xl mx-auto">
        <OfficeConfigurationDetailsHeader onBack={() => history.back()} />

        <OfficeConfigurationDetailsCard
          data={OFFICE_CONFIGURATION_DETAILS_DEMO}
          onEdit={() => {}}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="grid-cols-5 lg:col-span-3">
            <OfficeProfileCard />
          </div>
          <div className="grid-cols-5 lg:col-span-2">
            <OfficeStructureCard />
          </div>
        </div>
      </div>
    </div>
  );
}
