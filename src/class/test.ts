// test.ts
import { Rational } from './Rational';

describe('Rational Class', () => {
    test('should return the correct string representation', () => {
        const rational = new Rational(3, 4);
        expect(rational.doTask()).toBe('3/4');
    });

    test('should throw an error when denominator is zero', () => {
        expect(() => new Rational(1, 0)).toThrow('Denominator cannot be zero');
    });

    test('normalize method should return a normalized rational number', () => {
        const rational = new Rational(4, 8);
        expect(rational.normalize().doTask()).toBe('1/2');
    });
});
