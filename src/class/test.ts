import { Rational } from './Rational';

const r1 = new Rational(1, 2);
const r2 = new Rational(3, 4);
const r3 = Rational.parseRational(["1", "3"], ["4", "1"]);

console.log('r1 + r2 =', r1.add(r2).toString()); // 5/4
console.log('r1 * r2 =', r1.multiply(r2).toString()); // 3/8

console.log('r1 equals r2:', r1.equals(r2)); // f
console.log('r3 is whole:', r3.isWhole()); //  t
console.log('r3 is decimal:', r3.isDecimal()); // fa
