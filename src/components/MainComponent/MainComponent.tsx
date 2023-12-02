import './MainComponent.css';
import Sidebar from '../Sidebar/Sidebar.tsx';
import Scaffold from '../ScaffoldComponent/Scaffold.tsx';
import { useState } from 'react';

const MainComponent = () => {
  
  // const [toggleValue, toggleSidebar]= useState(window.innerWidth)

  // console.log(toggleValue)

  return(

    <div className="MainComponent flex flex-row">

    <div className='bg-slate-100 sticky h-full relative z-10 top-0 bg-red-50'>
      <Sidebar></Sidebar>

    </div>
    <div className='z-0 relative grow'>
        <Scaffold />
    </div>

  </div>)
};

export default MainComponent;
