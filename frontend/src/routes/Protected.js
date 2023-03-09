import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Authuser from '../components/Auth/AuthUser';
function Protected(props) {
    const {Layouts} = props;
    const navigate = useNavigate();
    const {getToken} = Authuser();
    useEffect(()=>{
      if(!getToken()){
        navigate('/login');
      }
    })
  return (
    <div>
      <Layouts/>
    </div>
  )
}

export default Protected
