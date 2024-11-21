// 1. 불린 기본 값
console.log(true); // true
console.log(false); // false

// 2. 비교 연산자 (Comparison Operators)
// 숫자 비교
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
// 문자열 비교 (대소문자 구분)
console.log("apple" === "apple"); // true
console.log("apple" !== "Apple"); // true

// 3. 일치 연산자 (Strict Equality)
// 자료형과 값이 모두 같은지 확인
console.log(10 === 10); // true
console.log(10 === "10"); // false (자료형이 다름)
console.log(10 !== "10"); // true

// 4. 논리 연산자 (Logical Operators)
// AND (&&) 연산자: 둘 다 true일 때만 true
console.log(true && true); // true
console.log(true && false); // false
// OR (||) 연산자: 둘 중 하나라도 true면 true
console.log(true || false); // true
console.log(false || false); // false
// NOT (!) 연산자: true와 false를 반대로 바꿈
console.log(!true); // false
console.log(!false); // true

// 5. 연산 순서와 괄호 사용
// 기본 연산 순서
console.log(true || (false && false)); // true (AND가 먼저 실행됨)
// 괄호로 순서 조정
console.log((true || false) && false); // false (OR가 먼저 실행됨)

// 6. `typeof` 연산자를 활용한 불린 타입 확인
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"

// 7. 응용 예시: 조건문에서 불린 사용하기
let age = 18;
let isAdult = age >= 18; // age가 18 이상이면 true, 아니면 false
console.log(isAdult); // true
if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// 8. 이중 NOT (!!) 연산자를 통한 Boolean 변환
console.log(!!1); // true (숫자 1은 true로 평가됨)
console.log(!!0); // false (숫자 0은 false로 평가됨)
console.log(!!"hello"); // true (문자열은 true로 평가됨)
console.log(!!""); // false (빈 문자열은 false로 평가됨)
