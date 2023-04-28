import './add.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import AddForm from '../../components/addForm/AddForm';
import { useEffect } from 'react';

export default function Add() {
  
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
