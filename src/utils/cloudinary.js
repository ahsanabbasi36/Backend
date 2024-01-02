import { v2 as cloudinary } from "cloudinary"
import { response } from "express";
import fs from "fs" //file system(read,write,delete,open,permission)

localFilePath= ".\\package.json"
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.LOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => 
{
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath,{
        })
        //file has been uploaded successfuly 
        console.log("file has been uploaded successfully", response.url);
    } catch (error) {
        
        fs.unlink(localFilePath)//remove the locally saved temporary 
        //saved temporary  file as the upload operation got failed
        return null;
    
    }

    // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    //     {
    //         public_id: "olympic_flag"   
    //     },
    //     function (error, result) { console.log(result); });
}
export { uploadOnCloudinary }