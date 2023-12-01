import logoHero from '../../../assets/logo-hero.png';

function Topbar(){
    return <>
            {/* Top bar */}
            <div className="topbar-container bg-white min-h-topbarHeight flex items-center">  
                <div className="logo-hero w-14 h-12 ml-5 flex items-start
                 justify-center">
                    <img src={logoHero} alt="Logo" />
                </div>
                
                <div className="search-input-container grow ml-4  ">
                    <input type="seach" name="search"
                     className='border-2  w-4/12 rounded-full border-slate-200 outline-gray-300 h-10 p-3'
                     placeholder="Search Fleetio"/>
                </div>
                <div className="topbar-buttons-container">test</div>

            </div>

          
    </>
}

export default Topbar