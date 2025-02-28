import { createSlice } from "@reduxjs/toolkit";

const init = 0;

const counterReducer = createSlice({
    name : "counter",
    initialState : init,
    reducers : {
        increase : (state)=>{
            return state+1
        },
        decrease : (state)=>{
            return state-1
        }
    }
})

export const {increase,decrease} = counterReducer.actions
export default counterReducer.reducer