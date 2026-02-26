export type OfficeType = "উপজেলা" | "জেলা" | "বিভাগীয়";

export type OfficeStatus = "active" | "inactive";

export type OfficeManagementRow = {
  id: string;
  officeNameBn: string;
  officeId10Digit: string;

  type: OfficeType;

  parentOfficeBn: string;

  status: OfficeStatus;
};
