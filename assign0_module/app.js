"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_utils_1 = require("./data-utils");
const numbers = [1, 2, 3, 4, 5];
console.log((0, data_utils_1.sum)(numbers));
const products = [
    { id: '1', name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: '2', name: 'T-shirt', category: 'Clothing', price: 25 },
    { id: '3', name: 'Mouse', category: 'Electronics', price: 20 },
    { id: '4', name: 'Jeans', category: 'Clothing', price: 60 }
];
const electronicsProducts = (0, data_utils_1.filterByProperty)(products, 'category', 'Electronics');
console.log(electronicsProducts);
const groupedByCategory = (0, data_utils_1.groupBy)(products, 'category');
console.log(groupedByCategory);
const prices = (0, data_utils_1.mapObject)(products, (product) => product.price);
console.log(prices);
const users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' }
];
const userProcessor = new data_utils_1.DataProcessor(users);
console.log(userProcessor.findById('2'));
userProcessor.delete('1');
console.log(userProcessor.findById('1'));
