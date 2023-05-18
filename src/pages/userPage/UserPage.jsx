import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useState, useEffect} from "react"
import Pagination from '../../components/pagination/Pagination'
import { useNavigate } from 'react-router-dom'
import './userPage.css'
import { ApiSetUserVacancies } from '../../apiCalls/vacancies'
import { vacanciesModel } from '../../models/vacancies'


export default function UserPage() {
    const navigate = useNavigate();
    const [userVacancies, setUserVacancies] = useState(vacanciesModel);
    const [page, setPage] = useState(1); 
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [categoryId, setCategoryId] = useState(0);

    
    useEffect(() => {
<<<<<<< Updated upstream
      ApiSetUserVacancies(categoryId, page, itemsPerPage, setUserVacancies, setPage)  
    }, [page,itemsPerPage, categoryId]);
    
=======
        if(sessionStorage.getItem("authState") !== "true") navigate("/login")
     ApiSetUserVacancies(categoryId, page, itemsPerPage, setUserVacancies, setPage)  
    }, [page,itemsPerPage, categoryId, navigate]);
>>>>>>> Stashed changes

    const handleNextPage = (numPages) => {
      if(userVacancies.totalPages !== page) {
        setPage(page+numPages);
      }
    }
  
    const handlePrevPage = (numPages) => {
      if(page !== 1) {
        setPage(page - numPages);
      }
    }
    const handleSetPage = (numPages) => {
      if(numPages > 0 && userVacancies.totalPages >= numPages) {
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
       
   <Feed data={userVacancies} allowEdit = {true} setItems={setItemsPerPage} numItemsPerPage = {itemsPerPage}>
   <Pagination
            onPrevPageClick={handlePrevPage}
            onNextPageClick={handleNextPage}
            setPage={handleSetPage}
            currentPage={page}
            totalPages={userVacancies.totalPages} 
          />
        </Feed>
        <Rightbar
         categoryChange={handleCategoryChange}
        />
   </div>
    </div>
  )
}
