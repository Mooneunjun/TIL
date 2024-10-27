// 문자열 자료형 (String)

// 문자열 선언
let greeting = "Hello";
let name = "World";

// 문자열 더하기 (이어붙이기)
let message = greeting + " " + name;
console.log(message); // "Hello World"

// 숫자와 문자열 더하기
let mixed = "The number is " + 5;
console.log(mixed); // "The number is 5"

// 문자열 표현 예제
console.log("Hello World"); // 큰따옴표로 감싸기
console.log("Hello World"); // 작은따옴표로 감싸기

// 문자열 안에 따옴표 포함시키기 예제
console.log("Hello 'World'"); // 큰따옴표로 감싸고 작은따옴표 포함
console.log('Hello "World"'); // 작은따옴표로 감싸고 큰따옴표 포함
console.log("Hello 'World'"); // 작은따옴표 포함을 위해 역슬래시 사용
console.log('Hello "World"'); // 큰따옴표 포함을 위해 역슬래시 사용

// 백틱을 이용한 문자열 예제
const name2 = "World";
console.log(`Hello, ${name2}`); // 템플릿 리터럴을 이용해 문자열 안에 변수 삽입

// 템플릿 리터럴 안에서 큰따옴표와 작은따옴표 혼용
console.log(`"Hello", 'World'! Welcome to ${name2}.`);

// 문자열 연산 예제
console.log("Hello, " + "World!"); // 문자열 연결
console.log("3" + "5"); // 결과: "35" (문자열 '3'과 '5'를 연결)
