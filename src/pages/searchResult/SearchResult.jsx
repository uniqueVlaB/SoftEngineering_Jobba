import  './searchResult.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import { useState, useEffect } from "react"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Listing from '../../components/pagination/Pagination'
import { authData } from '../../authentication/authData'
import { Login } from '../../authentication/authActions'

export default function SearchResult() {
   let searchValue = localStorage.getItem("searchValue")
    const [searchResult, setResult] = useState({totalItems:null, totalPages:null, items:[]});
    const [page, setPage] = useState(1); 
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [categoryId, setCategoryId] = useState(0);
    useEffect(() => {
      (async () => {
        await fetch('https://localhost:7159/api/Vacancies?'+ new URLSearchParams({
          CategoryId:categoryId,
          Page:page,
          Header: searchValue,
          ItemsPerPage: itemsPerPage
        }),{
          method:'GET',
        })
        .then(response => response.json())
        .then(data => {
          setResult(data)

        })
        
      })();
    }, [page,itemsPerPage, categoryId]);

    if(!authData.loginState)
    Login({email: "admin@test.com", password: "12345678"});

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
   <Feed data={searchResult} label={{show: true, text: searchValue}}>
   <Listing
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
