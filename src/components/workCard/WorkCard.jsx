import { useState } from 'react';
import './workCard.css';

export default function Card({vacantion}){
    const [showMore, setShowMore] = useState(false);
  
    function handleMoreClick() {
  
      setShowMore(!showMore);
    }
  return(
  <div className='workCard'>
  <h2 className='workCardh2'>
    {vacantion.header === "" || vacantion.header === " " ?"Unknown": vacantion.header}
  </h2>
  <h3 className='workCardh3'>
    
  {vacantion.description === "" || vacantion.description === " " ?"Unknown": vacantion.description}
   
  </h3>
  <h4>
    {vacantion.category.name}
  </h4>
  
     
  </div>
  
  
  
  
  );
  
  }