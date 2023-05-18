import RegisterForm from '../../components/registerForm/RegisterForm'
import Topbar from '../../components/topbar/Topbar'
import './register.css'

export default function Register() {
    return (
        <>
          <Topbar/>
          <div className="loginContainer">
            <RegisterForm/>
            
          </div>
        </>
      )
}
