// 1. 문자열로 변환하기 (String 함수)
let num = 123;
let bool = true;

console.log(String(num)); // "123"
console.log(typeof String(num)); // "string"

console.log(String(bool)); // "true"
console.log(typeof String(bool)); // "string"

// 2. 숫자형으로 변환하기 (Number 함수)
let strNum = "123";
let strText = "Hello";
let boolTrue = true;
let boolFalse = false;

console.log(Number(strNum)); // 123
console.log(typeof Number(strNum)); // "number"

console.log(Number(strText)); // NaN (숫자가 아닌 문자열은 NaN)
console.log(Number(boolTrue)); // 1
console.log(Number(boolFalse)); // 0

// 3. 불린형으로 변환하기 (Boolean 함수)
let zero = 0;
let emptyStr = "";
let nanValue = NaN;
let nonEmptyStr = "JavaScript";
let someNumber = 123;

console.log(Boolean(zero)); // false
console.log(Boolean(emptyStr)); // false
console.log(Boolean(nanValue)); // false

console.log(Boolean(nonEmptyStr)); // true (빈 문자열이 아니므로 true)
console.log(Boolean(someNumber)); // true (숫자 0이 아닌 경우 true)

// 4. 형변환 활용 예제
// 문자열을 숫자로 변환해서 더하기
console.log(Number("10") + Number("5")); // 15

// 숫자를 문자열로 변환해서 연결하기
console.log(String(10) + String(5)); // "105"

// 5. 형변환 주의 사항 및 팁
// 숫자형이 아닌 문자열을 숫자로 변환할 때
console.log(Number("abc")); // NaN
console.log(Number("123")); // 123

// 불린형 변환 시 falsy 값 예시
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(false)); // false
