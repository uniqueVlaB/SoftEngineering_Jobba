import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"

export default function Home() {
  const [allVacantions, setAllVacantions] = useState([]);
   useEffect(() => {
     fetch('https://localhost:7184/vacancy/AllVacantions',{
       method:'GET'
   })
     .then(response => response.json())
     .then(data => setAllVacantions(data))
     }, []);
   

  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed data={allVacantions} />
    <Rightbar/>
    </div>
    </>
    
  )
}
