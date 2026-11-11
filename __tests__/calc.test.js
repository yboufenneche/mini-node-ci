import { calc } from '../src/calc.js';
describe('calc', () => {
    test('add, sub et mul fonctionnent', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.sub(10, 4)).toBe(6);
        expect(calc.mul(3, 4)).toBe(12);
    });
    test('div fonctionne', () => {
        expect(calc.div(10, 2)).toBe(5);
    });
    test('div by zero lève une exception', () => {
        expect(() => calc.div(1, 0)).toThrow(RangeError);
    });
});