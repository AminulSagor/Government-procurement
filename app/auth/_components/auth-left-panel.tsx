"use client";

import React from "react";
import { Shield } from "lucide-react";

export default function AuthLeftPanel() {
  return (
    <div className="relative hidden md:flex w-1/2 min-h-screen overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0F172A] to-[#115E59]" />

      {/* seal background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/coin.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "1500px 1500px",
          opacity: 0.04,
          filter: "grayscale(1)",
        }}
      />

      {/* soft overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-10 text-center">
        <div className="select-none">
          <div className="flex items-end justify-center gap-2">
            <h1 className="text-white text-5xl font-extrabold tracking-wide">
              iBAS
            </h1>
            <span className="text-[40px] font-extrabold leading-none text-white">
              +
            </span>
          </div>

          <p className="mt-3 text-white/70 tracking-[0.22em] uppercase">
            Integrated Budget &amp; Procurement System
          </p>

          <h2 className="mt-10 text-white text-3xl font-extrabold leading-snug">
            ইন্টিগ্রেটেড বাজেট ও
            <br />
            প্রক্রিউরমেন্ট সিস্টেমে স্বাগতম
          </h2>

          <div className="mt-6 flex justify-center">
            <span className="h-0.75 w-16 rounded-full bg-white/30" />
          </div>
        </div>

        {/* bottom pill */}
        <div className="absolute bottom-10 left-10">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <Shield className="h-4 w-4 text-white/70" />
            <span className="text-xs text-white/70">
              Secure Administrative Portal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
