import { Order } from "../_types/order.types";

export const orders: Order[] = [
  {
    id: "REQ-2025-08-015",
    reqNo: "REQ-2025-08-015",
    lastUpdated: "14 Aug 2025",

    status: "advance_paid",
    paymentStatus: "advance_paid",

    title: "Printer Paper A4 (80 GSM)",
    officeName: "District Commissioner's Office, Dhaka",
    category: "Stationery & Office Supplies",

    refCode: "BD-GOV-PROC-8821",
    orderDateBn: "১২ আগস্ট ২০২৫",

    totalPayable: 125000,
    advancePaid: 62500,
    shipment: {
      courierName: "সুন্দরবন কুরিয়ার",
      trackingId: "SUC-99881122",

      // ✅ change this one line to switch UI:
      // "in_transit" | "received" | ...
      status: "received",

      steps: [
        {
          key: "initiated",
          titleBn: "শিপমেন্ট শুরু হয়েছে",
          titleEn: "Shipment Initiated",
          time: "১৬ আগস্ট, সকাল ১০:৩০",
          desc: "কুরিয়ার বুকিং সম্পন্ন হয়েছে।",
        },
        {
          key: "picked_up",
          titleBn: "কুরিয়ার কর্তৃক গৃহীত",
          titleEn: "Picked up",
          time: "১৭ আগস্ট, সকাল ১১:১০",
          desc: "কুরিয়ার আপনার পার্সেল সংগ্রহ করেছে।",
        },
        {
          key: "in_transit",
          titleBn: "পথে আছে",
          titleEn: "In Transit",
          time: "১৮ আগস্ট, দুপুর ০১:২০",
          desc: "পার্সেল গন্তব্যের দিকে যাচ্ছে।",
        },
        {
          key: "out_for_delivery",
          titleBn: "ডেলিভারির জন্য বেরিয়েছে",
          titleEn: "Out for Delivery",
          time: "১৯ আগস্ট, বিকাল ০৩:১০",
          desc: "লোকাল হাবে পৌঁছেছে।",
        },
        {
          key: "received",
          titleBn: "পণ্য অফিসে পৌঁছেছে",
          titleEn: "Product Received",
          time: "২০ আগস্ট, দুপুর ১২:০৫",
          desc: "অফিস পণ্য গ্রহণ করেছে।",
        },
      ],
    },

    items: [
      {
        id: "item-1",
        name: "Printer Paper A4 (80 GSM)",
        brand: "Brand: Bashundhara Paper",
        qtyLabel: "৫০০ Reams",

        unitPrice: 250,
        totalPrice: 125000,
        breakdown: [
          { label: "ভ্যাট (৫%):", value: 6250 },
          { label: "ছাড় (০%):", value: 0 },
          { label: "অতিরিক্ত চার্জ (১%):", value: 1250 },
        ],

        vendorUnitPrice: 250,
        vendorTotalPrice: 100000,
        vendorBreakdown: [
          { label: "ভ্যাট (৫%):", value: 5000 },
          { label: "ছাড় (০%):", value: 0 },
          { label: "অতিরিক্ত চার্জ (১%):", value: 1000 },
        ],
      },
    ],
  },
];
