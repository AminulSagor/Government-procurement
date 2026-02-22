"use client";

import { User, Boxes } from "lucide-react";
import { cn } from "../_utils/cn";

export type VendorTabKey = "profile" | "inventory";

type Props = {
  active: VendorTabKey;
  onChange: (k: VendorTabKey) => void;
};

export default function VendorTabs({ active, onChange }: Props) {
  const tabs: Array<{ key: VendorTabKey; label: string; icon: React.ReactNode }> =
    [
      { key: "profile", label: "ভেন্ডর প্রোফাইল", icon: <User className="h-4 w-4" /> },
      { key: "inventory", label: "ভেন্ডর ইনভেন্টরি", icon: <Boxes className="h-4 w-4" /> },
    ];

  return (
    <div className="grid grid-cols-2">
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={cn(
              "relative flex h-14 items-center justify-center gap-2 text-sm font-bold",
              "bg-white text-slate-600 hover:bg-slate-50",
              isActive && "text-primary-color"
            )}
          >
            {t.icon}
            {t.label}

            {isActive ? (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary-color" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}