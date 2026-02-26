import { AdvancePaymentEntryData } from "@/app/(office)/office/types/advance-payment";

export const advancePaymentEntryDemo: AdvancePaymentEntryData = {
  orderCode: "#ORD-4918",
  updatedLabel: "শেষ আপডেট: ১০ মিনিট আগে",
  statusLabel: "স্ট্যাটাস: নতুন",

  stepper: {
    currentStepIndex: 0,
    items: [
      { key: "info", title: "তথ্য এন্ট্রি", subtitle: "চলমান" },
      { key: "upload", title: "নথিপত্র আপলোড", subtitle: "অপেক্ষমান" },
      { key: "approval", title: "অনুমোদন", subtitle: "অপেক্ষমান" },
    ],
  },

  instructionsTitle: "নির্দেশনা",
  instructions: [
    {
      title: "ধাপ ১: তথ্য এন্ট্রি",
      description:
        "সঠিকভাবে প্রাপকের নাম এবং অন্যান্য তথ্য পূরণ করুন। টাকার পরিমাণ অবশ্যই অনুমোদিত বাজেটের মধ্যে হতে হবে।",
      active: true,
    },
    {
      title: "ধাপ ২: নথিপত্র আপলোড",
      description:
        "প্রয়োজনীয় নথিপত্রের স্ক্যান কপি সংযুক্ত করুন। ফাইলটি পিডিএফ বা জেপিজি ফরম্যাটে এবং ৫ এমবি’র কম হতে হবে।",
    },
    {
      title: "মনে রাখবেন",
      description:
        "রেফারেন্স নম্বরটি আপনার দায়িত্বশীল নথির সাথে মিল রেখে প্রদান করুন।",
    },
  ],

  form: {
    officeCode: "1002-Finance-Dept",
    recipientNameLabel: "প্রাপকের নাম",
    amountLabel: "টাকার পরিমাণ",
    referenceLabel: "রেফারেন্স নম্বর",
    noteLabel: "মন্তব্য",
    uploadTitle: "নথিপত্র সংযুক্ত করুন",

    placeholders: {
      recipientName: "প্রাপকের নাম লিখুন",
      amount: "৳ 50,000",
      reference: "REF-998210",
      note: "প্রয়োজনীয় তথ্য লিখুন...",
    },

    helper: {
      amountOk: "বাজেট সীমার মধ্যে আছে",
      referenceOk: "অনন্য নম্বর যাচাই করা হয়েছে",
      allowedTypesLabel: "PDF, JPG, PNG (সর্বোচ্চ ৫ মেগাবাইট)",
    },
  },

  uploadedFiles: [
    { id: "f1", name: "Invoice_Sep2023.pdf", sizeLabel: "2.4 MB" },
  ],
};
