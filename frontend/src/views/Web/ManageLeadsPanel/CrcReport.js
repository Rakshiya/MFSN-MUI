
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box, Grid,Table,TableCell,TableContainer,Dialog ,DialogActions ,DialogContentText ,DialogTitle ,TableRow,Paper, Button ,Card,CardActionArea,DialogContent ,CardContent,CardActions} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function CrcReport(props) {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const refreshpop = () => {
        setOpen2(true);
    };

    const refreshClose = () => {
        setOpen2(false);
    };
    

    function ContentLayout() {
        return (
            <Box>
                <h2>CRC Lead Report Follow Up</h2>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={6}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>First Name</TableCell>
                                        <TableCell align="center">Aishwarya</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Last Name</TableCell>
                                    <TableCell align="center">kabade</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Company Name:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Company Website:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Tittle:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Year Business Started:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Email:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Phone No:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>State:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>City:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Zip Code:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Referred By:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Name of the software to be used to work on credit reports:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Pandadoc Document Id:</TableCell>
                                    <TableCell align="center">samvadsocial</TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={6}  direction="row" rowSpacing={2} > 
                        <Grid container  item md={12}>
                            <Grid item xs={6}>
                                <Table>
                                    <TableRow>
                                            <TableCell style={{ fontWeight: 'bold' }}>Status:</TableCell>
                                            <TableCell align="center">Aishwarya</TableCell>
                                    </TableRow>
                                </Table>
                            </Grid> 
                            <Grid item xs={6}>
                                <Table>
                                    <TableRow>
                                            <TableCell style={{ fontWeight: 'bold' }}>Next Follow up:</TableCell>
                                            <TableCell align="center">Aishwarya</TableCell>
                                    </TableRow>
                                </Table>
                            </Grid> 
                        </Grid>
                        <Grid item xs={12}>
                            <h3 style={{ fontWeight: 'bold' }}>Activity Log: <Button variant="contained" onClick={handleClickOpen}>Contained</Button> <Button color="success" variant="contained"  onClick={refreshpop}>refresh</Button></h3>  
                        </Grid>
                        <Grid item md={12} lg={12}>
                            <Card >
                                <CardActionArea>
                                    <CardContent>
                                        <Grid container item >
                                            <Grid item md={6}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Status:</TableCell>
                                                            <TableCell align="center">Aishwarya</TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                            <Grid item md={6}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Next Follow up:</TableCell>
                                                            <TableCell align="center">Aishwarya</TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                        </Grid>
                                        <Grid container item >
                                            <Grid item xs={6}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Date:</TableCell>
                                                            <TableCell align="center">Aishwarya</TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                            <Grid item xs={6}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Next Status:</TableCell>
                                                            <TableCell align="center">Aishwarya</TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container item >
                                            <Grid item xs={12}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Notes: </TableCell>
                                                            
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                    </Grid>
                                </CardActions>
                            </Card> 
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                    <h2 style={{color:"green",textAlign:"center"}}>Success</h2>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>
                            <p>Agreement Successfully Sent.</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        OK
                    </Button>
                    
                    </DialogActions>
                </Dialog>
                <Dialog
                    fullScreen={fullScreen}
                    open={open2}
                    onClose={refreshClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                    <h2 style={{color:"green",textAlign:"center"}}>Failed</h2>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>
                            <p>Document not completed from user side and admin side.</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={refreshClose}>
                        OK
                    </Button>
                    
                    </DialogActions>
                </Dialog>
                
            </Box>
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default CrcReport;