import "./sidebar.css"
import { Home, Person } from "@mui/icons-material"
import {useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const handleHomeClick=()=>{
  navigate("/")
  }
  const handleAccountClick=()=>{
    navigate("/userPage")
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
