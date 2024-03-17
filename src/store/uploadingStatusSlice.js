import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status:false,
    message:""
}
const uploadingStatusSlice = createSlice({
    name: "uploadingStatus",
    initialState,
    reducers: {
        startUploading: (state,action)=>{
            state.status = true
            state.message = action.payload
        },
        endUploading: (state)=>{
            state.status = false
            state.message = ""
        },
    }
})

export default uploadingStatusSlice.reducer
export const {startUploading,endUploading} = uploadingStatusSlice.actions