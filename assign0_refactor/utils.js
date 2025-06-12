"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = void 0;
const processData = (data) => {
    if (data && data.message) {
        return data.message.toUpperCase();
    }
    return "No data received";
};
exports.processData = processData;
