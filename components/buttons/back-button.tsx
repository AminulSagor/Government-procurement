"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="border-[3px] p-1 border-primary-color rounded-full text-primary-color w-8 h-8 flex items-center justify-center cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;
