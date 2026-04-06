import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationBar() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-muted-foreground">
        সর্বমোট ১৮ টি রিপোর্টের মধ্যে ১ - ১০ দেখানো হচ্ছে
      </p>

      <div className="flex items-center justify-between gap-2 sm:justify-end">
        <Button size="icon" variant="outline" aria-label="Previous">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            ১
          </Button>
          <Button size="icon" variant="outline" className="h-8 w-8">
            ২
          </Button>
          <Button size="icon" variant="outline" className="h-8 w-8">
            ৩
          </Button>
          <span className="px-1 text-muted-foreground">…</span>
          <Button size="icon" variant="outline" className="h-8 w-8">
            ৯
          </Button>
        </div>

        <Button size="icon" variant="outline" aria-label="Next">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
