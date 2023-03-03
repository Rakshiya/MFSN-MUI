import React from 'react';
import { Box, Grid,Typography,TextField, Checkbox, Button, Stack } from '@mui/material';
import LoginHeader from '../Components/LoginHeader';

function Login(props) {
    return (
        <Box sx={{ flexGrow: 1,backgroundColor:'#f9f9f9'  }}> 
            <LoginHeader />
            <Grid container spacing={2} pt={2}>
                <Grid item xs={7} sx={{textAlign: 'center'}}>
                    <Box sx={{m:10}}>
                        <img src={require('../assets/images/login.png')} />
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{textAlign: 'center',justifyContent:'center',width:"100%" }}>
                    <Box p={2} sx={{m:10,backgroundColor:'#ffffff'}}>
                        <Typography variant="h5" gutterBottom>
                            Welcome To The Affiliate Portal
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            User Login
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>                            
                                <TextField fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
                                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                            </div>
                            <div>
                                {/* <Stack > */}
                                    <Checkbox />Remember Me
                                    <Button href="#text-buttons">Forget Password?</Button>
                                {/* </Stack> */}
                            </div>
                            <div>
                                <Button fullWidth variant="contained">Login Now {'<<'}</Button>
                            </div>
                            
                        </Box>
                        
                    </Box>
                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;