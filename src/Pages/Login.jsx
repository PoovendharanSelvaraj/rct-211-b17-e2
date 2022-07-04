import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/AuthReducer/action";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail]=useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
     e.preventDefault();
     if(email && password){
      dispatch(getUser({email,password}))
     }
     navigate('/')
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" 
          type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" data-cy="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
