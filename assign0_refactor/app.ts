import { fetchData, Data } from './dataFetcher.js';
import { processData } from './utils.js';

const url = "https://jsonplaceholder.typicode.com/todos/1";

fetchData(url, (result: Data) => {
    const processedResult: string = processData(result);
    console.log(processedResult);
});

const numbers = [1, 2, 3, 4, 5];
const doubled: number[] = numbers.map((n: number): number => n * 2);
console.log(doubled);

type Person = {
    name: string;
    age: number;
};

const person: Person = { name: "John", age: 30 };
const greeting: string = `Hello, ${person.name}!`;
console.log(greeting);

class MyClass {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }
}

const instance: MyClass = new MyClass("Initial Value");
console.log(instance.getValue());

function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a log message.");

type ProcessedItem = {
    processed: number;
};

type ProcessedObject = {
    processed: string;
};

const dataProcessor = (inputData: number[] | { value: string } | string): ProcessedItem[] | ProcessedObject | { processed: string } => {
    if (Array.isArray(inputData)) {
        return inputData.map((item: number): ProcessedItem => ({ processed: item * 2 }));
    } else if (typeof inputData === 'object' && inputData !== null && 'value' in inputData) {
        return { processed: inputData.value + " Processed" };
    }
    return { processed: String(inputData) + " Default" };
};

console.log(dataProcessor(numbers));
console.log(dataProcessor({ value: "ObjectValue" }));
console.log(dataProcessor("StringValue"));