import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";

interface Itodo{
    id : string,
    title : string
}

export const getAllTodo : any = createAsyncThunk('todo/getAll', async ()=>{
    const resposne = await axios.get('https://66d1843962816af9a4f3ec69.mockapi.io/todo')
    return resposne.data
})

interface ItodoState {
    loading : boolean,
    error : boolean,
    data : Itodo[]
}

const init:ItodoState = {
    loading : false,
    error : false,
    data : []
}

const todoReducer = createSlice({
    name : "todo",
    initialState : init,
    reducers : {},
    extraReducers : (builder)=>{
        builder
            .addCase(getAllTodo.pending, (state)=>{
                state.loading = true
            })
            .addCase(getAllTodo.fulfilled, (state,action)=>{
                state.loading = false
                state.error = false
                state.data = action.payload
            })
            .addCase(getAllTodo.rejected, (state)=>{
                state.loading = false
                state.error = true
            })
    }
})

export default todoReducer.reducer