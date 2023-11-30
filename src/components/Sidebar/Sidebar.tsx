import './Sidebar.css';
import { LuChevronDown } from "react-icons/lu";

function Sidebar() {

    return (<>

        <section className='mainSidebarContainer'>
            <div className='profile-section'>
                <div className="name-container">
                    <span className='header'><b>Hooli Dynamic <LuChevronDown /></b></span>
                    <span className='sub-header'>Jordan Finch</span>

                </div>

                <div className='image-container'>
                    <img src="/src/assets/headshot.jpg" width={50} alt="headshot" />
                </div>
            </div>
            <div>
            </div>
        </section>
    
    </>)
}

export default Sidebar