import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"
import { authData } from "../../authentication/authData"
import { setAuthData } from "../../authentication/authActions"
import { useNavigate } from "react-router-dom"
import { useRef } from "react";
import Listing from "../../components/pagination/Pagination"

export default function Home() {
  const [vacancies, setVacancies] = useState({totalItems:null, totalPages:null, items:[]});
  const [page, setPage] = useState(1); 

  useEffect(() => {
    (async () => {
      await fetch('https://localhost:7159/api/Vacancies?'+ new URLSearchParams({
        CategoryId:'0',
        Page:page.toString(),
        ItemsPerPage:'7'
      }),{
        method:'GET',
      })
      .then(response => response.json())
      .then(data => setVacancies(data))
    })();
  }, [page]);
  
  if(!authData.loginState)
    setAuthData({email: "admin@test.com", password: "12345678"});

  const handleNextPage = (numPages) => {
    if(vacancies.totalPages !== page) {
      setPage(page+numPages);
    }
  }

  const handlePrevPage = (numPages) => {
    if(page !== 1) {
      setPage(page - numPages);
    }
  }

  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed data={vacancies}>
          <Listing
            onPrevPageClick={handlePrevPage}
            onNextPageClick={handleNextPage}
            currentPage={page}
            totalPages={vacancies.totalPages}
          />
        </Feed>
        <Rightbar/>
      </div>
    </>
  )
}