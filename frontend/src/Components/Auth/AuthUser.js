import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../AppConfig';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function AuthUser(){
    
    const navigate = useNavigate();
    
    const getToken = ()=>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser = ()=>{
        const userString = localStorage.getItem('user');
        const user_data = JSON.parse(userString);
        return user_data;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
        if(user.user_role==='admin'){
            navigate('/dashboard');
        }else if(user.user_role ==='affiliate'){
            navigate('/affiliate/dashboard')
        }else if(user.user_role==='affiliate_user'){
            navigate('/affiliate-user/dashboard')
        }else{
            navigate('/')
        }
    }

    const http = axios.create({
        baseURL:config.API_BASE_URL,
        headers:{
            "Content-type" : "application/json",
            "Accept" : "application/json",
            "Authorization":`Bearer ${token}`,
        }
    });
    
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        getUser,
        http,
    }
}