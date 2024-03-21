import axios from "axios";
import { envConfig } from "../envConfig";

const endPoind = envConfig.backendBaseEndpoint;

const friendApis = {
  friendRequests: async () => {
    try {
      const res = await axios.get(`${endPoind}/friend/friendrequest`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT FRIEND REQUESTS API::", error);
      throw error;
    }
  },
  send: async (sentTo) => {
    try {
      const res = await axios.post(`${endPoind}/friend/send`, sentTo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT SEND REQUESTS API::", error);
      throw error;
    }
  },
  accept: async (sentBy) => {
    try {
      const res = await axios.post(`${endPoind}/friend/accept`, sentBy, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT ACCEPT REQUESTS API::", error);
      throw error;
    }
  },
  reject: async (sentBy) => {
    try {
      const res = await axios.post(`${endPoind}/friend/reject`, sentBy, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT REJECT REQUESTS API::", error);
      throw error;
    }
  },
  suggestedFriends: async () => {
    try {
      const res = await axios.get(`${endPoind}/friend/suggestedFriends`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT SUGGESTION REQUESTS API::", error);
      throw error;
    }
  },
  pendingReqCount: async () => {
    try {
      const res = await axios.get(`${endPoind}/friend/pendingcount`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT SUGGESTION REQUESTS API::", error);
      throw error;
    }
  },
};

export default friendApis;
