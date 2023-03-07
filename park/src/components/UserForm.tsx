

import React,{useState} from "react";
import {useSelector} from "react-redux";
import { InitialReducer } from "../@types/initialReducer";
import {useNavigate} from "react-router-dom";
import "../styles/inputForm.css"
const UserForm:React.FC=()=>{
    const[spaces,setSpaces]=useState<string>("");

    const state:InitialReducer=useSelector<InitialReducer,InitialReducer>((sta:InitialReducer)=>{
        return sta
    })
    const nav=useNavigate();
    const handleSubmit=(e:(React.FormEvent<HTMLFormElement>))=>{
        e.preventDefault();
        if(state.free.length<parseInt(spaces)){
            alert("Not Enough space is available");
        }
        else{
            nav("/details");
        }
    }

    return (
        <div className="input_container">
            <div >
                <h1>Enter Number of Spaces</h1>
                <form className="input_box" onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" onChange={(e)=>setSpaces(e.target.value)} placeholder="Enter spaces"/>
                    <button className="submit_btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserForm;