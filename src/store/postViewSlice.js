import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    post:null
}

const postViewSlice = createSlice({
    name:"viewdpost",
    initialState,
    reducers:{
        updatePost: (state,action)=>{
            state.post = action.payload
        },
        deleteComment:(state,action)=>{
            state.post.comments = state.post?.comments.filter(com=>com._id!=action.payload)
        },
        updateComment: (state, action) => {
            state.post.comments = state.post?.comments.map(com => {
                if (com._id === action.payload.commentId) {
                    com.content = action.payload.content;
                }
                return com;
            });
            return state; 
        }
        
    }
})

export default postViewSlice.reducer
export const {updatePost,deleteComment,updateComment} = postViewSlice.actions