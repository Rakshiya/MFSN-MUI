
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Table,Input,TableCell,TextField,TableRow,TableContainer,Grid,Paper, FormLabel,InputAdornment } from '@mui/material';
import { FormControl } from 'material-ui';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from '@mui/icons-material/Add';
function ApprovedNow(props) {
   
    function ContentLayout() {
        return (
            <Box>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <h2>Review Affiliate Application</h2>
                    </Grid>
                    <Grid item xs={12}>
                    <h4>Affiliate Details</h4>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableRow>
                                <TableCell>First name:</TableCell>
                                <TableCell >fsv</TableCell>
                                <TableCell >Last Name:</TableCell>
                                <TableCell >vdf</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name of Business:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >Company Website:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Title:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >Phone no:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Address:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >State:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>City:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >Facebook Page:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Zip Code:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >Referral Name:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name of the software to work on credit reports:</TableCell>
                                <TableCell >df</TableCell>
                                <TableCell >Agreement Date:</TableCell>
                                <TableCell>fv</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid container item lg={12} spacing={2}>
                    <Grid item md={6}>
                        <FormLabel>User Type</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                        />
                        
                    </Grid>
                    <Grid item md={6}>
                        <FormLabel>PID</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default ApprovedNow;