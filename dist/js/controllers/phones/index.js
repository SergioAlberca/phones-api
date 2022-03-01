"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneDetail = exports.deletePhone = exports.updatePhone = exports.addPhone = exports.getPhones = void 0;
const phone_1 = __importDefault(require("../../models/phone"));
const utils_1 = require("../../utils/utils");
const getPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const phones = yield phone_1.default.find();
        res.status(200).json({ phones });
    }
    catch (error) {
        throw error;
    }
});
exports.getPhones = getPhones;
const addPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const phone = new phone_1.default(Object.assign({ color: body.color, description: body.description, manuFacturer: body.manuFacturer, name: body.name, price: body.price, processor: body.processor, ram: body.ram, screen: body.screen }, ((0, utils_1.getImageEncode)(req) && { img: (0, utils_1.getImageEncode)(req) })));
        const newPhone = yield phone.save();
        res.status(201).json(newPhone);
    }
    catch (error) {
        throw error;
    }
});
exports.addPhone = addPhone;
const getPhoneDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const phone = yield phone_1.default.findById({ _id: id });
        res.status(phone ? 200 : 404).json({ phone });
    }
    catch (error) {
        throw error;
    }
});
exports.getPhoneDetail = getPhoneDetail;
const updatePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        const updatePhone = yield phone_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(updatePhone ? 200 : 404).json({
            phone: updatePhone,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updatePhone = updatePhone;
const deletePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPhone = yield phone_1.default.findByIdAndRemove(req.params.id);
        res.status(204).json({
            todo: deletedPhone,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deletePhone = deletePhone;
