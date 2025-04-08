import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { LucideEye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Check, Trash2 } from 'lucide-react';
import { Tooltip } from '@mui/material';

export const PendingOrdersTable:React.FC = () => {

    
  const isMobile = useIsMobile();

  const handleCheck = (id: number) => {
    console.log('Checked row with ID:', id);
  };
  
  const handleDelete = (id: number) => {
    console.log('Deleted row with ID:', id);
  };

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
  { field: 'buyer_name', headerName: 'Buyer Name', flex: 1 },
  { field: 'tin', headerName: 'TIN', flex: 1 },
  {
    field: 'vat_invoice',
    headerName: 'Vat Invoice',
    flex: 1,
  },
  {
    field: 'date_created',
    headerName: 'Date Created',
    sortable: false,
    flex: 1,
  },
  {
    field: 'gross_amount',
    headerName: 'Gross Amount',
    flex: 1.5,
    type: 'number',
    sortable: false,
  },
  {
    field: 'vat',
    headerName: 'VAT',
    flex: .5,
    sortable: false,
  },
  {
    field: 'vatable_amount',
    headerName: 'Vatable Amount',
    flex: 1.5,
    type: 'number',
    sortable: false,
  },
  {
    field: 'discount',
    headerName: 'Discount',
    flex: 1,
    type: 'number',
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: isMobile ? 3 : 1.5,
    sortable: false,
    filterable: false,
    align: 'center',
    headerAlign: 'center',

    renderCell: (params) => (
      <div className="flex items-center justify-center gap-2">
        <Tooltip title="View" arrow>
          <button
            className="bg-brand-primary text-white p-2 rounded mt-2 cursor-pointer hover:bg-brand-primary/70 transition"
            onClick={() => handleCheck(params.row.id)}
          >
            <LucideEye size={18} />
          </button>
        </Tooltip>

        <Tooltip title="Approve" arrow>
          <button
            className="bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-600/80 transition"
            onClick={() => handleCheck(params.row.id)}
          >
            <Check size={18} />
          </button>
        </Tooltip>

       <Tooltip title="Delete" arrow>
          <button
            className="bg-red-700 text-white p-2 rounded mt-2 hover:bg-red-700/80 transition"
            onClick={() => handleDelete(params.row.id)}
          >
            <Trash2 size={18} />
          </button>
        </Tooltip>
      </div>
    ),
  },
];

const rows = [
  { id: 1, buyer_name: 'John Doe', tin: '123456789', vat_invoice: 'Yes', date_created: '2023-10-01', gross_amount: 1000, vat: 12, vatable_amount: 888.89, discount: 0, status: 'Pending' },
  { id: 2, buyer_name: 'Jane Smith', tin: '987654321', vat_invoice: 'No', date_created: '2023-10-02', gross_amount: 2000, vat: 24, vatable_amount: 1777.78, discount: 0, status: 'Pending' },
  { id: 3, buyer_name: 'Alice Johnson', tin: '456789123', vat_invoice: 'Yes', date_created: '2023-10-03', gross_amount: 1500, vat: 18, vatable_amount: 1331.36, discount: 0, status: 'Pending' },
];

const paginationModel = { page: 0, pageSize: 10 };



  return (
    <div style={{ minWidth: '1000px' }}>
            <Paper sx={{ width: '100%' }}>
                <DataGrid
                    className=''
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    // checkboxSelection 
                    sx={{
                        border: 'none',
                        fontFamily: 'Montserrat, sans-serif',
                        '& .MuiDataGrid-columnHeaders': {
                          backgroundColor: '#206420',
                          color: '#003554',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                        },
                        
                        '& .MuiDataGrid-columnHeaderTitle': {
                          fontWeight: 'bold',
                        },

                        '& .MuiDataGrid-cell': {
                          borderBottom: '1px solid #e0e0e0',
                          padding: '2px',
                        },

                        '& .MuiDataGrid-row': {
                          borderRadius: '8px',
                        },

                        '& .MuiDataGrid-row:nth-of-type(even)': {
                          backgroundColor: '#f9fafb',
                        },

                        '& .MuiDataGrid-row:hover': {
                          backgroundColor: '#e6f4ea',
                        },

                        '& .MuiDataGrid-footerContainer': {
                          backgroundColor: '#f3f4f6',
                          borderTop: 'none',
                          fontWeight: 'bold',
                        },

                        '& .MuiCheckbox-root svg': {
                          color: '#206420',
                        },

                        '& .MuiDataGrid-virtualScroller': {
                          marginTop: '4px',
                        },

                        '& .MuiDataGrid-selectedRowCount': {
                          visibility: 'hidden',
                        },
                      }}
                />
            </Paper>
          </div>
  )
}
