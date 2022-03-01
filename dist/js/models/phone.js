"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const phoneSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String
    },
    color: {
        type: String,
        required: true,
    },
    manuFacturer: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    screen: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Phone", phoneSchema);
