import React, { useRef, useState } from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import fileServices from "../Backend apis/fileServices.js";
import postApis from "../Backend apis/postApis.js";
import { useDispatch } from "react-redux";
import { endUploading, startUploading } from "../store/uploadingStatusSlice.js";

function CreatePost() {
  const dispatch = useDispatch()
  const fileRef = useRef(null);
  const [data, setData] = useState({ about: "", file: "" });
  const [previewSrc, setPreviewSrc] = useState(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setData({ ...data, file });
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
    }
  };
  const handleUpload = async (e) => {
    if (!data.file) return alert("select any photo");
    e.target.disabled = true;
    dispatch(startUploading())
    const fileRes = await fileServices.uploadFile(data.file);
    if (!fileRes){
      dispatch(endUploading())
      e.target.disabled = false;
      return alert("Upload failed")
    };
    const fileUrl = await fileServices.getFilePreview(fileRes.$id)
    if (!fileUrl){
      dispatch(endUploading())
      e.target.disabled = false;
      return alert("Can't fetch post url, please try again")
    };
    
    try {
      console.log({contentUrl: fileUrl?.href,contentId: fileRes?.$id})
      await postApis.createPost({ about: data.about, contentUrl: fileUrl?.href,contentId: fileRes?.$id});
      dispatch(endUploading())
      e.target.disabled = false;
      alert('Upload successfull')
    } catch (error) {
      fileServices.deleteFile(fileRes.$id);
      dispatch(endUploading())
      e.target.disabled = false;
      alert(error.response.data.message)
    }
  };
  return (
    <div className="container md:w-[80%] mx-auto">
      <div className="p-5 rounded-lg overflow-hidden bg-slate-50">
        <h2 className="text-center font-bold text-slate-800 text-lg my-3">
          Create post
        </h2>
        <hr />

        <div className="flex items-center mt-3">
          <ProfileImgIcon />
          <div className="ml-3">
            <h5 className="font-semibold">Arnab Jana</h5>
            <p>Public</p>
          </div>
        </div>

        <textarea
          onChange={(e) => setData({ ...data, about: e.target.value })}
          placeholder="What's in your mind about the post"
          style={{
            overflowY: "auto", // Enable scrolling
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer/Edge
            scrollbarColor: "transparent transparent", // Firefox
          }}
          className="border-none w-full outline-none bg-transparent p-3 h-20"
        />
        <section className="">
          {previewSrc && (
            <div className="md:w-[70%] lg:w-[60%] mx-auto border overflow-hidden">
              <img src={previewSrc} alt="content preview" width={"100%"} />
            </div>
          )}
          <div className="flex justify-center">
            {!previewSrc && (
              <button
                className="md:text-lg font-semibold px-5 py-2 bg-blue-100 border-blue-400 text-black border-dashed border-2 rounded-md"
                onClick={() => fileRef.current.click()}
              >
                Select photo
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              maxLength={1}
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>
        </section>
        <button
          className="w-full py-2 my-5 rounded-md text-center border text-lg font-bold text-white bg-blue-500 hover:bg-blue-400 disabled:bg-slate-300"
          onClick={handleUpload}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
