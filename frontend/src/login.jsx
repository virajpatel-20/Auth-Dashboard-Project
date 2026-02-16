import React,{useState} from "react";
import API from "./api";

function Login(){

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const login = async()=>{

  try{

   const res = await API.post("/auth/login",{
    email,
    password
   });

   localStorage.setItem("token",res.data.token);

   alert("Login Successful");

   window.location="/dashboard";

  }catch{

   alert("Login Failed");

  }

 };

 return(

  <div style={{padding:"50px"}}>

   <h2>Login</h2>

   <input
   placeholder="Email"
   onChange={e=>setEmail(e.target.value)}
   />

   <br/><br/>

   <input
   placeholder="Password"
   type="password"
   onChange={e=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={login}>
    Login
   </button>

   <br/><br/>

   <button onClick={()=>window.location="/register"}>
   Register
   </button>


  </div>

 );

}

export default Login;
