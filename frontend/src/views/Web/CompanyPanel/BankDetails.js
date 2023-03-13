
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Typography,Radio,Grid,TextField,Button,FormLabel,RadioGroup,FormControl,FormControlLabel,Card, 
    Table,TableCell,CardActionArea,CardContent ,CardActions ,DialogContentText ,DialogTitle ,TableRow,Paper,} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
function BankDetails(props) {
    const [value, setValue] = React.useState(null);
    function ContentLayout() {
        return (
            <>
            <Typography variant="h4" align="center" component="h1" gutterBottom>
            Bank Details Panel(Company Id : 1)
            </Typography>
            <Box>
                <div>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Bank Name"
                                type="text"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                    label="Name on Account"
                                    type="text"
                                    size="small"
                                    fullWidth
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Bank Routing (ABA / ACH) Number"
                                type="text"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                    label="Account Number"
                                    type="text"
                                    size="small"
                                    fullWidth
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Account Type</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel value="male" control={<Radio />} label="Checking" />
                                    <FormControlLabel value="other" control={<Radio />} label="Savings" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Account Category</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel value="male" control={<Radio />} label="Personal" />
                                    <FormControlLabel value="other" control={<Radio />} label="Business" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={6}>
                        <Card >
                                <CardActionArea>
                                    <CardContent>
                                        <Grid container item >
                                            <Grid item md={12}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>ACH info added to bank?:</TableCell>
                                                            <TableCell>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                            >
                                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                            </RadioGroup>
                                                            </TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                        </Grid>
                                        <Grid container item >
                                            <Grid item xs={12}>
                                                <Table>
                                                    <TableRow>
                                                            <TableCell style={{ fontWeight: 'bold' }}>Last ACH update:</TableCell>
                                                            <TableCell><LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    label="Basic example"
                                                                    value={value}
                                                                    onChange={(newValue) => {
                                                                    setValue(newValue);
                                                                    }}
                                                                    renderInput={(params) => <TextField {...params} />}
                                                                />
                                                                </LocalizationProvider>
                                                            </TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Grid> 
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card> 
                            
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                    label="Email Address to notify of payment transfers"
                                    type="text"
                                    size="small"
                                    fullWidth
                                />
                        </Grid>
                        <Grid container style={{ marginTop: 16 }} spacing="2">
                            <Grid item sm={12} >
                                <Box display="flex" justifyContent="flex-end">
                                    <Button variant="contained" color="warning" type="submit" > Close
                                    </Button>&nbsp;&nbsp;
                                    <Button variant="contained" color="success" type="submit" > Update
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            </>
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default BankDetails;