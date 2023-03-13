import React, { useMemo } from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
//MRT Imports
import MaterialReactTable from 'material-react-table';
//Material-UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,Tooltip,IconButton
} from '@mui/material';
//Icons Imports
import { AccountCircle, Send ,Delete, Edit} from '@mui/icons-material';
//Mock Data
import { data } from './makeData';
function CompanyPanel() {
    const columns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: 'Employee',
            columns: [
              {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Company Name',
                size: 150,
                Cell: ({ renderedCellValue, row }) => (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <span>{renderedCellValue}</span>
                  </Box>
                ),
              },
              {
                accessorKey: 'salary', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Bank Details',
                size: 150,
              },
              {
                accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Status',
                size: 150,
              },
              {
                accessorKey: 'startDate', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Referral Program',
                size: 150,
              },
              {
                accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Register Date',
                size: 150,
              },
            ],
          },
          
        ],
        [],
      );
      function ContentLayout() {
    return (
        <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnFilterModes
        enableColumnOrdering
        enableGrouping
        enablePinning
        enableRowActions
        enableRowSelection
        initialState={{ showColumnFilters: false }}
        positionToolbarAlertBanner="bottom"
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Signature Catch Phrase:</Typography>
              <Typography variant="h1">
                &quot;{row.original.signatureCatchPhrase}&quot;
              </Typography>
            </Box>
          </Box>
        )}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {/* <Tooltip arrow placement="left" title="Edit"> */}
            <Button variant="outlined">Details</Button>
            {/* </Tooltip> */}
          </Box>
        )}
       
      />
    );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}

export default CompanyPanel;