import { useState } from 'react';
import './workCard.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { authData } from '../../authentication/authData';

export default function Card(props){
  const navigate = useNavigate()
    const [showMore, setShowMore] = useState(false);
  
    const handleEditClick = () => {
      localStorage.setItem("vacancy", JSON.stringify(props.vacancy));
      navigate("/edit")
    }
    const handleDeteteClick = async () =>{
      await fetch('https://localhost:7159/api/Vacancies/' + props.vacancy.id,{
         method:'DELETE',
         headers: {
             'Authorization':'Bearer ' + authData.token
           },
       }).then(response => console.log(response.status))

 }
  return(
  <div className='workCard'>
    <div className="cardValues">
      <h2 className='workCardh2'>
    {props.vacancy.header === "" || props.vacancy.header === " " ?"Unknown": props.vacancy.header}
  </h2>
  <h3 className='workCardh3'>
    
  {props.vacancy.description === "" || props.vacancy.description === " " ?"Unknown": props.vacancy.description}
   
  </h3>
  <h4>
    {props.vacancy.category.name}
  </h4></div>
  {props.allowEdit&& 
   <div className="cardActions">
   <button className='actionButton' onClick={handleEditClick}>
   <EditIcon className='buttonIcon'/>
    <div className="buttonText">Edit</div>
   </button>
   <button className='actionButton'>
   <DeleteIcon className='buttonIcon'/>
    <div className="buttonText" onClick={handleDeteteClick} >Delete</div>
    </button>
 </div>
  }

  
  
     
  </div>
  
  
  
  
  );
  
  }