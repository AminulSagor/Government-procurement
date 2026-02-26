"use client";

import React, { useState } from "react";
import { Mail, ArrowLeft, Info, SendHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authPath, detectPanel } from "@/helpers/helper";

export default function ForgotPasswordForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const path = usePathname();
  const panel = detectPanel(path);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // demo delay (optional)
    await new Promise((r) => setTimeout(r, 300));

    router.push(authPath(panel, "otp-verify"));

    setIsLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-130">
        <h1 className="text-3xl font-extrabold text-black">
          পাসওয়ার্ড ভুলে গেছেন?
        </h1>

        <p className="mt-2 text-sm text-medium-gray leading-relaxed">
          আপনার নিবন্ধিত অ্যাডমিন আইডি বা ইমেইল ঠিকানা প্রদান করুন। আমরা আপনাকে
          পাসওয়ার্ড রিসেট করার জন্য একটি লিংক পাঠাবো।
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              ভেন্ডর আইডি বা ইমেইল
            </label>

            <div className="flex items-center gap-3 rounded-md border border-black/10 bg-off-white px-4 py-3 focus-within:border-primary-color">
              <Mail className="h-4 w-4 text-medium-gray" />
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="example@domain.com / ID-123456"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-light-gray"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary-color text-white py-4 font-semibold shadow-md hover:brightness-110 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? "পাঠানো হচ্ছে..." : "রিসেট রিকুয়েস্ট পাঠান"}
            <SendHorizontal size={18} />
          </button>

          <Link
            href={authPath(panel, "login")}
            className="w-full flex items-center justify-center gap-3 text-primary-color hover:underline py-2"
          >
            <ArrowLeft className="h-4 w-4" />
            লগইন-এ ফিরে যান
          </Link>

          <div className="mt-6 rounded-md border border-secondary-color/30 bg-off-white px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Info className="h-5 w-5 text-primary-color" />
              </div>
              <p className="text-sm text-medium-gray leading-relaxed">
                যদি আপনি আপনার নিবন্ধিত ইমেইল আইডি ভুলে যান, তবে অনুগ্রহ করে
                আপনার সিস্টেম এডমিনিস্ট্রেটরের সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
