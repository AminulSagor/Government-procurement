import AuditReportEntry from "@/app/(office)/office/dashboard/report&audit/_components/audit-report-entry";
import DocumentFileUplaod from "@/app/(office)/office/dashboard/report&audit/_components/document-file-upload";
import { ReportType } from "@/app/(office)/office/dashboard/report&audit/page";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { FileAxis3d, RotateCcw } from "lucide-react";
import { useState } from "react";

const ReportAndAuditHeader = ({ reportType }: { reportType: ReportType }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openUplaodDocumentDialog, setUplaodDocumentDialog] =
    useState<boolean>(false);
  return (
    <div className="space-y-2">
      <h1 className="font-semibold text-primary-color text-3xl">
        রিপোর্ট ও অডিট
      </h1>
      <h2 className="text-black font-semibold text-2xl">
        {reportType === "report_generator"
          ? "রিপোর্ট জেনারেটর"
          : reportType === "audit_log"
            ? "রিপোর্ট ও অডিট"
            : "ডকুমেন্ট লাইব্রেরি"}
      </h2>

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
        {/*des base text */}
        <p className="text-sm text-light-gray lg:max-w-3xl">
          {reportType === "report_generator"
            ? "নথি জেনারেশন পরিচালনা করুন এবং অর্থবছর ২০২৩-২৪ এর জন্য আর্থিক লেনদেন লগ পর্যবেক্ষণ করুন।"
            : reportType === "audit_log"
              ? "নথি জেনারেশন পরিচালনা করুন এবং অর্থবছর ২০২৩-২৪ এর জন্য আর্থিক লেনদেন লগ পর্যবেক্ষণ করুন। অডিট লগ থেকে সরাসরি ভাউচার বা রিপোর্ট প্রিভিউ করুন।"
              : "সকল আপলোডকৃত এবং জেনারেট করা ফাইল পরিচালনা ও অ্যাক্সেস করুন।"}
        </p>

        {/* render buttons based on report type */}
        <div>
          {reportType === "report_generator" ? (
            <PrimaryButton
              className="text-sm px-4 py-2"
              onClick={() => setOpenDialog(true)}
            >
              + নতুন যোগ করুন
            </PrimaryButton>
          ) : reportType === "audit_log" ? (
            <div className="flex gap-3 ">
              <SecondaryButton className="px-4 py-2 flex items-center justify-center gap-2 text-sm">
                <span>
                  <RotateCcw size={16} />
                </span>
                <span>আর্কাইভ</span>
              </SecondaryButton>

              <PrimaryButton className="px-4 py-2 text-sm">
                + নতুন অনুরোধ
              </PrimaryButton>
            </div>
          ) : (
            <SecondaryButton
              className="px-4 py-2 flex items-center justify-center gap-2 text-sm"
              onClick={() => setUplaodDocumentDialog(true)}
            >
              <span>
                <FileAxis3d size={16} />
              </span>
              <span>ফাইল আপলোড</span>
            </SecondaryButton>
          )}
        </div>

        {/* report Enty dialog */}
        <AuditReportEntry open={openDialog} setOpen={setOpenDialog} />

        {/* document file upload */}
        <DocumentFileUplaod
          open={openUplaodDocumentDialog}
          setOpen={setUplaodDocumentDialog}
        />
      </div>
    </div>
  );
};

export default ReportAndAuditHeader;
