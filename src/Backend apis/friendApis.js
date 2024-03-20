import axios from "axios"
import { envConfig } from "../envConfig";

// const endPoind = String(import.meta.env.VITE_BACKEND_BASE_ENDPOINT);
const endPoind = envConfig.backendBaseEndpoint;
const authHeader = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
}

const friendApis = {
    friendRequests: async ()=>{
        try {
            const res = await axios.get(`${endPoind}/friend/friendrequest`,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT FRIEND REQUESTS API::",error)
            throw error
        }
    },
    send: async (sentTo)=>{
        try {
            const res = await axios.post(`${endPoind}/friend/send`,sentTo,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT SEND REQUESTS API::",error)
            throw error
        }
    },
    accept: async (sentBy)=>{
        try {
            const res = await axios.post(`${endPoind}/friend/accept`,sentBy,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT ACCEPT REQUESTS API::",error)
            throw error
        }
    },
    reject: async (sentBy)=>{
        try {
            const res = await axios.post(`${endPoind}/friend/reject`,sentBy,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT REJECT REQUESTS API::",error)
            throw error
        }
    },
    suggestedFriends: async ()=>{
        try {
            const res = await axios.get(`${endPoind}/friend/suggestedFriends`,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT SUGGESTION REQUESTS API::",error)
            throw error
        }
    },
    pendingReqCount: async ()=>{
        try {
            const res = await axios.get(`${endPoind}/friend/pendingcount`,authHeader)
            return res.data
        } catch (error) {
            console.log("ERROR AT SUGGESTION REQUESTS API::",error)
            throw error
        }
    },
}

export default friendApis