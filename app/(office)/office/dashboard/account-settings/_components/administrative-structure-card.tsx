import Card from "@/components/cards/card";
import { Eye, Landmark } from "lucide-react";
import { FaUsers } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { TbBuildingBank } from "react-icons/tb";
const AdministrativeStructureCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">প্রশাসনিক কাঠামো</h1>
        <span className="text-primary-color">
          <Eye size={20} />
        </span>
      </div>

      <div className="mt-6">
        <div className="flex gap-4 items-center">
          <span className="text-primary-color">
            <Landmark size={20} />
          </span>
          <div>
            <h2 className="text-sm text-medium-gray">মন্ত্রণালয়</h2>
            <p className="text-base">মন্ত্রণালয়ের নাম</p>
          </div>
        </div>
        <span className="w-1 border border-medium-gray ml-2" />
        <div className="flex gap-4 items-center">
          <span className="text-primary-color">
            <FaUsers size={20} />
          </span>
          <div>
            <h2 className="text-sm text-medium-gray">অধিদপ্তর</h2>
            <p className="text-base">অধিদপ্তরের নাম</p>
          </div>
        </div>
        <span className="h- w-1 border border-medium-gray ml-2" />
        <div className="flex gap-4 items-center">
          <span className="text-primary-color">
            <PiBuildingsFill size={20} />
          </span>
          <div>
            <h2 className="text-sm text-medium-gray">জেলা</h2>
            <p className="text-base">জেলার নাম</p>
          </div>
        </div>
        <span className="h- w-1 border border-medium-gray ml-2" />
        <div className="flex gap-4 items-center">
          <span className="text-primary-color">
            <TbBuildingBank size={20} />
          </span>
          <div>
            <h2 className="text-sm text-medium-gray">বর্তমান উপজেলা</h2>
            <p className="text-base">উপজেলার নাম</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdministrativeStructureCard;
