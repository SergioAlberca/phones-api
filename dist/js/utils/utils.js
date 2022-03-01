"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageEncode = exports.setImageOnStorage = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const setImageOnStorage = () => {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads");
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "-" + Date.now());
        },
    });
    const upload = (0, multer_1.default)({ storage: storage });
    return upload.single('image');
};
exports.setImageOnStorage = setImageOnStorage;
const getImageEncode = (req) => {
    if (!req.file)
        return null;
    const img = fs_1.default.readFileSync(req.file.path);
    const encode_img = img.toString('base64');
    return {
        contentType: req.file.mimetype,
        data: new Buffer(encode_img, 'base64')
    };
};
exports.getImageEncode = getImageEncode;
