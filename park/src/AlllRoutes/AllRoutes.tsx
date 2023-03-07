import React from "react";
import {BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Checkout from "../components/Checkout";
import UserForm from "../components/UserForm";
import { VehicleDetails } from "../components/VehicleDetails";
import VehicleList from "../components/VehicleList";

const AllRoutes:React.FC=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserForm />}/>
                <Route path="/details" element={<VehicleDetails />}/>
                <Route path="/vehiclelist" element={<VehicleList/>}/>
                <Route path="/checkOut" element={<Checkout/>}/>
                <Route path="*" element={<div>Error 404 No Page found.....</div>} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;