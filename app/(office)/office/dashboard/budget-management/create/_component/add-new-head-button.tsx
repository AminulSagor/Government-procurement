"use client";

import { Plus } from "lucide-react";

export default function AddNewHeadButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg border border-primary-color/10 bg-off-white px-4 py-5 flex items-center justify-center hover:brightness-105 active:scale-[0.99]"
    >
      <div className="flex items-center gap-3 text-primary-color font-semibold">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-color text-white">
          <Plus className="h-4 w-4" />
        </span>
        নতুন ব্যয়ের খাত যোগ করুন
      </div>
    </button>
  );
}
