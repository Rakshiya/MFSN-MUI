
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Typography,Select,Grid,TextField,Button,InputLabel,MenuItem,FormControl,OutlinedInput,Card  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
function CreateUser(props) {
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
            <>
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                        Create New User
            </Typography>
            <Box>
                <div>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="First Name"
                                type="text"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                    label="Last Name"
                                    type="text"
                                    size="small"
                                    fullWidth
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="E-mail Address"
                                type="text"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                    label="Phone Number"
                                    type="text"
                                    size="small"
                                    fullWidth
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-multiple-name-label">User Type</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
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
                        <Grid item xs={6}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-multiple-name-label">Select Company</InputLabel>
                                <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Select Company" />}
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
                        <Grid item xs={6}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-multiple-name-label">Default Timezone</InputLabel>
                                <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Default Timezone" />}
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
                        <Grid item xs={6}>
                            <TextField
                                    label="Password"
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
                                    <Button variant="contained" color="success" type="submit" > Submit
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


export default CreateUser;