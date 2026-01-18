import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

const PlayGround = () => {
  return (
    <div className="flex flex-col gap-6 px-10">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
  );
};

export default PlayGround;
