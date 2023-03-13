
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Grid,Card,CardContent,Typography,Button,CardActions,TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';

function CompanyDetails(props) {
    function ContentLayout() {
        return (
            <Box>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                                Company Name
                                </Typography>
                                <Typography variant="h5" component="div">
                                Samvad
                                </Typography>
                                
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                                Your PID
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell align="right">	PID</TableCell>
                                            <TableCell align="right">	PID Type</TableCell>
                                            <TableCell align="right">PID Status</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell component="th" scope="row">
                                                </TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg={12} md={12} mt={2}>
                    <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                    Affiliate Users
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">AID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">User Role</TableCell>
                                <TableCell align="right">Status</TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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


export default CompanyDetails;