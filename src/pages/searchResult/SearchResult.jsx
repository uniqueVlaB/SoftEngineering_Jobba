import  './searchResult.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import { useState, useEffect } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

export default function SearchResult() {
   let searchValue = localStorage.getItem("searchValue")
    const [searchResult, setResult] = useState();
   useEffect(() => {
     fetch('https://localhost:7184/vacancy/search/' + searchValue,{
       method:'GET',
       headers:{"Authorization":"Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OTYwZmJmYy0zZWFjLTQ4OTEtYjk5OC1iZTA2YjExYjNhNDEiLCJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2ODE4MzI1ODcsImV4cCI6MTY4MTkxODk4NywiaXNzIjoiSldQQVBJIiwiYXVkIjoiU2FtcGxlQXVkaWVuY2UifQ.95YdPB_MacFqZW8zZJ7JuH6lE9LBDNKJj8xCH00_1Ec",
       }
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
