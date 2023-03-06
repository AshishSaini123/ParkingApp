import React ,{useState}from "react";
import { User } from "../@types/User";
import { useSelector,useDispatch } from "react-redux";
import { InitialReducer } from "../@types/initialReducer";
import { AddAction } from "./action";
const VehicleDetails:React.FC=()=>{

    const dispatch=useDispatch();
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
        console.log(details);
        
        if(val.free.length===0){
            alert("Parkiing is Full");
        }
        else{
        let index=Math.floor(Math.random()*(val.free.length))-0;
        console.log(val.free[index]);
        setDetails({...details,space_number:val.free[index]});
        AddAction(details,dispatch);
        console.log(val);
        }
    }

    
    return (
        <div>
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