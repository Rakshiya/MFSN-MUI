import React, {useState} from 'react'
import Header from '../../Home/header/Header';
import Footer from '../../Home/header/Footer';
import { CardBody } from 'reactstrap';
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
import image1 from '../../../assets/images/forgot.png';
import config from "../../../AppConfig";
import swal from 'sweetalert';
import AuthUser from "../../../components/Auth/AuthUser";
function forgotPassword() {
  const navigate = useNavigate();
  const { http, getToken } = AuthUser();
  const [loading, setLoading]=useState('');

  //Error Message Variables
  const [error, setError]=useState();
  const [fieldError, setFieldError] = useState([]);


  const sendRestLink = (event)=>{
    event.preventDefault()
    setLoading(<CSpinner/>)
    document.getElementById("submitbtn").classList.add("d-none");
    http.post('/forgot-password',{email:event.target.email.value,url:config.BASE_URL,}).then((res)=>{
      if (res.data.success === true) {
        document.getElementById("submitbtn").classList.remove("d-none");
        setLoading('');
        swal({
          title: "Success",
          text: res.data.message.message,
          icon: "success",
          button: "Ok",
        }).then((ok)=>{
          if(ok){
          // navigate('/login')
          }
        });
      } else {
        document.getElementById("submitbtn").classList.remove("d-none");
        setFieldError(res.data.message);
        setLoading('');
        swal({
          title: "Failed",
          text: res.data.message.error,
          icon: "error",
          button: "Ok",
        }).then((ok)=>{
          if(ok){
          //   window.location.reload(1);
          }
        });
      }

    }).catch((error) => {
      document.getElementById("submitbtn").classList.remove("d-none");
      setError(error.message);
      setLoading('');
      swal({
          title: "Failed",
          text: error.message,
          icon: "error",
          button: "Ok",
        }).then((ok)=>{
          if(ok){
          //   window.location.reload(1);
          }
        });
    });
  }

  return (
    <>
     <Header/>
  <div className="justify-content-center">
    <CCard className="border border-0">
      <CCardBody>
        <CRow>
        <div className="col-lg-6">
          <CardBody>
            <CRow className="mt-5">
              <CImage className="w-75" align="center" src={image1}/>
            </CRow>
          </CardBody>
        </div>
        <div className="col-lg-6 p-5 justify-content-center">
          <CCardBody> 
            <CRow className="mt-5">
              <h1 className="text-black mt-2">
                 Forgot Password?
              </h1>
              <h3 className="text-black mt-2">
               Enter the email address associated with your account to get your code
              </h3>
                <CForm id="" onSubmit={sendRestLink} >
                  <CCol md={12} className="mt-3">
                      <CInputGroup className="has-validation">
                        <CFormInput
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter email address"
                        /> 
                        <p className="text text-danger">{fieldError.email}</p>
                        </CInputGroup>    
                  </CCol>
                  <div className="d-grid gap-2 mt-4">
                      <CButton 
                      color="primary"
                      id="submitbtn"
                      className="btn btn-primary w-md waves-effect waves-light"
                      type="submit">Send Reset Link
                      </CButton>
                      {loading}
                      <p className="text text-danger">{error}</p>
                      <Link
                        to="/login"
                        className="font-weight-medium text-center text-primary">Back to login
                      </Link> 
                  </div>
                </CForm>
            </CRow>
          </CCardBody>
        </div>
        </CRow>
        
      </CCardBody> 
    </CCard>
  </div>
    </>
    
  )
}

export default forgotPassword