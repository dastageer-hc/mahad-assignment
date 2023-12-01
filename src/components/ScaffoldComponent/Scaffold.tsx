import Topbar from "./Topbar/Topbar"
import './Scaffold.css'
import { Route, Routes } from "react-router-dom"
import Dashboard from "../../routes/Dashboard/dashboard"
function Scaffold() {
    return <>
        <div className="bg-slate-100">
            <div className="sticky top-0 " >
                <Topbar />

            </div>
            <Routes>
                <Route path="/" Component={Dashboard}></Route>
                <Route path="/dashboard" Component={Dashboard}></Route>
            </Routes>
        </div>




    </>
}

export default Scaffold