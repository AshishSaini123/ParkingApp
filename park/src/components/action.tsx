
import { Dispatch } from "redux";
import { User } from "../@types/User"
const AddAction=(User:User,dispatch:Dispatch)=>{
    return ()=>{
        dispatch({
            type:"Add",
            payload:User
        })
    }
}

const DelAction=(id:User,dispatch:Dispatch)=>{
    console.log("inside delete")
    return ()=>{
        dispatch({
        type:"Delete",
        payload:id
    })
}

}

export {AddAction,DelAction}