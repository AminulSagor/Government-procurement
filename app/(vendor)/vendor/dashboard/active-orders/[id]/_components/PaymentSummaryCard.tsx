import Card from "@/components/cards/card";

export default function PaymentSummaryCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      <p className="text-sm font-extrabold text-gray mb-4">
        পেমেন্ট সামারি
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>সর্বমোট</span>
          <strong>৳ 1,25,000</strong>
        </div>

        <div className="flex justify-between text-green-700">
          <span>Advance (50%)</span>
          <strong>৳ 50,000</strong>
        </div>

        <div className="flex justify-between">
          <span>Remaining</span>
          <strong>৳ 75,000</strong>
        </div>
      </div>
    </Card>
  );
}
