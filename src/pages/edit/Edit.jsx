import  './edit.css'
import {useNavigate } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import EditForm from '../../components/editForm/EditForm';

export default function Edit() {
    const vacancy = JSON.parse(localStorage.getItem("vacancy"));
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
