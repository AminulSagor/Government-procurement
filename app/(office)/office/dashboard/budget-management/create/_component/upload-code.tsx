"use client";

import Card from "@/components/cards/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, FileText } from "lucide-react";

export default function UploadCode({
  fiscalFrom,
  fiscalTo,
  setFiscalFrom,
  setFiscalTo,
  onNext,
  onBack,
}: {
  fiscalFrom: string;
  fiscalTo: string;
  setFiscalFrom: (v: string) => void;
  setFiscalTo: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const disabled = !fiscalFrom || !fiscalTo;

  return (
    <div className="space-y-6">
      {/* TOP CARD */}
      <div className="relative">
        <Card className="p-0 overflow-hidden">
          <div className="rounded-lg border border-primary-color/20 bg-white">
            <div className="p-6 md:p-8">
              {/* responsive row */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                {/* LEFT: title */}
                <div className="flex items-start  md:min-w-65">
                  <div className=" grid h-9 w-9 text-primary-color">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-lg font-semibold text-black">
                      কোড দিন
                    </div>
                    <div className="mt-1 text-sm text-medium-gray">
                      ডকুমেন্ট ও এন্ট্রির কোড প্রবেশ করান
                    </div>
                  </div>
                </div>

                {/* MIDDLE: fiscal inputs */}
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4 md:flex-1 md:justify-center">
                  <div className="text-sm font-medium text-black">অর্থ বছর</div>

                  <div className="flex items-center gap-3">
                    <FiscalInput
                      value={fiscalFrom}
                      onChange={setFiscalFrom}
                      placeholder="২০—"
                    />
                    <FiscalInput
                      value={fiscalTo}
                      onChange={setFiscalTo}
                      placeholder="২০—"
                    />
                  </div>
                </div>

                {/* RIGHT: next button */}
                <div className="flex md:justify-end">
                  <button
                    type="button"
                    onClick={onNext}
                    disabled={disabled}
                    className={cn(
                      "h-11 w-full md:w-36 rounded-md bg-primary-color text-white",
                      "transition-all duration-150 ease-out hover:brightness-110 active:scale-[0.97] active:translate-y-px",
                      "disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 disabled:active:translate-y-0",
                    )}
                  >
                    পরবর্তী
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* HINTS SECTION */}
      <div className="rounded-lg bg-off-white border border-primary-color/10 p-5 md:p-6">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary-color" />
          <div className="text-lg font-semibold text-black">নির্দেশনা</div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <HintCard
            title="ধাপ ১ : রিপোর্ট আপলোড"
            text="প্রয়োজনীয় বাজেট রিপোর্টের কপি সংযুক্ত করতে হবে। ফাইলটি PDF এর ফরম্যাটে হতে হবে।"
          />
          <HintCard
            title="ধাপ ২ : তথ্য এন্ট্রি"
            text="সঠিকভাবে বাজেটের পরিমাণ, বাজেটের ধরণ লিখতে হবে। কোনো তথ্য পূরণ করতে টাকার পরিমাণ অবশ্য অনুমোদিত বাজেটের মধ্যে হতে হবে।"
          />
          <HintCard
            title="মনে রাখবেন"
            text="বাজেটের সমস্ত তথ্য আপনার অর্থ বছরের দাপ্তরিক কপি সাথে মিল থাকা আবশ্যক।"
            highlight
          />
        </div>
      </div>
    </div>
  );
}

function FiscalInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn(
        "h-10 w-20 rounded-md bg-white",
        "border border-primary-color/15",
        "px-3 text-sm text-black outline-none",
        "focus:border-primary-color/40",
        "placeholder:text-medium-gray",
      )}
      inputMode="numeric"
    />
  );
}

function HintCard({
  title,
  text,
  highlight,
}: {
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white p-4",
        "border-primary-color/10",
        highlight && "bg-[rgba(120,185,181,0.12)] border-secondary-color/40",
      )}
    >
      <div className={cn("text-sm font-semibold", highlight && "text-black")}>
        {title}
      </div>
      <div className="mt-2 text-sm text-medium-gray leading-6">{text}</div>
    </div>
  );
}
