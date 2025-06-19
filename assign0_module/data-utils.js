"use strict";
/* @interface Identifiable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessor = void 0;
exports.sum = sum;
exports.filterByProperty = filterByProperty;
exports.groupBy = groupBy;
exports.mapObject = mapObject;
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
function filterByProperty(items, property, value) {
    return items.filter(item => item[property] === value);
}
function groupBy(items, property) {
    return items.reduce((accumulator, item) => {
        const key = String(item[property]);
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(item);
        return accumulator;
    }, {});
}
function mapObject(obj, fn) {
    const result = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const typedKey = key;
            result[typedKey] = fn(obj[typedKey], typedKey, obj);
        }
    }
    return result;
}
class DataProcessor {
    constructor(data) {
        this.data = data;
    }
    findById(id) {
        return this.data.find(item => item.id === id);
    }
    update(id, updates) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = Object.assign(Object.assign({}, this.data[index]), updates);
            return this.data[index];
        }
        return undefined;
    }
    delete(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
    getData() {
        return [...this.data];
    }
}
exports.DataProcessor = DataProcessor;
