import { useState, useEffect } from 'react'
import './rightbar.css'
import { json } from 'react-router-dom';
import { ApiSetCategories } from '../../apiCalls/categories';
import { categoriesModel } from '../../models/categories';

export default function Rightbar(props) { 
 const [categories, setCategories] = useState(categoriesModel);

 useEffect(() => {
 ApiSetCategories(setCategories)
}, []);

  const handleChange = (event) => {
    props.categoryChange(event.target.value)
  }

  return (
    <div className='rightbarContainer'>
      <div className="rightbarWrapper">
      {!props.disableCategory && 
        <div className="categories">

      <div>Category:</div>
     <select  className='categorySelect' onChange={handleChange}>
     <option key={0} value={0}>All vacancies</option>
        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
     </select>
    </div>
}
    </div>
    </div>
  )
}
