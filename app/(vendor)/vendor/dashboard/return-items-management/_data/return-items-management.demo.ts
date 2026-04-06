// app/(vendor)/vendor/dashboard/return-items-management/_data/return-items-management.demo.ts
import type { ReturnItemsManagementPageData } from "../_types/return-items-management.types";

export function buildDemoReturnItemsManagement(retId: string): ReturnItemsManagementPageData {
  return {
    crumbsBn: `হোম / অর্ডার / ${retId} / ফেরত`,
    backHref: "/vendor/dashboard/return-requests",
    titleBn: "ফেরত ব্যবস্থাপনা",
    subtitleEn: "(Return Items Management)",
    alert: {
      textBn: "নতুন ফেরত অনুরোধ এসেছে। দয়া করে দ্রুত ব্যবস্থা নিন।",
    },

    activeCard: {
      retId,
      requestTitleBn: "নতুন ফেরত অনুরোধ",
      badges: {
        left: { labelBn: "অ্যাকশন প্রয়োজন", tone: "orange" },
        right: { labelBn: "Admin Verified", tone: "green" },
      },
      ticketNo: "#Ticket #9901",
      quickMeta: {
        requestedTextBn: "ফেরত অনুরোধ করেছেন (২ দিন আগে)",
        orderId: "#REQ-9901",
        office: "ঢাকা অফিস কম্পাউন্ড (DC Office)",
        reason: "পণ্য ক্ষতিগ্রস্ত/ভাঙা ছিল",
      },
      item: {
        name: "HP LaserJet Toner 85A",
        meta: "Perfect, Loading powder cartridge - Qty: 1",
      },
      buyerNoteBn: "পণ্য ভেঙে গেছে এবং ব্যবহার করা যাচ্ছে না। দ্রুত সমাধান চাই।",
      officeNoteBn: "অফিস নোট: দয়া করে দ্রুত যাচাই করে ব্যবস্থা নিন।",
      evidence: {
        labelBn: "প্রমাণ (EVIDENCE)",
        imageUrl:
          "/HPLaserJet.jpg",
        attachmentCountText: "1 Attachment",
      },
    },

    actionRequired: {
      approveLabelBn: "ফেরত অনুরোধ গ্রহণ করছি",
      responsePlaceholderBn: "আপনার উত্তর লিখুন",
      pickupLabelBn: "Schedule Pickup Time",
      pickupOptions: [
        { label: "Tomorrow (10:00 AM - 12:00 PM)", value: "tomorrow_morning" },
        { label: "Tomorrow (2:00 PM - 5:00 PM)", value: "tomorrow_evening" },
        { label: "Next Working Day (10:00 AM - 12:00 PM)", value: "next_workday" },
      ],
      pickupButtonBn: "পিকআপ সময় সেট করুন",
      rejectLabelBn: "ফেরত অনুরোধ গ্রহণ করছি না",
      rejectReasonPlaceholderBn: "কারণ লিখুন",
      finalDangerButtonBn: "চূড়ান্তভাবে আবেদন বাতিল করুন",
    },

    resolved: [
      {
        title: "Stapler (Wrong Size)",
        statusText: "Resolved",
        dateText: "Product Exchanged on 01 Aug 2025",
      },
    ],
  };
}