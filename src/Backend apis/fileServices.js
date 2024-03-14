import { Client, Storage, ID } from "appwrite";
import { envConfig } from "../envConfig";

class FileService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteApiEndpoint)
      .setProject(envConfig.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        envConfig.appwriteStorageId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("ERROR AT APPWRITE UPLOAD FILE::", error);
      return false;
    }
  }

  async getFile(fileId) {
    try {
      return await this.storage.getFile(envConfig.appwriteStorageId, fileId);
    } catch (error) {
      console.log("ERROR AT APPWRITE GET FILE::", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(envConfig.appwriteStorageId, fileId);
    } catch (error) {
      console.log("ERROR AT APPWRITE DELETE FILE::", error);
      return false;
    }
  }
  async getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(envConfig.appwriteStorageId, fileId);
    } catch (error) {
      console.log("ERROR AT APPWRITE DELETE FILE::", error);
      return false;
    }
  }
}

const fileServices = new FileService();

export default fileServices;
