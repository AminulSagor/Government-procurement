"use client";

import AddNewItemDialog from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/add-new-item-dialog";
import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";
import { Search, Plus } from "lucide-react";
import { useState } from "react";

export default function CartSearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-medium-gray absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            placeholder="পণ্যের নাম দিয়ে খুঁজুন (e.g. Paper, Printer)..."
            className="
              w-full h-11 pl-10 pr-3 rounded-md
              bg-white border border-primary-color/20
              outline-none focus:border-primary-color/50
              text-black placeholder:text-medium-gray
            "
          />
        </div>

        <PrimaryButton
          className="px-5 py-2 flex items-center gap-2"
          onClick={() => setOpen(true)}
        >
          <Plus className="w-4 h-4" />
          যুক্ত করুন
        </PrimaryButton>
      </div>

      <p className="mt-2 text-xs text-medium-gray">
        আইটেম যোগ করতে নাম টাইপ করুন এবং এন্টার চাপুন
      </p>

      <div className="mt-4 rounded-lg border border-primary-color bg-off-white p-4 text-sm text-primary-color flex items-start gap-2">
        <span className="text-primary-color mt-[2px]">ⓘ</span>
        <span>
          আপনার বাজেটে পণ্য অনুযায়ী ঐ পণ্যের নির্ধারিত পরিসীমার মধ্যে প্রদান
          করুন। এই পরিসীমার লিমিট বাজেট গ্রহণযোগ্য নয়।
        </span>
      </div>

      <AddNewItemDialog open={open} onOpenChange={setOpen} />
    </Card>
  );
}
