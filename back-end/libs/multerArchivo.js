import multer from 'multer'

const storage =multer.diskStorage({
    destination: 'archivo',
    filename:(req, file,cb)=>{
        cb(null,file.originalname )
    }
})

const uploadAr = multer({ storage });

export default uploadAr;