import type { OrderDetails } from "../types/order-details-type";

export const ORDER_DETAILS_MOCK: Record<string, OrderDetails> = {
  "4921": {
    id: "4918",
    ref: "#ORD-4918",
    title: "Stationery Supplies Batch A",
    createdMetaText:
      "২০ অক্টোবর, ২০২৩ তারিখে সম্পন্ন • সরবরাহকারী: টেকসলিউশনস লি.",
    statusLabel: "প্রক্রিয়াধীন",
    status: "active",
    stepCurrent: "processing",

    party: {
      name: "টেকসলিউশনস লি.",
      codeText: "আইডি: #VEN-8821",
      contactName: "মাইকেল স্কট",
      email: "support@techsolutions.com",
      avatarColor: "orange",
    },

    shipping: {
      courierName: "সুন্দরবন কুরিয়ার",
      trackingId: "SD-882190",
      estimatedDeliveryText: "২৬ অক্টোবর, ২০২৩",
      agentNumberText: "০১৭৯৫-৬৫৮৮০৮",
      categoryCodeText: "৩২৫৬০৫",
    },

    paymentSummary: {
      totalPaidText: "৳ ৬,৩৬,৫০০",
      alreadyPaidText: "৳ ৩,৪৮,২৫০",
      alreadyPaidHintText: "৬০% সম্পন্ন",
      dueText: "৳ ৩,৪৮,২৫০",
      dueHintText: "বকেয়া - পণ্য প্রাপ্তি সাপেক্ষে",
    },

    paymentHistory: [
      {
        id: "p1",
        dateText: "২১ অক্টোবর, ২০২০",
        typeLabel: "অগ্রিম পেমেন্ট",
        type: "advance",
        amountText: "৳ ৩,৪৮,২৫০",
        docLabel: "দেখুন",
      },
    ],

    products: [
      {
        id: "pr1",
        name: "ডেল ল্যাপটপ",
        subText: "কোর i7, ১৬জিবি র‍্যাম, ৫১২জিবি এসএসডি",
        codeText: "কোড: ৩২৫৬০১",
        qty: 5,
        unitPriceText: "৳ ১,২০,০০০",
        totalText: "৳ ৬,০০,০০০",
        unitVatText: "৳ ১,২৫,০০০",
        totalVatText: "৳ ৬,২৫,০০০",
        iconType: "laptop",
      },
      {
        id: "pr2",
        name: "লজিটেক MX মাউস",
        subText: "ওয়্যারলেস মাউস, গ্রাফাইট",
        codeText: "কোড: ৩২৫৬০২",
        qty: 5,
        unitPriceText: "৳ ১০,৫০০",
        totalText: "৳ ৫২,৫০০",
        unitVatText: "৳ ১১,০০০",
        totalVatText: "৳ ৫৫,০০০",
        iconType: "mouse",
      },
      {
        id: "pr3",
        name: "ডেল ডকিং স্টেশন",
        subText: "USB-C toW",
        codeText: "কোড: ৩২৫৬০৩",
        qty: 2,
        unitPriceText: "৳ ২২,০০০",
        totalText: "৳ ৪৪,০০০",
        unitVatText: "৳ ২৩,০০০",
        totalVatText: "৳ ৪৬,০০০",
        iconType: "cable",
      },
    ],

    productsTotals: {
      subtotalText: "৳ ৬,১৬,৫০০",
      totalVatText: "৳ ৬,২৬,০০০",
    },

    shippingUpdates: [
      {
        id: "s1",
        title: "ডিস্ট্রিবিউশন সেন্টারে পৌঁছেছে",
        timeText: "আজ, ০৯:১২ AM • ঢাকা হাব",
        isCurrent: true,
      },
      {
        id: "s2",
        title: "পরবর্তী গন্তব্যে পথে আছে",
        timeText: "২৪ অক্টোবর, ০৫:৫২ PM • চট্টগ্রাম",
      },
    ],

    canConfirmReceive: false,
    canReportIssue: false,
  },
  "4918": {
    id: "4921",
    ref: "#ORD-4921",
    title: "Office Laptops (Dell Latitude 5000)",
    createdMetaText: "২৪ অক্টোবর, ২০২৩ • সরবরাহকারী: টেকসলিউশনস লি.",
    statusLabel: "শিপড",
    status: "shipped",
    stepCurrent: "in_transit",

    party: {
      name: "টেকসলিউশনস লি.",
      codeText: "আইডি: #VEN-8821",
      contactName: "মাইকেল স্কট",
      email: "support@techsolutions.com",
      avatarColor: "orange",
    },

    shipping: {
      courierName: "সুন্দরবন কুরিয়ার",
      trackingId: "SD-882190",
      estimatedDeliveryText: "২৬ অক্টোবর, ২০২৩",
      agentNumberText: "০১৭৯৫-৬৫৮৮০৮",
      categoryCodeText: "৩২৫৬০৫",
    },

    paymentSummary: {
      totalPaidText: "৳ ৫৬,০০০",
      alreadyPaidText: "৳ ৩৬,০০০",
      alreadyPaidHintText: "৬৪% সম্পন্ন",
      dueText: "৳ ২০,০০০",
      dueHintText: "বকেয়া - পণ্য প্রাপ্তি সাপেক্ষে",
    },

    paymentHistory: [
      {
        id: "p1",
        dateText: "২৫ অক্টোবর, ২০২৩",
        typeLabel: "অগ্রিম পেমেন্ট",
        type: "advance",
        amountText: "৳ ৩৬,০০০",
        docLabel: "দেখুন",
      },
    ],

    products: [
      {
        id: "pr1",
        name: "ডেল ল্যাপটপ",
        subText: "Latitude 5000 সিরিজ",
        codeText: "কোড: ৩২৫৬০৬",
        qty: 1,
        unitPriceText: "৳ ৫৬,০০০",
        totalText: "৳ ৫৬,০০০",
        unitVatText: "৳ ৫৬,০০০",
        totalVatText: "৳ ৫৬,০০০",
        iconType: "laptop",
      },
    ],

    productsTotals: {
      subtotalText: "৳ ৫৬,০০০",
      totalVatText: "৳ ৫৬,০০০",
    },

    shippingUpdates: [
      {
        id: "s1",
        title: "ইন ট্রানজিট",
        timeText: "আজ, ০৯:১২ AM • ঢাকা হাব",
        isCurrent: true,
      },
      {
        id: "s2",
        title: "প্রক্রিয়াধীন ছিল",
        timeText: "২৪ অক্টোবর, ০৫:৫২ PM • গুদাম",
      },
    ],

    canConfirmReceive: true,
    canReportIssue: true,
  },
  "4922": {
    id: "4922",
    ref: "#ORD-4922",
    title: "Office Laptops (Dell Latitude 5000)",
    createdMetaText: "২৪ অক্টোবর, ২০২৩ • সরবরাহকারী: টেকসলিউশনস লি.",
    statusLabel: "গৃহীত",
    status: "received",
    stepCurrent: "received",

    party: {
      name: "টেকসলিউশনস লি.",
      codeText: "আইডি: #VEN-8821",
      contactName: "মাইকেল স্কট",
      email: "support@techsolutions.com",
      avatarColor: "orange",
    },

    shipping: {
      courierName: "সুন্দরবন কুরিয়ার",
      trackingId: "SD-882190",
      estimatedDeliveryText: "২৬ অক্টোবর, ২০২৩",
      agentNumberText: "০১৭৯৫-৬৫৮৮০৮",
      categoryCodeText: "৩২৫৬০৫",
    },

    paymentSummary: {
      totalPaidText: "৳ ৬,৩৬,৫০০",
      alreadyPaidText: "৳ ৬,৩৬,৫০০",
      alreadyPaidHintText: "১০০% সম্পন্ন",
      dueText: "৳ ০",
      dueHintText: "সম্পূর্ণ পরিশোধিত",
    },

    paymentHistory: [
      {
        id: "p1",
        dateText: "২১ অক্টোবর, ২০২৩",
        typeLabel: "অগ্রিম",
        type: "advance",
        amountText: "৳ ৩,৪৮,২৫০",
        docLabel: "দেখুন",
      },
      {
        id: "p2",
        dateText: "২৬ অক্টোবর, ২০২৩",
        typeLabel: "চূড়ান্ত",
        type: "final",
        amountText: "৳ ২,৮৮,২৫০",
        docLabel: "দেখুন",
      },
    ],

    products: [
      {
        id: "pr1",
        name: "ডেল ল্যাপটপ",
        subText: "Latitude 5000 সিরিজ",
        codeText: "কোড: ৩২৫৬০৬",
        qty: 5,
        unitPriceText: "৳ ১,২০,০০০",
        totalText: "৳ ৬,০০,০০০",
        unitVatText: "৳ ১,২৫,০০০",
        totalVatText: "৳ ৬,২৫,০০০",
        iconType: "laptop",
      },
    ],

    productsTotals: {
      subtotalText: "৳ ৬,১৬,৫০০",
      totalVatText: "৳ ৬,২৬,০০০",
    },

    shippingUpdates: [
      {
        id: "s1",
        title: "অর্ডার গৃহীত হয়েছে",
        timeText: "২৬ অক্টোবর, ০২:৩০ PM • অফিস লোকেশন",
        isCurrent: true,
      },
      {
        id: "s2",
        title: "ইন ট্রানজিট ছিল",
        timeText: "২৫ অক্টোবর, ১০:২০ AM • ঢাকা হাব",
      },
    ],
    canConfirmReceive: false,
    canReportIssue: true,
  },
};
