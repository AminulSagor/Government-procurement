"use client";

export default function StatusToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={[
        "relative inline-flex h-6 w-12 items-center rounded-full transition",
        checked ? "bg-[var(--color-secondary-color)]" : "bg-[var(--color-light-gray)]/30",
      ].join(" ")}
    >
      <span
        className={[
          "absolute left-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition",
          checked ? "translate-x-6" : "translate-x-0",
        ].join(" ")}
      >
        {checked ? (
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-primary-color)] text-[10px] font-bold text-white">
            ✓
          </span>
        ) : null}
      </span>
    </button>
  );
}
