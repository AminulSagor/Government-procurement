import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Eye, Pencil, Trash2 } from "lucide-react";

export default function ActionButtons({
  row,
  compact,
}: {
  row: ReportRow;
  compact?: boolean;
}) {
  const btnSize = compact ? "sm" : "icon";
  const iconClass = "h-4 w-4";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        !compact && "justify-end",
      )}
    >
      <Button
        size={btnSize as any}
        variant="ghost"
        className={cn(compact && "px-3")}
        title="View"
        onClick={() => console.log("view", row.id)}
      >
        <Eye className={iconClass} />
        {compact ? <span className="ml-2 text-sm">View</span> : null}
      </Button>

      {row.canDownload ? (
        <Button
          size={btnSize as any}
          variant="ghost"
          className={cn(compact && "px-3")}
          title="Download"
          onClick={() => console.log("download", row.id)}
        >
          <Download className={iconClass} />
          {compact ? <span className="ml-2 text-sm">Download</span> : null}
        </Button>
      ) : null}

      {row.canEdit ? (
        <Button
          size={btnSize as any}
          variant="ghost"
          className={cn(compact && "px-3")}
          title="Edit"
          onClick={() => console.log("edit", row.id)}
        >
          <Pencil className={iconClass} />
          {compact ? <span className="ml-2 text-sm">Edit</span> : null}
        </Button>
      ) : null}

      {row.canDelete ? (
        <Button
          size={btnSize as any}
          variant="ghost"
          className={cn(
            compact && "px-3",
            "text-destructive hover:text-destructive",
          )}
          title="Delete"
          onClick={() => console.log("delete", row.id)}
        >
          <Trash2 className={iconClass} />
          {compact ? <span className="ml-2 text-sm">Delete</span> : null}
        </Button>
      ) : null}
    </div>
  );
}
