"use client";

import Card from "@/components/cards/card";

export default function VoucherPaymentInstructions() {
  return (
    <div className="w-[320px] hidden lg:block">
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-off-white border border-primary-color/10 flex items-center justify-center">
            <span className="text-primary-color font-bold">≡</span>
          </div>
          <h3 className="text-lg font-semibold text-black">নির্দেশনা</h3>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-primary-color/10 bg-white p-4">
            <p className="text-sm font-extrabold text-primary-color">
              ধাপ ১: তথ্য এন্ট্রি
            </p>
            <p className="text-sm text-medium-gray mt-2 leading-6">
              সঠিকভাবে প্রাপকের নাম এবং অন্যান্য তথ্য পূরণ করুন। টাকার পরিমাণ
              অবশ্যই অনুমোদিত বাজেটের মধ্যে হতে হবে।
            </p>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-white p-4">
            <p className="text-sm font-extrabold text-primary-color">
              ধাপ ২: নথিপত্র আপলোড
            </p>
            <p className="text-sm text-medium-gray mt-2 leading-6">
              প্রয়োজনীয় নথিপত্র স্ক্যান কপি সংযুক্ত করুন। ফাইল ফরম্যাট
              PDF/JPG/PNG এবং সাইজ সীমার মধ্যে হতে হবে।
            </p>
          </div>

          <div className="rounded-lg border border-primary-color/10 bg-off-white p-4">
            <p className="text-sm font-extrabold text-primary-color">
              মনে রাখবেন
            </p>
            <p className="text-sm text-medium-gray mt-2 leading-6">
              রেফারেন্স নম্বরটি আপনার দায়িত্বরত নথির সাথে মিল থাকা আবশ্যক।
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
