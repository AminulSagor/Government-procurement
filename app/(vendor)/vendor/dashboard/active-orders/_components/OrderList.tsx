// components/orders/OrderList.tsx
import OrderCard from "./OrderCard";

export default function OrderList() {
  return (
    <div className="space-y-3">
      <OrderCard
        statusKey="pending"
        reqId="#REQ-2025-08-015"
        dateText="12 AUG 2025"
        title="Printer Paper A4"
        location="District Commissioner's Office, Dhaka"
        qty="500 Reams"
        total="৳ ১,২৫,০০০"
        statusText="পেমেন্ট পেন্ডিং (Payment Pending)"
        actionText="প্রসেস অর্ডার"
      />

      <OrderCard
        statusKey="paid"
        reqId="#REQ-2025-08-014"
        dateText="10 AUG 2025"
        title="Office Chairs (Ergonomic)"
        location="Planning Department, Dhaka"
        qty="25 Units"
        total="৳ ২,০০,০০০"
        statusText="অ্যাডভান্স পরিশোধ (Advance Paid)"
        actionText="শিপমেন্ট শুরু করুন"
      />

      <OrderCard
        statusKey="verifying"
        reqId="#REQ-2025-08-013"
        dateText="08 AUG 2025"
        title="Desktop Computers"
        location="ICT Division, Dhaka"
        qty="10 Units"
        total="৳ ৬,৫০,০০০"
        statusText="ভেরিফাই হচ্ছে (Verifying)"
        actionText="ভেরিফিকেশন দেখুন"
      />

      <OrderCard
        statusKey="return"
        reqId="#REQ-2025-08-012"
        dateText="05 AUG 2025"
        title="HP LaserJet Pro P1102 Toner"
        location="Education Board Office, Dhaka"
        statusText="রিটার্ন অনুরোধ গ্রহণ করা হয়েছে"
        actionText="বিস্তারিত দেখুন"
        alert="Damaged Product"
      />
    </div>
  );
}
