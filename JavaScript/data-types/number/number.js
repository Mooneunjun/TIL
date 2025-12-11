// 숫자 자료형 (Number)

// 숫자 자료형은 정수, 소수, 지수, 16진수, 8진수, 2진수 등 다양한 형태로 표현할 수 있습니다.

// 정수 (Integer)
let positiveInt = 10; // 양의 정수
let negativeInt = -8; // 음의 정수
let zero = 0; // 0

// 소수 (Floating Point)
let pi = 3.14;
let negativeFloat = -1.1;

// 기본적인 사칙연산
let sum = positiveInt + pi;
let difference = negativeInt - pi;
let product = positiveInt * 2;
let quotient = pi / 2;

console.log(sum, difference, product, quotient); // 13.14 -11.14 20 1.57

// 지수 표기법 (Exponential Notation)
const largeNumber = 1e9; // 10억
const smallNumber = 1.23e-3; // 0.00123

console.log(largeNumber); // 출력: 1000000000
console.log(smallNumber); // 출력: 0.00123

// 지수 표기법 비교
const numA = 1e2; // 100
const numB = 100;
console.log(numA === numB); // 출력: true

// 16진수 (Hexadecimal)
const hex = 0x1f; // 16진수 1F
console.log(hex); // 출력: 31

// 8진수 (Octal)
const oct = 0o37; // 8진수 37
console.log(oct); // 출력: 31

// 2진수 (Binary)
const bin = 0b11111; // 2진수 11111
console.log(bin); // 출력: 31
