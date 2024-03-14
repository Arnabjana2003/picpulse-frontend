import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice.js"
import uploadingStatusReducer from "../store/uploadingStatusSlice.js"

const store = configureStore({
    reducer:{
        auth: authReducer,
        uploadingStatus: uploadingStatusReducer
    }
})


export default store