import React, { useEffect, useState } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { Input, Pagination } from 'antd';
import { useRefundStore } from '@/store/main/refund/useRefundStore';
import { Inbox } from 'lucide-react';
import { LoadingUi } from '@/components/common/Loading';
import { RefundCard } from '@/components/main/Refund/RefundCard';
import { RefundTable } from '@/components/main/Refund/RefundTable';
export const Refund: React.FC = () => {
    const { Search } = Input;
    const { fetchItems, items, loading } = useRefundStore();
    const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize] = useState<number>(5); 
    useEffect(() => {
        fetchItems();
    }, []);

    const onSearch: SearchProps['onSearch'] = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1);
    };

    const filteredItems = items.filter((item) =>
        !searchValue || item.vat_invoice.toLowerCase().includes(searchValue.toLowerCase())
    );

    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className='w-full h-screen grid grid-cols-1 lg:grid-cols-3 lg:gap-5 mt-5'>
            <div className='relative h-full col-span-1 bg-white rounded-lg p-5 shadow shadow-gray-300'>
                <Search
                    placeholder="Search Sales Invoice here..."
                    allowClear
                    size="large"
                    onSearch={onSearch}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-5 bg-white rounded-md">
                    {loading ? (
                        <div className='absolute w-full h-full flex flex-col gap-4 top-[-50px] left-0 items-center justify-center '>
                            <LoadingUi />
                            <p className='text-gray-400 text-lg font-primary'>Please wait to load the data...</p>
                        </div>
                    ) : filteredItems.length > 0 ? (
                        currentItems.map((item) => (
                            <RefundCard {...item} key={item.vat_invoice} />  
                        ))
                    ) : (
                        <div className='absolute w-full h-full flex flex-col gap-4 top-[-50px] left-0 items-center justify-center'>
                            <Inbox size={50} className='text-gray-400' />
                            <h3 className='text-gray-400 text-lg font-primary'>No receipt available</h3>
                        </div>
                    )}
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={filteredItems.length}
                        onChange={(page) => setCurrentPage(page)}
                        disabled={loading}
                        showSizeChanger={false}
                    />
                </div>
            </div>

            <div className='col-span-2 bg-white p-5 rounded-lg shadow shadow-gray-300 mt-5 lg:mt-0'> 
                <h3 className='text-xl font-primary font-bold text-gray-600'>Refund Details</h3>
                <RefundTable />
            </div>
        </section>
    );
};
