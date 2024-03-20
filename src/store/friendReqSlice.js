import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count:0
}
const friendReqSlice = createSlice({
    name:"friendReq",
    initialState,
    reducers:{
        updatePendingReqCount: (state,action)=>{
            state.count = action.payload
        },
        decreasePendingCount:(state)=>{
            --state.count;
        }
    }
})

export const {updatePendingReqCount,decreasePendingCount} = friendReqSlice.actions
export default friendReqSlice.reducer