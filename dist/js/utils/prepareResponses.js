"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareResponseAllPhone = void 0;
const prepareResponseAllPhone = (phones) => {
    const phonesResponse = [];
    phones.forEach((item) => {
        phonesResponse.push({
            name: item.name,
            img: item.img || null,
            manuFacturer: item.manuFacturer,
        });
    });
    return phonesResponse;
};
exports.prepareResponseAllPhone = prepareResponseAllPhone;
