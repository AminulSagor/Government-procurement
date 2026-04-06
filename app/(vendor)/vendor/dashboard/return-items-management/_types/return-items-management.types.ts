// app/(vendor)/vendor/dashboard/return-items-management/_types/return-items-management.types.ts
export type PillTone = "orange" | "green" | "gray" | "red" | "blue";

export type ReturnRequestItem = {
  retId: string;
  requestTitleBn: string;
  badges: {
    left: { labelBn: string; tone: PillTone };
    right: { labelBn: string; tone: PillTone };
  };
  ticketNo: string;

  quickMeta: {
    requestedTextBn: string;
    orderId: string;
    office: string;
    reason: string;
  };

  item: { name: string; meta: string };
  buyerNoteBn: string;
  officeNoteBn: string;

  evidence: {
    labelBn: string;
    imageUrl: string;
    attachmentCountText: string;
  };
};

export type ActionRequiredForm = {
  approveLabelBn: string;
  responsePlaceholderBn: string;
  pickupLabelBn: string;
  pickupOptions: { label: string; value: string }[];
  pickupButtonBn: string;
  rejectLabelBn: string;
  rejectReasonPlaceholderBn: string;
  finalDangerButtonBn: string;
};

export type ResolvedReturnItem = {
  title: string;
  statusText: string;
  dateText: string;
};

export type ReturnItemsManagementPageData = {
  crumbsBn: string;
  backHref: string;

  titleBn: string;
  subtitleEn: string;

  alert: { textBn: string };

  activeCard: ReturnRequestItem;
  actionRequired: ActionRequiredForm;
  resolved: ResolvedReturnItem[];
};