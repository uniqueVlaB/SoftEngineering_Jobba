import { useNavigate } from "react-router-dom";
import "./registerForm.css"
import {ApiRegister } from "../../apiCalls/auth";
import { useState } from "react";

export default function RegisterForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = async(e) => {
        if(password === passwordConfirm){
        e.preventDefault();
        var success = await ApiRegister({email: email, password: password})
        if(success){
            navigate("/") 
        }
    }
    else{
        alert("passwords isn`t equal")
    }
      };
      const handleLogin = () =>{
       navigate("/login")
      }
  return (
    <div className="registerFormContainer">
    <form className='registerForm' onSubmit={handleSubmit}>
    <h2 className='title'>Register</h2>
    <div>
      <input className='valueInput' placeholder="Email" type="email" id="emailRegister" name="emailRegister" onChange={(e) => setEmail(e.target.value)} required/>
    </div>
    <div>
      <input className='valueInput' placeholder="Password" type="password" id="passwordRegister" name="passwordRegister" onChange={(e) => setPassword(e.target.value)} required/>
    </div>
    <div>
      <input className='valueInput' placeholder="Confirm password" type="password" id="passwordRegisterConfirm" name="passwordRegisterConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} required/>
    </div>
    <div>
      <button className='submitButton' type="submit">Submit</button>
    </div>
    <div className="loginRow">
    <label className='loginLabel'>Already have an account? Click <label className='loginWord' onClick={handleLogin}>login</label> to redirect to login page.</label>
    </div>
   
  </form>
  </div>
  )
}
