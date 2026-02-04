import { Button } from "@/components/ui/button";
import { Filter, ArrowUpDown } from "lucide-react";

export default function OrdersFilterBar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <input
        placeholder="খুঁজুন..."
        className="h-10 w-full max-w-xs rounded-xl border border-gray/15 bg-white px-4 text-sm"
      />

      <div className="flex gap-2">
        <Button variant="secondary" className="h-10 gap-2">
          <Filter size={16} /> Filter
        </Button>
        <Button variant="secondary" className="h-10 gap-2">
          <ArrowUpDown size={16} /> Sort
        </Button>
      </div>
    </div>
  );
}
