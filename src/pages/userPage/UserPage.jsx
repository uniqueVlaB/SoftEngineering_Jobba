import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useState, useEffect } from "react"
import { authData } from '../../authentication/authData'
import { Login } from '../../authentication/authActions'
import Pagination from '../../components/pagination/Pagination'
import { useNavigate } from 'react-router-dom'
import './userPage.css'

export default function UserPage() {
    const navigate = useNavigate();
    const [userVacantions, setVacancies] = useState({totalItems:null, totalPages:null, items:[]});
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
      if(userVacantions.totalPages !== page) {
        setPage(page+numPages);
      }
    }
  
    const handlePrevPage = (numPages) => {
      if(page !== 1) {
        setPage(page - numPages);
      }
    }
    const handleSetPage = (numPages) => {
      if(numPages > 0 && userVacantions.totalPages >= numPages) {
        setPage(numPages);
      }
    }
    const handleCategoryChange = (categoryId) => {
      if(categoryId!==null)
        setCategoryId(categoryId);
    }

  return (
    <div>
        <Topbar/>
        <div className="userPageContainer">
         
        <Sidebar/>
       
   <Feed data={userVacantions} allowEdit = {true} setItems={setItemsPerPage} numItemsPerPage = {itemsPerPage}>
   <Pagination
            onPrevPageClick={handlePrevPage}
            onNextPageClick={handleNextPage}
            setPage={handleSetPage}
            currentPage={page}
            totalPages={userVacantions.totalPages} 
          />
        </Feed>
        <Rightbar
         categoryChange={handleCategoryChange}
        />
   </div>
    </div>
  )
}
