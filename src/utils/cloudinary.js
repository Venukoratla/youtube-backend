import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USERNAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file ipload success

    console.log("file uploaded", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the local saved temp file
    return null;
  }
};

export default uploadCloudinary;
