import "./pagination.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";

export default function Listing(props) {
    const handleRightClick = (num)=>{
        props.onNextPageClick(num)
      }
      const handleLeftClick = (num)=>{
        props.onPrevPageClick(num)
      }
      const handlefirstClick = ()=>{
        props.setPage(1)
      }
      const handleLastClick = ()=>{
        props.setPage(props.totalPages)
      }
      const handleSetPage = (num)=>{
        props.setPage(num)
      }
    
    return (
    <div className="listingContainer">
<div className="listingLeft" onClick={() => handleLeftClick(1)}>
<ArrowBackIosIcon/>
</div>
<div className="listingCenter">
{props.currentPage!== 1&&<span className="listingNum" onClick={handlefirstClick}>first</span>}
  {props.currentPage > 2 && <span className="listingNum" onClick={() => handleSetPage(props.currentPage-1)}>{props.currentPage-1}</span>}
  <span className="listingNum">{'>'+props.currentPage+'<'}</span>
  {(props.totalPages > props.currentPage && props.currentPage<props.totalPages-1) && <span className="listingNum" onClick={() => handleSetPage(props.currentPage+1)}>{props.currentPage+1}</span>}
  {props.currentPage!== props.totalPages && props.totalPages!==0 &&<span className="listingNum" onClick={handleLastClick}>last</span>}

</div>
<div className="listingRight" onClick={() => handleRightClick(1)}>
<ArrowForwardIosIcon className="arrowForward"/>
</div>


    </div>
  )
}