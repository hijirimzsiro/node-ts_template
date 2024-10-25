/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    simplify(): Rational {
        const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
        const divisor = gcd(this.numerator, this.denominator);
        
        return new Rational(this.numerator / divisor, this.denominator / divisor);
    }

    add(r: Rational): Rational {
        const newNumerator = this.numerator * r.denominator + r.numerator * this.denominator;
        const newDenominator = this.denominator * r.denominator;
        
        return new Rational(newNumerator, newDenominator).simplify();
    }

    subtract(r: Rational): Rational {
        const newNumerator = this.numerator * r.denominator - r.numerator * this.denominator;
        const newDenominator = this.denominator * r.denominator;
        
        return new Rational(newNumerator, newDenominator).simplify();
    }

    multiply(r: Rational): Rational {
        const newNumerator = this.numerator * r.numerator;
        const newDenominator = this.denominator * r.denominator;
        
        return new Rational(newNumerator, newDenominator).simplify();
    }

    divide(r: Rational): Rational {
        const newNumerator = this.numerator * r.denominator;
        const newDenominator = this.denominator * r.numerator;
        
        return new Rational(newNumerator, newDenominator).simplify();
    }
}
