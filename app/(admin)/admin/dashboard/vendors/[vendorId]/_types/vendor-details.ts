import type { ReactNode } from "react";

export type LegalDocStatus = "verifiable" | "pending" | "invalid";
export type LegalDocKey = "trade_license" | "tin" | "nid" | "bank_docs";

export type VendorTag = {
  code: string;
  name: string;
};

export type LegalDocIconName = "file" | "tin" | "nid" | "bank";

export type VendorLegalDoc = {
  key: LegalDocKey;
  title: string;
  iconName: LegalDocIconName;
  status: LegalDocStatus;
};

export type VendorDetails = {
  id: string;

  orgName: string;
  ownerName: string;

  address: string;
  phone: string;

  loginEmail: string;

  legalDocs: VendorLegalDoc[];
  tags: VendorTag[];

  totalItems: number;
};