import './App.css'
import { useState } from 'react'
import { Principal } from './components/Principal.jsx'
import { SelecterButton } from './components/SelecterButton.jsx'
import {SideBar} from './components/SideBar.jsx'

function App() {
     const activated="fixed inset-0 flex items-center justify-center z-50 ml-[150px]";
     const desactivated="hidden";
     const [modal,setModal] = useState (desactivated);
  
    const clickAdd=()=>{
     setModal(activated);
    }

  const unClickAdd=()=>{
     setModal(desactivated);
    }
  return (
    <>
    <div className='flex'>
    <SideBar fmodal={clickAdd}/>
    <Principal modal={modal} dmodal={unClickAdd}/>
    </div>
    </>
  )
}

export default App
