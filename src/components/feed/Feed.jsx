import "./feed.css"
import WorkCard from "../../components/workCard/WorkCard"
import { useEffect } from "react"
import { useState } from "react";



export default function Feed({data}) {
 

  return (
    <div className="feedContainer">
      
 {data.map(vacantion => <WorkCard vacantion = {vacantion} key={vacantion.id}/>)}
    </div>
  )
}
