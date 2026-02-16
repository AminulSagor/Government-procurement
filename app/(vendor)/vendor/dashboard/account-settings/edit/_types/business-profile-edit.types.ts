export type BusinessProfileEditForm = {
  businessName: string;
  businessType: string;
  division: string;
  address: string;
  phone: string;
  email: string;

  bankName: string;
  branch: string;
  accountHolderName: string;
  accountNumber: string;
  routingNumber: string;

  tradeLicenseFileName?: string;
  tinFileName?: string;
  binFileName?: string;
  bankChequeFileName?: string;
};
