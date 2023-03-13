
import DefaultLayout from '../../../Components/DefaultLayout';
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import { AccountCircle, Send,Delete, Edit} from '@mui/icons-material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddIcon from '@mui/icons-material/Add';
import { data } from '../CompanyPanel/makeData';
import UserListColumns from '../../../Components/UserPanelColumns/UserListColumns';
import { ExportToCsv } from 'export-to-csv';


function UserList(props) {
  
    const UserListColumns = useMemo(
        () => [
          {
            id: 'employee', //id used to define `group` column
            header: 'User List',
            columns: [
              {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
                id: 'name', //id is still required when using accessorFn instead of accessorKey
                header: 'Name',
                size: 200,
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
                size: 200,
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
            renderTopToolbarCustomActions={() => (
              <Box sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}>
                <Button
                  color="primary"
                  variant="contained">
                  Create User
                </Button>
                {/* <Button
                  color="primary"
                  startIcon={<FileDownloadIcon/>}
                  variant="contained">
                </Button> */}
                <IconButton>
                  <FileDownloadIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
            )}
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
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </Tooltip>
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


export default UserList;