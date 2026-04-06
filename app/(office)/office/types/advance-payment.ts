export type AdvancePaymentStepKey = "info" | "upload" | "approval";

export type AdvancePaymentStepperItem = {
  key: AdvancePaymentStepKey;
  title: string;
  subtitle: string;
};

export type InstructionCard = {
  title: string;
  description: string;
  active?: boolean;
};

export type UploadFileItem = {
  id: string;
  name: string;
  sizeLabel: string; // "2.4 MB"
};

export type AdvancePaymentEntryData = {
  orderCode: string; // "#ORD-4918"
  updatedLabel: string; // "শেষ আপডেট: ১০ মিনিট আগে"
  statusLabel: string; // "স্ট্যাটাস: নতুন"

  stepper: {
    currentStepIndex: number; // 0-based
    items: AdvancePaymentStepperItem[];
  };

  instructionsTitle: string;
  instructions: InstructionCard[];

  form: {
    officeCode: string;
    recipientNameLabel: string;
    amountLabel: string;
    referenceLabel: string;
    noteLabel: string;
    uploadTitle: string;

    placeholders: {
      recipientName: string;
      amount: string;
      reference: string;
      note: string;
    };

    helper: {
      amountOk: string;
      referenceOk: string;
      allowedTypesLabel: string;
    };
  };

  uploadedFiles: UploadFileItem[];
};
