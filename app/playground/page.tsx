import OrderStepper from "@/app/(office)/office/_components/order-stepper";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import BudgetReportStepper from "@/components/steppers/budget-report-stepper";

const PlayGround = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 space-y-10">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>

      {/* steppers */}
      <div className="">
        <OrderStepper current="processing" />
      </div>
      <div>
        <BudgetReportStepper currentStep={1}/>
      </div>
    </div>
  );
};

export default PlayGround;
