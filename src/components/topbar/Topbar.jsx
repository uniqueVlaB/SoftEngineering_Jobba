import "./topbar.css"
import { Search, AccountCircle} from "@mui/icons-material"
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Topbar(props) {
  let searchValue
  let authState = sessionStorage.getItem("authState")
  const search = useInput();
  const navigate = useNavigate();
  function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

  const handleLogoClick = ()=>{
    if(window.location.pathname !== "/")
    navigate("/")
    else window.location.reload()

  }

  const handleAccountClick= async ()=>{
    if(authState !== "true"){
      navigate("/login")
    }
    else{
      sessionStorage.removeItem("authState")
      sessionStorage.removeItem("authEmail")
      sessionStorage.removeItem("authUsername")
      sessionStorage.removeItem("authToken")
      navigate("/")
    }

  }

  
  
  const handleKeyDown = (event)=>{
    if (event.key === 'Enter') {
      console.log('do validate');
      sessionStorage.setItem("searchValue", searchValue)
      if(window.location.pathname !== "/SearchResult")
       navigate("/SearchResult")
       else window.location.reload()
       
    }
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" onClick={handleLogoClick}>
        Jobba 
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        
<Search className="searchIcon" />
<input  placeholder="Search" className="searchInput" onKeyDown={handleKeyDown} onChange={event => searchValue = event.target.value}/>
        </div>
        
      </div>
      <div className="topbarRight">
      
{search.value}


<div className="topbarAccountIcon" onClick={handleAccountClick}>
<span className="accountLoginState">{authState === "true" && "Log out"}{authState !== "true" && "Log in"}</span>
  <AccountCircle className="accountCircle"/>
</div>
</div>
    </div>
  )
 
}
