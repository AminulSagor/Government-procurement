// app/(admin)/account-settings/change-password/_data/change-password.demo.ts
import type { ChangePasswordDemo } from "../_types/change-password.types";

export const changePasswordDemo: ChangePasswordDemo = {
  copy: {
    pageTitleBn: "পাসওয়ার্ড পরিবর্তন",
    pageTitleEn: "Change Password",

    cardTitleBn: "পাসওয়ার্ড পরিবর্তন করুন",

    currentLabelBn: "বর্তমান পাসওয়ার্ড",
    currentLabelEn: "Current Password",

    newLabelBn: "নতুন পাসওয়ার্ড",
    newLabelEn: "New Password",

    confirmLabelBn: "পাসওয়ার্ড নিশ্চিত করুন",
    confirmLabelEn: "Confirm New Password",

    reqTitleBn: "পাসওয়ার্ডের শর্তাবলী",
    reqTitleEn: "PASSWORD REQUIREMENTS",

    saveBtnBn: "পাসওয়ার্ড হালনাগাদ করুন",
    cancelBtnBn: "বাতিল করুন",
  },

  rules: [
    { key: "minLen", bn: "কমপক্ষে ৮টি অক্ষর হতে হবে" },
    { key: "upper", bn: "কমপক্ষে একটি বড় হাতের অক্ষর (A-Z) থাকতে হবে" },
    { key: "number", bn: "কমপক্ষে একটি সংখ্যা (0-9) থাকতে হবে" },
    { key: "special", bn: "একটি বিশেষ চিহ্ন (যেমন: @, #, $, %) থাকতে হবে" },
  ],

  // UI demo only (you said others will fill data, so keep empty if you want)
  prefill: {
    currentPassword: "********",
    newPassword: "********",
    confirmPassword: "********",
  },
};
