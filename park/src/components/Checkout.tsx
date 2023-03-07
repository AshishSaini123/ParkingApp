
import React from "react";
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {useParams} from "react-router-dom"
import { InitialReducer } from "../@types/initialReducer";
import { User } from "../@types/User";
import { DelAction } from "./action";
import "../styles/Checkout.css"
type para={
    index?:number;
}
const Checkout:React.FC=()=>{

    const[chk_out_car,setCar]=useState<User>({name:'',car_name:'',car_number:'',space_number:0});
    const [status,setStatus]=useState<Boolean>(false);
    const [loading,setLoading]=useState<Boolean>(false);
    const [money,setMoney]=useState<number>(0);

    const param:para=useParams();


   
    const dispatch=useDispatch();
    const data:InitialReducer=useSelector<InitialReducer,InitialReducer>((state:InitialReducer)=>{
        return state;
    })

    const filter=()=>{
        
        let checkout_car=data.alloted.filter(ele=>{
            return ele.space_number==param.index;
        })
       
        setCar(checkout_car[0]);
        
        if(typeof checkout_car[0].parking_hrs==="string"){
            let total_hr:number=parseInt(checkout_car[0].parking_hrs);
            let cost;
            if(total_hr>2){
                cost=(total_hr-2)*10+10;
            }
            else{
                cost=10;
            }
            setMoney(cost);
        }
        else{
            setMoney(0);
        }
    }

    useEffect(() => {
       filter()
    }, [])

    const handleClick=()=>{
        setLoading(true);
        setStatus(true);
        setTimeout(()=>{
            setLoading(false);
        },1000)
        DelAction(chk_out_car,dispatch)();
    }

   
    return (
        <div className="status_container">
            <h1>Checkout</h1>
            {status?
            <div>
                {loading?<h4>...loading</h4>:<h3>You have paid the bill now you can take out your car....Thank you</h3>}
            </div>:
            <div>
                <h3>{`Hello ${chk_out_car?.name}...We hope you had a good parking experience with us...All you need to pay ${money}$ to us for this parking`}</h3>
                <button onClick={handleClick}>Pay Now</button>    
            </div>}
        </div>
    )
}

export default Checkout;