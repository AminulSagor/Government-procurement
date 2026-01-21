import OrderStepper from "@/app/(office)/office/_components/order-stepper";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

const PlayGround = () => {
  return (
    <div className="flex flex-col gap-6 px-10 max-w-lg mt-20">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <div className="">
        <OrderStepper current="processing" />
      </div>
    </div>
  );
};

export default PlayGround;
