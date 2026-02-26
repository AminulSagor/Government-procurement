import BackButton from "@/components/buttons/back-button";

const ProductDetailsHead = ({ code }: { code: string }) => {
  return (
    <div className="mt-4 flex items-start justify-between gap-4">
      <div className="">
        <div className="flex gap-4">
          <BackButton />
          <h1 className="text-2xl font-bold text-black">
            নতুন ক্রয়াদেশ তৈরি করুন
          </h1>
        </div>

        <div>
          <p className="mt-1 text-sm text-light-gray">
            বাজেট কোড ({code}) অনুযায়ী প্রয়োজনীয় পণ্য যুক্ত করুন এবং ক্রয়ের
            জন্য চাহিদাপত্র প্রস্তুত করুন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHead;
