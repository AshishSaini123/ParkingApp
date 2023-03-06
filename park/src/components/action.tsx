
import { Dispatch } from "redux";
import { User } from "../@types/User"
const AddAction=(User:User,dispatch:Dispatch)=>{
    console.log("inside add");
    return ()=>{
        dispatch({
            type:"Add",
            payload:User
        })
    }
}

const DelAction=(id:User)=>{
    return (dispatch:Dispatch)=>{
        dispatch({
        type:"Delete",
        payload:id
    })
}

}

export {AddAction,DelAction}