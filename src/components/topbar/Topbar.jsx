import "./topbar.css"
import { Search, Person, AccountCircle, Refresh } from "@mui/icons-material"
import { useEffect, useState } from "react";
import Feed from "../feed/Feed";
import {useNavigate } from "react-router-dom";
import { authData } from "../../models/authData";

export default function Topbar(props) {
  let searchValue
  let authState = localStorage.getItem("authState")
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

  const handleLogoClick = (event)=>{
    if(window.location.pathname !== "/")
    navigate("/")
    else window.location.reload()

  }

  const handleAccountClick=()=>{
    if(authData.loginState){
      //---redirect to accout page
     // navigate("/")
    }
    else{
       //---redirect to login page
     // navigate("/")
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
