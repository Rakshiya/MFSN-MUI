import React, { useEffect, useState } from "react";
import Header from '../../Home/header/Header';
import { CardBody } from 'reactstrap';
import { Link, useNavigate,useParams } from "react-router-dom";
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
  CImage
} from "@coreui/react";
import image1 from '../../../assets/images/reset.png';
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import config from "../../../AppConfig";
import swal from 'sweetalert';
import AuthUser from "../../../components/Auth/AuthUser";

const changePassword = () => {
  const navigate = useNavigate();
  const { http, getToken } = AuthUser();
  const [loading, setLoading]=useState('');
  const {token} = useParams(); 
  //
  //Error Message Variables
  const [error, setError]=useState();
  const [fieldError, setFieldError] = useState([]);
  const [tokenStatus,setTokenStatus]=useState(false);

  // Check token for password change request 
  const CheckToken = ()=>{
    setLoading(<CSpinner/>)
    http.post("/checkPasswordToken", {
        token:token
    }).then((res)=>{
      setLoading('')
        setTokenStatus(res.data.success)
        if(res.data.success === false){
            navigate('/error')
        }
        // console.log(res.data)
    })
  }

  useEffect(()=>{
    CheckToken();
  },[])

  //Define Change Password Fucntion
  const ChangeSubmit = (event) => {
    event.preventDefault();
    setLoading(<CSpinner/>);
    document.getElementById("submitbtn").classList.add("d-none");

    //Call API for login
    http
      .post("/reset-password", {
        token:token,
        url:config.BASE_URL,
        password: event.target.password.value,
        password_confirmation: event.target.confirmpassword.value,
      })
      .then((res) => {
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
            navigate('/login')
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
      })
      .catch((error) => {
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
  }; //Close LoginSubmit Function

  return (
    <>
  {tokenStatus === true?<>
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
                 <b> Reset Password</b> 
              </h1>
              <h2 className="text-black mt-2">
               Enter the new password
              </h2>
                <CForm id="" onSubmit={ChangeSubmit} >
                  <CCol md={12} className="mt-3">
                      <CInputGroup className="has-validation input-group-lg">
                        <CFormInput
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="New Password"
                        /> 
                        <p className="text text-danger">{fieldError.password}</p>
                        </CInputGroup>    
                  </CCol>
                  <CCol md={12} className="mt-3">
                      <CInputGroup className="has-validation input-group-lg">
                        <CFormInput
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        name="confirmpassword"
                        /> 
                        <p className="text text-danger">{fieldError.confirmpassword}</p>
                        </CInputGroup>    
                  </CCol>
                  <div className="d-grid gap-2 mt-4">
                      <CButton 
                      color="primary"
                      id="submitbtn"
                      className="btn btn-primary w-md waves-effect waves-light "
                      type="submit">Submit
                      </CButton>
                      {loading}
                      <p className="text text-danger">{error}</p>
                  </div>
                </CForm>
            </CRow>
          </CCardBody>
        </div>
        </CRow>
        
      </CCardBody> 
    </CCard>
  </div>
  </>:loading}        
    </>
  );
};


export default changePassword