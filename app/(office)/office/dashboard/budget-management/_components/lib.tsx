/* =========================
   Helpers
========================= */

import { CheckCircle2, DraftingCompass, Send } from "lucide-react";

export function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export function getStatusMeta(status: ReportStatus) {
  switch (status) {
    case "Approved":
      return {
        className:
          "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50",
        icon: <CheckCircle2 className="h-3.5 w-3.5" />,
      };
    case "Submitted":
      return {
        className: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50",
        icon: <Send className="h-3.5 w-3.5" />,
      };
    case "Draft":
      return {
        className:
          "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-50",
        icon: <DraftingCompass className="h-3.5 w-3.5" />,
      };
  }
}
