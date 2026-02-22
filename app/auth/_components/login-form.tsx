"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authPath, detectPanel } from "@/helpers/helper";

type LoginFormProps = {
  title: string;
  subtitle?: string;
  onSubmit?: (data: {
    email: string;
    password: string;
    remember: boolean;
  }) => void;
  isLoading?: boolean;
  defaultEmail?: string;
};

export default function LoginForm({
  title,
  subtitle = "আপনার অনুমোদিত ইমেইল ও পাসওয়ার্ড দিয়ে প্রবেশ করুন",
  onSubmit,
  isLoading = false,
  defaultEmail = "admin@ibass.com",
}: LoginFormProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("••••••••");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const path = usePathname();
  const panel = detectPanel(path);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password, remember });
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-130">
        <h1 className="text-3xl font-extrabold text-black">{title}</h1>
        <p className="mt-2 text-sm text-medium-gray">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">অফিস ইমেইল</label>
            <div className="flex items-center gap-3 rounded-md border border-black/10 bg-off-white px-4 py-3 focus-within:border-primary-color">
              <Mail className="h-4 w-4 text-medium-gray" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ibass.com"
                type="email"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-light-gray"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">পাসওয়ার্ড</label>
            <div className="flex items-center gap-3 rounded-md border border-black/10 bg-off-white px-4 py-3 focus-within:border-primary-color">
              <Lock className="h-4 w-4 text-medium-gray" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                type={showPass ? "text" : "password"}
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-light-gray"
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="p-1 rounded-md hover:bg-black/5 active:scale-[0.98]"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? (
                  <EyeOff className="h-4 w-4 text-medium-gray" />
                ) : (
                  <Eye className="h-4 w-4 text-medium-gray" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-sm text-medium-gray select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-black/20 accent-primary-color"
              />
              মনে রাখুন
            </label>

            <Link
              href={authPath(panel, "forgot-password")}
              className="text-sm text-primary-color hover:underline"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary-color text-white py-4 font-semibold shadow-md hover:brightness-110 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? "লোড হচ্ছে..." : "লগইন করুন"}
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Notice box */}
          <div className="mt-6 rounded-md border border-secondary-color/30 bg-off-white px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Shield className="h-5 w-5 text-primary-color" />
              </div>
              <p className="text-sm text-medium-gray leading-relaxed">
                কোনো অনুমোদিত ব্যবহারকারী ছাড়া চেষ্টা আইনগত দণ্ডনীয়। আপনার লগইন
                তথ্য গোপন রাখুন এবং সেশন শেষে লগআউট করুন।
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
