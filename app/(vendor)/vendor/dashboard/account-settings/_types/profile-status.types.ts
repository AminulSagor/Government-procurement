export type VerificationStatus = "Verified" | "Pending" | "Rejected";

export type VerificationItem = {
  key: "trade_license" | "tin" | "bin";
  title: string;
  value: string;
  status: VerificationStatus;
};

export type BusinessInfo = {
  name: string;
  typeText: string;
  statusText: string; // e.g. "প্রোফাইল সম্পূর্ণ"
  address: string;
  phone: string;
  email: string;
  logoText: string; // demo logo placeholder
};

export type BankInfo = {
  bankName: string;
  accountName: string;
  accountNumberMasked: string;
  routingNumber: string;
  secureLabel: string; // "SECURE"
};

export type SecurityPrivacy = {
  twoFAEnabled: boolean;
};

export type ProfileStatusData = {
  completionPercent: number; // 0-100
  completionLabel: string; // "প্রোফাইল সম্পূর্ণতা"
  completionHint: string;
  business: BusinessInfo;
  verification: VerificationItem[];
  bank: BankInfo;
  security: SecurityPrivacy;
};
