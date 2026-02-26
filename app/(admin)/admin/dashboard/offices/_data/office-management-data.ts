import { OfficeManagementRow } from "@/app/(admin)/admin/dashboard/offices/_types/office-management.type";

export const OFFICE_MANAGEMENT_TABLE_DATA: OfficeManagementRow[] = [
  {
    id: "o1",
    officeNameBn: "উপজেলা সমাজসেবা কার্যালয়, নোয়াখালী সদর",
    officeId10Digit: "৬২০৩০১০০৩৬",
    type: "উপজেলা",
    parentOfficeBn: "জেলা সমাজসেবা কার্যালয়, নোয়াখালী",
    status: "active",
  },
  {
    id: "o2",
    officeNameBn: "জেলা প্রাথমিক শিক্ষা অফিস, ঢাকা",
    officeId10Digit: "১০৮৩০০০৫৩০৭",
    type: "জেলা",
    parentOfficeBn: "বিভাগীয় প্রাথমিক শিক্ষা অফিস",
    status: "active",
  },
  {
    id: "o3",
    officeNameBn: "সিভিল সার্জন কার্যালয়, সিলেট",
    officeId10Digit: "১১৫০৫০০৯৭০৮৩",
    type: "জেলা",
    parentOfficeBn: "স্বাস্থ্য অধিদপ্তর",
    status: "active",
  },
  {
    id: "o4",
    officeNameBn: "উপজেলা কৃষি অফিস, সাভার",
    officeId10Digit: "১০৪৮০৪০০৯০৮",
    type: "উপজেলা",
    parentOfficeBn: "জেলা কৃষি অফিস, ঢাকা",
    status: "inactive",
  },
  {
    id: "o5",
    officeNameBn: "বিভাগীয় মৎস্য অধিদপ্তর, চট্টগ্রাম",
    officeId10Digit: "১৫৮৩০৮০০২০৯৩",
    type: "বিভাগীয়",
    parentOfficeBn: "মৎস্য অধিদপ্তর প্রধান কার্যালয়",
    status: "active",
  },
];
