import DefaultLayout from '../../../Components/DefaultLayout';
import React,{useMemo} from 'react';
import {TabContext,TabPanel,TabList} from '@mui/lab';
import HotLeadsColumns from '../../../Components/ManageLeadsColumns/HotLeadsColumns';
import ApprovedLeadsColumns from '../../../Components/ManageLeadsColumns/ApprovedLeadsColumns';
import { data } from '../CompanyPanel/makeData';
import MaterialReactTable from 'material-react-table';
import { AccountCircle, Send } from '@mui/icons-material';
import {
    Box,
    Tab,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
  } from '@mui/material';
function HotLeads(props) {
    const HotLeadsColumns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: 'Employee',
            columns: [
              {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Name',
                size: 200,
              },
              {
                accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Email',
                size: 200,
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
                size: 200,
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
      const ApprovedLeadsColumns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: 'Employee',
            columns: [
              {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Name',
                size: 200,
              },
              {
                accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                enableClickToCopy: true,
                header: 'Email',
                size: 200,
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
                size: 200,
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
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function ContentLayout() {
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Hot Leads" value="1" />
                  <Tab label="Active" value="2" />
                  <Tab label="Approved Leads" value="3" />
                  <Tab label="Completed" value="4" />
                  <Tab label="Deferred" value="5" />
                  <Tab label="Disabled" value="6" />
                </TabList>
              </Box>
                  <TabPanel value="1">
                  <MaterialReactTable
                        columns={HotLeadsColumns}
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
                            <Typography variant="h6">
                                &quot;{row.original.signatureCatchPhrase}&quot;
                            </Typography>
                            </Box>
                        </Box>
                        )}
                        renderRowActionMenuItems={({ closeMenu }) => [
                                // <Button variant="outlined" color="secondary">
                                //     {`Review`}
                                // </Button>
                        ]}
                    />
                    
                  </TabPanel>
                  <TabPanel value="2">Active</TabPanel>
                  <TabPanel value="3">
                  <MaterialReactTable
                        columns={ApprovedLeadsColumns}
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
                            <Typography variant="h6">
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
                  </TabPanel>
                  <TabPanel value="4">Completed</TabPanel>
                  <TabPanel value="5">Deferred</TabPanel>
                  <TabPanel value="6">Disabled</TabPanel>
            </TabContext>
          </Box>
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default HotLeads;





   
  

