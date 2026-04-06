// components/cards/contact-card.tsx
"use client";

import Card from "@/components/cards/card";
import {
  User,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  KeyRound,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export default function ContactCard() {
  return (
    <Card>
      {/* TITLE */}
      <h3 className="text-base font-semibold">
        যোগাযোগ ও দায়িত্বপ্রাপ্ত কর্মকর্তা
      </h3>

      {/* INFO LIST */}
      <div className="space-y-5">
        {/* PERSON */}
        <div className="flex items-start gap-3 mt-4">
          <User className="w-5 h-5 text-medium-gray mt-1" />
          <div>
            <p className="text-sm text-medium-gray">যোগাযোগকারী ব্যক্তি</p>
            <p className="text-base">জনাব মোঃ রহিম আহমেদ</p>
          </div>
        </div>

        {/* DESIGNATION */}
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-medium-gray mt-1" />
          <div>
            <p className="text-sm text-medium-gray">পদবি</p>
            <p className="text-base">উপজেলা নির্বাহী কর্মকর্তা</p>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-medium-gray mt-1" />
          <div>
            <p className="text-sm text-medium-gray">ঠিকানা</p>
            <p className="text-base">
              ইউএনও কার্যালয়, সদর উপজেলা, জেলা, বাংলাদেশ
            </p>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-medium-gray mt-1" />
          <div>
            <p className="text-sm text-medium-gray">ফোন</p>
            <p className="text-base">+৮৮০ ১২৩৪ ৫৬৭৮৯০</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-medium-gray mt-1" />
          <div>
            <p className="text-sm text-medium-gray">ইমেইল</p>
            <p className="text-base">uno.office@gov.bd</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t  my-5" />

      {/* SECURITY */}
      <div>
        <h4 className="text-base font-semibold mb-3">নিরাপত্তা</h4>

        <div className="flex items-center gap-6 text-sm">
          <Link href={'/office/dashboard/account-settings/change-password'} className="flex items-center gap-2 text-primary-color font-medium">
            <KeyRound className="w-4 h-4" />
            পাসওয়ার্ড পরিবর্তন করুন
          </Link>

          <button className="flex items-center gap-2 text-red font-medium">
            <LogOut className="w-4 h-4" />
            লগ আউট
          </button>
        </div>
      </div>
    </Card>
  );
}
