

import React,{useState} from "react";

const UserForm:React.FC=()=>{
    const[spaces,setSpaces]=useState<string>("");

    const handleSubmit=(e:(React.FormEvent<HTMLFormElement>))=>{
        e.preventDefault();
        console.log(1);
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