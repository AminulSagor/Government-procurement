import Card from "@/components/cards/card";
import { CardContent } from "@/components/ui/card";
import StatusBadge from "./status-badge";
import { formatBDT } from "./lib";
import { FileText } from "lucide-react";
import ActionButtons from "./action-buttons";

export default function ReportsCards({ rows }: { rows: ReportRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="rounded-lg border bg-background p-6 text-center">
        <p className="font-medium">No report found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          সার্চ বা ফিল্টার পরিবর্তন করে দেখুন।
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {rows.map((r) => (
        <Card key={r.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-semibold text-primary">{r.id}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  অর্থবছর: {r.fiscalYear} • অফিস: {r.officeCode}
                </p>
              </div>
              <StatusBadge status={r.status} />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">মোট বাজেট</p>
                <p className="font-medium">{formatBDT(r.totalBudget)}</p>
              </div>

              {r.hasPdf ? (
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4 text-rose-600" />
                  <span className="text-xs">PDF</span>
                </div>
              ) : (
                <span className="text-xs text-muted-foreground">—</span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <ActionButtons row={r} compact />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
