import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
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
        }
    }
})

export const {login,logout} = authSice.reducer
export default authSice.actions