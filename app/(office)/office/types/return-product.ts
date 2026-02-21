export type ReturnableProduct = {
  id: string;
  nameBn: string;
  orderId: string;
  sellerNameBn: string;
  purchaseDateBn: string;
  imageUrl: string;
  returnableDaysLeftTextBn: string; // e.g. "ফেরতযোগ্য - ২ দিন বাকি"
};

export type ReturnReasonOption = {
  value: string;
  labelBn: string;
};

export type UploadFileItem = {
  id: string;
  name: string;
  sizeLabelBn: string; // e.g. "১.২ এমবি"
};