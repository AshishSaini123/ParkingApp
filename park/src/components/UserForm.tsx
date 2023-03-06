

import React,{useState} from "react";
import {useSelector} from "react-redux";
import { InitialReducer } from "../@types/initialReducer";
import {useNavigate} from "react-router-dom";
const UserForm:React.FC=()=>{
    const[spaces,setSpaces]=useState<string>("");

    const state:InitialReducer=useSelector<InitialReducer,InitialReducer>((sta:InitialReducer)=>{
        return sta
    })
    const nav=useNavigate();
    const handleSubmit=(e:(React.FormEvent<HTMLFormElement>))=>{
        e.preventDefault();
        if(state.free.length<parseInt(spaces)){
            alert("Parking is Full");
        }
        else{
            nav("/details");
        }
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>setSpaces(e.target.value)} placeholder="Enter spaces"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;