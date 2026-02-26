// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_data/return-request-details.demo.ts
import type { ReturnRequestDetails } from "../_types/return-request-details.types";

export const demoReturnRequestDetails: ReturnRequestDetails = {
  requestNo: "#REQ-2025-08-015",
  breadcrumbsBn: "ক্রয় / অর্ডার / #REQ-2025-08-015 / বিস্তারিত",
  headerBadgeBn: "রিটার্ন অনুরোধ প্রাপ্ত",

  steps: [
    { key: "order_confirmed", titleBn: "অর্ডার নিশ্চিত", titleEn: "Complete", done: true },
    { key: "return_approved", titleBn: "রিটার্ন সেকেন্ড", titleEn: "Complete", done: true },
    { key: "in_process", titleBn: "প্রক্রিয়াধীন", titleEn: "Complete", done: true },
    { key: "product_received", titleBn: "পণ্য গ্রহণ", titleEn: "Complete", done: true },
  ],

  shipment: {
    courierNameBn: "সুন্দরবন কুরিয়ার",
    trackingId: "SUC-09881122",
    statusBn: "পণ্য গ্রহণ (Received)",
    statusPill: { textBn: "পণ্য গ্রহণ (Received)", tone: "success" },
    events: [
      {
        key: "shipment_initiated",
        titleBn: "শিপমেন্ট শুরু হয়েছে",
        titleEn: "Shipment Initiated",
        noteBn: "কুরিয়ার সার্ভিসে হস্তান্তর করা হয়েছে।",
        dateText: "১৫ আগস্ট, ২০২৫ • ১০:৩০ AM",
        done: true,
      },
      {
        key: "picked_up",
        titleBn: "কুরিয়ার পণ্য সংগ্রহ করেছে",
        titleEn: "Picked up",
        noteBn: "কুরিয়ার পণ্য সংগ্রহ সম্পন্ন করেছে।",
        dateText: "১৫ আগস্ট, ২০২৫ • ১২:১০ PM",
        done: true,
      },
      {
        key: "in_transit",
        titleBn: "পণ্য পথে আছে",
        titleEn: "In Transit",
        noteBn: "পণ্য গন্তব্যের দিকে যাচ্ছে।",
        dateText: "১৬ আগস্ট, ২০২৫ • ০৯:২০ AM",
        done: true,
      },
      {
        key: "out_for_delivery",
        titleBn: "ডেলিভারির জন্য বের হয়েছে",
        titleEn: "Out for Delivery",
        noteBn: "ডেলিভারি এজেন্টের কাছে হস্তান্তর।",
        dateText: "১৬ আগস্ট, ২০২৫ • ০২:৪৫ PM",
        done: true,
      },
      {
        key: "product_received",
        titleBn: "পণ্য গ্রহণ করা হয়েছে",
        titleEn: "Product Received",
        noteBn: "পণ্য গ্রহণ সম্পন্ন হয়েছে।",
        dateText: "১৬ আগস্ট, ২০২৫ • ০৫:১৫ PM",
        done: true,
        active: true,
      },
    ],
  },

  returnCard: {
    titleBn: "পণ্য ফেরত আবেদন",
    invoiceNo: "#RET-2025-08-020",
    buyerNameBn: "গ্রাহক: সাগর ইসলাম",
    returnStatus: { textBn: "যাচাইাধীন (Under Verification)", status: "under_verification" },
    ctaTextBn: "আবেদন যাচাই করুন",
  },

  payment: {
    titleBn: "পেমেন্ট স্ট্যাটাস ও বকেয়া",
    totalText: "৳ ১,২৫,০০০",
    lines: [
      { labelBn: "অগ্রিম পরিশোধিত (৪০%)", amountText: "৳ ৫০,০০০", positive: true },
      { labelBn: "বকেয়া পেমেন্ট (পরিশোধিত)", amountText: "৳ ২৫,০০০", positive: true },
    ],
    grandText: "৳ ১,২৫,০০০",
  },

  orderInfo: {
    titleBn: "অর্ডার তথ্য",
    productName: "Printer Paper A4 x 500 Reams",
    qtyText: "পরিমাণ: ১",
    addressBn: "ডেলিভারি: ঢাকা-১০০০",
  },
};