export type PasswordRequirement = {
  id: string;
  labelBn: string;
  passed: boolean;
};

export type ChangePasswordFormState = {
  loginEmail: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;

  showLoginEmail: boolean;
  showCurrent: boolean;
  showNew: boolean;
  showConfirm: boolean;
};
