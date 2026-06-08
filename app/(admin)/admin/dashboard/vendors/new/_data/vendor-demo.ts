import type { VendorCreateValues } from "../_types/vendor";

export const vendorCreateDefaults: VendorCreateValues = {
  orgName: "",
  ownerName: "",
  phone: "",
  email: "",

  address: "",

  isActive: true,
  loginEmail: "",
  password: "",

  documents: {
    trade_license: null,
    tin: null,
    nid: null,
  },

  categoryCodes: [], // demo selected tags
};
