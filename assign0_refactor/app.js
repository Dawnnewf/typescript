"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataFetcher_js_1 = require("./dataFetcher.js");
const utils_js_1 = require("./utils.js");
const url = "https://jsonplaceholder.typicode.com/todos/1";
(0, dataFetcher_js_1.fetchData)(url, (result) => {
    const processedResult = (0, utils_js_1.processData)(result);
    console.log(processedResult);
});
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
const person = { name: "John", age: 30 };
const greeting = `Hello, ${person.name}!`;
console.log(greeting);
class MyClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const instance = new MyClass("Initial Value");
console.log(instance.getValue());
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
const dataProcessor = (inputData) => {
    if (Array.isArray(inputData)) {
        return inputData.map((item) => ({ processed: item * 2 }));
    }
    else if (typeof inputData === 'object' && inputData !== null && 'value' in inputData) {
        return { processed: inputData.value + " Processed" };
    }
    return { processed: String(inputData) + " Default" };
};
console.log(dataProcessor(numbers));
console.log(dataProcessor({ value: "ObjectValue" }));
console.log(dataProcessor("StringValue"));
