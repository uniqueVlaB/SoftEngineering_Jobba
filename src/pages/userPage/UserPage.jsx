import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useState, useEffect} from "react"
import { authData } from "../../models/authData" 
import { ApiLogin } from "../../apiCalls/auth" 
import Pagination from '../../components/pagination/Pagination'
import { useNavigate } from 'react-router-dom'
import './userPage.css'
import { ApiSetUserVacancies } from '../../apiCalls/vacancies'

export default function UserPage() {
    const navigate = useNavigate();
    const [userVacancies, setUserVacancies] = useState(() => {
      const storedData = sessionStorage.getItem("userVacancies");
      return storedData ? JSON.parse(storedData) : {totalItems:null, totalPages:null, items:[]};
    });
    const [page, setPage] = useState(1); 
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [categoryId, setCategoryId] = useState(0);

    
    useEffect(() => {
      ApiSetUserVacancies(categoryId, page, itemsPerPage, setUserVacancies, setPage)  
    }, [page,itemsPerPage, categoryId, userVacancies]);
    
    useEffect(() => {
      sessionStorage.setItem("userVacancies", JSON.stringify(userVacancies));
    }, [userVacancies]);

   // if(!authData.loginState)
   // Login({email: "admin@test.com", password: "12345678"});
    
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
