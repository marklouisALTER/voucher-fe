import { refundStoreType } from '@/lib/type';
import { create } from 'zustand';

type SingleRefundItemType = refundStoreType['items'][number];

type selectedRefundItemType = {
    selectedItem: SingleRefundItemType;
    setSelectedItem: (item: SingleRefundItemType) => void;
    selectedItemsComputations : {
        vatable_amount: number,
        vat_output_tax: number,
        total_amount: number
    }
    setDecrementQuantityItem: (id: number) => void;
}


const computeVAT = (item_bought: SingleRefundItemType['item_bought']) => {
    const vatable_amount = item_bought?.reduce((acc, curr) => acc + (curr.total_cost * curr.quantity), 0) || 0;
    const vat_output_tax = parseFloat((vatable_amount * 0.12).toFixed(2));
    const total_amount = parseFloat((vatable_amount + vat_output_tax).toFixed(2));

    return { vatable_amount, vat_output_tax, total_amount };
}

export const useSelectedRefundItemStore = create<selectedRefundItemType>((set) => ({
    selectedItem: {} as SingleRefundItemType,
    selectedItemsComputations: {
        vatable_amount: 0,
        vat_output_tax: 0,
        total_amount: 0,
    },
    setDecrementQuantityItem: (id) => {
        
        set((state) => {
            
            const updatedItems = state.selectedItem.item_bought?.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                    };
                }
                return item;
            });
            const updatedSelectedItem = {
                ...state.selectedItem,
                item_bought: updatedItems,
            };
        
            const computations = computeVAT(updatedItems);
        
              return {
                selectedItem: updatedSelectedItem,
                selectedItemsComputations: computations,
              };
        });
    },
    setSelectedItem: (item) => {
        const computations = computeVAT(item.item_bought || []);
        set({
          selectedItem: item,
          selectedItemsComputations: computations,
        });
      },
    
}))
