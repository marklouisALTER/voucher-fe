export type RefundItemBought = {
    id: string;
    product_name: string;
    quantity: number;
    total_cost: number;
  };
  
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
      item_bought?: RefundItemBought[]; // optional
    }[];
    loading: boolean;
    fetchItems: () => void;
}