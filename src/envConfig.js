export const envConfig = {
    appwriteApiEndpoint : String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteStorageId : String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
}