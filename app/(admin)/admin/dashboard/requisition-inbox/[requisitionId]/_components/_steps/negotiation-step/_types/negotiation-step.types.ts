export type NegotiationMiniStep = "selected-items" | "credit-setup" | "offer-setup";

export type NegLeftCard = {
  id: string;
  titleBn: string;
  subTitleBn: string; // ID / date
  unitPriceBn: string;
  totalBn: string;
  isActive: boolean;
  disabled?: boolean;
};

export type NegInventoryRow = {
  id: string;
  itemBn: string;
  economicCode: string;
  inventoryStatus: "IN_STOCK" | "OUT_OF_STOCK";
  vendorPriceBn: string;
};

export type NegRightHeader = {
  officeTitleBn: string;
  officeSubTitleBn: string;
  tagBn: string; // "অফারকৃত: ০১-০৩"
};

export type NegStepData = {
  miniStep: NegotiationMiniStep;

  leftCards: NegLeftCard[];

  filters: {
    qPlaceholderBn: string;
    select1LabelBn: string;
    select2LabelBn: string;
    select3LabelBn: string;
  };

  header: NegRightHeader;
  table: {
    columns: string[];
    rows: NegInventoryRow[];
  };
};
