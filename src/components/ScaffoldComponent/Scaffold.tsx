import Topbar from "./Topbar/Topbar"
import './Scaffold.css'
import { Route, Routes } from "react-router-dom"
import Dashboard from "../../routes/Dashboard/dashboard"
function Scaffold() {
    return <>
        <div className=" bg-slate-200 min-h-screen">
            <Topbar />
            
            <Routes>
                <Route path="/dashboard" Component={Dashboard}></Route>
            </Routes>
        </div>

    

    </>
}

export default Scaffold