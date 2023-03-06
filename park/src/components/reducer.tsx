import { Action } from "../@types/Action";
import { InitialReducer } from "../@types/initialReducer";

const initial:InitialReducer={
    alloted:[{name:'Ashu',car_name:'Swift',car_number:'1265',space_number:1}],
    free:[2,3,4,5,6,7,8,9,10]
}

const MyReducer=(state=initial,action:Action)=>{

    switch(action.type){
        case "Add":{
            const alloted=[...state.alloted,action.payload];
            const free=state.free.filter((el)=>{
                return el!==action.payload.space_number
            })
            return{...state,alloted,free};
        }
        case "Delete":{
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