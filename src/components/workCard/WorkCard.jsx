import { useState } from 'react';
import './workCard.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { authData } from '../../models/authData';
import { vacancy } from '../../models/vacancy';
import { ApiDeleteVacancy } from '../../apiCalls/vacancies';

export default function Card(props){
  const descrLimit = 100
let description = props.vacancy.description


if(description.length > descrLimit){
description = description.slice(0, descrLimit-3) + "..."
}
  const navigate = useNavigate()
  
    const handleEditClick = () => {
     // localStorage.setItem("vacancy", JSON.stringify(props.vacancy));
      vacancy = props.vacancy
      navigate("/edit")
    }
    const handleDeteteClick = async () =>{
     ApiDeleteVacancy(props.vacancy) 
     window.location.reload()
   }
   const handleVacancyClick = async () =>{
    sessionStorage.setItem("vacancy", JSON.stringify(props.vacancy)) 
    navigate("/vacancyPage")
  }
  return(
  <div className='workCard'>
    <div className="cardValues" onClick={handleVacancyClick}>
      <h2 className='workCardh2'>
    {props.vacancy.header}
  </h2>
  <h3 className='workCardh3'>
  {description}
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