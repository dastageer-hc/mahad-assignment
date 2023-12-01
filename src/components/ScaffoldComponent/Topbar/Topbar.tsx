import { MdOutlineQuestionMark } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import logoHero from '../../../assets/logo-hero.png';

function Topbar(){
    return <>
            {/* Top bar */}
            <div className="topbar-container bg-white border-b-neutral-300 border-b-2 min-h-topbarHeight flex items-center">  
                
                <div className="logo-hero w-14 h-12 ml-5 flex items-start
                 justify-center">
                    <img src={logoHero} alt="Logo" />
                </div>
                
                <div className="search-input-container grow ml-4  ">
                    <input type="seach" name="search"
                     className='border-2  w-4/12 rounded-full border-slate-200 outline-gray-300 h-10 p-3'
                     placeholder="Search Fleetio"/>
                </div>

                <div className="topbar-buttons-container">
                    
                    <button className="rounded-full
                     border-2  
                      focus:outline-none focus:ring
                       focus:border-blue-300 p-1 mr-3" 
                       >
                        <MdOutlineQuestionMark className="text-slate-400
                         color-slate-300 w-6 h-6" />
                    </button>

                    <button className="rounded-full
                     border-2  
                      focus:outline-none focus:ring
                       focus:border-blue-300 p-1 mr-4" 
                       >
                        <FaPlus className="text-slate-400
                         color-slate-300 w-6 h-6" />
                    </button>
                 </div>

            </div>

          
    </>
}

export default Topbar



