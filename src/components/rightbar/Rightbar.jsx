import { useState, useEffect } from 'react'
import './rightbar.css'
<<<<<<< Updated upstream
import { json } from 'react-router-dom';
import { ApiSetCategories } from '../../apiCalls/categories';
=======
import SaveIcon from '@mui/icons-material/Save';
import { ApiDeleteCategory, ApiSaveCategory, ApiSetCategories } from '../../apiCalls/categories';
>>>>>>> Stashed changes
import { categoriesModel } from '../../models/categories';

export default function Rightbar(props) { 
 const [categories, setCategories] = useState(categoriesModel);
<<<<<<< Updated upstream

 useEffect(() => {
 ApiSetCategories(setCategories)
=======
 const [inputCategoryValue, setSelectedCategory] = useState("");
 const [selectedCategoryId, setSelectedCategoryId] = useState();
 const [addButtonDisabled, setAddButtonDisabled] = useState(false);
 const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
 const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

 useEffect( () => {
   ApiSetCategories(setCategories)
>>>>>>> Stashed changes
}, []);

  const handleChange = (event) => {
    setSelectedCategoryId(event.target.value)
    props.categoryChange(event.target.value)
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
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
