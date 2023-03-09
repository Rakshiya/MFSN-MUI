
import DefaultLayout from '../../../Components/DefaultLayout';
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import { data } from '../CompanyPanel/makeData';
import UserListColumns from '../../../Components/UserPanelColumns/UserListColumns';

function UserList(props) {
    const UserListColumns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: 'Employee',
            columns: [
              {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Name',
                size: 250,
                Cell: ({ renderedCellValue, row }) => (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <img
                      alt="avatar"
                      height={30}
                      src={row.original.avatar}
                      loading="lazy"
                      style={{ borderRadius: '50%' }}
                    />
                    {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                    <span>{renderedCellValue}</span>
                  </Box>
                ),
              },
              {
                accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Email',
                size: 300,
              },
            ],
          },
          {
            id: 'id',
            header: 'Job Info',
            columns: [
              {
                accessorKey: 'salary',
                filterVariant: 'range',
                header: 'Salary',
                size: 200,
                //custom conditional format and styling
                Cell: ({ cell }) => (
                  <Box
                    component="span"
                    sx={(theme) => ({
                      backgroundColor:
                        cell.getValue() < 50_000
                          ? theme.palette.error.dark
                          : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                          ? theme.palette.warning.dark
                          : theme.palette.success.dark,
                      borderRadius: '0.25rem',
                      color: '#fff',
                      maxWidth: '9ch',
                      p: '0.25rem',
                    })}
                  >
                    {cell.getValue()?.toLocaleString?.('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </Box>
                ),
              },
              {
                accessorKey: 'jobTitle', //hey a simple column for once
                header: 'Job Title',
                size: 350,
              },
              {
                accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
                id: 'startDate',
                header: 'Start Date',
                filterFn: 'lessThanOrEqualTo',
                sortingFn: 'datetime',
                Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
                Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
              },
            ],
          },
        ],
        [],
      );
    function ContentLayout() {
        return (
            <MaterialReactTable
            columns={UserListColumns}
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
                <img
                  alt="avatar"
                  height={200}
                  src={row.original.avatar}
                  loading="lazy"
                  style={{ borderRadius: '50%' }}
                />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4">Signature Catch Phrase:</Typography>
                  <Typography variant="h1">
                    &quot;{row.original.signatureCatchPhrase}&quot;
                  </Typography>
                </Box>
              </Box>
            )}
            renderRowActionMenuItems={({ closeMenu }) => [
              <MenuItem
                key={0}
                onClick={() => {
                  // View profile logic...
                  closeMenu();
                }}
                sx={{ m: 0 }}
              >
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                View Profile
              </MenuItem>,
              <MenuItem
                key={1}
                onClick={() => {
                  // Send email logic...
                  closeMenu();
                }}
                sx={{ m: 0 }}
              >
                <ListItemIcon>
                  <Send />
                </ListItemIcon>
                Send Email
              </MenuItem>,
            ]}
            
          />
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default UserList;