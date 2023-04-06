import  './searchResult.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import { useState, useEffect } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

export default function SearchResult() {
   let searchValue = localStorage.getItem("searchValue")
    const [searchResult, setResult] = useState([]);
   useEffect(() => {
     fetch('https://localhost:7184/vacancy/search/' + searchValue,{
       method:'GET',
       headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWViNTQyLTgxZWItNDNjMi05ZjU2LTVjY2JiMTdhOGJkOSIsIm5iZiI6MTY4MDYyNDU0MSwiZXhwIjoxOTk2MjQzNzQxLCJpYXQiOjE2ODA2MjQ1NDF9.SCxoDCaXgnCdE1fNjKUmTAOhFv_hvhdb0oVQL9qcUUc"}
   })
     .then(response => response.json())
     .then(data => setResult(data))
     }, []);
  return (
    <div>
        <Topbar/>
        <div className="searchContainer">
         
        <Sidebar/>
        
   <Feed data={searchResult} label={{show: true, text: searchValue}}/>
   <Rightbar/>
   </div>
    </div>
  )
}
