import { Event } from '@mui/icons-material';
import  './editForm.css'
import { useState } from 'react';
import { authData } from '../../authentication/authData';

export default function EditForm(props) {
    const[categoryId, setCategoryId] = useState(props.vacancy.category.id)
    const [headerValue, setHeaderValue] = useState(props.vacancy.header);
    const [descriptionValue, setDescriptionValue] = useState(props.vacancy.description);
    const categories = JSON.parse(localStorage.getItem("categories"))

 const saveChanges = async () =>{
     await fetch('https://localhost:7159/api/Vacancies/' + props.vacancy.id,{
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + authData.token
          },
          body: JSON.stringify({
            header: headerValue,
            description: descriptionValue,
            categoryId: categoryId
          })
      }).then(response => response.json())
      .then(data => console.log(data))
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
    <select  className='categorySelect' onChange={handleChange}>
        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
     </select>
     <div>
         <button onClick={saveChanges} className='saveButton'>save</button>
     </div>

</div>
    </div>

  )
}
