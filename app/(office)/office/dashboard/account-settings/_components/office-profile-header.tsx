import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfficeProfileHeader = () => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src={"/logos/office-logo.png"}
            alt="office-logo"
            height={120}
            width={120}
            className="rounded-full"
          />
          <div className="space-y-2">
            <h1 className="text-xl lg:text-2xl font-bold text-black">
              উপজেলা নির্বাহী কর্মকর্তার কার্যালয়
            </h1>
            <p className="text-base text-medium-gray">আইডি: ১২৯০২০৩১১৭৩৫৭</p>
            <p className="flex items-center gap-2">
              <span className="bg-green h-3 w-3 rounded-full" /> সক্রিয়
            </p>
          </div>
        </div>
        <PrimaryButton>
          <Link href={""}>তথ্য সংশোধন</Link>
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default OfficeProfileHeader;
