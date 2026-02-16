"use client";

import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function InventoryHeader({ onAddNew }: { onAddNew: () => void }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* left */}
      <div>
        <h1 className="text-[22px] font-semibold text-gray">
          পণ্য ও সেবা তালিকা (Product Inventory)
        </h1>
        <p className="mt-1 text-sm text-light-gray">
          Manage inventory, prices, and availability with IBAS codes.
        </p>
      </div>

      {/* right */}
      <Button
        onClick={onAddNew}
        className="h-9 gap-2 rounded-lg bg-[#1F6F7A] px-4 text-xs font-semibold text-white hover:bg-[#195E67]"
      >
        <Plus size={14} />
        নতুন পণ্য (Add New)
      </Button>
    </div>
  );
}
