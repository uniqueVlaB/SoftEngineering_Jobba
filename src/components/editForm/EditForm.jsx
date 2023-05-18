import { Event } from '@mui/icons-material';
import  './editForm.css'
import { useState } from 'react';
import { authData } from '../../models/authData';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';
import { vacancy } from '../../models/vacancy';
import { ApiSaveVacancy } from '../../apiCalls/vacancies';

export default function EditForm(props) {
    const navigate = useNavigate()
    const [categoryId, setCategoryId] = useState(vacancy.category.id)
    const [headerValue, setHeaderValue] = useState(vacancy.header);
    const [descriptionValue, setDescriptionValue] = useState(vacancy.description);
    const categories = JSON.parse(sessionStorage.getItem("categories"))
    
 const saveChanges = async () =>{
    await ApiSaveVacancy(headerValue, descriptionValue, categoryId)
navigate("/userPage")
}
    const handleChange = (event) => {
       setCategoryId(event.target.value)
      }
  return (
    <div className="editContainer">
<div className="formContainer">
    <div className="fieldHeader">
Header:
    </div>
    <input type="text" value={headerValue} onChange={(event) => setHeaderValue(event.target.value)}  className="headerInput" />
    <div className="fieldHeader">
Description:
    </div>
    <textarea value={descriptionValue} onChange={(event) => setDescriptionValue(event.target.value)}  className="descriptionInput" />
    <div className="fieldHeader">
Category:
    </div>
    <select  className='categorySelect' onChange={handleChange} defaultValue={categoryId}>
        {categories.map(c => <option key={c.id} value={c.id} >{c.name}</option>)}
     </select>
     <div>
         <button onClick={saveChanges} className='formButton'>
         <SaveIcon className='buttonIcon'/>
             <div className="buttonText">Save</div>
             </button>


     </div>

</div>
    </div>

  )
  
}
