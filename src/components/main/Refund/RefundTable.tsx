import React from 'react';
import { Table, ConfigProvider } from 'antd'; 
import { CiSquareMinus } from "react-icons/ci";  
import { useSelectedRefundItemStore } from '@/store/main/refund/useSelectedRefundItemStore';
import { RefundItemBought } from '@/lib/type';

export const RefundTable:React.FC = () => {

    const { selectedItem, setDecrementQuantityItem } = useSelectedRefundItemStore();
      
 
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
            <div className='bg-[#F7F7F7] p-4 rounded-md'>
                <hr className="w-full border-dotted border-[#38B3FB] my-4" />
                <h1 className='mt-4 lg:text-lg font-bold'>Net Sales </h1>
                <div className='grid grid-cols-1 ml-[25%]'>
                    <div className='grid grid-cols-2 gap-10'>
                        <span className='text-xs lg:text-lg text-gray-500 '>VATable amount</span>
                        {/* <span className='lg:text-2xl  '>₱{totalData.vatAmount?.toFixed(2)}</span> */}
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <span className='text-xs lg:text-lg text-gray-500 '>VATable output tax</span>
                        {/* <span className='lg:text-2xl  '>₱{(totalData.vatOutput)?.toFixed(2)}</span> */}
                    </div>
                    <div className='grid grid-cols-2 gap-10 mt-4'>
                        <span className='text-sm lg:text-xl text-gray-600 font-bold'>Total Amount</span>
                        {/* <span className='text-md lg:text-3xl font-bold '>₱{(totalData.totalAmount)?.toFixed(2)}</span> */}
                    </div>
                </div>

            </div>
            
        </ConfigProvider>
    )
}