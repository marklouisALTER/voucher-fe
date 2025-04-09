import { refundStoreType } from '@/lib/type';
import { create } from 'zustand';

type SingleRefundItemType = refundStoreType['items'][number];

type selectedRefundItemType = {
    selectedItem: SingleRefundItemType;
    setSelectedItem: (item: SingleRefundItemType) => void;
}

export const useSelectedRefundItemStore = create<selectedRefundItemType>((set) => ({
    selectedItem: {} as SingleRefundItemType,
    setSelectedItem: (item) => set({ selectedItem: item }),
}))