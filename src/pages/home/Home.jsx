import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState, useEffect } from "react"
import { authData } from "../../authentication/authData"
import { Login } from "../../authentication/authActions"
import { useNavigate } from "react-router-dom"
import { useRef } from "react";
import Pagination from "../../components/pagination/Pagination"

export default function Home(props) {
  const [vacancies, setVacancies] = useState({totalItems:null, totalPages:null, items:[]});
  const [page, setPage] = useState(1); 
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [categoryId, setCategoryId] = useState(0);


  useEffect(() => {
    (async () => {
      await fetch('https://localhost:7159/api/Vacancies?'+ new URLSearchParams({
        CategoryId:categoryId,
        Page:page,
        Header: "",
        ItemsPerPage: itemsPerPage
      }),{
        method:'GET',
      })
      .then(response => response.json())
      .then(data => {
      setVacancies(data)
      if(data.totalPages === 0 || data.totalPages < page)
      setPage(1)
      })
      
    })();
  }, [page,itemsPerPage, categoryId]);
  
  if(!authData.loginState)
    Login({email: "admin@test.com", password: "12345678"});

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