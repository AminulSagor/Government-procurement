import { Tag } from "lucide-react";
import type { VendorDetails } from "../../_types/vendor-details";
import Card from "../ui/card";
import Chip from "../ui/chip";

type Props = {
  vendor: VendorDetails;
};

export default function TaggingCard({ vendor }: Props) {
  return (
    <Card className="p-0">
      <div className="flex items-center gap-3 px-6 pt-6">
        <Tag className="h-5 w-5 text-primary-color" />
        <div className="text-base font-extrabold text-slate-900">
          অনুমোদিত ক্যাটাগরি ও আইবাস কোড (Tagging)
        </div>
      </div>

      <div className="mt-4 h-px w-full bg-slate-200/70" />

      <div className="px-6 py-6">
        <div className="flex flex-wrap gap-3">
          {vendor.tags.map((t) => (
            <Chip key={t.code} left={t.code} label={`${t.name} - ${t.code}`} />
          ))}
        </div>
      </div>
    </Card>
  );
}