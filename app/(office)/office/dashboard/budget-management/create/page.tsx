"use client";
import { useState } from "react";
import BudgetHeader from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-header";
import BudgetReportStepper from "@/components/steppers/budget-report-stepper";
import ReportUpload from "@/app/(office)/office/dashboard/budget-management/create/_component/report-upload";
import UploadCode from "@/app/(office)/office/dashboard/budget-management/create/_component/upload-code";

import {
  demoHeads,
  demoMeta,
  demoSummary,
} from "@/app/(office)/office/dummy-data/budget-entry.demo";
// import BudgetEntryStep2 from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-entry-step2";
import BudgetEntryStep3 from "@/app/(office)/office/dashboard/budget-management/create/_component/budget-entry-step-three";
import BudgetEntryStep2 from "@/app/(office)/office/dashboard/budget-management/create/budget-entry/BudgetEntryStep2";

const BudgetCratePage = () => {
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [file, setFile] = useState<File | null>(null);
  const [fiscalFrom, setFiscalFrom] = useState("");
  const [fiscalTo, setFiscalTo] = useState("");

  const onNext = () => setCurrentStep((prev) => prev + 1);
  const onBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="space-y-5 max-w-8xl mx-auto">
      <BudgetHeader step={currentStep} />
      <BudgetReportStepper currentStep={currentStep} />

      {currentStep === 0 || currentStep === 1 ? (
        <div className="space-y-4">
          <ReportUpload
            file={file}
            onPick={(f) => setFile(f)}
            onRemove={() => setFile(null)}
            onNext={onNext}
            step={currentStep}
          />

          {currentStep === 1 && (
            <UploadCode
              fiscalFrom={fiscalFrom}
              fiscalTo={fiscalTo}
              setFiscalFrom={setFiscalFrom}
              setFiscalTo={setFiscalTo}
              onBack={onBack}
              onNext={onNext}
            />
          )}
        </div>
      ) : currentStep === 2 ? (
        <BudgetEntryStep2
          meta={demoMeta}
          summary={demoSummary}
          heads={demoHeads}
          onSend={onNext}
        />
      ) : (
        <BudgetEntryStep3
          meta={demoMeta}
          summary={demoSummary}
          heads={demoHeads}
          onViewPdf={() => {}}
          onSave={() => {}}
        />
      )}
    </div>
  );
};

export default BudgetCratePage;
