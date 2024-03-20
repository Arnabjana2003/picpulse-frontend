import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice.js"
import uploadingStatusReducer from "../store/uploadingStatusSlice.js"
import viewdPostReducer from "../store/postViewSlice.js"
import friendReqReducer from "../store/friendReqSlice.js"

const store = configureStore({
    reducer:{
        auth: authReducer,
        uploadingStatus: uploadingStatusReducer,
        viewedPost:viewdPostReducer,
        friendReq:friendReqReducer,
    }
})


export default store