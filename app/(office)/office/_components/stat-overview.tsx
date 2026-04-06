import React from "react";
import Card from "@/components/cards/card";
import {
  Wallet,
  PiggyBank,
  TrendingUp,
  TrendingDown,
  Banknote,
} from "lucide-react";

const StatOverview = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-primary-color/70">
            মোট বরাদ্দকৃত বাজেট
          </p>
          <div className="h-10 w-10 rounded-lg bg-primary-color/15 flex items-center justify-center">
            <Wallet className="h-5 w-5 text-primary-color" />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-2xl font-semibold text-black tracking-tight">
            ৳ ৫০০,০০০M
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-green">
            <TrendingUp className="h-4 w-4" />
            <span>পূর্বের বছরের তুলনায় +৫.২%</span>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-primary-color/70">মোট ব্যয়</p>
          <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary-color/15">
            <Banknote className="h-5 w-5 text-primary-color" />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-2xl font-semibold text-black tracking-tight">
            ৳ ৩২০,০০০M
          </div>

          <div className="mt-4">
            <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary-color"
                style={{ width: "62%" }}
              />
            </div>
            <p className="mt-3 text-sm text-medium-gray">
              মোট বাজেটের ৪৫% ব্যয় হয়েছে
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-primary-color/70">
            অবশিষ্ট ঘাটতি
          </p>
          <div className="h-10 w-10 rounded-lg bg-primary-color/15 flex items-center justify-center">
            <PiggyBank className="h-5 w-5 text-primary-color" />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-2xl font-semibold text-black tracking-tight">
            ৳ ১৮০,০০০M
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-red">
            <TrendingDown className="h-4 w-4" />
            <span>মাসিক গড়ের তুলনায় -১.৮%</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatOverview;
