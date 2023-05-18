import "./sidebar.css"
import { Home, Person } from "@mui/icons-material"
import {useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const authState = sessionStorage.getItem("authState")
  const navigate = useNavigate();
  const handleHomeClick=()=>{
    if(window.location.pathname !== "/")
    navigate("/")
    else window.location.reload()
  }
  const handleAccountClick=()=>{
    if(authState === "true")
    navigate("/userPage")
    else alert("login first")
    }
  return (
    <div className="sidebarContainer">
     <div className="sidebarWrapper">
     <ul className="listPages">
      <li className="listPagesItem" onClick={handleHomeClick}>
        <Home className="listIcon"/>
        Home
      </li>
      <li className="listPagesItem" onClick={handleAccountClick}>
        <Person className="listIcon"/>
        Your vacancies
      </li>
     </ul>
     
     </div>
    </div>
  )
}
