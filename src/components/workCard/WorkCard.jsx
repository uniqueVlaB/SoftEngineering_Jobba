import { useState } from 'react';
import './workCard.css';

export default function Card({vacancy}){
    const [showMore, setShowMore] = useState(false);
  
    function handleMoreClick() {
  
      setShowMore(!showMore);
    }
  return(
  <div className='workCard'>
  <h2 className='workCardh2'>
    {vacancy.header === "" || vacancy.header === " " ?"Unknown": vacancy.header}
  </h2>
  <h3 className='workCardh3'>
    
  {vacancy.description === "" || vacancy.description === " " ?"Unknown": vacancy.description}
   
  </h3>
  <h4>
    {vacancy.category.name}
  </h4>
  
     
  </div>
  
  
  
  
  );
  
  }