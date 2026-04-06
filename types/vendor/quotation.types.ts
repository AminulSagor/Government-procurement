export type VendorQuotationInboxItem = Record<string, unknown>;

export type VendorQuotationInboxResponse = {
    success: boolean;
    statusCode: number;
    data: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        data: VendorQuotationInboxItem[];
    };
    timestamp: string;
    path: string;
};