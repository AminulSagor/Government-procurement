"use client";

export default function BadgePill({
  text,
  tone = "neutral",
}: {
  text: string;
  tone?: "neutral" | "success" | "danger" | "info";
}) {
  const cls =
    tone === "success"
      ? "bg-green/10 text-green border-green/20"
      : tone === "danger"
        ? "bg-red/10 text-red border-red/20"
        : tone === "info"
          ? "bg-secondary-color/20 text-primary-color border-primary-color/15"
          : "bg-off-white text-medium-gray border-primary-color/10";

  return (
    <span className={`inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold ${cls}`}>
      {text}
    </span>
  );
}
