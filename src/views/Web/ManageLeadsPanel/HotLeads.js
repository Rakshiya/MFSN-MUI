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


  console.log(Object.values(data));

function HotLeads() {
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
                //Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                //   <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //       onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //       }}
                //       renderInput={(params) => (
                //         <TextField
                //           {...params}
                //           helperText={'Filter Mode: Lesss Than'}
                //           sx={{ minWidth: '120px' }}
                //           variant="standard"
                //         />
                //       )}
                //       value={column.getFilterValue()}
                //     />
                //   </LocalizationProvider>
                // ),
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
                //Custom Date Picker Filter from @mui/x-date-pickers
                // Filter: ({ column }) => (
                //   <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <DatePicker
                //       onChange={(newValue) => {
                //         column.setFilterValue(newValue);
                //       }}
                //       renderInput={(params) => (
                //         <TextField
                //           {...params}
                //           helperText={'Filter Mode: Lesss Than'}
                //           sx={{ minWidth: '120px' }}
                //           variant="standard"
                //         />
                //       )}
                //       value={column.getFilterValue()}
                //     />
                //   </LocalizationProvider>
                // ),
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
    return(
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
                    initialState={{ showColumnFilters: true }}
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
                            <Button variant="outlined" color="secondary">
                                {`Review`}
                            </Button>
                    ]}
                    renderTopToolbarCustomActions={({ table }) => {
                    const handleDeactivate = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('deactivating ' + row.getValue('name'));
                        });
                    };
            
                    const handleActivate = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('activating ' + row.getValue('name'));
                        });
                    };
            
                    const handleContact = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('contact ' + row.getValue('name'));
                        });
                    };
            
                    return (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button
                            color="error"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="contained"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="success"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="contained"
                        >
                            Activate
                        </Button>
                        <Button
                            color="info"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleContact}
                            variant="contained"
                        >
                            Contact
                        </Button>
                        </div>
                    );
                    }}
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
                    initialState={{ showColumnFilters: true }}
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
                    renderTopToolbarCustomActions={({ table }) => {
                    const handleDeactivate = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('deactivating ' + row.getValue('name'));
                        });
                    };
            
                    const handleActivate = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('activating ' + row.getValue('name'));
                        });
                    };
            
                    const handleContact = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                        alert('contact ' + row.getValue('name'));
                        });
                    };
            
                    return (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button
                            color="error"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="contained"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="success"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="contained"
                        >
                            Activate
                        </Button>
                        <Button
                            color="info"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleContact}
                            variant="contained"
                        >
                            Contact
                        </Button>
                        </div>
                    );
                    }}
                />
              </TabPanel>
              <TabPanel value="4">Completed</TabPanel>
              <TabPanel value="5">Deferred</TabPanel>
              <TabPanel value="6">Disabled</TabPanel>
        </TabContext>
      </Box>
    );
}


export default HotLeads;