import { refundStoreType } from "@/lib/type";

export const invoice_data: refundStoreType['items'] = [
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1b',
    buyer_name: 'Mark Louis Bernardo',
    tin: '123-123-123',
    vat_invoice: '000001',
    date_created: '2023-10-01',
    gross_amount: 1000,
    vat: 120,
    vatable_amount: 880,
    discount: 50,
    status: 'Pending',
    item_bought: [
      {
        id: '1',
        product_name: 'Web Hosting Service',
        quantity: 1,
        total_cost: 500,
      },
      {
        id: '2',
        product_name: 'Domain Registration',
        quantity: 1,
        total_cost: 500,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1c',
    buyer_name: 'John Doe',
    tin: '456-456-456',
    vat_invoice: '000002',
    date_created: '2023-10-02',
    gross_amount: 2000,
    vat: 240,
    vatable_amount: 1760,
    discount: 100,
    status: 'Approved',
    item_bought: [
      {
        id: '3',
        product_name: 'Graphic Design Service',
        quantity: 1,
        total_cost: 1200,
      },
      {
        id: '4',
        product_name: 'Business Email Setup',
        quantity: 2,
        total_cost: 800,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1d',
    buyer_name: 'Jane Smith',
    tin: '789-789-789',
    vat_invoice: '000003',
    date_created: '2023-10-03',
    gross_amount: 1500,
    vat: 180,
    vatable_amount: 1320,
    discount: 75,
    status: 'Declined',
    item_bought: [
      {
        id: '5',
        product_name: 'IT Consultation',
        quantity: 3,
        total_cost: 1500,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1e',
    buyer_name: 'Alice Johnson',
    tin: '321-321-321',
    vat_invoice: '000004',
    date_created: '2023-10-04',
    gross_amount: 2500,
    vat: 300,
    vatable_amount: 2200,
    discount: 125,
    status: 'Pending',
    item_bought: [
      {
        id: '6',
        product_name: 'Software Installation',
        quantity: 5,
        total_cost: 1250,
      },
      {
        id: '7',
        product_name: 'Website Maintenance',
        quantity: 1,
        total_cost: 1250,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1f',
    buyer_name: 'Bob Brown',
    tin: '654-654-654',
    vat_invoice: '000005',
    date_created: '2023-10-05',
    gross_amount: 3000,
    vat: 360,
    vatable_amount: 2640,
    discount: 150,
    status: 'Approved',
    item_bought: [
      {
        id: '8',
        product_name: 'Custom App Development',
        quantity: 1,
        total_cost: 2000,
      },
      {
        id: '9',
        product_name: 'SEO Optimization Service',
        quantity: 1,
        total_cost: 1000,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1g',
    buyer_name: 'Charlie Green',
    tin: '987-987-987',
    vat_invoice: '000006',
    date_created: '2023-10-06',
    gross_amount: 1800,
    vat: 216,
    vatable_amount: 1584,
    discount: 90,
    status: 'Declined',
    item_bought: [
      {
        id: '10',
        product_name: 'Online Training Course',
        quantity: 2,
        total_cost: 900,
      },
      {
        id: '11',
        product_name: 'Digital Marketing Setup',
        quantity: 1,
        total_cost: 900,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1h',
    buyer_name: 'David Wilson',
    tin: '159-159-159',
    vat_invoice: '000007',
    date_created: '2023-10-07',
    gross_amount: 2200,
    vat: 264,
    vatable_amount: 1936,
    discount: 110,
    status: 'Pending',
    item_bought: [
      {
        id: '12',
        product_name: 'Data Recovery Service',
        quantity: 2,
        total_cost: 1100,
      },
      {
        id: '13',
        product_name: 'Remote Tech Support',
        quantity: 2,
        total_cost: 1100,
      },
    ]
  },
  {
    id: '125ac5ce-4f3b-4a2c-8d5b-1f0a7e6c9d1i',
    buyer_name: 'Eve Davis',
    tin: '753-753-753',
    vat_invoice: '000008',
    date_created: '2023-10-08',
    gross_amount: 2700,
    vat: 324,
    vatable_amount: 2376,
    discount: 135,
    status: 'Approved',
    item_bought: [
      {
        id: '14',
        product_name: 'Social Media Management',
        quantity: 1,
        total_cost: 1500,
      },
      {
        id: '15',
        product_name: 'Content Writing Service',
        quantity: 1,
        total_cost: 1200,
      },
    ]
  }
];
