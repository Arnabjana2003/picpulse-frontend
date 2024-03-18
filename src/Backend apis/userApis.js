import axios from "axios";
import fileServices from "./fileServices";
import { envConfig } from "../envConfig";

// const endPoind = "http://localhost:8000/api/v1";
// const endPoind = String(import.meta.env.VITE_BACKEND_BASE_ENDPOINT);
const endPoind = envConfig.backendBaseEndpoint;
const authHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },
};

const userApis = {
  register: async (data) => {
    try {
      const res = await axios.post(`${endPoind}/user/create`, data);
      return res.data;
    } catch (error) {
      console.log("ERROR AT REGISTER API::", error);
      throw error;
    }
  },
  login: async (data) => {
    try {
      const res = await axios.post(`${endPoind}/user/login`, data);
      return res.data;
    } catch (error) {
      console.log("ERROR AT LOGIN API::", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await axios.post(`${endPoind}/user/logout`, {}, authHeader);
    } catch (error) {
      console.log("ERROR AT LOGOUT API::", error);
      throw error;
    }
  },
  currentUser: async () => {
    try {
      const res = await axios.get(`${endPoind}/user/currentuser`, authHeader);
      return res.data;
    } catch (error) {
      console.log("ERROR AT CURRENT USER API::", error);
      throw error;
    }
  },
  viewProfile: async (userId) => {
    try {
      const res = await axios.post(
        `${endPoind}/user/viewprofile`,
        { userId },
        authHeader
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT USER PROFILE VIEW API::", error);
      throw error;
    }
  },
  changeProfileImage: async (imageId,file) => {
    console.log({imageId,file})
    try {
        let isUploaded,previewImg;
      if (imageId) {
          isUploaded = await fileServices.uploadFile(file);
          if (!isUploaded) throw new Error("unable to upload file");
        const isDeleted = await fileServices.deleteFile(imageId);
        if (!isDeleted){
            await fileServices.deleteFile(isUploaded?.$id)
            throw new Error("unable to delete photo");
        };
        previewImg = await fileServices.getFilePreview(isUploaded?.$id)
    }else{
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        previewImg = await fileServices.getFilePreview(isUploaded?.$id)
      }
      const res = await axios.post(
        `${endPoind}/user/updateprofileimage`,
        { profileImageLink:previewImg.href,profileImageId:isUploaded.$id },
        authHeader
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT PROFILE IMAGE CHANGE API::", error);
      throw error;
    }
  },
  changeCoverImage: async (imageId,file) => {
    try {
        let isUploaded,previewImg;
      if (imageId) {
          isUploaded = await fileServices.uploadFile(file);
          if (!isUploaded) throw new Error("unable to upload file");
        const isDeleted = await fileServices.deleteFile(imageId);
        if (!isDeleted){
            await fileServices.deleteFile(isUploaded?.$id)
            throw new Error("unable to delete photo");
        };
        previewImg = await fileServices.getFilePreview(isUploaded?.$id)
    }else{
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        previewImg = await fileServices.getFilePreview(isUploaded?.$id)
      }
      const res = await axios.post(
        `${endPoind}/user/updatecoverimage`,
        { coverImageLink:previewImg.href,coverImageId:isUploaded.$id },
        authHeader
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT PROFILE IMAGE CHANGE API::", error);
      throw error;
    }
  },
};

export default userApis;
