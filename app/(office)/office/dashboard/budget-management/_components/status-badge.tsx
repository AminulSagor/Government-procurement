import { Badge } from "@/components/ui/badge";
import { getStatusMeta } from "./lib";
import { cn } from "@/lib/utils";

export default function StatusBadge({ status }: { status: ReportStatus }) {
  const meta = getStatusMeta(status);
  return (
    <Badge variant="outline" className={cn("gap-1.5", meta.className)}>
      {meta.icon}
      {status}
    </Badge>
  );
}
