import { User } from "./User"

interface Add{
    type:string,
    payload:User
}
interface Del{
    type:string,
    payload:User,
}

export type Action= Add | Del