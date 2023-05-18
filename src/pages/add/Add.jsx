import './add.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import AddForm from '../../components/addForm/AddForm';

<<<<<<< Updated upstream:src/pages/add/Add.jsx
export default function Add() {
  
=======
export default function AddVacancy() {
>>>>>>> Stashed changes:src/pages/addVacancy/AddVacancy.jsx
  return (
    <>
      <Topbar/>
      <div className="addContainer">
        <Sidebar/>
        <Feed enableCards = {false}>
            <AddForm/>
        </Feed>
        <Rightbar disableCategory = {true}/>
      </div>
    </>
  )
}
