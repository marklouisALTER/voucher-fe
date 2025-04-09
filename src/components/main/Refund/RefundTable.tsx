import React, { useEffect } from 'react';
import { Table, Button, Popconfirm, ConfigProvider } from 'antd'; 
import { CiSquareMinus } from "react-icons/ci"; 
import { MdDelete } from 'react-icons/md';
import { useSelectedRefundItemStore } from '@/store/main/refund/useSelectedRefundItemStore';
import { RefundItemBought } from '@/lib/type';

export const RefundTable:React.FC = () => {

    const { selectedItem } = useSelectedRefundItemStore();
    
    useEffect(() => {
        console.log(selectedItem);
    }, [selectedItem]);

    const handleDelete = (id: string) => {
        // Implement delete functionality here
        console.log(id);
    }

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
            render: (quantity: number) => {
                                
                return (
                    <span className='flex items-center gap-3'>
                        <button
                            // onClick={() => handleDecrement(record.id)}
                        >
                            <CiSquareMinus className='text-brand-primary text-3xl hover:text-brand-primary/80 cursor-pointer'/>
                        </button>                        
                        <p className='text-primary'>{quantity}</p>
                         
                    </span>
                )
            }
        },
        {
            title: 'Amount',
            dataIndex: 'total_cost',
            key: 'total_cost',
            width: 30,
        },
        
        {
            title: 'Action',
            key: 'operation',
            width: 30,
            render: (record: any) => (
                <span className='flex-col md:flex-row'>
                    <Popconfirm 
                        title="Sure to delete?" 
                        onConfirm={() => handleDelete(record.id)}
                        okType='danger'
                    >
                        <Button 
                            type="primary" 
                            danger
                            size="small"
                        >
                            <MdDelete />
                        </Button>
                    </Popconfirm>
                </span>
            )
        },
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1677ff',
                    borderRadius: 6,
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
                className='shadow-md'
                title={() => <h1 className='text-xl font-medium text-primary font-secondary'>Current Order</h1>}
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