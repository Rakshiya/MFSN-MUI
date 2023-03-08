import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import Dashboard from '../views/Web/Dashboard/Dashboard';
import CompanyPanel from '../views/Web/CompanyPanel/CompanyPanel';
import HotLeads from '../views/Web/ManageLeadsPanel/HotLeads';

function Routing(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/companypanel" element={<CompanyPanel/>} />
                <Route path="/hotleads" element={<HotLeads/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;