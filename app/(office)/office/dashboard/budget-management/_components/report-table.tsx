import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatBDT } from "./lib";
import { FileText } from "lucide-react";
import StatusBadge from "./status-badge";
import ActionButtons from "./action-buttons";

export default function ReportsTable({ rows }: { rows: ReportRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[180px]">রিপোর্ট আইডি</TableHead>
            <TableHead>অর্থবছর</TableHead>
            <TableHead>অফিস কোড</TableHead>
            <TableHead className="text-right">মোট বাজেট</TableHead>
            <TableHead className="w-[90px]">পিডিএফ</TableHead>
            <TableHead className="w-[120px]">স্ট্যাটাস</TableHead>
            <TableHead className="w-[140px] text-right">অ্যাকশন</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="py-10 text-center">
                <div className="mx-auto grid max-w-sm gap-1">
                  <p className="font-medium">No report found</p>
                  <p className="text-sm text-muted-foreground">
                    সার্চ বা ফিল্টার পরিবর্তন করে দেখুন।
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((r) => (
              <TableRow key={r.id} className="hover:bg-muted/30">
                <TableCell className="font-medium text-primary">
                  {r.id}
                </TableCell>
                <TableCell>{r.fiscalYear}</TableCell>
                <TableCell>{r.officeCode}</TableCell>
                <TableCell className="text-right">
                  {formatBDT(r.totalBudget)}
                </TableCell>
                <TableCell>
                  {r.hasPdf ? (
                    <div className="inline-flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4 text-rose-600" />
                      <span className="text-xs">PDF</span>
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell>
                  <StatusBadge status={r.status} />
                </TableCell>
                <TableCell className="text-right">
                  <ActionButtons row={r} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
