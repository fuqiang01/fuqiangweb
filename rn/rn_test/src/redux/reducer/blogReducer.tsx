import { action } from "../../types";
import { SETBLOG } from "../action/actionTypes";

export default function blogReducer(state: any[] = [], action: action): any[]{
    switch(action.type){
        case SETBLOG:
            return action.payload;
        default:
            return state;
    }
}