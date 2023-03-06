import {Dispatch} from "redux"
import { User } from "../@types/User"
const AddAction=(User:User)=>{
    return (dispatch:Dispatch)=>{
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