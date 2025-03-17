import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   url: process.env.CLOUDINARY_URL,
// });

// /**
//  * Uploads an image to Cloudinary.
//  * @param {string} imageUrl - The URL or path of the image to upload.
//  * @param {string} publicId - The public ID for the image.
//  * @returns {Promise<Object>} - The upload result from Cloudinary.
//  */
// const uploadImage = async (imageUrl, publicId) => {
//   try {
//     const uploadResult = await cloudinary.uploader.upload(imageUrl, {
//       public_id: publicId,
//     });
//     return uploadResult;
//   } catch (error) {
//     console.error("Error uploading image to Cloudinary:", error);
//     throw error;
//   }
// };

// /**
//  * Generates an optimized URL for an image.
//  * @param {string} publicId - The public ID of the image.
//  * @returns {string} - The optimized image URL.
//  */
// const getOptimizedImageUrl = (publicId) => {
//   return cloudinary.url(publicId, {
//     fetch_format: "auto",
//     quality: "auto",
//   });
// };

// /**
//  * Generates a transformed URL for an image (e.g., auto-crop to square).
//  * @param {string} publicId - The public ID of the image.
//  * @param {number} width - The width of the transformed image.
//  * @param {number} height - The height of the transformed image.
//  * @returns {string} - The transformed image URL.
//  */
// const getTransformedImageUrl = (publicId, width, height) => {
//   return cloudinary.url(publicId, {
//     crop: "auto",
//     gravity: "auto",
//     width: width,
//     height: height,
//   });
// };

// // Example usage
// (async () => {
//   try {
//     // Upload an image
//     const imageUrl =
//       "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg";
//     const publicId = "shoes";
//     const uploadResult = await uploadImage(imageUrl, publicId);
//     console.log("Upload Result:", uploadResult);

//     // Get optimized image URL
//     const optimizedUrl = getOptimizedImageUrl(publicId);
//     console.log("Optimized URL:", optimizedUrl);

//     // Get transformed image URL
//     const transformedUrl = getTransformedImageUrl(publicId, 500, 500);
//     console.log("Transformed URL:", transformedUrl);
//   } catch (error) {
//     console.error("Error in Cloudinary operations:", error);
//   }
// })();

// export default cloudinary;
// export { uploadImage, getOptimizedImageUrl, getTransformedImageUrl };
