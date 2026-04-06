import { ProcurementHead } from "@/app/(office)/office/dummy-data/data";
import Card from "@/components/cards/card";
import {
  ArrowRight,
  FileText,
  Monitor,
  Sofa,
  Printer,
  Sparkles,
  Car,
  Plug,
  BriefcaseMedical,
} from "lucide-react";
import Link from "next/link";

const ProductGrid = ({ filtered }: { filtered: ProcurementHead[] }) => {
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

  const handleSelect = (head: ProcurementHead) => {
    if (!head.isAvailable || head.balance <= 0) return;
    console.log("Selected:", head);
  };

  function formatBDT(amount: number) {
    const bn = new Intl.NumberFormat("bn-BD").format(amount);
    return `৳ ${bn}`;
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((head) => {
        const disabled = !head.isAvailable || head.balance <= 0;

        return (
          <Card
            key={head.id}
            className="rounded-md border-0 bg-white p-5 shadow-sm"
          >
            {/* top row */}
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-off-white">
                {iconMap[head.iconKey]}
              </div>

              <span className="rounded-md bg-off-white px-2.5 py-1 text-xs font-semibold text-primary-color/70">
                {head.code}
              </span>
            </div>

            {/* title */}
            <div className="mt-4">
              <h3
                className={[
                  "text-lg font-bold",
                  disabled ? "text-medium-gray" : "text-black",
                ].join(" ")}
              >
                {head.titleBn}
              </h3>
              <p
                className={[
                  "mt-1 text-sm",
                  disabled ? "text-medium-gray" : "text-primary-color/70",
                ].join(" ")}
              >
                {head.titleEn}
              </p>
            </div>

            {/* divider */}
            <div className="mt-4 h-px w-full bg-off-white" />

            {/* balance */}
            <div className="mt-4">
              <p
                className={` ${disabled ? "text-medium-gray" : "text-primary-color/70"} text-sm`}
              >
                অবশিষ্ট বাজেট (Balance)
              </p>

              <div className="mt-2 flex items-center justify-between gap-2">
                <p
                  className={[
                    "text-xl font-bold",
                    head.balance <= 0 ? "text-red" : "text-primary-color",
                  ].join(" ")}
                >
                  {formatBDT(head.balance)}
                </p>

                {disabled && (
                  <span className="rounded-md bg-off-white px-2.5 py-1 text-xs font-semibold text-red">
                    উপলব্ধ নেই
                  </span>
                )}
              </div>
            </div>

            {/* action */}
            <Link href={`/office/dashboard/procurement/${head.id}`}>
              <button
                type="button"
                disabled={disabled}
                onClick={() => handleSelect(head)}
                className={[
                  "mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold transition ",
                  disabled
                    ? "cursor-not-allowed bg-off-white text-medium-gray"
                    : "bg-primary-color/10 text-primary-color hover:opacity-90 cursor-pointer",
                ].join(" ")}
              >
                {disabled ? (
                  "উপলব্ধ নেই"
                ) : (
                  <>
                    নির্বাচন করুন <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductGrid;
