import { useState, useEffect } from 'react'
import './rightbar.css'

export default function Rightbar(props) {
 const [categories, setCategories] = useState([]);
 useEffect(() => {
  (async () => {
  await fetch('https://localhost:7159/api/Categories',{
    method:'GET'
  })
  .then(response => response.json())
  .then(data => setCategories(data))
})();
}, []);
  const handleChange = (event) => {
    props.categoryChange(event.target.value)
  }
  return (
    <div className='rightbarContainer'>
      <div className="rightbarWrapper">
        <div>Category:</div>
       <select  className='categorySelect' onChange={handleChange}>
       <option key={0} value={0}>All vacancies</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
       </select>
      </div>
    </div>
  )
}
