import axios from "axios";
import { envConfig } from "../envConfig";
import fileServices from "./fileServices";

// const endPoind = String(import.meta.env.VITE_BACKEND_BASE_ENDPOINT);
const endPoind = envConfig.backendBaseEndpoint;

const postApis = {
  getFeeds: async () => {
    try {
      const res = await axios.get(`${endPoind}/user/feeds`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT GET FEEDS API::", error);
      throw error;
    }
  },
  createPost: async (data) => {
    try {
      const res = await axios.post(`${endPoind}/post/create`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT CREATE POST API::", error);
      throw error;
    }
  },
  likePost: async (Id) => {
    try {
      const res = await axios.post(`${endPoind}/like`, Id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT LIKE POST API::", error);
      throw error;
    }
  },
  unlikePost: async (Id) => {
    try {
      const res = await axios.post(`${endPoind}/like/unlike`, Id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT LIKE POST API::", error);
      throw error;
    }
  },
  addComment: async (data) => {
    try {
      const res = await axios.post(`${endPoind}/comment/add`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      console.log("ERROR AT ADD COMMENT API::", error);
      throw error;
    }
  },
  updateComment: async ({ content, commentId }) => {
    try {
      const res = await axios.post(
        `${endPoind}/comment/update`,
        { content, commentId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT ADD COMMENT API::", error);
      throw error;
    }
  },
  deleteComment: async (commentId) => {
    try {
      const res = await axios.post(
        `${endPoind}/comment/delete`,
        { commentId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT ADD COMMENT API::", error);
      throw error;
    }
  },
  viewPost: async (postId) => {
    try {
      const res = await axios.post(
        `${endPoind}/post/view`,
        { postId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT VIEW POST API::", error);
      throw error;
    }
  },
  deletePost: async (postId, contenId) => {
    try {
      const res = await axios.delete(
        `${endPoind}/post/delete/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
        );
        const isDeletedFile = fileServices.deleteFile(contenId);
        if (!isDeletedFile) throw new Error("Unable to delete file from stroge");
      return res.data;
    } catch (error) {
      console.log("ERROR AT DELETE POST API::", error);
      throw error;
    }
  },
};

export default postApis;
