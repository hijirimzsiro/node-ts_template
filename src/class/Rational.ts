export class Rational {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    static parseRational(numStr: string[], denomStr: string[]): Rational {
        const numerator = parseInt(numStr.join(''));
        const denominator = parseInt(denomStr.join(''));
        return new Rational(numerator, denominator);
    }

    // 簡化分數
    getSimplified(): Rational {
        const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
        const divisor = gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / divisor, this.denominator / divisor);
    }

    add(r: Rational): Rational {
        const newNumerator = this.numerator * r.denominator + r.numerator * this.denominator;
        const newDenominator = this.denominator * r.denominator;
        return new Rational(newNumerator, newDenominator).getSimplified();
    }

    subtract(r: Rational): Rational {
        const newNumerator = this.numerator * r.denominator - r.numerator * this.denominator;
        const newDenominator = this.denominator * r.denominator;
        return new Rational(newNumerator, newDenominator).getSimplified();
    }

    multiply(r: Rational): Rational {
        const newNumerator = this.numerator * r.numerator;
        const newDenominator = this.denominator * r.denominator;
        return new Rational(newNumerator, newDenominator).getSimplified();
    }

    divide(r: Rational): Rational {
        if (r.numerator === 0) {
            throw new Error("Cannot divide by zero");
        }
        const newNumerator = this.numerator * r.denominator;
        const newDenominator = this.denominator * r.numerator;
        return new Rational(newNumerator, newDenominator).getSimplified();
    }

    equals(r: Rational): boolean {
        const a = this.getSimplified();
        const b = r.getSimplified();
        return a.numerator === b.numerator && a.denominator === b.denominator;
    }

    isWhole(): boolean {
        return this.getSimplified().denominator === 1;
    }

    isDecimal(): boolean {
        return this.denominator !== 1;
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}
