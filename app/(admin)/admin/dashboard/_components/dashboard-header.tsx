import { Button } from "@/components/ui/button";
import { Plus, Store } from "lucide-react";
import { DashboardHeaderData } from "../_types/admin-dashboard.types";

export default function DashboardHeader({
  data,
}: {
  data: DashboardHeaderData;
}) {
  return (
    <div className="flex items-center justify-between">
      {/* LEFT */}
      <div>
        <h1 className="text-[22px] font-semibold text-black">
          {data.titleBn}
        </h1>
        <p className="mt-1 text-sm text-medium-gray">
          {data.subtitle}
        </p>
      </div>

      {/* RIGHT */}
      <Button
        className="
          h-10
          px-4
          rounded-lg
          bg-primary-color
          text-white
          text-sm
          font-medium
          flex
          items-center
          gap-2
          hover:opacity-95
        "
      >
        <Store size={16} strokeWidth={2} />
        {data.ctaLabel}
      </Button>
    </div>
  );
}
