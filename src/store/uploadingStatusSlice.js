import {createSlice} from "@reduxjs/toolkit"

const initialState = false
const uploadingStatusSlice = createSlice({
    name: "uploadingStatus",
    initialState,
    reducers: {
        startUploading: (state)=>state = true,
        endUploading: (state)=>state = false,
    }
})

export default uploadingStatusSlice.reducer
export const {startUploading,endUploading} = uploadingStatusSlice.actions