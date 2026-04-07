"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authPath, detectPanel } from "@/helpers/helper";
import { setToken, setUserRole } from "@/utils/cookie.utils";
import { loginUser } from "@/service/auth/auth.service";

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

const getDashboardPathByRole = (role: string) => {
  if (role === "admin") return "/admin/dashboard";
  if (role === "office") return "/office/dashboard";
  if (role === "vendor") return "/vendor/dashboard";
  return "/";
};

export default function LoginForm({
  title,
  subtitle = "আপনার অনুমোদিত ইমেইল ও পাসওয়ার্ড দিয়ে প্রবেশ করুন",
  onSubmit,
  isLoading = false,
  defaultEmail = "",
}: LoginFormProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const path = usePathname();
  const panel = detectPanel(path);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit?.({ email, password, remember });

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await loginUser({
        email,
        password,
      });

      const accessToken = response?.data?.accessToken;
      const role = response?.data?.user?.role;

      if (!accessToken || !role) {
        throw new Error("লগইন রেসপন্স সঠিক নয়");
      }

      setToken(accessToken);
      setUserRole(role);

      router.push(getDashboardPathByRole(role));
    } catch (error: unknown) {
      const message =
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as { response?: { data?: { message?: string } } })
          .response?.data?.message === "string"
          ? (error as { response?: { data?: { message?: string } } }).response!
              .data!.message!
          : error instanceof Error
            ? error.message
            : "লগইন ব্যর্থ হয়েছে";

      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  const buttonLoading = isLoading || submitting;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-130">
        <h1 className="text-3xl font-extrabold text-black">{title}</h1>
        <p className="mt-2 text-sm text-medium-gray">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">অফিস ইমেইল</label>
            <div className="flex items-center gap-3 rounded-md border border-black/10 bg-off-white px-4 py-3 focus-within:border-primary-color">
              <Mail className="h-4 w-4 text-medium-gray" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল লিখুন"
                type="email"
                className="w-full bg-transparent text-sm text-black outline-none placeholder:text-light-gray"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black">পাসওয়ার্ড</label>
            <div className="flex items-center gap-3 rounded-md border border-black/10 bg-off-white px-4 py-3 focus-within:border-primary-color">
              <Lock className="h-4 w-4 text-medium-gray" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                type={showPass ? "text" : "password"}
                className="w-full bg-transparent text-sm text-black outline-none placeholder:text-light-gray"
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="rounded-md p-1 hover:bg-black/5 active:scale-[0.98]"
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

          {errorMessage ? (
            <p className="text-sm font-medium text-red-500">{errorMessage}</p>
          ) : null}

          <div className="flex items-center justify-between gap-4">
            <label className="flex select-none items-center gap-2 text-sm text-medium-gray">
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

          <button
            type="submit"
            disabled={buttonLoading}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-primary-color py-4 font-semibold text-white shadow-md hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {buttonLoading ? "লোড হচ্ছে..." : "লগইন করুন"}
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-6 rounded-md border border-secondary-color/30 bg-off-white px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Shield className="h-5 w-5 text-primary-color" />
              </div>
              <p className="text-sm leading-relaxed text-medium-gray">
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
