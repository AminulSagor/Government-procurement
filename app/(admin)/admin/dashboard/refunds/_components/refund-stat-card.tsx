"use client";
import {
  ClipboardList,
  Clock3,
  BadgeCheck,
  Banknote,
  LucideIcon,
} from "lucide-react";
import {
  RefundStatIconKey,
  RefundStatItem,
} from "@/app/(admin)/admin/dashboard/refunds/_types/refund-stats-type";
import Card from "@/components/cards/card";

const ICONS: Record<RefundStatIconKey, LucideIcon> = {
  clipboard: ClipboardList,
  clock: Clock3,
  money: Banknote,
  badgeCheck: BadgeCheck,
};

function formatBn(value: number) {
  return new Intl.NumberFormat("bn-BD").format(value);
}

export default function RefundStatCard(props: RefundStatItem) {
  const Icon = ICONS[props.iconKey];
  const v = pickVariantClasses(props.variant);

  const value =
    typeof props.value === "number" ? formatBn(props.value) : props.value;

  return (
    <Card className="relative overflow-hidden px-5 py-4">
      {props.highlighted ? (
        <div
          className={["absolute right-0 top-0 h-full w-1.5", v.accent].join(
            " ",
          )}
        />
      ) : null}

      <div className="flex items-center gap-4">
        <div
          className={[
            "h-12 w-12 rounded-lg flex items-center justify-center",
            v.iconWrap,
          ].join(" ")}
        >
          <Icon className={["h-6 w-6", v.icon].join(" ")} />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-medium-gray truncate">{props.titleBn}</p>
          <p className="mt-1 text-2xl font-extrabold text-black truncate">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}

function pickVariantClasses(variant: RefundStatItem["variant"]) {
  switch (variant) {
    case "primary":
      return {
        iconWrap: "bg-primary-color/10",
        icon: "text-primary-color",
        accent: "bg-primary-color",
      };
    case "orange":
      return {
        iconWrap: "bg-orange/10",
        icon: "text-orange",
        accent: "bg-orange",
      };
    case "green":
      return {
        iconWrap: "bg-green/10",
        icon: "text-green",
        accent: "bg-green",
      };
    case "blue":
      return { iconWrap: "bg-blue/10", icon: "text-blue", accent: "bg-blue" };
  }
}
