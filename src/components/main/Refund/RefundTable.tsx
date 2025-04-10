import React from 'react';
import { Table, ConfigProvider } from 'antd'; 
import { CiSquareMinus } from "react-icons/ci";  
import { useSelectedRefundItemStore } from '@/store/main/refund/useSelectedRefundItemStore';
import { RefundItemBought } from '@/lib/type'; 
import { IoCart } from 'react-icons/io5';
import { Button } from '@mui/material';
import { CircleX } from 'lucide-react';

export const RefundTable:React.FC = () => {

    const { selectedItem, setDecrementQuantityItem, selectedItemsComputations, setClearSelectedItem } = useSelectedRefundItemStore();
      
 
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            hidden: true,            
        },
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (_: unknown, __: unknown, index: number) => index + 1
        },    
        
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
            render: (_: unknown, record: RefundItemBought) => record?.product_name                                        
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            width: 30,
            render: (quantity: number, record: RefundItemBought) => {
                                
                return (
                    <span className='flex items-center gap-3'>
                        <button
                            onClick={() => setDecrementQuantityItem(record.id)}
                        >
                            <CiSquareMinus className='text-red-700 text-3xl hover:text-red-700/80 cursor-pointer'/>
                        </button>                        
                        <p className='text-primary'>
                            {quantity}
                        </p> 
                    </span>
                )
            }
        },
        {
            title: 'Amount',
            dataIndex: 'total_cost',
            key: 'total_cost',
            width: 100,
            render: (_: unknown, record: RefundItemBought) => {
                return (
                    <span className='text-brand-primary font-semibold'>
                        ₱ {record?.total_cost?.toFixed(2)}
                    </span>
                )
            }
        },
         
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1677ff', 
                },
                components: {
                    Table: {
                        cellFontSize:14,
                        headerBg: '#013554',
                        headerColor: '#FFF',
                    },
                },
            }}
        >
            <Table
                className='shadow-md mt-2' 
                bordered={true}
                columns={columns}
                dataSource={selectedItem.item_bought}
                pagination={{ pageSize: 5 }}
                scroll={{ x: 300 }}
                style={{ border: 'none' }}
                
            />
            <div className='p-4 rounded-md mt-5'>  
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between gap-5'>
                            <span className='text-sm lg:text-xl text-gray-600 font-bold text-brand-primary'>Net Sales</span> 
                            {/* <p className='font-medium'>₱ 12,000</p>  */}
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <span className='text-xs lg:text-lg font-semibold text-gray-500 '>VATable amount</span>
                            <p className='font-medium'>₱ {selectedItemsComputations?.vatable_amount || "0.00"}</p> 
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <span className='text-xs lg:text-lg text-gray-500 '>VATable output tax</span> 
                            <p className='font-medium'>₱ {selectedItemsComputations?.vat_output_tax || "0.00"}</p> 
                        </div>
                    </div> 
                    <div className='flex flex-col items-end'>
                        <span className='text-xs lg:text-sm text-gray-500 '>Grand Total</span> 
                        <p className='font-bold text-3xl text-brand-primary'>₱ {selectedItemsComputations?.total_amount || "0.00"}</p> 
                    </div>
                </div>
                <div className='flex justify-center mt-5 lg:mt-10 gap-5'>
                    <button className='w-full bg-brand-primary px-10 py-3 font-medium font-primary text-white rounded-sm cursor-pointer hover:bg-brand-primary/80 transition-all
                    ease-in-out flex items-center justify-center gap-5'>
                        <IoCart className='text-lg'/>
                        Refund Receipt
                    </button>
                    <Button variant="outlined" onClick={setClearSelectedItem}><CircleX /></Button>

                </div>
            </div>
            
        </ConfigProvider>
    )
}