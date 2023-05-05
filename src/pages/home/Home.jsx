import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"
import { authData } from "../../models/authData" 
import { ApiLogin } from "../../apiCalls/auth" 
import { useNavigate } from "react-router-dom"
import { useRef } from "react";
import Pagination from "../../components/pagination/Pagination"
import { ApiSetVacancies } from "../../apiCalls/vacancies"
import { vacanciesModel } from "../../models/vacancies"

export default function Home(props) {
  let authState = localStorage.getItem("authState")

  const [vacancies, setVacancies] = useState(vacanciesModel);
  const [page, setPage] = useState(1); 
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    ApiSetVacancies(categoryId, page, itemsPerPage, "", setVacancies, setPage)
  }, [page,itemsPerPage, categoryId]);
  
  //if(authState !== "true")
    //ApiLogin({email: "admin@test.com", password: "12345678"});

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
  const handleSetPage = (numPages) => {
    if(numPages > 0 && vacancies.totalPages >= numPages) {
      setPage(numPages);
    }
  }
  const handleCategoryChange = (categoryId) => {
    if(categoryId!==null)
      setCategoryId(categoryId);
    
  }

  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed data={vacancies} setItems={setItemsPerPage} numItemsPerPage = {itemsPerPage}>
          <Pagination
            onPrevPageClick={handlePrevPage}
            onNextPageClick={handleNextPage}
            setPage={handleSetPage}
            currentPage={page}
            totalPages={vacancies.totalPages}
          />
        </Feed>
        <Rightbar
         categoryChange={handleCategoryChange}
        />
      </div>
    </>
  )
}