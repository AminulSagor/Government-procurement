// app/(admin)/account-settings/change-password/_types/change-password.types.ts
export type PasswordRuleKey = "minLen" | "upper" | "number" | "special";

export type PasswordRule = {
  key: PasswordRuleKey;
  bn: string;
};

export type ChangePasswordCopy = {
  pageTitleBn: string;
  pageTitleEn: string;

  cardTitleBn: string;

  currentLabelBn: string;
  currentLabelEn: string;

  newLabelBn: string;
  newLabelEn: string;

  confirmLabelBn: string;
  confirmLabelEn: string;

  reqTitleBn: string;
  reqTitleEn: string;

  saveBtnBn: string;
  cancelBtnBn: string;
};

export type ChangePasswordDemo = {
  copy: ChangePasswordCopy;
  rules: PasswordRule[];
  prefill?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
};
