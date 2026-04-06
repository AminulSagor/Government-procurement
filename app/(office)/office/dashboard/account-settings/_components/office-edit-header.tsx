"use client";

import Image from "next/image";
import { ArrowLeft, Pen, X, CloudUpload } from "lucide-react";
import Link from "next/link";
import { OfficeEditHeaderData } from "@/app/(office)/office/types/office-information-edit.types";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function OfficeEditHeader({
  data,
}: {
  data: OfficeEditHeaderData;
}) {
  const [dialog, setDialog] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>(data.logoSrc);

  return (
    <div className="p-0 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-primary-color font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xl font-bold text-black">
            তথ্য সংশোধন{" "}
            <span className="text-medium-gray font-semibold">
              (Information Edit)
            </span>
          </span>
        </Link>
      </div>

      <div className="border rounded-lg bg-white">
        <div
          className="relative px-5 py-6 cursor-pointer"
          onClick={() => setDialog(true)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary-color rounded-r" />

          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src={data.logoSrc}
                  alt="office"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              </div>

              <div className="absolute -right-1 -bottom-1 h-7 w-7 rounded-full bg-primary-color border-2 border-white flex items-center justify-center text-white">
                <Pen size={16} />
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-lg md:text-xl font-bold text-black">
                {data.officeNameBn}
              </h2>
              <p className="text-sm text-medium-gray">
                ID: <span className="font-semibold">{data.officeIdBn}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent
          className="
           overflow-hidden
            max-w-[820px] w-[95vw]
            rounded-2xl border border-light-gray/25
          "
        >
          {/* HEADER */}
          <DialogTitle className="border-b pb-4">অফিস লোগো পরিবর্তন করুন</DialogTitle>

          {/* BODY */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* left: current logo */}
              <div className="space-y-3">
                <p className="text-sm text-medium-gray font-semibold">
                  বর্তমান লোগো
                </p>

                <div className="h-28 w-28 rounded-full overflow-hidden border border-light-gray/25 bg-white">
                  <Image
                    src={preview}
                    alt="current-logo"
                    width={112}
                    height={112}
                    className="h-28 w-28 object-cover"
                  />
                </div>
              </div>

              {/* right: dropzone */}
              <div>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="
                    w-full rounded-xl border-2 border-dashed border-secondary-color
                    bg-off-white/40
                    px-5 py-8 text-center
                    hover:bg-off-white
                    transition
                  "
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-light-gray/20">
                    <CloudUpload className="w-6 h-6 text-primary-color" />
                  </div>

                  <p className="text-base font-semibold text-black">
                    নতুন ফাইল নির্বাচন করুন অথবা ড্র্যাগ এন্ড ড্রপ করুন
                  </p>

                  <p className="mt-2 text-sm text-medium-gray">
                    ফাইলটি অবশ্যই জেপিইজি বা পিএনজি ফরম্যাট এবং ২ এমবি’র কম হতে
                    হবে
                  </p>
                </button>

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/png,image/jpeg"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const url = URL.createObjectURL(file);
                    setPreview(url);
                  }}
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-6 py-5 border-t border-light-gray/20 bg-white">
            <div className="flex items-center justify-center gap-4">
              <SecondaryButton
                className="px-10 py-3 text-base"
                onClick={() => setDialog(false)}
              >
                বাতিল করুন
              </SecondaryButton>

              <PrimaryButton
                className="px-10 py-3 text-base"
                onClick={() => {
                  // TODO: upload api call here
                  setDialog(false);
                }}
              >
                সংরক্ষণ করুন
              </PrimaryButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
