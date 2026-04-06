"use client";

import React from "react";
import {
  ShoppingBag,
  X,
  FileText,
  Folder,
  Printer,
  Trash2,
  Check,
} from "lucide-react";
import { CartItem, initialItems } from "@/app/(office)/office/dummy-data/data";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

interface CartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CartDrawer({ open, setOpen }: CartProps) {
  const [items, setItems] = React.useState<CartItem[]>(initialItems);

  const total = React.useMemo(
    () => items.reduce((sum, i) => sum + i.price, 0),
    [items],
  );

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  // ESC close
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  return (
    <div
      className={[
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "absolute inset-0 bg-black/30 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* panel */}
      <div className="absolute inset-y-0 right-0 flex justify-end w-full">
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={[
            "h-full w-90 max-w-[92vw] bg-white shadow-2xl",
            "transition-transform duration-300 ease-in-out",
            open ? "translate-x-0" : "translate-x-full",
            "flex flex-col",
          ].join(" ")}
        >
          {/* header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-primary-color">
                <ShoppingBag size={18} />
              </span>
              <p className="text-sm font-semibold text-black">
                আপনার চাহিদাপত্র ({toBanglaNumber(items.length)} টি পণ্য)
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-md hover:bg-primary-color/20 cursor-pointer flex items-center justify-center"
              aria-label="Close"
            >
              <X size={18} className="text-black" />
            </button>
          </div>

          {/* list */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {items.length === 0 ? (
              <div className="py-10 text-center text-sm text-gray-medium">
                কোনো পণ্য নেই।
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-md bg-white border flex items-center justify-center shrink-0">
                      {iconByType(item.icon)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-black truncate">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-medium-gray">
                            {item.meta}
                          </p>
                        </div>

                        <p className="text-sm font-bold text-primary-color whitespace-nowrap">
                          {formatBDT(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-red hover:opacity-80"
                      >
                        <Trash2 size={14} />
                        মুছে ফেলুন
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* footer (sticky) */}
          <div className="border-t border-slate-100 px-5 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-light-gray">
                মোট প্রাক্কলিত মূল্য
              </p>
              <p className="text-base font-extrabold text-primary-color">
                {formatBDT(total)}
              </p>
            </div>
            <div className="space-y-4">
              <PrimaryButton className="flex px-4 py-2 text-sm gap-2 items-center justify-center w-full">
                <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center">
                  <Check size={14} />
                </span>
                অর্ডার নিশ্চিত করুন
              </PrimaryButton>

              <SecondaryButton className="text-sm px-4 py-2 w-full">
                আরও পণ্য যোগ করুন
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* helpers */

function iconByType(type: CartItem["icon"]) {
  switch (type) {
    case "paper":
      return <FileText className="h-5 w-5 text-primary-color" />;
    case "file":
      return <Folder className="h-5 w-5 text-primary-color" />;
    default:
      return <Printer className="h-5 w-5 text-primary-color" />;
  }
}

function formatBDT(amount: number) {
  return `${amount.toLocaleString("en-US")} BDT`;
}

// optional: make 3 -> ০৩/৩ style
function toBanglaNumber(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}
