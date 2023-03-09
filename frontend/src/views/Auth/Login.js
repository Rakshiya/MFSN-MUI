import React, { useState,useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import { Box, Grid,Typography,TextField, Checkbox, Button, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LoginHeader from '../../Components/LoginHeader';
import AuthUser from "../../Components/Auth/AuthUser";

function Login(props) {

    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const { http, getToken, setToken } = AuthUser();
    const [loading, setLoading]=useState('');
    const [error, setError]=useState();
    const [fieldError, setFieldError] = useState([]);


  //Check Login
  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  });

  //Define LoginFunction
  const LoginSubmit = () => {
    
    setLoading(<CircularProgress />);
    document.getElementById("submitbtn").classList.add("d-none");

    //Call API for login
    http
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success === true) {
          document.getElementById("submitbtn").classList.remove("d-none");
          setToken(res.data.user, res.data.token);
        } else {
          document.getElementById("submitbtn").classList.remove("d-none");
          setFieldError(res.data.message);
          setError(res.data.message.error);
          setLoading('');
        }
      })
      .catch((error) => {
        document.getElementById("submitbtn").classList.remove("d-none");
        setError(error.message);
        setLoading('');
      });
  }; //Close LoginSubmit Function


    return (
        <Box sx={{ flexGrow: 1,backgroundColor:'#f9f9f9'  }}> 
            <LoginHeader />
            <Grid container spacing={2} pt={2}>
                <Grid item xs={7} sx={{textAlign: 'center'}}>
                    <Box sx={{m:10}}>
                        <img src={require('../../assets/images/login.png')} />
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
                        <p className="text text-danger">{error}</p>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>                            
                                <TextField  size="small" id="outlined-basic" label="Email Address" variant="outlined" onChange={(e) => {setEmail(e.target.value)}}/>
                                <p className="text text-danger">{fieldError.email}</p>
                                <TextField  size="small" id="outlined-basic" label="Password" variant="outlined" onChange={(e) => {setPassword(e.target.value)}} />
                                <p className="text text-danger">{fieldError.password}</p>
                            </div>
                            <div>
                                {/* <Stack > */}
                                
                                    <Checkbox />Remember Me
                                    <Button href="#text-buttons">Forget Password?</Button>
                                    
                                {/* </Stack> */}
                            </div>
                            <div>
                                <Button fullWidth variant="contained" id="submitbtn" onClick={()=>{LoginSubmit()}} >Login Now {'<<'}</Button>
                            </div>
                            <div>
                                <p>Not an Affiliate Yet? <a>Join Here </a></p>
                            </div>
                            <div style={{float: "left", width: "30%"}}><hr/></div>
                          <div style={{float: "right", width: "30%"}}><hr/></div>
                          <h4 className="text-center text-success">Need Help?</h4>
                          <p className="text-center text-black"><b>We’re available 7days a week </b><br/>
                        <b>Mon-Fri (7am-11pm ET) Sat-Sun (8am-9pm ET)</b><br/>
                        <b>1-888-548-2008</b> (Option 4)<br/>
                        info@myfreescorenow.com
                        </p>
                        <div style={{float: "left", width: "25%"}}><hr/></div>
                        <div style={{float: "right", width: "25%"}}><hr/></div>
                        <h4 className="text-center text-success">Software Partners</h4>
                        </Box>
                        
                    </Box>
                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;