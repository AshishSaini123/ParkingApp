import React from "react";
import {BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import UserForm from "../components/UserForm";
import { VehicleDetails } from "../components/VehicleDetails";

const AllRoutes:React.FC=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserForm />}/>
                <Route path="/details" element={<VehicleDetails />}/>
                <Route path="/checkOut" element={<div>CheckOut</div>}/>
                <Route path="*" element={<div>Error 404 No Page found.....</div>} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;