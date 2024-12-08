import { describe, it, expect } from 'vitest';
import Calculator from '../src/Calculator';
import * as fs from 'fs';

describe('Calculator', () => {
    const calculator = new Calculator();

    it('should return the sum of numbers', () => {
        expect(calculator.sum(1, 2, 3, 4)).toBe(10);
    });

    it('should return the difference between two numbers', () => {
        expect(calculator.subduct(5, 3)).toBe(2);
    });

    it('should return the product of numbers', () => {
        expect(calculator.multiply(2, 3, 4)).toBe(24);
    });

    it('should return the division of two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed.');
    });

    it('should return the sum of numbers from file', async () => {
        const filePath = './tests/numbers.txt';
        await fs.promises.writeFile(filePath, '1,2,3');
        expect(await calculator.sumFromFile(filePath)).toBe(6);
    });

    it('should write the result to file', async () => {
        const filePath = './tests/result.txt';
        await Calculator.writeToFile(filePath, 42);
        const result = await fs.promises.readFile(filePath, 'utf-8');
        expect(result).toBe('результат: 42');
    });
});
