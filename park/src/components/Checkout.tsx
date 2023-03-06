
import React from "react";
import { useState } from "react";
const Checkout:React.FC=()=>{
    const [status,setStatus]=useState<Boolean>(false);
    const [loading,setLoading]=useState<Boolean>(false);

    const handleClick=()=>{
        setLoading(true);
        setStatus(true);
        setTimeout(()=>{
            setLoading(false);
        },1000)
    }
    return (
        <div>
            {status?
            <div>
                {loading?<h4>...loading</h4>:<h3>You have paid the bill now you can go</h3>}
            </div>:
            <div>
                <h3>{`Your Need to pay ${5} to us`}</h3>
                <button onClick={handleClick}>Pay Now</button>    
            </div>}
        </div>
    )
}

export default Checkout;