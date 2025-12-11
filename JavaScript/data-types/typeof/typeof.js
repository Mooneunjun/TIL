// typeof 연산자 기본 사용 예시
console.log(typeof 50); // "number"
console.log(typeof "Hello JS"); // "string"
console.log(typeof false); // "boolean"

// 숫자와 문자열 구분하기
console.log(typeof 42); // "number" (정수)
console.log(typeof 3.1415); // "number" (소수)
console.log(typeof "42"); // "string" (따옴표로 감싼 숫자는 문자열)
console.log(typeof `42`); // "string" (백틱을 사용해도 문자열)

// 변수와 함수의 자료형 확인하기
let greeting = "Hello, world!";
function displayGreeting() {
  return greeting;
}

console.log(typeof greeting); // "string" (greeting 변수는 문자열)
console.log(typeof displayGreeting); // "function" (displayGreeting은 함수)

// typeof 연산자와 우선순위
console.log(typeof "JavaScript" + " Language"); // "string Language"
console.log(typeof 7 - 2); // NaN

// 괄호로 연산 순서를 조정한 예시
console.log(typeof ("JavaScript" + " Language")); // "string"
console.log(typeof (7 - 2)); // "number"

// 배열과 객체 자료형 확인하기
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

console.log(typeof arr); // "object" (배열도 객체로 취급)
console.log(typeof obj); // "object"
console.log(Array.isArray(arr)); // true (배열 여부를 정확히 확인)
