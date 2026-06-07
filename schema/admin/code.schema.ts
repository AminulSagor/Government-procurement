import type {
  OperationalCodeFormValues,
  ParentCodeFormValues,
} from "@/types/admin/code.types";

export type ParentCodeFormErrors = Partial<
  Record<keyof ParentCodeFormValues, string>
>;

export type OperationalCodeFormErrors = Partial<
  Record<keyof OperationalCodeFormValues, string>
>;

const hasDigit = (value: string): boolean => /[0-9০-৯]/.test(value);

const isBanglaText = (value: string): boolean => {
  return /^[\u0980-\u09FF\s.,'’‘\-()\/&]+$/.test(value);
};

const isEnglishText = (value: string): boolean => {
  return /^[A-Za-z\s.,'’‘\-()\/&]+$/.test(value);
};

export const getParentCodeFormErrors = (
  values: ParentCodeFormValues,
): ParentCodeFormErrors => {
  const errors: ParentCodeFormErrors = {};

  if (!/^\d{4}$/.test(values.parentCode4)) {
    errors.parentCode4 = "Parent code must be exactly 4 digits";
  }

  if (!values.expenseCategoryBangla.trim()) {
    errors.expenseCategoryBangla = "Bangla expense category is required";
  } else if (
    hasDigit(values.expenseCategoryBangla) ||
    !isBanglaText(values.expenseCategoryBangla.trim())
  ) {
    errors.expenseCategoryBangla = "বাংলা ঘরে শুধু বাংলা লেখা দিন";
  }

  if (!values.expenseCategoryEnglish.trim()) {
    errors.expenseCategoryEnglish = "English expense category is required";
  } else if (
    hasDigit(values.expenseCategoryEnglish) ||
    !isEnglishText(values.expenseCategoryEnglish.trim())
  ) {
    errors.expenseCategoryEnglish =
      "English field must contain only English text";
  }

  return errors;
};

export const getOperationalCodeFormErrors = (
  values: OperationalCodeFormValues,
): OperationalCodeFormErrors => {
  const errors: OperationalCodeFormErrors = {};

  if (!/^\d{7}$/.test(values.economicCode7)) {
    errors.economicCode7 = "Operational code must be exactly 7 digits";
  }

  if (!/^\d{4}$/.test(values.parentCode4)) {
    errors.parentCode4 = "Parent code is required";
  } else if (!values.economicCode7.startsWith(values.parentCode4)) {
    errors.economicCode7 =
      "Operational code must start with selected parent code";
  }

  if (!values.codeNameBangla.trim()) {
    errors.codeNameBangla = "Bangla code name is required";
  } else if (
    hasDigit(values.codeNameBangla) ||
    !isBanglaText(values.codeNameBangla.trim())
  ) {
    errors.codeNameBangla = "বাংলা ঘরে শুধু বাংলা লেখা দিন";
  }

  if (!values.codeNameEnglish.trim()) {
    errors.codeNameEnglish = "English code name is required";
  } else if (
    hasDigit(values.codeNameEnglish) ||
    !isEnglishText(values.codeNameEnglish.trim())
  ) {
    errors.codeNameEnglish = "English field must contain only English text";
  }

  return errors;
};

export const validateParentCodeForm = (values: ParentCodeFormValues) => {
  const errors = getParentCodeFormErrors(values);
  const firstMessage = Object.values(errors)[0];

  return {
    isValid: Object.keys(errors).length === 0,
    message: firstMessage,
    errors,
  };
};

export const validateOperationalCodeForm = (
  values: OperationalCodeFormValues,
) => {
  const errors = getOperationalCodeFormErrors(values);
  const firstMessage = Object.values(errors)[0];

  return {
    isValid: Object.keys(errors).length === 0,
    message: firstMessage,
    errors,
  };
};
