import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useState, useEffect } from "react"
import './userPage.css'

export default function UserPage() {
    const [userVacantions, setVacantions] = useState([]);
    useEffect(() => {
      fetch('https://localhost:7184/vacancy/UserVacantions',{
        method:'GET',
        headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWViNTQyLTgxZWItNDNjMi05ZjU2LTVjY2JiMTdhOGJkOSIsIm5iZiI6MTY4MDYyNDU0MSwiZXhwIjoxOTk2MjQzNzQxLCJpYXQiOjE2ODA2MjQ1NDF9.SCxoDCaXgnCdE1fNjKUmTAOhFv_hvhdb0oVQL9qcUUc"}
    })
      .then(response => response.json())
      .then(data => setVacantions(data))
      }, []);
  return (
    <div>
        <Topbar/>
        <div className="userPageContainer">
         
        <Sidebar/>
        
   <Feed data={userVacantions}/>
   <Rightbar/>
   </div>
    </div>
  )
}
