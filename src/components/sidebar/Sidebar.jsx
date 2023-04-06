import "./sidebar.css"
import { Home, Person } from "@mui/icons-material"
import {useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleHomeClick=()=>{
  navigate("/")
  }
  const handleYourAccountClick=()=>{
    navigate("/UserPage")
    }
  return (
    <div className="sidebarContainer">
     <div className="sidebarWrapper">
     <ul className="listPages">
      <li className="listPagesItem" onClick={handleHomeClick}>
        <Home className="listIcon"/>
        Home
      </li>
      <li className="listPagesItem" onClick={handleYourAccountClick}>
        <Person className="listIcon"/>
        Your account
      </li>
     
     </ul>
     
     </div>
    </div>
  )
}
