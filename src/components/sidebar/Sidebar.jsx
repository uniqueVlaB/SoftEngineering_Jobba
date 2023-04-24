import "./sidebar.css"
import { Home, Person } from "@mui/icons-material"
import {useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const handleHomeClick=()=>{
  navigate("/")
  }
  return (
    <div className="sidebarContainer">
     <div className="sidebarWrapper">
     <ul className="listPages">
      <li className="listPagesItem" onClick={handleHomeClick}>
        <Home className="listIcon"/>
        Home
      </li>
     </ul>
     
     </div>
    </div>
  )
}
