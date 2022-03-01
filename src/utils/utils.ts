import multer from "multer";
import fs from 'fs';
import { Request } from "express";

const setImageOnStorage = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });

  const upload = multer({ storage: storage });

  return upload.single('image');
};

const getImageEncode = (req: Request) => {
    if(!req.file) return null;

    const img = fs.readFileSync(req.file.path);
    const encode_img = img.toString('base64');

    return {
        contentType: req.file.mimetype,
        data: new Buffer(encode_img,'base64')
    }
}

export { setImageOnStorage, getImageEncode };