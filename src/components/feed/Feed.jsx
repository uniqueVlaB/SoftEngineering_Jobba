import "./feed.css"
import WorkCard from "../../components/workCard/WorkCard"
import { useEffect } from "react"
import { useState } from "react";



export default function Feed({data: vacantions = {items: []}}, label = {show:false}) {

  return (
    <div className="feedContainer">
      {label.show && <h2>Your request: "{label.text}"</h2>}
      {vacantions.items.length !== 0 && vacantions.items.map(vacantion => <WorkCard vacantion = {vacantion} key={vacantion.id}/>)}
      {vacantions.items.length === 0 && <h1>No data was found!!!</h1>}

    </div>
  )
}
