/* @interface Identifiable */

export interface Identifiable {
    id: string;
}

export function sum(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export function filterByProperty<T, K extends keyof T>(items: T[], property: K, value: T[K]): T[] {
    return items.filter(item => item[property] === value);
}

export function groupBy<T, K extends keyof T>(items: T[], property: K): Record<string, T[]> {
    return items.reduce((accumulator, item) => {
        const key = String(item[property]);

        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(item);
        return accumulator;
    }, {} as Record<string, T[]>);
}

export function mapObject<T extends object, K extends keyof T, V>(obj: T, fn: (value: T[K], key: K, obj: T) => V): Record<keyof T, V> {
    const result = {} as Record<keyof T, V>;

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = fn(obj[key], key, obj);
        }
    }
    return result;
}

export class DataProcessor<T extends Identifiable> {
    private data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    findById(id: string): T | undefined {
        return this.data.find(item => item.id === id);
    }

    update(id: string, updates: Partial<T>): T | undefined {
        const index = this.data.findIndex(item => item.id === id);

        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...updates };
            return this.data[index];
        }
        return undefined;
    }

    delete(id: string): void {
        this.data = this.data.filter(item => item.id !== id);
    }

    getData(): T[] {
        return [...this.data];
    }
}