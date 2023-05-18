import { useState, useEffect } from 'react'
import './rightbar.css'
import SaveIcon from '@mui/icons-material/Save';
import { ApiSetCategories } from '../../apiCalls/categories';
import { categoriesModel } from '../../models/categories';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ApiAddCategory } from '../../apiCalls/categories';

export default function Rightbar(props) { 
 const [categories, setCategories] = useState(categoriesModel);
 const [inputCategoryValue, setSelectedCategory] = useState("");
 const [addButtonDisabled, setAddButtonDisabled] = useState(false);
 const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
 const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

 useEffect(() => {
  ApiSetCategories(setCategories)
}, []);

  const handleChange = (event) => {
    props.categoryChange(event.target.value)
    if(event.target.value <= 0){
    setSelectedCategory("")
setAddButtonDisabled(false)
setDeleteButtonDisabled(true)
setSaveButtonDisabled(true)
    }
    else{
    setSelectedCategory(categories[event.target.value-1].name)
    setAddButtonDisabled(true)
    setDeleteButtonDisabled(false)
    setSaveButtonDisabled(false)
    }
  }

  const handleTextChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleDeleteCategory = (event) => {
alert("delete")
  }

  const handleSaveCategory = (event) => {
alert("save")
  }

  const handleAddCategory = async () => {
await ApiAddCategory(inputCategoryValue)
window.location.reload()
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
     {props.categoryEdit && <button disabled={deleteButtonDisabled} onClick={handleDeleteCategory} className='deleteCategoryButton'>
      <div className="buttonText">
      <DeleteIcon className='deleteCategoryIcon'/>
      <span>Delete</span>
      </div>
      </button>}
    </div>
}
{props.categoryEdit &&

<div className="categoryEditContainer">

     <input type="text" value={inputCategoryValue} onChange={handleTextChange} className="categoryInput" />

     <button disabled={saveButtonDisabled} onClick={handleSaveCategory} className='saveCategoryButton'>
      <div className="buttonText">
      <SaveIcon className='saveCategoryIcon'/>
     <span>Save</span>
      </div>
     </button>
     <button disabled={addButtonDisabled} onClick={handleAddCategory} className='addCategoryButton'>
     <div className="buttonText">
     <AddIcon/>
     <span>Add</span>
      </div>
      </button>
      </div>
  }
    </div>
    </div>
  )
}
