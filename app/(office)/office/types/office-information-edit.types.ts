export type OfficeEditHeaderData = {
  officeNameBn: string;
  officeIdBn: string;
  logoSrc: string;
};

export type ContactInformationFormData = {
  officerInCharge: string;
  designation: string;
  phone: string;
  email: string;
  address: string;
};

export type OfficeInformationEditPageData = {
  breadcrumb: {
    home: string;
    profile: string;
    officeProfile: string;
    current: string;
  };
  header: OfficeEditHeaderData;
  form: ContactInformationFormData;
};
