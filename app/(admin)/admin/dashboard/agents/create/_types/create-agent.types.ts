export type UploadKey = "signatureCard" | "cv" | "agreement";

export interface UploadItem {
  key: UploadKey;
  fileName?: string;
}

export interface CreateAgentFormState {
  // personal
  fullNameBn: string;
  phonePrimary: string;
  email: string;
  nidNumber: string;
  presentAddressBn: string;
  permanentAddressBn: string;
  phoneSecondary?: string;

  // area & role
  division: string;
  district: string;
  upazila: string;
  roleBn: string;

  // docs
  uploads: Record<UploadKey, UploadItem>;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface AreaOptions {
  divisions: SelectOption[];
  districts: SelectOption[];
  upazilas: SelectOption[];
  roles: SelectOption[];
}
