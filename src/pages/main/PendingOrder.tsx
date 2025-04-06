import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { LucideEye, Plus } from 'lucide-react';

import { Check, Trash2 } from 'lucide-react';

const handleCheck = (id: number) => {
    console.log('Checked row with ID:', id);
  };
  
  const handleDelete = (id: number) => {
    console.log('Deleted row with ID:', id);
  };

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 0.5,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1.5,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    sortable: false,
    filterable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-slate-400 text-white p-2 rounded mt-2 hover:bg-green-700 transition"
          onClick={() => handleCheck(params.row.id)}
        >
          <LucideEye size={18} />
        </button>

        <button
          className="bg-brand-primary text-white p-2 rounded mt-2 hover:bg-brand-primary/80 transition"
          onClick={() => handleCheck(params.row.id)}
        >
          <Check size={18} />
        </button>
        <button
          className="bg-red-600 text-white p-2 rounded mt-2 hover:bg-red-700 transition"
          onClick={() => handleDelete(params.row.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 10 };

const PendingOrder:React.FC = () => {
  return (
    <div className="w-full overflow-x-auto p-5">
      
      <div className='bg-white w-full h-screen rounded-md shadow-md'>
        <div className='flex items-center justify-between p-8'>
            <h2 className='text-2xl font-primary text-brand-primary font-bold'>Pending Orders</h2>
             <button className='bg-brand-primary text-white rounded-md px-10 py-3 text-lg font-bold font-primary 
             flex items-center gap-2 hover:bg-brand-primary/90 transition-all ease-in-out cursor-pointer'>
                <Plus size={25} />
                New Order
            </button>
        </div>

        <div className='p-8'>
            <Paper sx={{ width: '100%'}}>
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
                        '& .MuiDataGrid-cell': {

                          borderBottom: '1px solid #e0e0e0',
                        },
                        '& .MuiDataGrid-row:hover': {
                          backgroundColor: '#f3f4f6',
                        },
                        '& .MuiDataGrid-footerContainer': {
                          backgroundColor: '#f9fafb',
                          borderTop: 'none',
                        },
                        '& .MuiCheckbox-root svg': {
                          color: '#206420',
                        },  
                      }}
                />
            </Paper>
        </div>
      </div>
     
    </div>
  )
}

export default PendingOrder