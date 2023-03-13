import DefaultLayout from '../../../Components/DefaultLayout';
import React,{useMemo} from 'react';
import {TabContext,TabPanel,TabList} from '@mui/lab';
import HotLeadsColumns from '../../../Components/ManageLeadsColumns/HotLeadsColumns';
import ApprovedLeadsColumns from '../../../Components/ManageLeadsColumns/ApprovedLeadsColumns';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { data } from '../CompanyPanel/makeData';
import MaterialReactTable from 'material-react-table';
import { AccountCircle, Send } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    Box,
    Tab,
    Button,
    FormLabel,
    MenuItem,OutlinedInput,
    Typography,Dialog ,DialogActions ,FormControlLabel ,FormGroup,Table,TableCell,CardActionArea,CardContent ,TableRow,RadioGroup,Radio,
    Grid,DialogTitle ,DialogContent,FormControl,InputLabel,Checkbox,
    Select,TextField,TextareaAutosize
  } from '@mui/material';
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
    
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
function HotLeads(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [value1, setValue1] = React.useState(null);
  const [age, setAge] = React.useState('');

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                        renderRowActions={({ row, table }) => (
                          <Box sx={{ display: 'flex', gap: '1rem' }}>
                            {/* <Tooltip arrow placement="left" title="Edit"> */}
                            <Button variant="outlined">Details</Button>
                            <Button variant="outlined" size="small" onClick={handleClickOpen}>Send Aggrement</Button>
                            {/* </Tooltip> */}
                          </Box>
                        )}
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
                        renderRowActions={({ row, table }) => (
                          <Box sx={{ display: 'flex', gap: '1rem' }}>
                            {/* <Tooltip arrow placement="left" title="Edit"> */}
                            <Button variant="outlined">Details</Button>
                            {/* </Tooltip> */}
                          </Box>
                        )}
                        
                    />
                  </TabPanel>
                  <TabPanel value="4">Completed</TabPanel>
                  <TabPanel value="5">Deferred</TabPanel>
                  <TabPanel value="6">Disabled</TabPanel>
            </TabContext>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Follow Up
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid item md={12}>
            <FormControl fullWidth size='small'>
                <InputLabel id="demo-multiple-name-label">User Type</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange1}
                input={<OutlinedInput label="User Type" />}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} mt={2}>
          <FormLabel> Note:</FormLabel>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Note"
            style={{ width: "100%" }}
          />
          </Grid>
          
          <Grid>
                <FormLabel> Follow Up Required:</FormLabel>
                      <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                      >
                          <FormControlLabel value="female" control={<Radio />} label="Yes" />
                          <FormControlLabel value="other" control={<Radio />} label="No" />
                      </RadioGroup>
                      
            </Grid>
            <Grid>
            <FormGroup>
              <FormControlLabel label="Keep in hot leads" control={<Checkbox defaultChecked />}  />
              
            </FormGroup>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <FormLabel> Follow Up Date:</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      label="Basic example"
                      value={value1}
                      onChange={(newValue) => {
                      setValue1(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                  />
                  </LocalizationProvider>          
              </Grid>
              <Grid item xs={6}>
              <FormLabel> Follow Up Time:</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Basic example"
                        value={value1}
                        onChange={(newValue) => {
                        setValue1(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>         
              </Grid>
              
            </Grid>
            
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
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





   
  

