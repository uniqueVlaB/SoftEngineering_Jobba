import LoginForm from '../../components/loginForm/LoginForm'
import Topbar from '../../components/topbar/Topbar'
import './login.css'

export default function Login() {
    return (
        <>
          <Topbar/>
          <div className="loginContainer">
            <LoginForm/>
            
          </div>
        </>
      )
}
