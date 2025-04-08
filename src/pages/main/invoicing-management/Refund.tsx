import React, { useEffect, useState } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { Input, Pagination } from 'antd';
import { useRefundStore } from '@/store/useRefundStore';
import { Inbox } from 'lucide-react';

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

                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-5 bg-white rounded-md">
                    {loading ? (
                        <div className='absolute w-full h-full flex flex-col gap-4 top-[-50px] left-0 items-center justify-center '>
                            <div className="flex flex-row gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                            </div>
                            <p className='text-gray-400 text-lg font-primary'>Please wait to load the data...</p>
                        </div>
                    ) : filteredItems.length > 0 ? (
                        currentItems.map((item) => (
                            <button
                                key={item.vat_invoice}
                                className="group relative w-full p-2 py-4 border border-brand-primary/20 rounded-md flex flex-col justify-center items-center hover:bg-brand-primary transition-all delay-50 ease-linear cursor-pointer hover:scale-105 bg-white"
                            >
                                <div className='w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#38b3fb] flex justify-center items-center'>
                                    <h3 className="font-primary font-bold group-hover:text-white transition-all delay-50 ease-in-out text-xl text-primary">
                                        {item.buyer_name.charAt(0).toUpperCase()}
                                    </h3>
                                </div>
                                <h3 className="font-primary font-bold mt-2 group-hover:text-white transition-all delay-50 ease-in-out text-md lg:text-xs xl:text-md text-primary">
                                    {item.buyer_name}
                                </h3>
                                <p className="font-primary font-bold group-hover:text-white text-md lg:text-xs lg:text-md text-secondary">
                                    <span className='text-gray-400 text-sm lg:text-[10px] xl:text-sm'>
                                        Sales Invoice No.
                                    </span>{' '}
                                    <span className='text-brand-primary group-hover:text-white font-bold transition-all ease-in-out'>
                                        {item.vat_invoice}
                                    </span>
                                </p>
                            </button>
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
            </div>
        </section>
    );
};
