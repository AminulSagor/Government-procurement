export type VendorDocumentKey = "trade_license" | "tin" | "nid";

export type VendorDocuments = Record<VendorDocumentKey, File | null>;

export type VendorCategory = {
  code: string; // iBAS code
  name: string;
};

export type VendorDocumentMeta = {
  key: VendorDocumentKey;
  title: string;
  subtitle: string;
  accept?: string;
};

export type VendorCreateValues = {
  orgName: string;
  ownerName: string;
  phone: string;
  email: string;

  address: string;

  isActive: boolean;
  loginEmail: string;
  password: string;

  documents: VendorDocuments;

  categoryCodes: string[];
};