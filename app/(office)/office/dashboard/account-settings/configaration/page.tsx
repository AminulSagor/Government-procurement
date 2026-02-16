import ProcessCard from "@/app/(office)/office/dashboard/account-settings/_components/configaration-process-card";
import OfficeConfigDetailsCard from "@/app/(office)/office/dashboard/account-settings/_components/office-config-details-card";
import { officeConfigDetailsDemo } from "@/app/(office)/office/dummy-data/office-config-details.data";
import React from "react";

const page = () => {
  return (
    <div className="grid md:grid-cols-6 gap-6">
      <div className="col-span-5 md:col-span-2">
        <ProcessCard />
      </div>

      <div className="col-span-5 md:col-span-4">
        <OfficeConfigDetailsCard data={officeConfigDetailsDemo} />;
      </div>
    </div>
  );
};

export default page;
