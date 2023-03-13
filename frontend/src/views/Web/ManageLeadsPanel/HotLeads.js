import DefaultLayout from '../../../Components/DefaultLayout';
import {useParams, useNavigate, Link} from 'react-router-dom';

import React,{useMemo,useState,useEffect} from 'react';
import {TabContext,TabPanel,TabList} from '@mui/lab';
import swal from 'sweetalert';
import AuthUser from "../../../Components/Auth/AuthUser";
import HotLeadsColumns from '../../../Components/ManageLeadsColumns/HotLeadsColumns';
import ApprovedLeadsColumns from '../../../Components/ManageLeadsColumns/ApprovedLeadsColumns';
import { data } from '../CompanyPanel/makeData';
//import LoaderComponent from "../../../Components/Spinner";

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
  const { http, user } = AuthUser();
  const [data, setData] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [statusMessage, setStatusMesage] = useState('');
  const [leadDetails, setleadDetails] = useState([]);
  const [userList, setList] = useState([]);
  const [filterUsers, setFilterUsers]=useState([]);
  const {id} = useParams();
 
  const [loader, setLoader] = useState("");
  const [search, setSearch]=useState("");
  const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const q = search==''?'null':search;


  const fetchReferredList = async  page => {
    setIsLoading(true)
    http.get('/fetchReferredList/'+user.id+'/'+q+'/'+perPage+'/list')
    .then((res) => {
      setIsLoading(false)
      // setList(res.data.data);
      setFilterUsers(res.data.data);
    //setFilterList(res.data.data);
      //  setTotalRows(res.data.total);
      
       setData(res.data.data);
      
      
    
       setLoader("");
      
    });
  };
  const fetchLeadDetails = () =>{
    //setLoader(<LoaderComponent/>);
      http.get('/leadDetails'/'+user.id+' ).then((res)=>{
            setleadDetails(res.data); 
          //  setLoader('');
      })
  }
  const sendAgreement = ((id)=>{
    
    document.getElementById("operationbtn").classList.add('d-none');
    setStatusMesage('Sending Agreement...');
   // setLoader(<LoaderComponent/>);
    
   http.post('/sendAgreement/?id='+id+'').then((res)=>{
     console.log(res.data);
//       document.getElementById("operationbtn").classList.remove('d-none');
//       swal({
//         title: "Success",
//         text: "Agreement Successfully Sent.",
//         icon: "success",
//         button: "Ok",
//       }).then((ok)=>{
//         if(ok){
//           fetchLeadDetails()
//         }
//       });
//  //     setLoader('');
//       setStatusMesage('');
//       document.getElementById("operationbtn").classList.remove('d-none'); 
    }).catch(error => {
      // console.log(error)
      setStatusMesage('');
      setLoader('');
      document.getElementById("operationbtn").classList.remove('d-none');
  })
});
 

  useEffect(() => {
    fetchReferredList();
  }, []);
  useEffect(()=>{
    const result = fetchReferredList()
    setFilterUsers(result); 
  },[search])
  useEffect(()=>{
    fetchLeadDetails();
},[])
  useEffect(() => {
    //do something when the row selection changes...
    console.info({ rowSelection });
  }, [rowSelection]);
  console.log(data);
    const HotLeadsColumns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: '',
            columns: [
              {
                accessorFn: (data) => `${data.first_name+' '+data.last_name} `, //accessorFn used to join multiple data into a single cell
                id: 'First Name', //id is still required when using accessorFn instead of accessorKey
                header: 'First Name',
                size: 200,
              },
              
              {
                accessorFn: (data) => `${data.refernce_affiliates_id} `, //accessorFn used to join multiple data into a single cell
               id: 'Email', //id is still required when using accessorFn instead of accessorKey
               header: 'Email',
               size: 200,
            },
               {
                accessorFn: (data) => `${data.phone_no}`, //accessorFn used to join multiple data into a single cell
                id: 'Phone Number', //id is still required when using accessorFn instead of accessorKey
                header: 'Phone Number',
                size: 200,
               },
             
              {
                accessorFn: (data) => `${data.status_name}`, //accessorFn used to join multiple data into a single cell
                id: 'Status', //id is still required when using accessorFn instead of accessorKey
                header: 'Status',
                size: 200,
              },
              {
                accessorFn: (data) => (`${data.status_name}` == "Submitted") ? <button onClick={()=>{sendAgreement(data.company_id)}}  id="operationbtn" >send Agreement </button> : "", //accessorFn used to join multiple data into a single cell
                id: 'Action', //id is still required when using accessorFn instead of accessorKey
                header: 'Action',
                size: 200,
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
                        state={{ rowSelection,isLoading }} 
                        initialState={{ showColumnFilters: false }}
                        positionToolbarAlertBanner="bottom"
                        renderDetailPanel={({res}) => (
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
                                &quot;{res.original.signatureCatchPhrase}&quot;
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





   
  

