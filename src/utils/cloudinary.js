import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary
        const uploadedResponse = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        }) 
        // if file uploaded successfully via localFilePath
        // console.log("File Has Been Uploaded Successfully", uploadedResponse.url);
        fs.unlinkSync(localFilePath)
        return uploadedResponse;
    }catch(error){
        // removing the temp file from local server after the file have been uploaded to cloudinary
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporary file as the upload opeartion got failed
        return null;
    }
}

export { uploadOnCloudinary }