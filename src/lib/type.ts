export type refundStoreType = {
    items: {
        id: string;
        buyer_name: string;
        tin: string;
        vat_invoice: string;
        date_created: string;
        gross_amount: number;
        vat: number;
        vatable_amount: number;
        discount: number;
        status: string;
    }[],
    loading: boolean;
    fetchItems: () => void;
}