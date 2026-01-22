import Card from "@/components/cards/card";
import { Pen } from "lucide-react";

const AdministrativeStructureCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">প্রশাসনিক কাঠামো</h1>
        <span>
          <Pen size={20} />
        </span>
      </div>

      <div className="mt-6">
        <div>
            
        </div>
      </div>
    </Card>
  );
};

export default AdministrativeStructureCard;
