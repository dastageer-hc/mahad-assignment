import './dashboard.css'
function Dashboard() {
    return <>
        <div className="stat-cards-container min-w-fit ">
            <div className="div1 card-container bg-white drop-shadow-md flex flex-col ">

                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base '>Service Reminders</span>
                </section>

                <div className='w-full flex items-center justify-around grow'>

                    <section className='number-pallette 
                    flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-yellow-400 '>
                            5
                        </div>
                        <div className="subtext text-gray-400">
                            Due Soon
                        </div>
                    </section>

                    <section className='number-pallette 
                    flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-red-400 '>
                            9
                        </div>
                        <div className="subtext text-gray-400">
                            Overdue
                        </div>
                    </section>
                </div>

            </div>

            <div className="div2 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Vehicles</span>
                    <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
                </section>
            </div>
            <div className="div3 card-container bg-white drop-shadow-md flex flex-col ">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Total Costs</span>
                    <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
                </section>
            </div>
            <div className="div4 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Equipment Status</span>
                </section>
            </div>
            <div className="div5 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>All Faults</span>
                </section>

                <div className='w-full flex items-center justify-around grow'>

                    <section className='number-pallette flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-yellow-400 '>
                            3
                        </div>
                        <div className="subtext text-gray-400">
                            Open
                        </div>
                    </section>

                    <section className='number-pallette 
                        flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-red-400 '>
                            5
                        </div>
                        <div className="subtext text-gray-400">
                            Fixed
                        </div>
                    </section>

                </div>
            </div>
            <div className="div6 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Active Work Orders</span>
                </section>
            </div>
            <div className="div7 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Service Costs</span>
                </section>
            </div>
            <div className="div8 card-container bg-white drop-shadow-md flex flex-col"><section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                <span className='font-bold text-base'>Inspection Submissions</span>
                <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
            </section>
            </div>
            <div className="div9 card-container bg-white drop-shadow-md flex flex-col"><section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                <span className='font-bold text-base'>Vehicle Location</span>
                <span className='text-sky-500 text-sm cursor-pointer'>All Places</span>
            </section>
            </div>
            <div className="div10 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Inventory</span>
                </section>
            </div>
            <div className="div11 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Open Issues</span>
                </section>

                <div className='w-full flex items-center justify-around grow'>

                    <section className='number-pallette flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-yellow-400 '>
                            12
                        </div>
                        <div className="subtext text-gray-400">
                            Open
                        </div>
                    </section>

                    <section className='number-pallette 
                            flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-red-400 '>
                            5
                        </div>
                        <div className="subtext text-gray-400">
                            Overdue
                        </div>
                    </section>

                </div>
            </div>
            <div className="div12 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Fuel Costs</span>
                    <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
                </section>
            </div>
            <div className="div13 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Recent Comments</span>
                </section>
            </div>


        </div>
    </>
}

export default Dashboard