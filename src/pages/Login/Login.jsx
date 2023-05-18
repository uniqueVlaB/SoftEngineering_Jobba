import Feed from '../../components/feed/Feed'
import LoginForm from '../../components/loginForm/LoginForm'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
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
