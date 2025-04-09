import { refundStoreType } from '@/lib/type';
import { create } from 'zustand';

type SingleRefundItemType = refundStoreType['items'][number];

type selectedRefundItemType = {
    selectedItem: SingleRefundItemType;
    setSelectedItem: (item: SingleRefundItemType) => void;
    setDecrementQuantityItem: (id: number) => void;
}

export const useSelectedRefundItemStore = create<selectedRefundItemType>((set) => ({
    selectedItem: {} as SingleRefundItemType,
    setSelectedItem: (item) => set({ selectedItem: item }),
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
            
            return {
                selectedItem: {
                    ...state.selectedItem,
                    item_bought: updatedItems,
                },
            }

        });
    }
}))