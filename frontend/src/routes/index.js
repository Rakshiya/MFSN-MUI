import { element } from 'prop-types'
import React from 'react'
import { Navigate } from "react-router-dom"

// Authentication Routes 
const Login = React.lazy(() => import('../views/Authentication/login/Login'));
const ForgotPassword = React.lazy(()=>import('../views/Authentication/forgotPassword/forgotPassword'));
const Register = React.lazy(()=>import('../views//Authentication/register/Register'));
const Page404 = React.lazy(()=>import('../views/Errors/page404/Page404'));
const ChangePassoword = React.lazy(()=>import('../views/Authentication/forgotPassword/changePassword'));
const Home = React.lazy(()=>import('../views/Home'));
// ======================================================================================
// Common Imports
// ======================================================================================
//Dashboard Imports
const Dashboard = React.lazy(()=>import('../views/Common/Dashboard'));



// ======================================================================================
// Admin Protected Imports
// ======================================================================================
//Manage Leads Imports
// const ManageLeads = React.lazy(() => import('../views/Admin/ManageLeads'));
// const LeadDetails = React.lazy(()=>import('../views/Admin/ManageLeads/LeadDetails'));
// const ApproveNow= React.lazy(()=>import('../views/Admin/ManageLeads/ApproveNow'));

//Company Panel Imports
// const CompanyPanel = React.lazy(()=>import('../views/Admin/CompanyPanel'));
// const DeactiveCompany = React.lazy(()=>import('../views/Admin/CompanyPanel/deactiveCompanyList'));
// const CompanyDetail = React.lazy(()=>import('../views/Admin/CompanyPanel/company_details'));
// const BankDetail = React.lazy(()=>import('../views/Admin/CompanyPanel/bank_details'));
// const AddCompanyBankDetail = React.lazy(()=>import('../views/Admin/CompanyPanel/add_bank_details'));
// const EditCompanyBankDetail = React.lazy(()=>import('../views/Admin/CompanyPanel/edit_bank_details'));

//User Panel Imports
// const UserPanel = React.lazy(()=>import('../views/Admin/UserPanel'));
// const CreateUser = React.lazy(()=>import('../views/Admin/UserPanel/createUser'));
// const EditUser = React.lazy(()=>import('../views/Admin/UserPanel/editUser'));
// const sample = React.lazy(()=>import('../views/table'));
// const Example = React.lazy(()=>import('../views/Admin/UserPanel/Example'));
// const Example1 = React.lazy(()=>import('../views/Admin/UserPanel/Example1'));

//PID Panel Imports
// const PidPanle = React.lazy(()=>import('../views/Admin/PidPanel'));

//AID Panel Imports
// const AidPanel = React.lazy(()=>import('../views/Admin/AidPanel'));

//Bank Panel Imports
// const BankPanel = React.lazy(()=>import('../views/Admin/BankPanel'));
// const AddBank = React.lazy(()=>import('../views/Admin/BankPanel/createBank'));
// const EditBank = React.lazy(()=>import('../views/Admin/BankPanel/editBank'));



// ======================================================================================
// Affiliate Protected Imports
// ======================================================================================
// const ReferralProgram = React.lazy(()=>import('../views/Affiliate/ReferralProgram'));
// const MyLinks = React.lazy(()=>import('../views/Affiliate/MyLinks'));
// const CreditSnapShot = React.lazy(()=>import('../views/Affiliate/CreditSnapshot'));
// const MyBankDetails = React.lazy(()=>import('../views/Affiliate/BankDetails'));

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
  //Public Routes is Here
  const publicRoutes = [
    { path: "/", element:Home},
    { path: "/login", element: Login },
    { path: "/forgot-password", element:ForgotPassword },
    { path: "/register", element:Register},
    { path: "/affiliateRequest/:referralcode", element:Register},
    { path: "/reset-password/:token", exact: true, element:ChangePassoword},
    { path: "/error", element:Page404},
    
  ]




  //Admin Protected Routes is Here
  const routes = [
    { path: "/dashboard", element:Dashboard},

    //Manage Leads Routes is Here
    // { path: '/manage-leads', name: 'Manage Leads', element:ManageLeads },
    
    // { path: "/manage-leads/approve-now/:id", name:'Approve Now', element:ApproveNow},
    // { path: '/manage-leads/active-leads', name:'Active Leads', element:ManageLeads},
    // { path: '/manage-leads/approved-leads', name:'Approved Leads', element:ManageLeads},

    //Lead details routes is here
    // { path: "/manage-leads/hot-leads/lead-details/:id", name:'Leads Details', element:LeadDetails},
    // { path: '/manage-leads/approved-leads/lead-details/:id', name:'Leads Details', element:LeadDetails},
    // { path: "/", exact: true, element: () => <Navigate to="/dashboard" /> },


    //Company Panel Routes is Here
    // { path: "/company-panel", name:"Company Panel", element:CompanyPanel},
    // { path: "/company-panel/deactive", name:"Deactive Company", element:DeactiveCompany},
    // { path: "/company-panel/detail/:id", name:"Company Detail", element:CompanyDetail},
    // { path: "/company-panel/detail/bank-detail/:id", name:"Bank Detail", element:BankDetail},
    // { path: "/company-panel/add-bank-details/:id", name:"Add Company Bank Details", element:AddCompanyBankDetail},
    // { path: "/company-panel/edit-bank-details/:id", name:"Edit Company Bank Details", element:EditCompanyBankDetail},


    //Bank Panel Routes is Here
    // { path: "/bank-panel", name:"Bank Panel", element:BankPanel},
    // { path: "/bank-panel/add-bank", name:"Add new bank", element:AddBank},
    // { path: "/bank-panel/edit-bank/:id", name:"Edit Bank Detail", element:EditBank},


    //User Panel Routes is Here
    // { path: "/user-panel", name:"User Panel", element:UserPanel },
    // { path: "/user-panel/create-user", name: "Create User", element:CreateUser},
    // { path: "/user-panel/edit-user/:id", name:"Edit User", element:EditUser},
    // { path: "/user-panel/sample", name:"sample", element:sample},
    // { path: "/user-panel/Example", name:"Example", element:Example},
    // { path: "/user-panel/Example1", name:"Example1", element:Example1},

    //PID Panel Routes
    // { path: "/pid-panel", name:"PID Panel", element:PidPanle},

    //AID Panel Routes
    // {path: "/aid-panel", name:"AID Panel", element:AidPanel},

    { path: "/affiliate/dashboard", element:Dashboard},
    { path: "/dashboard", exact: true, element: () => <Navigate to="/affiliate/dashboard" /> },
    // { path: "/affiliate/my-links", name:"My Links", element:MyLinks},
    // { path: "/affiliate/credit-snapshot", name:"Credit Snapshot", element:CreditSnapShot},
    // { path: "/affiliate/referral-program", name:"Referral Program", element:ReferralProgram},
    // { path: "/affiliate/my-bank-details", name:"My Bank Details", element:MyBankDetails},
    // { path: "/affiliate-user/dashboard", element:Dashboard},
    { path: "/dashboard", exact: true, element: () => <Navigate to="/affiliate-user/dashboard" /> },

  ]



export {publicRoutes,routes}
