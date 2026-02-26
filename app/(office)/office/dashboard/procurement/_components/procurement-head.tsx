import PrimaryButton from "@/components/buttons/primary-button";

interface Props {
  setOpen: (v: boolean) => void;
}
const Head = ({ setOpen }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
      <div>
        <div className="mt-4 flex items-end gap-3">
          <h1 className="text-2xl font-bold text-black">
            বাজেট খাত নির্বাচন করুন
          </h1>
          <span className="text-sm font-medium text-primary-color">
            (Select Procurement Head)
          </span>
        </div>

        <p className="mt-2 text-sm text-primary-color/70">
          চলতি বাজেটের অবশিষ্ট উপলব্ধি অনুযায়ী ক্রয় খাত নির্বাচন করুন
        </p>
      </div>

      <PrimaryButton onClick={() => setOpen(true)}>
        + বিশেষ বরাদ্দ যোগ করুন (Add Special Allotment)
      </PrimaryButton>
    </div>
  );
};

export default Head;
