import axios from "axios"

const endPoind = "http://localhost:8000/api/v1"
const authHeader = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
}


const userApis = {
    register: async(data)=>{
        try {
            const res = await axios.post(`${endPoind}/user/create`,data)
            return res.data
        } catch (error) {
            console.log("ERROR AT REGISTER API::",error)
            throw error
        }
    },
    login: async(data)=>{
        try {
            const res = await axios.post(`${endPoind}/user/login`,data)
            return res.data
        } catch (error) {
            console.log("ERROR AT LOGIN API::",error)
            throw error
        }
    },
    logout: async()=>{
        try {
            await axios.post(`${endPoind}/user/logout`,authHeader)
        } catch (error) {
            console.log("ERROR AT LOGOUT API::",error)
            throw error
        }
    },
    currentUser: async()=>{
        try {
            const res = await axios.get(`${endPoind}/user/currentuser`,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT CURRENT USER API::",error)
            throw error
        }
    },
}


export default userApis