import React, { useRef, useState } from "react";
import userApis from "../Backend apis/userApis";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { endUploading, startUploading } from "../store/uploadingStatusSlice";

function UpdatePicPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isProfilePicUpdation,imageId} = useParams()
    const prevImgId = imageId==="undefined"?undefined:imageId
    const [previewSrc,setPreviewSrc] = useState()
    const [data,setData] = useState()
    const fileRef = useRef(null)

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setData(file);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setPreviewSrc(reader.result);
          };
        }
      };

      const handleUpload = ()=>{
        if(!data) return alert("Select a photo")
        if(Number(isProfilePicUpdation)){
            dispatch(startUploading("Profile photo is updating"))
            navigate("/home")
            userApis.changeProfileImage(prevImgId,data)
            .then((res)=>{})
            .catch((err)=>console.log(err))
            .finally(()=>dispatch(endUploading()))
        }else{
            dispatch(startUploading("Cover photo is updating"))
            navigate("/home")
            userApis.changeCoverImage(prevImgId,data)
            .then((res)=>{})
            .catch((err)=>console.log(err))
            .finally(()=>dispatch(endUploading()))
        }
      }
  return (
    <div className="w-full flex items-center h-[90vh]">
      <div className=" md:w-1/2 mx-auto">
      <section className="  ">
        {previewSrc && (
          <div className="md:w-[70%] lg:w-[60%] mx-auto overflow-hidden">
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
        Save
      </button>
    </div>
    </div>
  );
}

export default UpdatePicPage;
