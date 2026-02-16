import OrderCard from "./OrderCard";


export default function OrderList() {
  return (
    <div className="space-y-3">
      <OrderCard
        color="orange"
        title="Printer Paper A4"
        qty="500 Reams"
        total="৳ ১,২৫,০০০"
        status="Payment Pending"
        action="Process Order"
      />

      <OrderCard
        color="green"
        title="Office Chairs (Ergonomic)"
        qty="25 Units"
        total="৳ ২,০০,০০০"
        status="Advance Paid"
        action="Start Shipment"
      />

      <OrderCard
        color="blue"
        title="Desktop Computers"
        qty="10 Units"
        total="৳ ৬,৫০,০০০"
        status="Verifying"
        action="View Verification"
      />

      <OrderCard
        color="red"
        title="HP LaserJet Pro P1102 Toner"
        qty="—"
        total="—"
        status="Return Request Received"
        action="View Details"
        alert="Damaged Product"
      />
    </div>
  );
}
