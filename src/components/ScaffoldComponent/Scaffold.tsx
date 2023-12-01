import Topbar from "./Topbar/Topbar"
import './Scaffold.css'
import { Route, Routes } from "react-router-dom"
import Dashboard from "../../routes/Dashboard/dashboard"
function Scaffold() {
    return <>
        <div className="bg-slate-100">
            <div className="sticky top-0 z-10 " >
                <Topbar />

            </div>
            <div className="bg-white px-4 h-12 flex items-center border-b-neutral-200 border-b-2">
                <h1 className="text-2xl text-bold ">
                Dashboard
                </h1>
            </div>

            <Routes>
                <Route path="/" Component={Dashboard}></Route>
                <Route path="/dashboard" Component={Dashboard}></Route>
            </Routes>
        </div>




    </>
}

export default Scaffold