import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    searchHistory: [],
    data: {}
}

const authSice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.status = true
            state.data = action.payload
        },
        logout: (state)=>{
            state.status = false
            state.data = {}
        },
        updateSearchHistory: (state,action)=>{
            state.searchHistory = action.payload
        }
    }
})

export const {login,logout,updateSearchHistory} = authSice.actions
export default authSice.reducer