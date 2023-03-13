import React, { useMemo,useState,useEffect } from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import AuthUser from '../../../Components/Auth/AuthUser';
//MRT Imports
import MaterialReactTable from 'material-react-table';

//Material-UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

//Date Picker Imports
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//Icons Imports
import { AccountCircle, Send } from '@mui/icons-material';



function CompanyPanel() {




  //Neccessary variables declearation start

  const {http} = AuthUser();
  const [companylist, setCompanyList] = useState([]);
  const [loader,setLoader]=useState('');
  const [filterCompany, setFilterCompany]=useState([]);
  const [search, setSearch]=useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(50);
  const q = search==''?'null':search;


   //Neccessary variables declearation end



   //fetchcompany list function start

   const fetchCompanyList = async page =>{
    setLoader(<CircularProgress/>)
          http.get('/fetchCompanyList/'+q+'/'+perPage+'/1/list?page='+page)
                      .then((res)=>{
                          setCompanyList(res.data.data);
                          setFilterCompany(res.data.data)
                          setTotalRows(res.data.total);
                          setLoader('');
                      })
                      
                  }
                  
          const handlePageChange = page => {
          fetchCompanyList(page);
          console.log(companylist);
   };

   //fetchcompany list function end



//handlePerRowsChange list function start

   const handlePerRowsChange = async (newPerPage, page) => {
    setLoader(<CircularProgress/>)
    http.get('/fetchCompanyList/'+q+'/'+newPerPage+'/1/list?page='+page)
    .then((res)=>{
        // console.log(res.data);
        setCompanyList(res.data.data);
        setFilterCompany(res.data.data); 
        setLoader('');
        setPerPage(newPerPage);
    })

};


//handlePerRowsChange list function end


useEffect(()=>{
  fetchCompanyList(1);
},[])  


useEffect(()=>{
const result = fetchCompanyList()
setFilterCompany(result);
},[search])


    const columns = useMemo(
        () => [
          {
            id: 'Company_Details', //id used to define `group` column
            header: 'Company Details',
            columns: [
              {
                accessorFn: (row) => `${row.company_name}`, //accessorFn used to join multiple data into a single cell
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
              
            ],
          },
          {
            id: 'Banking_Details',
            header: 'Banking Details',
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
          {
            id: 'Programe_Details',
            header: 'Programe Details',
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
      function ContentLayout() {

if(fetchCompanyList){
    return (
        <MaterialReactTable
        columns={columns}
        data={filterCompany}
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
    );
}else{
    return(
        <>Loading...</>
    )
}
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}

export default CompanyPanel;