"use client";
import PrimaryButton from "@/components/buttons/primary-button";
import { Calendar, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import StatOverview from "@/app/(office)/office/_components/stat-overview";
import RecentActivities from "@/app/(office)/office/_components/recent-activities";
import BudgetUsageTrendChart from "@/app/(office)/office/_components/budget-usage-trend-chart";

//type
type Options = {
  value: string;
  label: string;
};

const DashboardPage = () => {
  const [value, setValue] = useState<string>("2023-24");
  // Date range options
  const options: Options[] = [
    { value: "2019-20", label: "2019 - 20" },
    { value: "2020-21", label: "2020 - 21" },
    { value: "2021-22", label: "2021 - 22" },
    { value: "2022-23", label: "2022 - 23" },
    { value: "2023-24", label: "2023 - 24" },
    { value: "2024-25", label: "2024 - 25" },
  ];

  const handleReportExport = () => {
    console.log("handle report");
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-black font-semibold text-2xl">ড্যাশবোর্ড</h1>
          <p className="text-sm text-primary-color/60">
            আর্থিক সারাংশ এবং পর্যবেক্ষণ
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          {/* selector */}
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="border border-primary-color/20 focus-visible:ring-0">
              <div className="flex items-center gap-2">
                <Calendar className="text-black h-5 w-5" />
                <p>অর্থবছর </p>
                <SelectValue placeholder={value} />
              </div>
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <PrimaryButton
            onClick={handleReportExport}
            className="text-sm px-4 py-2.5 flex items-center gap-2"
          >
            <Download size={18} /> রিপোর্ট এক্সপোর্ট করুন
          </PrimaryButton>
        </div>
      </div>
      {/* stat overview compo */}
      <StatOverview />

      {/* pie bar and recent Activity */}
      <div className="grid lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4">
          <BudgetUsageTrendChart />
        </div>
        <div className="lg:col-span-2">
          <RecentActivities />
        </div>
      </div>

      {/* footer */}
      <div className="mt-8 w-full border border-medium-gray/10" />

      <div className="w-full">
        <div className="flex gap-5">
          {/* 1 */}
          <div className="text-center">
            <p className="text-sm font-medium text-medium-gray">সক্রিয় সেশন</p>
            <p className=" text-lg font-semibold text-black">১৪২</p>
          </div>

          {/* 2 */}
          <div className="text-center">
            <p className="text-sm font-medium text-medium-gray">
              সর্বশেষ সিঙ্ক
            </p>
            <p className=" text-lg font-semibold text-black">০০:৪৫ PM</p>
          </div>

          {/* 3 */}
          <div className="text-center">
            <p className="text-sm font-medium text-medium-gray">
              ডাটাবেস স্ট্যাটাস
            </p>
            <div className=" flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green" />
              <span className="text-lg font-semibold text-green">সচল</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
