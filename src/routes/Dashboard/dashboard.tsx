import './dashboard.css';

import ReactApexChart from 'react-apexcharts';

// image imports 

import User1 from '../../assets/Users/user1.jpg';
import User2 from '../../assets/Users/user2.jpg';
import User3 from '../../assets/Users/user3.jpg';
import User4 from '../../assets/Users/user4.jpg';
import User5 from '../../assets/Users/user5.jpg';



//---- charts config ----
const chartOptionsTotalCosts: any = {
    chart: {
        type: 'bar',
        height: 2,
        toolbar: {
            show: false,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    dataLabels: {
        enabled: false
    },

};

const chartDataTotalCosts = [
    {
        name: 'series-1',
        data: [30, 40, 35, 50, 60, 50],
    },
];

// fuel costs

const chartOptionsFuelCosts: any = {
    chart: {
        type: 'bar',
        innerHeight: 'auto',
        toolbar: {
            show: false,
        },
        colors: ["#FCCF31", "#17ead9", "#f02fc2"],
    },

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#26a5a5'],

}

const chartDataFuelCosts = [
    {
        name: 'series-1',
        data: [30, 40, 35, 50, 60, 50],

    },
];



function Dashboard() {
    return <>
        <div className="stat-cards-container min-w-fit ">
            {/* Numbered Info */}
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

            {/* Numbered Info */}
            <div className="div2 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Vehicles</span>
                    <span className='text-sky-500 text-sm cursor-pointer text-right'>View Reports</span>
                </section>


                <div className='grow w-full  flex flex-col border-b-neutral-200 border-b-2  pt-3 '>
                    <div className=' w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Active
                        </span>
                        <span className='text-sm bg-green-500 px-2 rounded-full w-8 text-white'>
                            65
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Inactive
                        </span>
                        <span className='text-sm  px-2 w-8 bg-yellow-500 rounded-full text-white'>
                            13
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5'>
                        <span>
                            In Shop
                        </span>
                        <span className='text-sm  px-2 bg-red-400  w-8 flex justify-center rounded-full text-white'>
                            4
                        </span>
                    </div>



                </div>


            </div>


            {/* Graph */}

            <div className="div3 card-container bg-white drop-shadow-md flex flex-col ">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Total Costs</span>
                    <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
                </section>
                <div className='chart-container' style={{ width: '100%', maxHeight: '60%' }}>
                    <ReactApexChart options={chartOptionsTotalCosts}
                        series={chartDataTotalCosts} type='bar'
                          />

                </div>
            </div>

            {/* Numbered Info */}
            <div className="div4 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Equipment Status</span>
                </section>

                <div className='grow w-full  flex flex-col border-b-neutral-200 border-b-2  pt-3 '>
                    <div className=' w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            In-Service
                        </span>
                        <span className='text-sm bg-green-500 px-2 rounded-full w-8 text-white'>
                            21
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Out-of-Service
                        </span>
                        <span className='text-sm flex justify-center  px-2 w-8 bg-yellow-500 rounded-full text-white'>
                            3
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5'>
                        <span>
                            Disposed
                        </span>
                        <span className='text-sm  px-2 bg-gray-300  w-8 flex justify-center rounded-full text-white'>
                            1
                        </span>
                    </div>



                </div>


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

                <div className='grow w-full  flex flex-col border-b-neutral-200 border-b-2  pt-3 '>
                    <div className=' w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Open
                        </span>
                        <span className='text-sm bg-green-500 px-2 rounded-full w-8 text-white'>
                            53
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Waiting for Parts
                        </span>
                        <span className='text-sm  px-2 w-8 bg-gray-500 rounded-full text-white'>
                            45
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5'>
                        <span>
                            In Progress
                        </span>
                        <span className='text-sm  px-2 bg-yellow-500  w-8 flex justify-center rounded-full text-white'>
                            14
                        </span>
                    </div>



                </div>
            </div>
            <div className="div7 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Service Costs</span>
                </section>

                <div  className='chart-container' style={{ width: '100%', height: '60%' }}>
                    <ReactApexChart options={chartOptionsTotalCosts}
                        series={chartDataTotalCosts} type='bar'
                         />

                </div>
            </div>
            <div className="div8 card-container bg-white drop-shadow-md flex flex-col"><section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                <span className='font-bold text-base'>Inspection Submissions</span>
                <span className='text-sky-500 text-sm cursor-pointer flex justify-end text-right'>View Reports</span>
            </section>

                <div  className='chart-container' style={{ width: '100%', height: '60%' }}>

                    <ReactApexChart options={chartOptionsTotalCosts}
                        series={chartDataTotalCosts} type='bar'
                    />

                </div>
            </div>
            <div className="div9 card-container bg-white drop-shadow-md flex flex-col"><section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                <span className='font-bold text-base'>Vehicle Location</span>
                <span className='text-sky-500 text-sm cursor-pointer'>All Places</span>



            </section>

                <div className='grow w-full  flex flex-col border-b-neutral-200 border-b-2  pt-3 '>
                    <div className=' w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            Warehouse
                        </span>
                        <span className='text-sm  bg-gray-400 px-2 rounded-full w-8 text-white'>
                            21
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5 border-b-neutral-100  border-b-2'>
                        <span>
                            In-Transit
                        </span>
                        <span className='text-sm flex justify-center  px-2 w-8  bg-gray-400 rounded-full text-white'>
                            3
                        </span>
                    </div>
                    <div className='w-full h-14 px-6 flex items-center justify-between py-5'>
                        <span>
                            In-Depot
                        </span>
                        <span className='text-sm  px-2 bg-gray-400  w-8 flex justify-center rounded-full text-white'>
                            1
                        </span>
                    </div>



                </div>
            </div>
            <div className="div10 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Inventory</span>
                </section>

                <div className='w-full flex items-center justify-around grow'>

                    <section className='number-pallette 
                        flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-yellow-400 '>
                            6
                        </div>
                        <div className="subtext text-gray-400">
                            In Stock
                        </div>
                    </section>

                    <section className='number-pallette 
                        flex flex-col h-full justify-center gap-5 items-start items-center '>
                        <div className='number-info text-5xl text-red-400 '>
                            3
                        </div>
                        <div className="subtext text-gray-400">
                            Out of Stock
                        </div>
                    </section>
                </div>
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
                            Closed
                        </div>
                    </section>

                </div>
            </div>
            <div className="div12 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Fuel Costs</span>
                    <span className='text-sky-500 text-sm cursor-pointer'>View Reports</span>
                </section>

                <div className='chart-container' style={{ width: '100%', height: '60%' }}>

                    <ReactApexChart options={chartOptionsFuelCosts}
                        series={chartDataFuelCosts} type='bar'
                       />

                </div>

            </div>

            {/* Comments  */}
            {/* header */}
            <div className="div13 card-container bg-white drop-shadow-md flex flex-col">
                <section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                    <span className='font-bold text-base'>Recent Comments</span>
                </section>

                    {/* users comment list  */}
                <section className='mt-9 flex items-start flex-col sm:flex-row max-w-full'>
                    <div className="user-details-section  grow flex max-w-full">

                        <div className="w-14 h-14 rounded-full overflow-hidden ml-5  mr-4">
                            <img src={User1} className='w-full h-full object-cover object-center'  alt="User Image"/>
                        </div>

                        <div className="comment-block flex flex-col justify-center">
                            <span className="comment-header pr-5 overflow-hidden whitespace-wrap overflow-ellipsis">Martha Godwin commented on <span className='text-sky-500 text-sm cursor-pointer text-right'>Service Entry: #44</span></span>
                            <span className="comment-block text-sm text-slate-500  ">Resolved GPS sync for accurate vehicle tracking</span>

                        </div>

                    </div>

                    <div className='mt-1 pr-5'>
                        <span className='comment-block text-sm text-slate-500'> 18 minutes ago</span>
                    </div>

                    
                </section>


                <section className='mt-5 flex items-start flex-col sm:flex-row'>
                    <div className="user-details-section  grow flex">

                        <div className="w-14 h-14 rounded-full overflow-hidden ml-5  mr-4">
                            <img src={User2} className='w-full h-full object-cover object-center'  alt="User Image"/>
                        </div>

                        <div className="comment-block flex flex-col justify-center">
                            <span className="comment-header"> Emma Thompson commented on
                             <span className='text-sky-500 text-sm cursor-pointer text-right'> Service Entry: #34</span></span>
                            <span className="comment-block text-sm text-slate-500 ">
                            Fixed connectivity glitch for enhanced fleet coordination</span>

                        </div>

                    </div>

                    <div className='mt-1 pr-5'>
                        <span className='comment-block text-sm text-slate-500'> 29 minutes ago</span>
                    </div>

                    
                </section>
                <section className='mt-5 flex items-start flex-col sm:flex-row'>
                    <div className="user-details-section  grow flex">

                        <div className="w-14 h-14 rounded-full overflow-hidden ml-5  mr-4">
                            <img src={User3} className='w-full h-full object-cover object-center'  alt="User Image"/>
                        </div>

                        <div className="comment-block flex flex-col justify-center">
                            <span className="comment-header">Bond James commented on <span className='text-sky-500 text-sm cursor-pointer text-right'> Service Entry: #44</span></span>
                            <span className="comment-block text-sm text-slate-500 ">
                            Addressed login authentication, enhancing system security</span>

                        </div>

                    </div>

                    <div className='mt-1 pr-5'>
                        <span className='comment-block text-sm text-slate-500'> 6 minutes ago</span>
                    </div>

                    
                </section>
                <section className='mt-5 flex items-start flex-col sm:flex-row'>
                    <div className="user-details-section  grow flex">

                        <div className="w-14 h-14 rounded-full overflow-hidden ml-5  mr-4">
                            <img src={User4} className='w-full h-full object-cover object-center'  alt="User Image"/>
                        </div>

                        <div className="comment-block flex flex-col justify-center">
                            <span className="comment-header pr-5">Alex Brown commented on
                             <span className='text-sky-500 text-sm cursor-pointer text-right'> Service Entry: #14</span></span>
                            <span className="comment-block text-sm text-slate-500 ">
                            Fixed mileage tracking bug, ensuring accurate reports</span>

                        </div>

                    </div>

                    <div className='mt-1 pr-5'>
                        <span className='comment-block text-sm text-slate-500'> 8 minutes ago</span>
                    </div>

                    
                </section>
                <section className='mt-5 flex items-start flex-col sm:flex-row'>
                    <div className="user-details-section  grow flex">

                        <div className="w-14 h-14 rounded-full overflow-hidden ml-5  mr-4">
                            <img src={User5} className='w-full h-full object-cover object-center'  alt="User Image"/>
                        </div>

                        <div className="comment-block flex flex-col justify-center">
                            <span className="comment-header">Jackson Smith commented on <span className='text-sky-500 text-sm cursor-pointer text-right'>Service Entry: #44</span></span>
                            <span className="comment-block text-sm text-slate-500 ">
                            Solved UI display issue, enhancing user experience.</span>

                        </div>

                    </div>

                    <div className='mt-1 pr-5'>
                        <span className='comment-block text-sm text-slate-500'> 35 minutes ago</span>
                    </div>

                    
                </section>
            </div>


        </div>
    </>
}

export default Dashboard