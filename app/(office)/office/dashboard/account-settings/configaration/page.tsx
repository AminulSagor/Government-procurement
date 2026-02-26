import ProcessCard from "@/app/(office)/office/dashboard/account-settings/_components/configaration-process-card";
import OfficeConfigDetailsCard from "@/app/(office)/office/dashboard/account-settings/_components/office-config-details-card";
import { officeConfigDetailsDemo } from "@/app/(office)/office/dummy-data/office-config-details.data";
import Breadcrumb from "@/components/breadCrumb";
import { ArrowLeft } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Breadcrumb
          items={[
            {
              label: "অ্যাডমিন সেটিংস",
              href: "/office/dashboard/account-settings",
            },
            { label: "অফিস হায়ারার্কি সেটআপ" },
          ]}
        />

        {/* title row */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="
            h-9 w-9 rounded-md
            flex items-center justify-center
            text-primary-color
            transition-all duration-150
            hover:bg-off-white
            active:scale-[0.97]
          "
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-3xl font-bold text-black">
            প্রশাসনিক কাঠামো সেটআপ{" "}
            <span className="font-medium text-light-gray">
              (Office Hierarchy Setup)
            </span>
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-6 gap-6">
        <div className="col-span-5 md:col-span-2">
          <ProcessCard />
        </div>

        <div className="col-span-5 md:col-span-4">
          <OfficeConfigDetailsCard data={officeConfigDetailsDemo} />;
        </div>
      </div>
    </div>
  );
};

export default page;
