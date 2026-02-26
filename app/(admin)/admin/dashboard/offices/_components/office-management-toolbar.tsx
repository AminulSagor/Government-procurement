"use client";

import Card from "@/components/cards/card";
import { Search, ChevronDown } from "lucide-react";

function SelectField({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-primary-color/20 bg-white px-4 py-2 text-sm text-medium-gray">
      {placeholder}
      <ChevronDown className="w-4 h-4 text-medium-gray" />
    </div>
  );
}

export default function OfficeManagementToolbar() {
  return (
    <Card className="p-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* search */}
        <div className="flex items-center gap-2 rounded-md border border-primary-color/20 px-4 py-2">
          <Search className="w-4 h-4 text-medium-gray" />
          <input
            placeholder="অফিস বা আইডি দিয়ে খুঁজুন..."
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-medium-gray"
          />
        </div>

        <SelectField placeholder="মন্ত্রণালয় নির্বাচন করুন" />
        <SelectField placeholder="জেলা নির্বাচন করুন" />
        <SelectField placeholder="উপজেলা নির্বাচন করুন" />
      </div>
    </Card>
  );
}
