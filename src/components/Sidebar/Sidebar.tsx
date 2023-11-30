import './Sidebar.css';
import { LuChevronDown } from "react-icons/lu";
import { AiFillDashboard } from "react-icons/ai";

// menu icon imports 

const menuItems = [
    { icon: <AiFillDashboard/>, title: "Dashboard" },
    { icon: "vehicle", title: "Vehicle" },
    { icon: "equipment", title: "Equipment" },
    { icon: "inspections", title: "Inspections" },
    { icon: "issues", title: "Issues" },
    { icon: "reminders", title: "Reminders" },
    { icon: "service", title: "Service" },
    { icon: "fuel", title: "Fuel" },
    { icon: "contacts", title: "Contacts & Users" },
    { icon: "parts", title: "Parts & Inventory" },
    { icon: "places", title: "Places" },
    { icon: "reports", title: "Reports" },
    { icon: "integrations", title: "Integrations" },
  ];
  

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

            <div className='menu-section-container'>
                {menuItems.map((menu)=><div>{menu.icon}{ menu.title}</div>)}
            </div>
        </section>
    
    </>)
}

export default Sidebar