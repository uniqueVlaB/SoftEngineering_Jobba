import './vacancyPage.css'

import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import VacancyInfo from '../../components/vacancyInfo/VacancyInfo';


export default function VacancyPage() {
 
    const vacancy = JSON.parse(sessionStorage.getItem("vacancy"))
  return (
    <>
      <Topbar/>
      <div className="editContainer">
        <Sidebar/>
        <Feed enableCards = {false}>
<VacancyInfo vacancy = {vacancy}/>
        </Feed>
        <Rightbar disableCategory = {true}/>
      </div>
    </>
  )
}
