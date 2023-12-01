import './MainComponent.css';
import Sidebar from '../Sidebar/Sidebar.tsx';
import Scaffold from '../ScaffoldComponent/Scaffold.tsx';

const MainComponent = () => (
  <div className="MainComponent flex flex-row">

    <div className='bg-slate-100 sticky h-full top-0 bg-red-50'>
      <Sidebar></Sidebar>

    </div>
    <div className='grow'>
        <Scaffold />
    </div>

  </div>
);

export default MainComponent;
