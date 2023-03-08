import React from 'react';
import {Container,Box,Grid,Paper,styled,TextField,Button,Card,Link,CardContent,Typography, Stack   } from '@mui/material';
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
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={require("../../assets/images/register.png")}/>
                    </Grid>
                    {/* <Grid item xs={6}> */}
                        
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="Name of Business"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Company Website (URL)"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="Title"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Year Business Started"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="Email"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Phone Number"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="Street Address"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="MyFreeScoreNow Referral Code"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="City"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="State"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Zip Code"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="Name of the software to be used to work on credit reports"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                {/* </Grid> */}
                </Item>
            </Box>
        </div>
    );
}

export default Register;