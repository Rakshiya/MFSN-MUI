
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Table,IconButton,TableCell,TextField,TableRow,TableContainer,Grid,Paper, FormLabel,MenuItem,Button,InputLabel,Select } from '@mui/material';
import { FormControl } from 'material-ui';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
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
function ApprovedNow(props) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
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
                <Grid container item lg={12} spacing={2}>
                    <Grid item md={6}>
                    <FormLabel>AID 1</FormLabel>
                    <TextField
                        id="outlined-start-adornment"
                        size='small'
                        type="text"
                        fullWidth
                        // className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><IconButton color='primary'>
                            <AddIcon />
                          </IconButton></InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    <FormLabel>AID 2</FormLabel>
                    <TextField
                        id="outlined-start-adornment"
                        size='small'
                        type="text"
                        fullWidth
                        // className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><IconButton color='error'>
                            <CloseIcon />
                          </IconButton></InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <FormControl fullWidth size='small'>
                                <InputLabel id="demo-multiple-name-label">Default Timezone</InputLabel>
                                <Select
                                 size='small'
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                               
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
                </Grid>
                <Grid container style={{ marginTop: 16 }} spacing={2}>
                    <Grid item sm={12} >
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="contained" color="warning" type="submit" > Close
                            </Button>&nbsp;&nbsp;
                            <Button variant="contained" color="success" type="submit" > Submit
                            </Button>
                        </Box>
                        
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