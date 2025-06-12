"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const fetchData = (url, callback) => {
    setTimeout(() => {
        const data = { message: `Data from ${url}` };
        callback(data);
    }, 1000);
};
exports.fetchData = fetchData;
