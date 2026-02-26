import { QuotationVerificationDetails } from "@/app/(office)/office/types/quotation-verification-details-types";
import { IMAGE } from "@/constants/image-path";

export const quotationVerificationDetailsDemo: QuotationVerificationDetails = {
  rfqCode: "#RFQ-2023-015",
  departmentLabel: "আইটি বিভাগ: কম্পিউটার ও সরঞ্জামাদি",
  statusLabel: "পর্যালোচনা চলছে (Under Review)",
  supplier: {
    name: "মেসার্স টেকনোলজি ওয়ার্ল্ড",
    ratingLabel: "৪.১/৫",
    address: "মাল্টিপ্লান সেন্টার, ঢাকা",
  },
  product: {
    title: "ডেস্কটপ কম্পিউটার (Desktop Computer)",
    itemCodeLabel: "আইটেম কোড: ৪১১১২২০১",
    description:
      "উচ্চ ক্ষমতাসম্পন্ন কোর আই-৫ প্রসেসর, ১৬জিবি র‍্যাম, এসএসডি স্টোরেজ, ২৪” মনিটরসহ। অফিস কাজের জন্য উপযোগী এবং টেকসই।",
    brand: "Dell Business",
    model: "OptiPlex 3000 Tower",
    images: [
      {
        id: "img-1",
        src: IMAGE.computer,
        alt: "Desktop",
      },
      {
        id: "img-2",
        src: IMAGE.computer,
        alt: "Workspace",
      },
      {
        id: "img-3",
        src: IMAGE.computer,
        alt: "Tech",
      },
      {
        id: "img-4",
        src: IMAGE.computer,
        alt: "Monitor",
      },
    ],
  },
  finance: {
    budgetCode: "৪১১১-০৫",
    unitPrice: { amount: 67000, currencySymbol: "৳" },
    totalPrice: { amount: 3030000, currencySymbol: "৳" },
    proposalUnitPrice: { amount: 75000, currencySymbol: "৳" },
    subTotal: { amount: 3030000, currencySymbol: "৳" },
    taxes: [
      {
        key: "vat",
        label: "ভ্যাট (VAT)",
        percent: 15,
        amount: { amount: 56250, currencySymbol: "৳" },
        dot: "blue",
      },
      {
        key: "it",
        label: "আইটি (IT)",
        percent: 7,
        amount: { amount: 26250, currencySymbol: "৳" },
        dot: "orange",
      },
      {
        key: "addVat",
        label: "অতিরিক্ত ভ্যাট (Add. VAT)",
        percent: 3,
        amount: { amount: 11250, currencySymbol: "৳" },
        dot: "red",
      },
    ],
    grandTotal: { amount: 486750, currencySymbol: "৳" },
    advanceTotal: { amount: 86750, currencySymbol: "৳" },
    paymentTypeLabel: "পেমেন্ট টাইপ: আর্থিক অগ্রিম",
    budgetNote: "বাজেট সীমার মধ্যে রয়েছে",
  },
  timeline: {
    supplierDays: 7,
    supplierSubtitle: "কার্যালয়ে প্রাপ্তির পর থেকে",
    feasibleDays: 7,
    feasibleSubtitle: "পণ্য প্রাপ্তির পর থেকে",
  },
  warranty: {
    years: 3,
    note: "৩ বছরের অন-সাইট ওয়ারেন্টি",
  },
  attachments: [
    {
      id: "att-1",
      type: "pdf",
      title: "Computer_Quotation__TechWorld.pdf",
      meta: "1.8 MB • ২ দিন আগে",
    },
    {
      id: "att-2",
      type: "image",
      title: "Technical_Catalog_Dell__OptiPlex.jpg",
      meta: "3.5 MB • ২ দিন আগে",
    },
  ],
};
