"use client";

import React from "react";
import StatCard from "./stat-card";
import { Wallet, Hourglass, Banknote } from "lucide-react";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <StatCard
        title="মোট আয় (Total Revenue)"
        value="৳ ৪৫,২০,৫০০"
        Icon={Banknote}
        badgeText="+১২.৫%"
        badgeLabel="গত মাসের তুলনায়"
      />

      <StatCard
        title="প্রক্রিয়াধীন পেমেন্ট (Pending)"
        value="৳ ৮,৪৫,০০০"
        Icon={Hourglass}
        badgeLabel="৪টি বিল অনুমোদনের অপেক্ষায়"
      />

      <StatCard
        title="উত্তোলনযোগ্য ব্যালেন্স (Withdrawable)"
        value="৳ ২,১৫,০০০"
        Icon={Wallet}
        linkText="Withdraw Funds"
      />
    </div>
  );
}
