"use client";

type Step = { key: string; label: string };

type Props = {
  currentStep: number;
  steps?: Step[];
  className?: string;
};

const DEFAULT_STEPS: Step[] = [
  { key: "upload", label: "ডকুমেন্ট আপলোড" },
  { key: "code", label: "কোড লিখুন" },
  { key: "budget", label: "বাজেট লিখুন" },
  { key: "report", label: "রিপোর্ট প্রণয়ন করুন" },
];

export default function BudgetReportStepper({
  currentStep,
  steps = DEFAULT_STEPS,
  className = "",
}: Props) {
  const n = Math.max(steps.length, 2);
  const lastIndex = n - 1;
  const safeStep = Math.min(Math.max(currentStep, 0), lastIndex);
  const ratio = safeStep / lastIndex;

  const startOffset = `calc(100% / (${n} * 2))`;
  const trackWidth = `calc(100% - (2 * ${startOffset}))`;
  const progressWidth = `calc(${trackWidth} * ${ratio})`;

  const gridStyle = { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };

  return (
    <div className={`w-full ${className}`}>
      {/* TEXT ROW */}
      <div className="grid" style={gridStyle}>
        {steps.map((step, idx) => {
          const active = idx <= safeStep;
          return (
            <div key={step.key} className="flex justify-center">
              <h2
                className={`text-sm font-medium text-center ${
                  active ? "text-primary-color" : "text-medium-gray"
                }`}
              >
                {step.label}
              </h2>
            </div>
          );
        })}
      </div>

      {/* DOTS + LINES */}
      <div className="relative mt-2">
        {/* BASE TRACK (behind dots) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-medium-gray/40 z-0"
          style={{
            left: startOffset,
            width: trackWidth,
          }}
        />

        {/* PROGRESS LINE (behind dots) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-primary-color z-0"
          style={{
            left: startOffset,
            width: progressWidth,
          }}
        />

        {/* DOTS (above line) */}
        <div className="grid relative z-10" style={gridStyle}>
          {steps.map((step, idx) => {
            const active = idx <= safeStep;
            return (
              <div key={step.key} className="flex justify-center">
                <div
                  className={`h-4 w-4 rounded-full border ${
                    active
                      ? "bg-primary-color border-primary-color"
                      : "bg-medium-gray border-medium-gray"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
