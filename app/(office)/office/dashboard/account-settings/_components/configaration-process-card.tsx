import Card from "@/components/cards/card";
import { TbBuildingBank } from "react-icons/tb";

const ProcessCard = () => {
  return (
    <Card>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold">প্রশাসনিক হায়ারার্কি</h1>
        </div>
        <div className="mt-6">
          <div className="flex gap-4 items-center">
            <span className="text-primary-color">
              <TbBuildingBank size={20} />
            </span>
            <div>
              <h2 className="text-sm text-medium-gray">মন্ত্রণালয়</h2>
              <p className="text-base">অর্থ মন্ত্রণালয়</p>
            </div>
          </div>
          <span className="w-1 border border-medium-gray ml-2" />
          <div className="flex gap-4 items-center">
            <span className="text-primary-color">
              <TbBuildingBank size={20} />
            </span>
            <div>
              <h2 className="text-sm text-medium-gray">অধিদপ্তর</h2>
              <p className="text-base">জাতীয় রাজস্ব বোর্ড</p>
            </div>
          </div>
          <span className="h- w-1 border border-medium-gray ml-2" />
          <div className="flex gap-4 items-center">
            <span className="text-primary-color">
              <TbBuildingBank size={20} />
            </span>
            <div>
              <h2 className="text-sm text-medium-gray">জেলা</h2>
              <p className="text-base">ঢাকা জেলা</p>
            </div>
          </div>
          <span className="h- w-1 border border-medium-gray ml-2" />
          <div className="flex gap-4 items-center">
            <span className="text-primary-color">
              <TbBuildingBank size={20} />
            </span>
            <div>
              <h2 className="text-sm text-primary-color">বর্তমান অফিস</h2>
              <p className="text-base font-semibold">
                জেলা প্রশাসকের কার্যালয়
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-6 border-t pt-6">
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-primary-color">
              কনফিগারেশন স্ট্যাটাস
            </p>

            <span className="px-4 py-1 rounded-full border border-green text-green font-semibold text-sm bg-green/10">
              ACTIVE
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-3 rounded-full bg-light-gray overflow-hidden">
            <div
              className="h-full bg-primary-color rounded-full"
              style={{ width: "85%" }}
            />
          </div>

          {/* FOOTER TEXT */}
          <p className="text-sm text-medium-gray">৮৫% ডাটা সম্পন্ন হয়েছে</p>
        </div>
      </div>
    </Card>
  );
};

export default ProcessCard;
