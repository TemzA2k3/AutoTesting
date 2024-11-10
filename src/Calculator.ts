import * as fs from 'fs';

class Calculator {
    sum(...args: number[]): number {
        return args.reduce((acc, num) => acc + num, 0);
    }

    subduct(n1: number, n2: number): number {
        return n1 - n2;
    }

    multiply(...args: number[]): number {
        return args.reduce((acc, num) => acc * num, 1);
    }

    divide(n1: number, n2: number): number {
        if (n2 === 0) throw new Error("Division by zero is not allowed.");
        return n1 / n2;
    }

    async sumFromFile(filePath: string): Promise<number> {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const numbers = data.split(',').map(num => parseFloat(num.trim()));
        return this.sum(...numbers);
    }

    static async writeToFile(filePath: string, data: any): Promise<void> {
        const result = `результат: ${data}`;
        await fs.promises.writeFile(filePath, result, 'utf-8');
    }
}

export default Calculator;
