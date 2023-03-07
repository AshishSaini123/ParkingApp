import React ,{useEffect, useState}from "react";
import { User } from "../@types/User";
import { useSelector,useDispatch } from "react-redux";
import { InitialReducer } from "../@types/initialReducer";
import { AddAction } from "./action";
import{useNavigate} from "react-router-dom";
import "../styles/VehicleDetails.css"
const VehicleDetails:React.FC=()=>{

    const dispatch=useDispatch();
    const nav=useNavigate();
    const [details,setDetails]=useState<User>({name:'',car_name:'',car_number:'',space_number:0});
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value});
    }

    const val:InitialReducer=useSelector<InitialReducer,InitialReducer>((state:InitialReducer)=>{
        return state;
    })

    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(val.free.length===0){
            alert("Parkiing is Full");
        }
        else{
        
        console.log("free is now change",val.free);
        let index=Math.floor(Math.random()*(val.free.length));
        console.log("val.free[index] is " ,val.free[index])
        details.space_number=val.free[index];
        setDetails(details);
        console.log("details after space is",details);
        AddAction(details,dispatch)();
        nav("/vehiclelist")
        }
    }

    
    return (
        <div className="details_page">
            <h1>Enter Vehicle Details</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Enter Name" />
                <input type="text" name="car_name" onChange={(e)=>handleChange(e)} placeholder="Enter Car Name" />
                <input type="text" name="car_number"onChange={(e)=>handleChange(e)} placeholder="Enter Car number" />
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}


export {VehicleDetails};