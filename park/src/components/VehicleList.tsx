


import React from "react";
import{useSelector} from "react-redux"
import { useState } from "react";
import { InitialReducer } from "../@types/initialReducer";
// import { DelAction } from "./action";
import { User } from "../@types/User";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom";
const VehicleList:React.FC=()=>{
    // const dispatch=useDispatch();
    const nav=useNavigate();
    const data:InitialReducer=useSelector<InitialReducer,InitialReducer>((state:InitialReducer)=>{
        return state;
    })
    console.log(data);
    const handleClick=(i:number)=>{
        nav(`/checkout/${i}`)
        // DelAction(i,dispatch)();
    }
    return (
        <div>
            <h3>{`The previous car is assigned at space number ${data.alloted[data.alloted.length-1].space_number}`}</h3>
            <h3> All Vehicle Details</h3>

            <div>
                <table>
                    <tr>
                        <th>Space_Number</th>
                        <th>Name</th>
                        <th>Car_Name</th>
                        <th>Car_Number</th>
                        <th>Time</th>
                    </tr>
                {data.alloted.map((ele)=>{
                    return (
                        <tr>
                            <td>{ele.space_number}</td>
                            <td>{ele.name}</td>
                            <td>{ele.car_name}</td>
                            <td>{ele.car_number}</td>
                            <td><button onClick={()=>handleClick(ele.space_number)}>Checkout</button></td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </div>
    )
}

export default VehicleList;