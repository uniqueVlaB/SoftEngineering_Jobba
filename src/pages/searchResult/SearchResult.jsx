import  './searchResult.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import { useState, useEffect } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Pagination from '../../components/pagination/Pagination'
import { ApiSetVacancies } from '../../apiCalls/vacancies'

export default function SearchResult() {
   let searchValue = sessionStorage.getItem("searchValue")
if(searchValue === "undefined") searchValue = ""

    const [searchResult, setResult] = useState({totalItems:null, totalPages:null, items:[]});
    const [page, setPage] = useState(1); 
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [categoryId, setCategoryId] = useState(0);
    useEffect(() => {
      ApiSetVacancies(categoryId, page, itemsPerPage, searchValue, setResult, setPage)
    }, [page,itemsPerPage, categoryId, searchValue]);

    const handleNextPage = (numPages) => {
      if(searchResult.totalPages !== page) {
        setPage(page+numPages);
      }
    }
  
    const handlePrevPage = (numPages) => {
      if(page !== 1) {
        setPage(page - numPages);
      }
    }
    const handleSetPage = (numPages) => {
      if(numPages > 0 && searchResult.totalPages >= numPages) {
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
        <div className="searchContainer">
        <Sidebar/>
   <Feed data={searchResult} label={{show: true, text: searchValue}} setItems={setItemsPerPage} numItemsPerPage = {itemsPerPage}>
   <Pagination
            onPrevPageClick={handlePrevPage}
            onNextPageClick={handleNextPage}
            setPage={handleSetPage}
            currentPage={page}
            totalPages={searchResult.totalPages}
          />
        </Feed>
        <Rightbar
         categoryChange={handleCategoryChange}
        />
   </div>
    </div>
  )
}
