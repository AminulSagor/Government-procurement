import { Info, Save, Send } from "lucide-react";

export default function VIFooterBar({
  disabled,
  mode,
  onOpenCorrection, // ✅ NEW
}: {
  disabled: boolean;
  mode: "edit" | "view";
  onOpenCorrection?: () => void; // ✅ NEW
}) {
  const mainDisabled = mode === "view" || disabled;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(100,116,139,0.18)] bg-white">
      <div className="mx-auto flex items-center justify-between gap-6 px-6 py-4">
        {/* left info */}
        <div className="flex items-center gap-3 text-sm text-[var(--color-medium-gray)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(100,116,139,0.18)] bg-white text-[var(--color-medium-gray)]">
            <Info className="h-4 w-4" strokeWidth={2} />
          </span>
          <span>
            এই অ্যাকশনটি সম্পন্ন করার পর প্রতি ভেন্ডরকে ইমেইল ও এসএমএস নোটিফিকেশন পাঠানো হবে
          </span>
        </div>

        {/* right actions */}
        <div className="flex items-center gap-4">
          {/* ✅ OPEN DIALOG BUTTON */}
          <button
            type="button"
            onClick={onOpenCorrection}   // ⭐ IMPORTANT
            className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-[rgba(231,53,8,0.70)] bg-white px-6 text-sm font-semibold text-[var(--color-red)] hover:bg-[rgba(231,53,8,0.06)]"
          >
            <Save className="h-4 w-4" strokeWidth={2} />
            সংশোধনের জন্য পাঠান
          </button>

          <button
            type="button"
            disabled={mainDisabled}
            className={[
              "inline-flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white shadow-sm",
              mainDisabled
                ? "bg-[rgba(100,116,139,0.25)]"
                : "bg-[var(--color-primary-color)] hover:opacity-95",
            ].join(" ")}
          >
            <Send className="h-4 w-4" strokeWidth={2} />
            ভেন্ডরদের কাছে দরপত্র পাঠান
          </button>
        </div>
      </div>
    </div>
  );
}
