import { ProcurementHead } from "@/app/(office)/office/dummy-data/data";
import { ProcurementCategory } from "@/app/(office)/office/types/procurement-product-type";
import Card from "@/components/cards/card";
import {
  FileText,
  Monitor,
  Sofa,
  Printer,
  Sparkles,
  Car,
  Plug,
  BriefcaseMedical,
  Wallet,
} from "lucide-react";

const ProductSummaryCard = ({
  category,
}: {
  category: ProcurementCategory;
}) => {
  const iconMap: Record<ProcurementHead["iconKey"], React.ReactNode> = {
    stationery: <FileText className="h-5 w-5 text-primary-color" />,
    computer: <Monitor className="h-5 w-5 text-primary-color" />,
    furniture: <Sofa className="h-5 w-5 text-primary-color" />,
    printing: <Printer className="h-5 w-5 text-primary-color" />,
    cleaning: <Sparkles className="h-5 w-5 text-primary-color" />,
    vehicle: <Car className="h-5 w-5 text-primary-color" />,
    electrical: <Plug className="h-5 w-5 text-primary-color" />,
    medical: <BriefcaseMedical className="h-5 w-5 text-primary-color" />,
  };

  function formatBDT(amount: number) {
    const bn = new Intl.NumberFormat("bn-BD").format(amount);
    return `৳ ${bn}`;
  }
  return (
    <Card>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
            {iconMap[category.iconKey]}
          </div>

          <div>
            <h2 className="text-xs text-medium-gray">নির্বাচিত খাত</h2>
            <h1 className="mt-1 text-xl font-semibold">
              <span>{category.titleBn}</span>
              <span className="text-black">({category.code})</span>
            </h1>
          </div>
        </div>

        <div className="md:text-right rounded-lg p-2 bg-primary-color/5 md:min-w-54">
          <p className="text-sm text-primary-color flex items-center gap-4 justify-end">
            <span>
              <Wallet size={15} />
            </span>{" "}
            <span>এই খাতের অবশিষ্ট বাজেট</span>
          </p>
          <p className="text-lg font-extrabold text-black">
            {formatBDT(category.balance)} BDT
          </p>
        </div>
      </div>

      {/* <div className="mt-4">
        <div className="h-2 w-full rounded-md bg-primary-color/10">
          <div
            className="h-2 rounded-md bg-primary-color"
            style={{ width: `${clamp(usedPct, 0, 100)}%` }}
          />
        </div>
      </div> */}
    </Card>
  );
};

export default ProductSummaryCard;
