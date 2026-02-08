import Card from "@/components/cards/card";
import { Phone } from "lucide-react";

export default function SupportCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      <p className="text-xs font-extrabold text-light-gray">
        SUPPORT CONTACT
      </p>

      <div className="mt-2 flex items-center gap-2 font-extrabold text-gray">
        <Phone size={16} />
        +880 1724 345678
      </div>
    </Card>
  );
}
