const multer = require("multer");
const path = require("path");

const DiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

// const MemoryStorage = multer.memoryStorage();

const upload = multer(
    {
        storage: DiskStorage,
        // fileFilter: (req, file, cb) => {
        //     console.log(file);
        //     if(file.mimetype === 'image/jpeg'){
        //         cb(null, true);
        //     } else {
        //         cb(new Error("Only PNG allowed"), false);
        //     }
        // }
    });

module.exports = upload;

