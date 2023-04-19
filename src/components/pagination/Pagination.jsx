import "./pagination.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";

export default function Listing(props) {
    const handleRightClick = (event)=>{
        props.onNextPageClick(1);

      }
      const handleLeftClick = (event)=>{
        props.onPrevPageClick(1);

      }
    
    return (
    <div className="listingContainer">
<div className="listingLeft" onClick={handleLeftClick}>
<ArrowBackIosIcon/>
</div>
<div className="listingCenter">
{props.currentPage!== 1&&<span className="listingNum">first</span>}
  {props.currentPage > 2 && <span className="listingNum">{props.currentPage-1}</span>}
  <span className="listingNum">{'>'+props.currentPage+'<'}</span>
  {(props.totalPages > props.currentPage && props.currentPage<props.totalPages-1) && <span className="listingNum">{props.currentPage+1}</span>}
  {props.currentPage!== props.totalPages&&<span className="listingNum">last</span>}

</div>
<div className="listingRight" onClick={handleRightClick}>
<ArrowForwardIosIcon className="arrowForward"/>
</div>


    </div>
  )
}
