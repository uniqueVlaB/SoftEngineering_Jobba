import { useState, useEffect } from 'react'
import './rightbar.css'
import SaveIcon from '@mui/icons-material/Save';
import { categoriesModel } from '../../models/categories';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {ApiAddCategory, ApiDeleteCategory, ApiSaveCategory, ApiSetCategories } from '../../apiCalls/categories';

export default function Rightbar(props) { 
 const [categories, setCategories] = useState(categoriesModel);
 const [selectedCategoryId, setSelectedCategoryId] = useState();
 const [inputCategoryValue, setSelectedCategory] = useState("");
 const [addButtonDisabled, setAddButtonDisabled] = useState(false);
 const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
 const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

 useEffect(() => {
  ApiSetCategories(setCategories)
}, []);

  const handleChange = (event) => {
    setSelectedCategoryId(event.target.value)
    props.categoryChange(event.target.value)
    if(event.target.value <= 0){
    setSelectedCategory("")
setAddButtonDisabled(false)
setDeleteButtonDisabled(true)
setSaveButtonDisabled(true)
    }
    else{
      const selectedIndex = event.target.selectedIndex;
      const selectedOptionText = event.target.options[selectedIndex].text;
    setSelectedCategory(selectedOptionText)
    setAddButtonDisabled(true)
    setDeleteButtonDisabled(false)
    setSaveButtonDisabled(false)
    }
  }

  const handleTextChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleDeleteCategory = async () => {
    await ApiDeleteCategory(selectedCategoryId)
    await ApiSetCategories(setCategories)
    window.location.reload()
    }
  
    const handleSaveCategory = async () => {
   await ApiSaveCategory(inputCategoryValue, selectedCategoryId)
   window.location.reload()
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
