import React from 'react';
import {Container,Box,Grid,Paper,styled,TextField,Button,Card,Link,CardContent,Typography, Stack   } from '@mui/material';
import { textAlign } from '@mui/system';
import * as Yup from 'yup';
import {Formik} from 'formik';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Register(props) {



    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your full Name.'),

            lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your last Name.'),

            Email: Yup.string()
            .email('Invalid email format.')
            .required('Please enter your email address.'),

            PhoneNumber: Yup.string()
            .min(10,'Must be 10 digits.')
            .max(10,'Must be 10 digits.')
            .required('Please enter your mobile number.'),

            ZipCode: Yup.string()
            .min(6, 'Must be in 6 digits.')
            .max(6, 'Wrong pin code.')
            .required('Please enter pin code.'),
        
        
        
    });



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
                                            
                        <Box noValidate sx={{ mt: 1 }}>
                        
                        <Formik 
                                initialValues={{
                                             firstName:'',
                                            lastName:'',
                                            NameofBusiness:'',
                                            CompanyWebsite:'',
                                            Title:'',
                                            YearBusinessStarted:'',
                                            Email:'',
                                            PhoneNumber:'',
                                            StreetAddress:'',
                                            MyFreeScoreNowReferralCode:'',
                                            City:'',
                                            State:'',
                                            ZipCode:'',
                                            SoftwareUsed:''     
                                    
                                                         
                                }}
                                validationSchema={SignupSchema}
                                // onSubmit={() => { console.log("submit!"); }}
                                onSubmit={(values,errors) => {
                                    console.log('hi'+JSON.stringify(values));
                                    alert('hi');
                                }}
                                
                            >
                                
                                {({values,errors,touched,handleChange,handleBlur,setFieldTouched,isValid,handleSubmit,setFieldValue,setFieldError}) =>(
                                <div>

                                       
                                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    onChange={handleChange('firstName')}
                                    value={values.firstName}
                                    onBlur={handleBlur('firstName')}
                                    fullWidth
                                    size="small"
                                    id="firstName"
                                    label="First Name"
                                    
                                    />
                                    {touched.firstName && errors.firstName ? <div className='error'>{errors.firstName}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={handleChange('lastName')}
                                    value={values.lastName}
                                    onBlur={ handleBlur('lastName')}
                                    autoComplete="family-name"
                                    />
                                    { touched.lastName &&  errors.lastName ? <div className='error'>{ errors.lastName}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="NameofBusiness"
                                    onChange={ handleChange('NameofBusiness')}
                                    value={ values.NameofBusiness}
                                    onBlur={ handleBlur('NameofBusiness')}
                                    fullWidth
                                    size="small"
                                    id="NameofBusiness"
                                    label="Name of Business"
                                    
                                    />
                                    { touched.NameofBusiness &&  errors.NameofBusiness ? <div className='error'>{ errors.NameofBusiness}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    
                                    fullWidth
                                    size="small"
                                    id="CompanyWebsite"
                                    label="Company Website (URL)"
                                    name="CompanyWebsite"
                                    onChange={ handleChange('CompanyWebsite')}
                                    value={ values.CompanyWebsite}
                                    onBlur={ handleBlur('CompanyWebsite')}
                                    autoComplete="family-name"
                                    />
                                    { touched.CompanyWebsite &&  errors.CompanyWebsite ? <div className='error'>{ errors.CompanyWebsite}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="Title"
                                    onChange={ handleChange('Title')}
                                    value={ values.Title}
                                    onBlur={ handleBlur('Title')}
                                    fullWidth
                                    size="small"
                                    id="Title"
                                    label="Title"
                                    
                                    />
                                    { touched.Title &&  errors.Title ? <div className='error'>{ errors.Title}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    
                                    fullWidth
                                    size="small"
                                    id="YearBusinessStarted"
                                    label="Year Business Started"
                                    name="YearBusinessStarted"
                                    onChange={ handleChange('YearBusinessStarted')}
                                    value={ values.YearBusinessStarted}
                                    onBlur={ handleBlur('YearBusinessStarted')}
                                    autoComplete="family-name"
                                    />
                                    { touched.YearBusinessStarted &&  errors.YearBusinessStarted ? <div className='error'>{ errors.YearBusinessStarted}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="Email"
                                    onChange={ handleChange('Email')}
                                    value={ values.Email}
                                    onBlur={ handleBlur('Email')}
                                    fullWidth
                                    size="small"
                                    id="Email"
                                    label="Email"
                                    
                                    />
                                    { touched.Email &&  errors.Email ? <div className='error'>{ errors.Email}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    type="number"
                                    fullWidth
                                    size="small"
                                    id="PhoneNumber"
                                    label="Phone Number"
                                    name="PhoneNumber"
                                    onChange={ handleChange('PhoneNumber')}
                                    value={ values.PhoneNumber}
                                    onBlur={ handleBlur('PhoneNumber')}
                                    autoComplete="family-name"
                                    />
                                    { touched.PhoneNumber &&  errors.PhoneNumber ? <div className='error'>{ errors.PhoneNumber}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="StreetAddress"
                                    onChange={ handleChange('StreetAddress')}
                                    value={ values.StreetAddress}
                                    onBlur={ handleBlur('StreetAddress')}
                                    fullWidth
                                    size="small"
                                    id="StreetAddress"
                                    label="Street Address"
                                    
                                    />
                                    { touched.StreetAddress &&  errors.StreetAddress ? <div className='error'>{ errors.StreetAddress}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    
                                    fullWidth
                                    size="small"
                                    id="MyFreeScoreNowReferralCode"
                                    label="MyFreeScoreNow Referral Code"
                                    name="MyFreeScoreNowReferralCode"
                                    onChange={ handleChange('MyFreeScoreNowReferralCode')}
                                    value={ values.MyFreeScoreNowReferralCode}
                                    onBlur={ handleBlur('MyFreeScoreNowReferralCode')}
                                    autoComplete="family-name"
                                    />
                                    { touched.MyFreeScoreNowReferralCode &&  errors.MyFreeScoreNowReferralCode ? <div className='error'>{ errors.MyFreeScoreNowReferralCode}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="City"
                                    onChange={ handleChange('City')}
                                    value={ values.City}
                                    onBlur={ handleBlur('City')}
                                    fullWidth
                                    size="small"
                                    id="City"
                                    label="City"
                                    
                                    />
                                    { touched.City &&  errors.City ? <div className='error'>{ errors.City}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    
                                    fullWidth
                                    size="small"
                                    id="State"
                                    label="State"
                                    name="State"
                                    onChange={ handleChange('State')}
                                    value={ values.State}
                                    onBlur={ handleBlur('State')}
                                    autoComplete="family-name"
                                    />
                                    { touched.State &&  errors.State ? <div className='error'>{ errors.State}</div> : null}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4}>
                                    <TextField
                                    type="number"
                                    fullWidth
                                    size="small"
                                    id="ZipCode"
                                    label="Zip Code"
                                    name="ZipCode"
                                    onChange={ handleChange('ZipCode')}
                                    value={ values.ZipCode}
                                    onBlur={ handleBlur('ZipCode')}
                                    autoComplete="family-name"
                                    />
                                    { touched.ZipCode &&  errors.ZipCode ? <div className='error'>{ errors.ZipCode}</div> : null}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="SoftwareUsed"
                                    onChange={ handleChange('SoftwareUsed')}
                                    value={ values.SoftwareUsed}
                                    onBlur={ handleBlur('SoftwareUsed')}
                                    fullWidth
                                    size="small"
                                    id="SoftwareUsed"
                                    label="Name of the software to be used to work on credit reports"
                                    
                                    />
                                    { touched.SoftwareUsed &&  errors.SoftwareUsed ? <div className='error'>{ errors.SoftwareUsed}</div> : null}
                                </Grid>
                            </Grid>
                                        <Button
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth
                                        variant="contained"
                                        
                                        sx={{ mt: 3, mb: 2 }}
                                        >
                                        Register Now
                                    </Button>
                                </div>

                                )}
                                
                            </Formik>
                        
 
                          

                          
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