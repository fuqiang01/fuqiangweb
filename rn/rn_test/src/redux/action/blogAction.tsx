import { SETBLOG } from "./actionTypes";
import {action } from '../../types';


export function createSetBlogAction(blogData:any): action{
    return {
        type: SETBLOG,
        payload: blogData
    }
}