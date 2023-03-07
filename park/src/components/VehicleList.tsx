


import React from "react";
import{useSelector} from "react-redux"
import { useState } from "react";
import { InitialReducer } from "../@types/initialReducer";

const VehicleList:React.FC=()=>{
    const [list,setList]=useState<InitialReducer|null>(null)
    const data:InitialReducer=useSelector<InitialReducer,InitialReducer>((state:InitialReducer)=>{
        return state;
    })
    console.log(data);
    return (
        <div>
            <h3>{`The previous car is assigned at space number ${data.alloted[data.alloted.length-1].space_number}`}</h3>
            <h3> All Vehicle Details</h3>

            <div>
                <table>
                {data.alloted.map(ele=>{
                    return (
                        <tr>
                            <td>{ele.space_number   }</td>
                            <td>{ele.name}</td>
                            <td>{ele.car_name}</td>
                            <td>{ele.car_number}</td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </div>
    )
}

export default VehicleList;