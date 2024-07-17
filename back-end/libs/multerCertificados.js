import multer from 'multer'

const storage =multer.diskStorage({
    destination: ( 'certificados'), 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const uploadCer = multer({ storage });

export default uploadCer;