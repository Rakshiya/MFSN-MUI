
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box,Typography,Select,Grid,TextField,Button,InputLabel,MenuItem,FormControl } from '@mui/material';

function CreateUser(props) {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
                            <TextField
                                label="User Type"
                                type="text"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                className="textfield"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Default Timezone"
                                type="text"
                                size="small"
                                fullWidth
                            />
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
                                    <Button variant="contained" color="primary" type="submit" > Close
                                    </Button>
                                    <Button variant="contained" color="primary" type="submit" > Submit
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