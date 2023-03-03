import React from 'react';
import {Container,Box,Grid,Paper,styled,TextField,Button,Card,CardActions,CardContent,Typography, Stack   } from '@mui/material';
import { textAlign } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Register(props) {
    return (
        <div>
            <Box>
                <Item>
                    <h1 sx={{ fontSize: 20 }} color="text.blue">Advantages of Being a MyFreeScoreNow Affiliate</h1>
                    <h3>NO COST TO JOIN / GET AFFILIATE LINKS IN MINUTES!</h3>
                    <p>3 Bureau reports for your clients – reports automatically 
                        import into your software. We’re compatible with Credit Repair Cloud, 
                        DisputeFox, ProdigySurge and others. Plans as low as $9.95/month and include a 
                        3B report upfront and refresh every 30 days. Powerful website tools and simulators 
                        you can use to advice your clients on how to boost their scores.</p>
                    <Stack direction='row' spacing={2} alignItems="center">
                        <Grid item>
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography color="text.black">
                                        <h2>
                                        Higher commissions
                                        </h2>
                                   
                                    </Typography>
                                    <Typography>
                                        <img src={require("../../assets/images/image1.png")}/>
                                    </Typography>
                                    <Typography color="text.secondary">
                                    Up to $16 per customer per month
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid> 
                        <Grid item >
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography color="text.black">
                                    <h2>Credit Snapshot</h2>
                                    </Typography>
                                    <Typography>
                                        <img src={require("../../assets/images/image2.png")}/>
                                    </Typography>
                                    <Typography color="text.secondary">
                                    Free Lead Generation tool branded to your company. offers free credit report summary. Convert more visitors to customers.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item >
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography color="text.black">
                                    <h2>Referral Program</h2>
                                    </Typography>
                                    <Typography>
                                        <img src={require("../../assets/images/image3.png")}/>
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Get MORE cash by referring other companies to join our affiliate program
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography color="text.black">
                                    <h2>FREE memberships for you</h2>
                                    </Typography>
                                    <Typography>
                                        <img src={require("../../assets/images/image4.png")}/>
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Co-branded sites with your logo and your message. Get alerts about changes to your client's scores. Plus member credentials passed directly to you. No More Failed Logins!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid> 
                    </Stack>
                    <Item>
                        <Button variant="contained"  color="warning" size="large">Register Now</Button>
                    </Item>
                    <Box>
                        <Item>
                            <h2>We’re open 7 days/week. Live agent support</h2>
                        </Item>
                    </Box>
                </Item>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Item>
            <h1 style={{color:"blue",fontSize:"40px"}}>Register Now</h1>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img src={require("../../assets/images/register.png")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Name of Business" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Company Website (URL)" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="title" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Year Business Started" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Street Address" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="MyFreeScoreNow Referral Code" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '26ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="City" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="State" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Zip Code" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '82ch' },}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Name of the software to be used to work on credit reports" variant="outlined" size="small"/>
                        </Box>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '82ch' },}}>
                            <Button variant="contained">Register</Button>
                        </Box>
                            <span style={{textAlign:"center"}}>Already have an account ?<a href=""> Login</a></span>
                    </Grid>
                </Grid>
                </Item>
            </Box>
        </div>
    );
}

export default Register;