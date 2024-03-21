import axios from "axios";
import fileServices from "./fileServices";
import { envConfig } from "../envConfig";

const endPoind = envConfig.backendBaseEndpoint;

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
      localStorage.setItem("accessToken", res.data.data?.accessToken);
      return res.data;
    } catch (error) {
      console.log("ERROR AT LOGIN API::", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await axios.post(
        `${endPoind}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.log("ERROR AT LOGOUT API::", error);
      throw error;
    }
  },
  currentUser: async () => {
    try {
      const res = await axios.get(`${endPoind}/user/currentuser`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
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
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT USER PROFILE VIEW API::", error);
      throw error;
    }
  },
  changeProfileImage: async (imageId, file) => {
    try {
      let isUploaded, previewImg;
      if (imageId) {
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        const isDeleted = await fileServices.deleteFile(imageId);
        if (!isDeleted) {
          await fileServices.deleteFile(isUploaded?.$id);
          throw new Error("unable to delete photo");
        }
        previewImg = await fileServices.getFilePreview(isUploaded?.$id);
      } else {
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        previewImg = await fileServices.getFilePreview(isUploaded?.$id);
      }
      const res = await axios.post(
        `${endPoind}/user/updateprofileimage`,
        { profileImageLink: previewImg.href, profileImageId: isUploaded.$id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT PROFILE IMAGE CHANGE API::", error);
      throw error;
    }
  },
  changeCoverImage: async (imageId, file) => {
    try {
      let isUploaded, previewImg;
      if (imageId) {
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        const isDeleted = await fileServices.deleteFile(imageId);
        if (!isDeleted) {
          await fileServices.deleteFile(isUploaded?.$id);
          throw new Error("unable to delete photo");
        }
        previewImg = await fileServices.getFilePreview(isUploaded?.$id);
      } else {
        isUploaded = await fileServices.uploadFile(file);
        if (!isUploaded) throw new Error("unable to upload file");
        previewImg = await fileServices.getFilePreview(isUploaded?.$id);
      }
      const res = await axios.post(
        `${endPoind}/user/updatecoverimage`,
        { coverImageLink: previewImg.href, coverImageId: isUploaded.$id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("ERROR AT PROFILE IMAGE CHANGE API::", error);
      throw error;
    }
  },
};

export default userApis;
