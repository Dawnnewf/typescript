import { filterByProperty, groupBy, mapObject, sum, DataProcessor, Identifiable } from './data-utils';

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
}

const products: Product[] = [
    { id: '1', name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: '2', name: 'T-shirt', category: 'Clothing', price: 25 },
    { id: '3', name: 'Mouse', category: 'Electronics', price: 20 },
    { id: '4', name: 'Jeans', category: 'Clothing', price: 60 }
];

const electronicsProducts = filterByProperty(products, 'category', 'Electronics');
console.log(electronicsProducts);

const groupedByCategory = groupBy(products, 'category');
console.log(groupedByCategory);

const prices = mapObject(products, (product) => product.price);
console.log(prices);

interface User extends Identifiable {
    name: string;
    email: string;
}

const users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' }
];

const userProcessor = new DataProcessor(users);
console.log(userProcessor.findById('2'));

userProcessor.delete('1');
console.log(userProcessor.findById('1'));