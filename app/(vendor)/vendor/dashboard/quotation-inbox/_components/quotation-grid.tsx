"use client";

import React from "react";
import QuotationCard, { Quotation } from "./quotation-card";
import PaginationBar from "./quotation-pagination";


const demo: Quotation[] = [
  {
    tag: "নির্মাণ কাজ",
    id: "RFQ-2024-CTG-12",
    title: "আধুনিক অফিস ভবন সি-এর সংস্কার",
    desc: "চট্টগ্রাম আধুনিক অফিসের জন্য পেইন্টিং, প্লাম্বিং, মেরামত এবং বৈদ্যুতিক রিওয়্যারিং সহ সিভিল কাজ",
    department: "গণপূর্ত অধিদপ্তর",
    timeLeftText: "১ সপ্তাহ অবশিষ্ট",
    progressPct: 30,
    amountLabel: "আনুমানিক মূল্য",
    amount: "৳ ৮,৫০,০০০",
    ctaText: "দরপত্র জমা দিন",
    ctaVariant: "solid",
  },
  {
    tag: "সেবা",
    id: "RFQ-2024-DHK-99",
    title: "এসি ইউনিটের জন্য বার্ষিক রক্ষণাবেক্ষণ চুক্তি",
    desc: "৪টি অফিস লোকেশন জুড়ে ২০০টি স্প্লিট এসি ইউনিটের জন্য রক্ষণাবেক্ষণ সেবা প্রদান।",
    department: "স্বাস্থ্য অধিদপ্তর",
    statusTitle: "জমাকৃত",
    statusText: "যাচাইযোগ্য: ১২ অক্টোবর, সকাল ১০:০০",
    amountLabel: "উদ্ভূত মূল্য",
    amount: "৳ ১২,০০,০০০",
    ctaText: "দরপত্র দেখুন",
    ctaVariant: "outline",
  },
  {
    tag: "পণ্য",
    id: "RFQ-2024-DHAKA-05",
    title: "অফিস স্টেশনারি ও প্রিন্টিং সামগ্রী সরবরাহ",
    desc: "কলম, কাগজ, ফাইল, প্রিন্টিং ও অফিস স্টেশনারি সামগ্রীর বার্ষিক সরবরাহ।",
    department: "প্রশাসন বিভাগ",
    timeLeftText: "৫ দিন অবশিষ্ট",
    progressPct: 55,
    amountLabel: "আনুমানিক মূল্য",
    amount: "৳ ৪,২০,০০০",
    ctaText: "দরপত্র জমা দিন",
    ctaVariant: "solid",
  },
  {
    tag: "সেবা",
    id: "RFQ-2024-SYL-02",
    title: "অফিস পরিচ্ছন্নতা সেবা ২০২৪",
    desc: "অফিস ভবনের দৈনিক পরিষ্কার, বর্জ্য ব্যবস্থাপনা ও পরিচ্ছন্নতা সেবা।",
    department: "সিটি কর্পোরেশন",
    timeLeftText: "৩ দিন অবশিষ্ট",
    progressPct: 70,
    amountLabel: "আনুমানিক মূল্য",
    amount: "৳ ৬,০০,০০০",
    ctaText: "দরপত্র জমা দিন",
    ctaVariant: "solid",
  },
  {
    tag: "নির্মাণ কাজ",
    id: "RFQ-2024-BAR-11",
    title: "সীমানা প্রাচীর নির্মাণ",
    desc: "সরকারি প্রাথমিক বিদ্যালয়ের জন্য ২০০ মিটার সীমানা প্রাচীর নির্মাণ।",
    department: "শিক্ষা প্রকৌশল অধিদপ্তর",
    statusTitle: "জমাকৃত",
    statusText: "যাচাই প্রক্রিয়াধীন, ফলাফল শীঘ্রই জানানো হবে।",
    amountLabel: "উদ্ভূত মূল্য",
    amount: "৳ ৮,৫০,০০০",
    ctaText: "দরপত্র দেখুন",
    ctaVariant: "outline",
  },
  {
    tag: "সেবা",
    id: "RFQ-2024-KHU-34",
    title: "সার্ভার রক্ষণাবেক্ষণ ও নিরাপত্তা সেবা",
    desc: "ডাটা সেন্টার সার্ভার মনিটরিং, ব্যাকআপ ও সাইবার নিরাপত্তা সেবা।",
    department: "আইসিটি বিভাগ",
    timeLeftText: "২ দিন অবশিষ্ট",
    progressPct: 80,
    amountLabel: "আনুমানিক মূল্য",
    amount: "৳ ৩,৮০,০০০",
    ctaText: "দরপত্র জমা দিন",
    ctaVariant: "solid",
  },
];


export default function QuotationGrid() {
  return (
    <div className="space-y-4">
      {/* Top header row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-gray">ভেন্ডর কোটেশন ইনবক্স</h2>
          <p className="mt-1 text-xs text-light-gray">
            আপনার সক্রিয় কোটেশন এবং দ্রুত বিড জমা করুন
          </p>
        </div>

        <select className="h-10 rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray">
          <option>সর্বশেষ</option>
          <option>সবচেয়ে বেশি মূল্য</option>
          <option>সময়সীমা কাছাকাছি</option>
        </select>
      </div>

      {/* cards grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {demo.map((q) => (
          <QuotationCard key={q.id} q={q} />
        ))}
      </div>

      {/* bottom */}
      <div className=" p-3">
        <PaginationBar />
      </div>
    </div>
  );
}
