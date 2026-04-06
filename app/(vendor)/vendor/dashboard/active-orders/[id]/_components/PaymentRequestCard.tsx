import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";


export default function PaymentRequestCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      <p className="text-sm font-extrabold text-gray mb-4">
        পেমেন্ট রিকোয়েস্ট স্ট্যাটাস
      </p>

      <Button variant="secondary" className="w-full">
        পেমেন্ট প্রুফ দেখুন
      </Button>
    </Card>
  );
}

