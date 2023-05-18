import  './editVacancy.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import EditForm from '../../components/editForm/EditForm';
import { vacancy } from '../../models/vacancy';

export default function EditVacancy() {

  return (
    <>
      <Topbar/>
      <div className="editContainer">
        <Sidebar/>
        <Feed enableCards = {false}>
<EditForm vacancy = {vacancy}/>
        </Feed>
        <Rightbar disableCategory = {true}/>
      </div>
    </>
  )
}
