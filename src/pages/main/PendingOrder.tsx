import * as React from 'react';
import { Plus } from 'lucide-react';
import { PendingOrdersTable } from '@/components/main/pending-orders/PendingOrdersTable';

const PendingOrder:React.FC = () => {

  return (
    <div className="w-full overflow-x-hidden p-5">
      
      <div className='bg-white w-full h-screen rounded-md shadow-md p-5'>
        <div className='flex items-center justify-between p-5'>
            <div>
              <h2 className='text-2xl font-primary text-brand-primary font-bold'>Pending Orders</h2>
              <small className='text-gray-400'>Note: Before obtaining the VAT invoice number, approval of the request is required.</small>
            </div>
             <button className='bg-brand-primary text-white rounded-md px-10 py-3 text-lg font-bold font-primary 
             flex items-center gap-2 hover:bg-brand-primary/90 transition-all ease-in-out cursor-pointer'>
                <Plus size={25} />
                New Order
            </button>
        </div>

        <div className="p-8 overflow-x-auto">
          <PendingOrdersTable />
        </div>
      </div>
     
    </div>
  )
}

export default PendingOrder