import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../../../AppConfig";
import { CContainer,CSpinner, CRow, CCol, CImage, CButton, CCard, CCardBody, CForm, CCardTitle, CFormInput, CFormLabel, CInputGroup, CFormSelect } from '@coreui/react';
import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';
import image6 from '../../../assets/images/register.png'
import CIcon from "@coreui/icons-react";
import Header from '../../Home/header/Header';
import Footer from '../../Home/header/Footer';
import { cilLockLocked, cilUser } from "@coreui/icons";
import AuthUser from "../../../components/Auth/AuthUser";
// import '../../../assets/css/style.css'
const Register = () => {
  const titleStyle = {
    color: 'blue',
    textAlign : 'center',
  };
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()
  
  const navigate = useNavigate();
  const { http, getToken } = AuthUser();

  //Error Message Variables
  const [error, setError] = useState();
  const [fieldError, setFieldError] = useState([]);
  const [otpstatus,setOtpstatus] = useState(false);
  const [recaptcha_token,setRecaptchaToken]= useState('');
  const [successMessage, setSuccessMessage] = useState();
  const [sumbitbtntext,setSumbitbtntext] = useState('Register');
  const [loading, setLoader]= useState('');
  const referral_code = useParams();
  

  //Check Login
  // useEffect(() => {
  //   if (getToken()) {
  //     navigate("/");
  //   }
  // });


    //Call API function start
    // function onCaptcha(value) {
    //   // console.log(value);
    //   setRecaptchaToken(value);
    // }

  //Define Registration Function
  const RegisterSubmit = (event) => {
    setSumbitbtntext('Please wait...')
    setLoader(<CSpinner/>);
    document.getElementById("submitbtn").classList.add("d-none");
    event.preventDefault();
    // //Call API for login
    http
      .post("/register", {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        business_name: event.target.business_name.value,
        company_website: event.target.company_website.value,
        title: event.target.title.value,
        business_started_year: event.target.business_started_year.value,
        email: event.target.email.value,
        phone_no: event.target.phone_no.value,
        address: event.target.address.value,
        referral_code: event.target.referral_code.value,
        city: event.target.city.value,
        state_code: event.target.state_code.value,
        zip_code: event.target.zip_code.value,
        marketing_type: event.target.marketing_type.value,
      })
      .then((res) => {
        if (res.data.success === true) {
          document.getElementById("submitbtn").classList.remove("d-none");
          setSuccessMessage(res.data.message.success);
          setSumbitbtntext("Verify OTP");
          document.getElementById("otpinput").classList.remove('d-none');
          document.getElementById("captchainput").classList.add('d-none');
          setOtpstatus(true);
          setError("");
          setLoader('');

        } else {
          document.getElementById("submitbtn").classList.remove("d-none");
          console.log(res.data.message);
          setFieldError(res.data.message);
          setError(res.data.message.error);
          setLoader('');
          setSumbitbtntext('Register')
        } 
      })
      .catch((error) => {
        document.getElementById("submitbtn").classList.remove("d-none");
        setError(error.message);
        setLoader('');
        setSuccessMessage("");
        setSumbitbtntext('Register')
      });
  }; 
  //Close OTP send Function

  //Verify OTP Function
  const Verifyemail = event =>{
    event.preventDefault();
    if(event.target.otp.value != '' && event.target.otp.value != null && event.target.otp.value != undefined){
      setLoader(<CSpinner/>);
      setSumbitbtntext('Please wait...')
      document.getElementById("submitbtn").classList.add('d-none');
      http.post('/register',{
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            business_name: event.target.business_name.value,
            company_website: event.target.company_website.value,
            title: event.target.title.value,
            business_started_year: event.target.business_started_year.value,
            email: event.target.email.value,
            phone_no: event.target.phone_no.value,
            address: event.target.address.value,
            referral_code: event.target.referral_code.value,
            city: event.target.city.value,
            state_code: event.target.state_code.value,
            zip_code: event.target.zip_code.value,
            marketing_type: event.target.marketing_type.value,
            recaptcha_token: recaptcha_token,
            otp:event.target.otp.value}).then((res)=>{
        
        if(res.data.success === true){
          document.getElementById("signupform").classList.add('d-none');
          document.getElementById("submitbtn").classList.remove('d-none');
          setSuccessMessage(res.data.message.success);
          console.log(res.data);
          setError("");
          setLoader('');
        }else{
          document.getElementById("submitbtn").classList.remove("d-none");
          console.log(res.data.message);
          setFieldError(res.data.message);
          setError(res.data.message.error);
          setSuccessMessage("");
          setLoader('');
        }
      }).catch(error => {
        document.getElementById("submitbtn").classList.remove('d-none');
        setError(error.message);
        setSuccessMessage("");
        setLoader('');
      });
    }else{
      document.getElementById("submitbtn").classList.remove('d-none');
        setError("OTP is required");
        setSuccessMessage("");
        setLoader('');
    }
  }

  return (
    <>
    <Header/>
    <div className="justify-content-center">
        <CCard className="border border-0">
            <CCardBody>
                <CCol>
                  <CRow>
                    <h1 className="text-center text-primary text-shadow-sm">Advantages of Being a MyFreeScoreNow Affiliate</h1>
                    <h3  className="text-center text-black mt-3 text-blur-shadow-sm">NO COST TO JOIN / GET AFFILIATE LINKS IN MINUTES!</h3>
                    <p className="text-center mt-3 fs-5 w-100 text-black">3 Bureau reports for your clients – reports automatically import into your software. We’re compatible with Credit Repair Cloud, DisputeFox, ProdigySurge and others. Plans as low as $9.95/month and include a 3B report upfront and refresh every 30 days. Powerful website tools and simulators you can use to advice your clients on how to boost their scores.</p>
                    <CRow>  
                      <CCol md={12} lg={12} xl={12}  className="justify-content-center mt-4">
                        <CRow>
                          <div className="col-md-3">
                            <h4 className="text-center">Higher commissions</h4>
                            <CImage align="center" className="mt-3" src={image1}></CImage>
                            <p className="text-center fs-6 mt-3">Up to $16 per customer per month</p>
                          </div>
                          <div className="col-md-3">
                            <h4 className="text-center">Credit Snapshot</h4>
                            <CImage align="center" className="mt-3" src={image2}></CImage>
                            <p className="text-center fs-6 mt-3">Free Lead Generation tool branded to your company. offers free credit report summary. Convert more visitors to customers. </p>
                          </div>
                          <div className="col-md-3">
                            <h4 className="text-center">Referral Program</h4>
                            <CImage align="center" className="mt-3" src={image3}></CImage>
                            <p className="text-center fs-6 mt-3">Get MORE cash by referring other companies to join our affiliate program</p>
                          </div>
                          <div className="col-md-3">
                            <h4 className="text-center">FREE memberships for you</h4>
                            <CImage align="center" className="mt-3" src={image4}></CImage>
                            <p className="text-center fs-6 mt-3">Co-branded sites with your logo and your message. Get alerts about changes to your client's scores. Plus member credentials passed directly to you. No More Failed Logins!</p>
                          </div>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CRow>
                </CCol>
            </CCardBody>
        </CCard>
          <CCol className="mb-3">
              <div className="col-md-6 offset-md-3 text-center p-3">
                <CButton type="button" onClick={executeScroll} className="text-white btn btn-warning" size="lg">Register Now</CButton>
                {/* add scroll down button here */}
              </div>
          </CCol>
          <CCol className="mb-3">
              <div className="col-md-4 offset-md-4 text-center text-bg-light p-3">
                  <h5>We’re open 7 days/week. Live agent support</h5>    
              </div>
          </CCol>
          <CCard className="mx-4 rounded-5 bg-light">
            <CCardBody className="p-0"> 
                <CCardTitle className="mt-2">
                  <h1 className="text-center text-primary">Register Now</h1>
                </CCardTitle>
                  <CRow>
                    <div className="col-lg-6">
                        <CCardBody>
                            <CRow className="mt-5">
                            <CImage align="center" src={image6} height="100%" />
                            </CRow>
                        </CCardBody>
                    </div>
                    <div className="col-lg-6" ref={myRef}>
                        <CCardBody>
                            <CForm id="signupform"
                                    onSubmit={otpstatus ? Verifyemail : RegisterSubmit}>
                                <CCol md={12}>
                                    <CRow>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="firstname">First Name</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control "
                                                name="first_name"
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.first_name}</p>
                                        </CCol>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="lastname">Last Name</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.last_name}</p>
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol md={12}>
                                    <CRow  className="mt-1">
                                        <CCol md={6} >
                                            <CFormLabel  htmlFor="username">Name of Business</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="business_name"
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.business_name}</p>
                                        </CCol>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="username">Company Website (URL)</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="company_website"
                                                />
                                            </CInputGroup> 
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol md={12}>
                                    <CRow  className="mt-1">
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="busines-same">title</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                />
                                            </CInputGroup> 
                                        </CCol>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="business-started-year">Year Business Started</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="business_started_year"
                                                />
                                            </CInputGroup>
                                            <p className="text text-danger">{fieldError.business_started_year}</p> 
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol md={12}>
                                    <CRow  className="mt-1">
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="email">Email</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                />
                                            </CInputGroup>
                                            <p className="text text-danger">{fieldError.email}</p> 
                                        </CCol>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="phone_no">Phone Number</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="phone_no"
                                                />  
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.phone_no}</p>
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol md={12}>
                                    <CRow  className="mt-1">
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="username">Street Address</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                />
                                            </CInputGroup>
                                            <p className="text text-danger">{fieldError.address}</p> 
                                        </CCol>
                                        <CCol md={6}>
                                            <CFormLabel htmlFor="referral-code">MyFreeScoreNow Referral Code</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="referral_code"
                                                defaultValue={referral_code.referralcode!=undefined?referral_code.referralcode:"mfsnloginpage"}
                                                disabled
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.referral_code}</p>
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol md={12}>
                                    <CRow  className="mt-1">
                                        <CCol md={4}>
                                            <CFormLabel htmlFor="City">City</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="city"
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.city}</p>
                                        </CCol>
                                        <CCol md={4}>
                                            <CFormLabel htmlFor="State">State</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="state_code"
                                                /> 
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.state_code}</p>
                                        </CCol> 
                                        <CCol md={4}>
                                            <CFormLabel htmlFor="Zip-Code">Zip Code</CFormLabel>
                                            <CInputGroup className="has-validation">
                                                <CFormInput
                                                type="text"
                                                className="form-control"
                                                name="zip_code"
                                                />
                                            </CInputGroup> 
                                            <p className="text text-danger">{fieldError.zip_code}</p>
                                        </CCol> 
                                    </CRow>
                                </CCol>
                                <CCol xs={12} className="mt-1">
                                    <CFormLabel htmlFor="Name of software to be used to work on credit reports">Name of the software to be used to work on credit reports</CFormLabel>
                                      <CInputGroup className="has-validation">
                                        <CFormInput
                                        type="text"
                                        className="form-control"
                                        name="marketing_type"
                                        />
                                      </CInputGroup> 
                                      <p className="text text-danger">{fieldError.marketing_type}</p>
                                </CCol>
                                <CCol xs={12} className="mt-1 d-none" id="otpinput">
                                    <CFormLabel htmlFor="userpassword">Enter 5 digit otp</CFormLabel>
                                      <CInputGroup className="has-validation">
                                        <CFormInput
                                          type="number"
                                          className="form-control"
                                          placeholder="Enter otp"
                                          name="otp"
                                        />
                                      </CInputGroup>
                                      <p className="text text-danger">{fieldError.otperror}</p> 
                                </CCol>
                                <div className="d-grid gap-2 mt-4">
                                    <div id="captchainput">
                                        {/* <ReCAPTCHA
                                            sitekey={config.RECAPTCHA_SITEKEY}
                                            onChange={onCaptcha}
                                        /> */}
                                    </div>
                                    <CButton 
                                    color="primary"
                                    id="submitbtn"
                                    className="btn btn-primary w-md waves-effect waves-light"
                                    type="submit">{sumbitbtntext}</CButton>
                                </div>
                                {/* <div className="d-grid gap-2 mt-2 justify-content-center">
                                    <p>Already have an account? <a href="">Login</a></p>
                                </div>     */}
                            </CForm>
                            {loading}
                                <p className="text text-success">{successMessage}</p>
                                <p className="text text-danger">{error}</p>
                                <p className=" gap-2 mt-2 text-center">
                                    Already have an account ?{" "}
                                    <Link
                                        to="/login"
                                        className="font-weight-medium text-primary"
                                    >
                                        {" "}
                                        Login{" "}
                                    </Link>{" "}
                                </p>    
                      </CCardBody>
                    </div>
                  </CRow>
            </CCardBody>
          </CCard>
    </div>
    <Footer/>
    </>
  );
};

export default Register;

