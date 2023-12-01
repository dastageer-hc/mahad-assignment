import './dashboard.css';

import ReactApexChart from 'react-apexcharts';


// charts config
// --------------
// Total Cost 

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
        height: 2,
        toolbar: {
            show: false,
        },
        theme: {
            palette: 'palette4',
          },
    },
    plotOptions: {
        bar: {
          colors: {
            ranges: [{
              color: '#2196F4', 
            }],
          },},
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },

}}

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
                <div className='h-fit' style={{ height: '5rem' }}>
                    <ReactApexChart options={chartOptionsTotalCosts} 
                    series={chartDataTotalCosts} type='bar'
                      height='200' />

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

                <div className='h-fit' style={{ height: '5rem' }}>
                    <ReactApexChart options={chartOptionsTotalCosts} 
                    series={chartDataTotalCosts} type='bar'
                      height='200' />

                </div>
            </div>
            <div className="div8 card-container bg-white drop-shadow-md flex flex-col"><section className="header w-full h-fit flex items-center justify-between px-5 pt-3">
                <span className='font-bold text-base'>Inspection Submissions</span>
                <span className='text-sky-500 text-sm cursor-pointer flex justify-end text-right'>View Reports</span>
            </section>

            <div className='h-fit' style={{ height: '5rem' }}>
                    <ReactApexChart options={chartOptionsTotalCosts} 
                    series={chartDataTotalCosts} type='bar'
                      height='200' />

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

                <div className='h-fit' style={{ height: '5rem' }}>
                    <ReactApexChart options={chartOptionsFuelCosts} 
                    series={chartDataFuelCosts} type='bar'
                      height='200' />

                </div>
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