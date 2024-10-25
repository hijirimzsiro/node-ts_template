export class Rational {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        // 檢查分母是否為 0
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    // 轉換為字串表示
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    // 這個方法執行任務，並返回字串表示
    doTask(): string {
        return this.toString();
    }

    // 其他你可能需要的方法，可以根據需要添加
    normalize(): Rational {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    private greatestCommonDivisor(a: number, b: number): number {
        return b === 0 ? Math.abs(a) : this.greatestCommonDivisor(b, a % b);
    }
}
