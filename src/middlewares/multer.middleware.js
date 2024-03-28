import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        // add random fucntion name generator later on
      cb(null, file.originalname)
    }
  })
  
 export const upload = multer({ storage })