import './Sidebar.css';
import headShot from '../../assets/headshot.jpg'

// menu icon imports 
import { LuChevronDown } from "react-icons/lu";
import { AiFillDashboard } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsExclamationDiamondFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { BsFillBoxFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";

const menuItems = [
    { icon: <AiFillDashboard/>, title: "Dashboard", is_expandable: false },
    { icon: <FaCar />, title: "Vehicle", is_expandable: true },
    { icon: < LuComputer />, title: "Equipment", is_expandable: true },
    { icon: <IoCheckmarkCircleSharp  />, title: "Inspections", is_expandable: true },
    { icon: <BsExclamationDiamondFill  />, title: "Issues", is_expandable: true },
    { icon: <FaBell />, title: "Reminders", is_expandable: true },
    { icon: <FiTool />, title: "Service", is_expandable: true },
    { icon: <BsFillFuelPumpFill  />, title: "Fuel", is_expandable: true },
    { icon: <IoMdContacts />, title: "Contacts & Users", is_expandable: true },
    { icon: <BsFillBoxFill />, title: "Parts & Inventory", is_expandable: true },
    { icon: <FaMapMarkerAlt  />, title: "Places", is_expandable: true },
    { icon: <FaChartPie  />, title: "Reports", is_expandable: true },
    { icon: <FaBoxesStacked  />, title: "Integrations", is_expandable: true },
];


function Sidebar() {

    return (<>

        <section className='mainSidebarContainer'>
            <div className='profile-section'>
                <div className="name-container">
                    <span className='header'><b>Hooli Dynamic <LuChevronDown /></b></span>
                    <span className='sub-header text-gray-300'>Jordan Finch</span>

                </div>

                <div className='image-container'>
                    <img src={headShot} width={50} alt="headshot" />
                </div>
            </div>

            <div className='menu-section-container'>
               {menuItems.map((menu, i)=>{
                return <>{
                    <div key={i} className={`menu-item-container text-gray-100 ${(menu.title =='Dashboard' ? 'active-menu': '')}`} >
                        <div className='menu-item' >
                            <span className='menu-icon'>
                                { (typeof menu?.icon !='string' ? menu?.icon : null)}
                            </span>
                            <span className='menu-title'>
                                {menu.title}

                                {(menu?.is_expandable ? <span className='expand-arrow'>
                                    <LuChevronDown />
                                </span> : null )}
                                
                            </span>
                        </div>
                    </div>
                }</>
               })}
            </div>
        </section>
    
    </>)
}

export default Sidebar