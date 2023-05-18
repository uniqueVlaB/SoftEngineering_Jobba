import "./feed.css"
import WorkCard from "../../components/workCard/WorkCard"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Feed({data: vacancies = {items: []}, label = {show:false},numItemsPerPage, setItems, allowEdit = false, enableCards = true, children}) {
  const feedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    feedRef.current.scrollTop = 0;
  }, [vacancies]);

  const handleAddButton = () => {
    navigate("/add")
  }

  const handleSetItems = (numItems) => {
   setItems(numItems)
  }

  return (
    <div className="feedContainer" ref={feedRef}>
      {enableCards && <div className="itemsPerPageSelectContainer">
<div className="itemsPerPageSelectLabel">
  Items per page:
</div>
<div className="itemsPerPageSelectValue" onClick={()=>handleSetItems(10)}>{numItemsPerPage === 10&&">"}10{numItemsPerPage === 10&&"<"}</div>
<div className="itemsPerPageSelectValue" onClick={()=>handleSetItems(15)}>{numItemsPerPage === 15&&">"}15{numItemsPerPage === 15&&"<"}</div>
<div className="itemsPerPageSelectValue" onClick={()=>handleSetItems(20)}>{numItemsPerPage === 20&&">"}20{numItemsPerPage === 20&&"<"}</div>
<div className="itemsPerPageSelectValue" onClick={()=>handleSetItems(25)}>{numItemsPerPage === 25&&">"}25{numItemsPerPage === 25&&"<"}</div>
<div className="itemsPerPageSelectValue" onClick={()=>handleSetItems(30)}>{numItemsPerPage === 30&&">"}30{numItemsPerPage === 30&&"<"}</div>


       </div>} 
    {allowEdit && 
    <button onClick={handleAddButton} className="addButton">Add vacancy</button>
    }
    {enableCards&& 
    <div className="cards">
    {label.show && <h2>Your request: "{label.text}"</h2>}
      {vacancies.items.length !== 0 && vacancies.items.map(vacancy => <WorkCard allowEdit = {allowEdit}  vacancy = {vacancy} key={vacancy.id}/>)}
      {vacancies.items.length === 0 && <h1>No data was found!!!</h1>}
    </div>
    }
      {children}
    </div>
  )
}