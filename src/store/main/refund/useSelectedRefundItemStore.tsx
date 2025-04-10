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
    setClearSelectedItem: () => void;
}


const computeVAT = (item_bought: SingleRefundItemType['item_bought']) => {
    const total_amount = item_bought?.reduce(
      (acc, curr) => acc + curr.total_cost,
      0
    ) || 0;
  
    const vatable_amount = parseFloat((total_amount / 1.12).toFixed(2));
    const vat_output_tax = parseFloat((total_amount - vatable_amount).toFixed(2));
  
    return { vatable_amount, vat_output_tax, total_amount };
  };
  

export const useSelectedRefundItemStore = create<selectedRefundItemType>((set) => ({
    selectedItem: {} as SingleRefundItemType,
    selectedItemsComputations: {
        vatable_amount: 0.00,
        vat_output_tax: 0.00,
        total_amount: 0.00,
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
    setClearSelectedItem: () => {
        set({
            selectedItem: {} as SingleRefundItemType,   
            selectedItemsComputations: {
                vatable_amount: 0.00,  
                vat_output_tax: 0.00,
                total_amount: 0.00,
            },
        });
    
    }
    
}))
