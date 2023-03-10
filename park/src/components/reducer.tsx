import { Action } from "../@types/Action";
import { InitialReducer } from "../@types/initialReducer";

const initial:InitialReducer={
    alloted:[{name:'Ashu',car_name:'Swift',car_number:'1265',space_number:1,parking_hrs:'2'}],
    free:[0,2,3,4,5,6,7,8,9,10]
}

const MyReducer=(state=initial,action:Action)=>{

    switch(action.type){
        case "Add":{
            console.log("action.payload is",action.payload);
            const alloted=[...state.alloted,action.payload];
            const free=state.free.filter((el)=>{
                return el!==action.payload.space_number
            })
            console.log("free after doing adding thing",free);
            return{...state,alloted,free};
        }
        case "Delete":{
            console.log("inside reducer delete")
            let alloted=state.alloted.filter(ele=>{
                return ele.space_number!==action.payload.space_number
            })
            let free=[...state.free,action.payload.space_number]
            return {...state,alloted,free}
        }
        default:{
            return state;
        }
    }
}

export default MyReducer;