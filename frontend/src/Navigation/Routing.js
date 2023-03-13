import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import Dashboard from '../views/Web/Dashboard/Dashboard';
import AppSidebar from '../Components/AppSidebar';
import CompanyPanel from '../views/Web/CompanyPanel/CompanyPanel';
import CompanyDetails from '../views/Web/CompanyPanel/CompanyDetails';
import BankDetails from '../views/Web/CompanyPanel/BankDetails';
import HotLeads from '../views/Web/ManageLeadsPanel/HotLeads';
import Details from '../views/Web/ManageLeadsPanel/Details';
import UserList from '../views/Web/UserPanel/UserList';
import CreateUser from '../views/Web/UserPanel/CreateUser';
import CrcReport from '../views/Web/ManageLeadsPanel/CrcReport';
function Routing(props) {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sidebar" element={<AppSidebar />} />
                <Route path="/companypanel" element={<CompanyPanel/>} />
                <Route path="/companydetails" element={<CompanyDetails/>} />
                <Route path="/BankDetails" element={<BankDetails/>} />
                <Route path="/manageleads" element={<HotLeads/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/userpanel" element={<UserList/>}/>
                <Route path="/createuser" element={<CreateUser/>}/>
                <Route path="/crcreport" element={<CrcReport/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;