import axios from "axios"

const endPoind = "http://localhost:8000/api/v1"
const authHeader = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
}

const postApis = {
    getFeeds: async()=>{
        try {
            const res = await axios.get(`${endPoind}/user/feeds`,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT GET FEEDS API::",error)
            throw error
        }
    },
    createPost: async(data)=>{
        try {
            const res = await axios.post(`${endPoind}/post/create`,data,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT GET FEEDS API::",error)
            throw error
        }
    },
}

export default postApis