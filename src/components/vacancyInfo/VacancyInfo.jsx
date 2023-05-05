import './vacancyInfo.css'

export default function VacancyInfo(props) {
  return (
    <div className="vacancyContainer">
<div className="vacancyHeader">
<h1>{props.vacancy.header}</h1>
</div>
<div className="vacancyDescription">
<h2>{props.vacancy.description}</h2>
</div>
    <div className="vacancyCategory">
<h3>{props.vacancy.category.name}</h3>
    </div>
    </div>
  )
}
