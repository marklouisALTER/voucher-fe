import { refundStoreType } from '@/lib/type';
import { create } from 'zustand';
import { invoice_data } from '@/dummy-data/data';

export const useRefundStore = create<refundStoreType>((set) => ({
    items: [],
    loading: false,
    fetchItems: () => {
        set({ loading: true })
        setTimeout(() => {
            set({ items: invoice_data, loading: false })
        }, 2000);
    }
}))

