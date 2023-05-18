import { ApiLogin } from '../../apiCalls/auth';
import './loginForm.css'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    var success = await ApiLogin({email: email, password: password})
    if(success){
        navigate("/") 
    }
  };
  const handleRegister = () =>{
   navigate("/register")
  }
  return (
    <div className="loginFormContainer">
    <form className='loginForm' onSubmit={handleSubmit}>
    <h2 className='title'>Login</h2>
    <div>
      <input className='valueInput' placeholder="Email" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
    </div>
    <div>
      <input className='valueInput' placeholder="Password" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
    </div>
    <div>
      <button className='submitButton' type="submit">Submit</button>
    </div>
    <div className="registerColumn">
    <label className='registerLabel'>Don`t have an account? Click <label className='registerWord' onClick={handleRegister}>register</label> to join us.</label>
    </div>
   
  </form>
  </div>
  )
}
