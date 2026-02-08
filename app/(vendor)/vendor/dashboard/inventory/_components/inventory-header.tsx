"use client";

import { Button } from "@/components/ui/button";
import React from "react";


export default function InventoryHeader({ onAddNew }: { onAddNew: () => void }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray">
          পণ্য ও সেবা তালিকা (Product Inventory)
        </h1>
        <p className="mt-1 text-sm text-gray">
          Manage inventory, prices, and availability for IBAS codes.
        </p>
      </div>

      <Button variant="primary" onClick={onAddNew} className="h-9 px-4 text-xs">
        + নতুন পণ্য (Add New)
      </Button>
    </div>
  );
}
