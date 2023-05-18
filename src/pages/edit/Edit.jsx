<<<<<<< Updated upstream:src/pages/edit/Edit.jsx
import  './edit.css'
import {useNavigate } from "react-router-dom";
=======
import  './editVacancy.css'
>>>>>>> Stashed changes:src/pages/editVacancy/EditVacancy.jsx
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import EditForm from '../../components/editForm/EditForm';
import { vacancy } from '../../models/vacancy';

<<<<<<< Updated upstream:src/pages/edit/Edit.jsx
export default function Edit() {
 
    //const vacancy = JSON.parse(localStorage.getItem("vacancy"));
  //  const vacancy = JSON.parse(localStorage.getItem("vacancy"));
=======
export default function EditVacancy() {
>>>>>>> Stashed changes:src/pages/editVacancy/EditVacancy.jsx
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
