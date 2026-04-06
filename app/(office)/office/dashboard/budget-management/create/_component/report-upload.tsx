import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, CloudUpload, FileText, X } from "lucide-react";
import React from "react";

export default function ReportUpload({
  file,
  onPick,
  onRemove,
  onNext,
  step,
}: {
  file: File | null;
  onPick: (f: File) => void;
  onRemove: () => void;
  onNext: () => void;
  step: number;
}) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 text-teal-700" />
          ডকুমেন্ট আপলোড করুন
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          ডেটা এন্ট্রি শুরু করার জন্য বাজেট রিপোর্টের PDF আপলোড করুন
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {!file ? (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              "group relative flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-10",
              "border-muted-foreground/30 bg-muted/30 hover:bg-muted/40 transition",
            )}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
              <CloudUpload className="h-5 w-5 text-teal-700" />
            </div>

            <div className="text-sm">
              <span className="text-teal-800 font-medium">
                আপলোডের জন্য ক্লিক করুন
              </span>{" "}
              বা ফাইলটি এখানে ড্র্যাগ & ড্রপ করুন
            </div>

            <div className="text-xs text-muted-foreground">
              শুধু PDF ফাইল, সর্বোচ্চ ৫০ MB
            </div>

            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onPick(f);
              }}
            />
          </button>
        ) : (
          <div className="flex items-center justify-between rounded-lg border bg-teal-50 px-4 py-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-teal-700" />
              <div>
                <div className="text-sm font-medium">{file.name}</div>
                <div className="text-xs text-muted-foreground">
                  আপনার ফাইল আপলোড হয়েছে
                </div>
              </div>
            </div>

            <button
              type="button"
              className="rounded-md p-2 hover:bg-black/5"
              onClick={onRemove}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        {step === 0 && (
          <div className="flex justify-end">
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={onNext}
              disabled={!file}
            >
              পরবর্তী
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
