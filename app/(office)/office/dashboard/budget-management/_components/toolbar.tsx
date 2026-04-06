import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Filter, MoreHorizontal, Search } from "lucide-react";
import { STATUS_FILTERS } from "./data";
import { cn } from "@/lib/utils";

function Toolbar({
  q,
  onChangeQ,
  status,
  onChangeStatus,
  resultsCount,
}: {
  q: string;
  onChangeQ: (v: string) => void;
  status: ReportStatus | "All";
  onChangeStatus: (v: ReportStatus | "All") => void;
  resultsCount: number;
}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => onChangeQ(e.target.value)}
          placeholder="রিপোর্ট আইডি, অর্থবছর লিখে খুঁজুন"
          className="pl-9"
        />
      </div>

      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              {status === "All" ? "সব স্ট্যাটাস" : status}
              <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            {STATUS_FILTERS.map((s) => (
              <DropdownMenuItem
                key={s}
                onClick={() => onChangeStatus(s)}
                className={cn(s === status && "bg-muted")}
              >
                {s === "All" ? "সব স্ট্যাটাস" : s}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="hidden md:inline-flex">
          <MoreHorizontal className="mr-2 h-4 w-4" />
          অন্যান্য
        </Button>
      </div>

      <div className="text-xs text-muted-foreground md:ml-auto md:pl-3">
        ফলাফল: {resultsCount} টি
      </div>
    </div>
  );
}

export default Toolbar;
