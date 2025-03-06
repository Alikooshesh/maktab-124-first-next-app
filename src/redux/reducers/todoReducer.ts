import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";

export interface Itodo{
    id : string,
    title : string
}

export const getAllTodo : any = createAsyncThunk('todo/getAll', async ()=>{
    const resposne = await axios.get('https://66d1843962816af9a4f3ec69.mockapi.io/todo')
    return resposne.data
})

export const addNewTodo : any = createAsyncThunk('todo/add', async ({title} : {title : string})=>{
    const response = await axios.post('https://66d1843962816af9a4f3ec69.mockapi.io/todo' , {
        title
    })

    return response.data

})

export const deleteTodo : any = createAsyncThunk('todo/delete', async ({id}:{id : string})=>{
    await axios.delete(`https://66d1843962816af9a4f3ec69.mockapi.io/todo/${id}`)
    return {id}
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
            .addCase(deleteTodo.pending,(state)=>{
                state.loading = true
            })
            .addCase(deleteTodo.fulfilled,(state , action)=>{
                state.loading = false
                state.error = false
                state.data = state.data.filter(item => item.id !== action.payload.id)
            })
            .addCase(deleteTodo.rejected, (state)=>{
                state.loading = false
                state.error = true
            })
            .addCase(addNewTodo.pending , (state)=>{
                state.loading = true
            })
            .addCase(addNewTodo.fulfilled , (state,action)=>{
                state.loading = false
                state.error = false
                state.data.push(action.payload)
            })
            .addCase(addNewTodo.rejected , (state)=>{
                state.loading = false
                state.error = true
            })
    }
})

export default todoReducer.reducer