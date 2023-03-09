import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
  CFormText,
  CImage,
  CFormLabel
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed, cilLockLocked } from '@coreui/icons'
// import { FaMailBulk } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import image1 from '../../../assets/images/login.png';
import image2 from '../../../assets/images/Vector-2.png';
import image3 from '../../../assets/images/Vector-1.png';
import image4 from '../../../assets/images/Vector.png';
import image5 from '../../../assets/images/prodigy.png';
import image6 from '../../../assets/images/prodigy1.png';
import Marquee from "react-fast-marquee";

import Header from '../../Home/header/Header';
import Footer from '../../Home/header/Footer';
import AuthUser from "../../../components/Auth/AuthUser";

const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { http, getToken, setToken } = AuthUser();
  const [loading, setLoading]=useState('');

  //Error Message Variables
  const [error, setError]=useState();
  const [fieldError, setFieldError] = useState([]);

  //Check Login
  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  });

  //Define LoginFunction
  const LoginSubmit = (event) => {
    event.preventDefault();
    setLoading(<CSpinner/>);
    document.getElementById("submitbtn").classList.add("d-none");

    //Call API for login
    http
      .post("/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        if (res.data.success === true) {
          document.getElementById("submitbtn").classList.remove("d-none");
          setToken(res.data.user, res.data.access_token);
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
    <>
    <Header/>
    <div className="justify-content-center">
      <CRow className="w-100">
        {/* <CCard>
          <CCardBody> */}
            <div className="col-md-8 backlogin">
                <CCardBody>
                    <CRow className="mt-5">
                      <h2 className="text-center text-success text-shadow-md">
                          FREE Usage thru December 31 2022!
                      </h2>
                      <h3 className="text-center text-black">
                        Enroll in Credit Snapshot lead generation program.<br/>Generate and convert more leads.
                      </h3>
                      <CImage className="w-auto" align="center" src={image1} />
                    </CRow>
                </CCardBody>
            </div>
            <div className="col-md-4 p-5">
                <CCardBody>
                    <CForm id="" onSubmit={LoginSubmit} >
                        <CCol md={12}>
                            <CRow>
                              <h4 className="text-center"><b>Welcome to the Affiliate Portal</b></h4>
                              <h3 className="text-center text-primary"><b>User Login</b></h3>
                                <CCol md={12}>
                                  <CFormLabel htmlFor="useremail">Email Address </CFormLabel>
                                    <CInputGroup className="has-validation">
                                      <CInputGroupText className="square border border-end-0 bg-white"> 
                                        <CIcon icon={cilEnvelopeClosed} size="lg" />
                                          </CInputGroupText> 
                                          <CFormInput
                                          type="text"
                                          className="form-control square border border-start-0"
                                          name="email"
                                          /> 
                                      </CInputGroup> 
                                      <p className="text text-danger">{fieldError.email}</p>
                                </CCol>
                                <CCol md={12}>
                                <CFormLabel htmlFor="userpassword">Password</CFormLabel>
                                <CInputGroup >
                                    <CInputGroupText  className="square border border-end-0 bg-white">
                                      <CIcon icon={cilLockLocked} size="lg" />
                                    </CInputGroupText>
                                    <CFormInput
                                      type="password"
                                      className="form-control square border border-start-0"
                                      // placeholder="Password"
                                      autoComplete="current-password"
                                      name="password"
                                    />
                                  </CInputGroup>
                                  <p className="text text-danger">{fieldError.password}</p>
                                </CCol>
                                <CCol md={12}>
                                  <CRow>
                                    <div className="col-md-6">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customControlInline"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customControlInline"
                                    >Remember me</label>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                    <a className="text-primary" href="/forgot-password"><b> Forgot password?</b>
                                  </a>
                                    </div>
                                  {/* <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customControlInline"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customControlInline"
                                    >Remember me</label>
                                    
                                    <a style={{textAlign: 'right'}} href="/forgot-password"> Forgot password?
                                  </a>
                                    
                                    
                                  </div> */}
                                  </CRow>
                                </CCol> 
                            </CRow>
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
                            type="submit">Login Now</CButton>
                            {loading}
                            <p className="text text-danger">{error}</p>
                        </div>
                        {/* <div className="d-grid gap-2 mt-2 justify-content-center">
                            <p>Already have an account? <a href="">Login</a></p>
                        </div>     */}
                    </CForm>
                        <p className="text-center" style={{fontSize:"22px"}}>
                        Not an Affiliate Yet? {" "}
                            <Link
                                to="/register"
                                className="font-weight-medium text-primary"
                            >
                                {" "}
                               <strong>Join Here</strong> {" "} 
                            </Link>{" "}
                        </p>
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
                        <div>
                          <Marquee>
                              <CImage height="30%" width="10%" src={image5} />
                              <CImage height="30%" width="10%" src={image6} />
                          </Marquee>
                        </div>
                        
                        
              </CCardBody>
            </div>
          {/* </CCardBody>
        </CCard> */}
      </CRow>
    </div>
      <hr/>            
    <Footer/>
    </>
  );
};

export default Login;
