// import { apiClient } from "@/service/base/axios.client";
// import type { VendorQuotationInboxResponse } from "@/types/vendor/quotation.types";

// type GetVendorQuotationInboxParams = {
//   token: string;
//   page?: number;
//   limit?: number;
//   type?: string;
//   status?: string;
//   search?: string;
// };

// export async function getVendorQuotationInbox({
//   token,
//   page = 1,
//   limit = 10,
//   type = "",
//   status = "",
//   search = "",
// }: GetVendorQuotationInboxParams): Promise<VendorQuotationInboxResponse> {
//   const params = new URLSearchParams({
//     page: String(page),
//     limit: String(limit),
//     type,
//     status,
//     search,
//   });

//   return apiClient<VendorQuotationInboxResponse>(
//     `/vendor/quotations/inbox?${params.toString()}`,
//     {
//       method: "GET",
//       token,
//     },
//   );
// }
