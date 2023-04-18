import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"
import { authData } from "../../authentication/authData"
import { setAuthData } from "../../authentication/authActions"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();
  const [allVacantions, setAllVacantions] = useState();
  const [page, addPage] = useState(1); 
 
  useEffect(() => {
    console.log(page)
    fetch('https://localhost:7159/api/Vacancies?'+ new URLSearchParams({
    CategoryId:'0',
    Page:page.toString(),
  ItemsPerPage:'15'
    }),{
     
      method:'GET',
  })
    .then(response => response.json())
    .then(data => setAllVacantions(data))
    }, [page]);
    setAuthData({email: "admin@test.com", password: "12345678"})
    
    
    const handlecl=()=>{
      addPage(page+1);
      }
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <button onClick={handlecl}></button>
    <Feed data={allVacantions}/>
    
    <Rightbar/>
    </div>
    </>
    
  )
}
