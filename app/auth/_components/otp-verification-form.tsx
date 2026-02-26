"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OtpVerificationForm() {
  const DIGITS = 6;

  const [otp, setOtp] = useState<string[]>(
    Array.from({ length: DIGITS }, () => ""),
  );
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [isLoading, setIsLoading] = useState(false);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const value = useMemo(() => otp.join(""), [otp]);
  const isComplete = value.length === DIGITS && !otp.includes("");

  const router = useRouter();

  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mmss = useMemo(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [secondsLeft]);

  const focusAt = (idx: number) => inputsRef.current[idx]?.focus();

  const setDigit = (idx: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setOtp((prev) => {
      const next = [...prev];
      next[idx] = d;
      return next;
    });
    if (d && idx < DIGITS - 1) focusAt(idx + 1);
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      setOtp((prev) => {
        const next = [...prev];
        if (next[idx]) {
          next[idx] = "";
          return next;
        }
        if (idx > 0) {
          next[idx - 1] = "";
          setTimeout(() => focusAt(idx - 1), 0);
        }
        return next;
      });
      return;
    }

    if (e.key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      focusAt(idx - 1);
    }
    if (e.key === "ArrowRight" && idx < DIGITS - 1) {
      e.preventDefault();
      focusAt(idx + 1);
    }
  };

  const handlePaste = (
    idx: number,
    e: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const raw = e.clipboardData.getData("text") ?? "";
    const digits = raw.replace(/\D/g, "").slice(0, DIGITS);
    if (!digits) return;

    setOtp((prev) => {
      const next = [...prev];
      for (let i = 0; i < DIGITS; i++) next[i] = digits[i] ?? "";
      return next;
    });

    const nextIndex = Math.min(digits.length, DIGITS - 1);
    setTimeout(() => focusAt(nextIndex), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    // TODO: call resend API here
    setSecondsLeft(120);
    setOtp(Array.from({ length: DIGITS }, () => ""));
    setTimeout(() => focusAt(0), 0);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-140 text-center">
        <h1 className="text-3xl font-extrabold text-black">
          ভেরিফিকেশন কোড প্রদান করুন
        </h1>

        <p className="mt-3 text-sm text-medium-gray leading-relaxed">
          আপনার ইমেইলে একটি ৬-ডিজিটের ভেরিফিকেশন কোড পাঠানো হয়েছে। পাসওয়ার্ড
          রিসেট করতে কোডটি লিখুন অথবা রিসেট পাসওয়ার্ড লিংকে ক্লিক করুন।
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((d, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputsRef.current[idx] = el;
                }}
                value={d}
                inputMode="numeric"
                autoComplete="one-time-code"
                onChange={(e) => setDigit(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={(e) => handlePaste(idx, e)}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-md border border-black/10 bg-off-white text-center text-xl font-semibold text-black outline-none focus:border-primary-color"
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-medium-gray">
            <Clock className="h-4 w-4" />
            <span>{mmss}</span>
          </div>

          <button
            type="submit"
            disabled={isLoading || !isComplete}
            className="mt-8 w-full rounded-md bg-primary-color text-white py-4 font-semibold shadow-md hover:brightness-110 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? "যাচাই হচ্ছে..." : "কোড যাচাই করুন"}
            <CheckCircle2 className="h-5 w-5" />
          </button>

          <div className="mt-6 text-sm text-medium-gray">
            কোড পাননি?{" "}
            <button
              type="button"
              onClick={handleResend}
              className="text-primary-color hover:underline disabled:opacity-50"
              disabled={secondsLeft > 0}
            >
              আবার পাঠান
            </button>
          </div>

          <button
            type="button"
            className="mt-7 w-full flex items-center justify-center gap-3 text-primary-color hover:underline py-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            পেছনে যান
          </button>
        </form>
      </div>
    </div>
  );
}
