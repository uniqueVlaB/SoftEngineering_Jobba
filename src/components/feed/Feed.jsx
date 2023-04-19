import "./feed.css"
import WorkCard from "../../components/workCard/WorkCard"
import { useEffect, useRef } from "react"
import { useState } from "react";

export default function Feed({data: vacancies = {items: []}, label = {show:false}, children}) {
  const feedRef = useRef(null);

  useEffect(() => {
    feedRef.current.scrollTop = 0;
  }, [vacancies]);

  return (
    <div className="feedContainer" ref={feedRef}> 
      {label.show && <h2>Your request: "{label.text}"</h2>}
      {vacancies.items.length !== 0 && vacancies.items.map(vacancy => <WorkCard vacancy = {vacancy} key={vacancy.id}/>)}
      {vacancies.items.length === 0 && <h1>No data was found!!!</h1>}
      {children}
    </div>
  )
}