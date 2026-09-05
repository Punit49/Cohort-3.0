import ImageKit from "imagekit";
import dotenv from 'dotenv';
dotenv.config()

const imageKit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGE_KIT_URI,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
})

export default imageKit;