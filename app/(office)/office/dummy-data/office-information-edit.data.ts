import { OfficeInformationEditPageData } from "@/app/(office)/office/types/office-information-edit.types";
import { IMAGE } from "@/constants/image-path";

export const officeInformationEditDemo: OfficeInformationEditPageData = {
  breadcrumb: {
    home: "হোম",
    profile: "প্রোফাইল",
    officeProfile: "অফিস প্রোফাইল",
    current: "তথ্য সংশোধন",
  },
  header: {
    officeNameBn: "উপজেলা সমাজসেবা কার্যালয়, নোয়াখালী সদর",
    officeIdBn: "১২৯০২০৩১১৭৩৫৭",
    logoSrc: IMAGE.modify_sign,
  },
  form: {
    officerInCharge: "জনাব মোঃ আব্দুল্লাহ",
    designation: "উপজেলা সমাজসেবা অফিসার",
    phone: "০১৭১২-৮৪৮৮১৮",
    email: "uno.noakhali@social.gov.bd",
    address: "উপজেলা সমাজসেবা, নোয়াখালী সদর, নোয়াখালী",
  },
};
