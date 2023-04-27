import './addForm.css'
import { useState } from 'react';
import { authData } from '../../authentication/authData';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


export default function AddForm() {
    const categories = JSON.parse(localStorage.getItem("categories"))
    const navigate = useNavigate()
    const[categoryId, setCategoryId] = useState(categories[0].id)
    const [headerValue, setHeaderValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
   

 const addVacancy = async () =>{
    await fetch('https://localhost:7159/api/Vacancies',{
        method:'POST',
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
      navigate("/userPage")
 }
 const handleChange = (event) => {
       setCategoryId(event.target.value)
 } 
  return (
    <div className="addContainer">
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
             <button onClick={addVacancy} className='FormButton'>
                <AddIcon className='buttonIcon'/>
                 <div className="buttonText">Add</div>
                 </button>
    
    
         </div>
    
    </div>
        </div>
  )
}
