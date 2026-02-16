import React, { useState } from "react";
import API from "./api";

function Register(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleRegister = async () => {

  try{

   await API.post("/auth/register",{
    name,
    email,
    password
   });

   alert("Registration successful");

   window.location = "/";

  }catch(err){

   alert("Registration failed");

  }

 };

 return(

  <div style={{padding:"40px"}}>

   <h2>Register</h2>

   <br/>

   <input
   placeholder="Name"
   onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

   <input
   placeholder="Email"
   onChange={(e)=>setEmail(e.target.value)}
   />

   <br/><br/>

   <input
   type="password"
   placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={handleRegister}>
    Register
   </button>

  </div>

 );

}

export default Register;
