import { refundStoreType } from '@/lib/type'
import { useSelectedRefundItemStore } from '@/store/main/refund/useSelectedRefundItemStore'
import React from 'react'

type RefundCardItemType = refundStoreType['items'][number]

export const RefundCard:React.FC<RefundCardItemType> = (props) => {

    const { setSelectedItem } = useSelectedRefundItemStore();

return (
    <button
        key={props.vat_invoice}
        onClick={() => setSelectedItem(props)}
        className="group relative w-full p-2 py-4 border border-brand-primary/20 rounded-md flex flex-col justify-center items-center hover:bg-brand-primary transition-all delay-50 ease-linear cursor-pointer hover:scale-105 bg-white"
    >
        <div className='w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#38b3fb] flex justify-center items-center'>
            <h3 className="font-primary font-bold group-hover:text-white transition-all delay-50 ease-in-out text-xl text-primary">
                {props.buyer_name.charAt(0).toUpperCase()}
            </h3>
        </div>
        <h3 className="font-primary font-bold mt-2 group-hover:text-white transition-all delay-50 ease-in-out text-md lg:text-xs xl:text-md text-primary">
            {props.buyer_name}
        </h3>
        <p className="font-primary font-bold group-hover:text-white text-md lg:text-xs lg:text-md text-secondary">
            <span className='text-gray-400 text-sm lg:text-[10px] xl:text-sm'>
                Sales Invoice No.
            </span>{' '}
            <span className='text-brand-primary group-hover:text-white font-bold transition-all ease-in-out'>
                {props.vat_invoice}
            </span>
        </p>
    </button>
  )
}
