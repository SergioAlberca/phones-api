import multer from "multer";

const setImageOnStorage = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ dest: "uploads/", storage: storage });

  return upload.single("file");
};

export { setImageOnStorage };
