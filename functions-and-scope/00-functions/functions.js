// 함수 선언: 여러 인사말을 출력하는 함수
function printGreetings() {
  console.log("안녕하세요"); // 한국어 인사
  console.log("Hello"); // 영어 인사
  console.log("Hola"); // 스페인어 인사
  console.log("Bonjour"); // 프랑스어 인사
  console.log("こんにちは"); // 일본어 인사
}

// 함수 호출
printGreetings();
printGreetings();

// 기본적인 함수 선언 및 호출 예시
function sayHi() {
  console.log("Hi!");
}

sayHi();

// 여러 명령어를 가진 함수 선언
function showPersonalInfo() {
  console.log("이름: 홍길동");
  console.log("나이: 25살");
  console.log("좋아하는 음식: 떡볶이");
}

showPersonalInfo();

////////////////////////////////////

// 함수 실행 순서 예시
// 함수가 호출되면 그 흐름에 따라 코드가 실행되는 순서를 보여줌
function sayHello() {
  console.log("Hello");
  console.log("Welcome to JavaScript!");
}

console.log("Before function call"); // 1
sayHello(); // 2: 함수 호출
console.log("After function call"); // 3

// 리턴문 예시
// 리턴문이 함수의 실행을 중단하고 값을 돌려주는 역할을 보여줌
function square(x) {
  return x * x; // 값을 리턴하고 함수가 종료됨
  console.log("이 코드는 실행되지 않습니다"); // 이 코드는 절대 실행되지 않음 (데드 코드)
}

console.log(square(3)); // 9 출력

// 리턴문과 console.log의 차이 예시
// 리턴문과 console.log()의 차이를 보여줌
function printSquare(x) {
  console.log(x * x); // 값을 콘솔에 출력함
}

function getSquare(x) {
  return x * x; // 값을 리턴함
}

printSquare(3); // 9 출력
console.log(getSquare(3)); // 9 출력

// 리턴문이 없는 함수는 undefined를 리턴함
console.log(printSquare(3)); // 9 출력 후 undefined 출력

// 리턴값을 이용한 연산 예시
// 리턴된 값을 이용하여 다른 연산을 수행하는 예시
function square(x) {
  return x * x;
}

console.log(square(3) + square(4)); // 9 + 16 = 25 출력
//----------------------------------------------

// 실습 1: 간단한 함수 작성
function sayHello() {
  console.log("Hello!");
}
sayHello(); // 출력: Hello!

// 실습 2: 여러 명령어를 가진 함수 작성
function showPersonalInfo() {
  console.log("이름: 홍길동");
  console.log("나이: 25살");
  console.log("좋아하는 음식: 떡볶이");
}
showPersonalInfo();
// 출력: 이름: 홍길동, 나이: 25살, 좋아하는 음식: 떡볶이

// 실습 3: 인사말을 두 번 출력하는 함수 작성
function greetTwice() {
  console.log("Hello!");
  console.log("Hello!");
}
greetTwice(); // 출력: Hello!, Hello!

// 실습 4: 함수를 두 번 호출해서 인사말을 네 번 출력
greetTwice();
greetTwice();
// 출력: Hello!, Hello!, Hello!, Hello!

//----------------------------------------------
// parameter.js
// //함수 선언
// function 함수이름(파라미터) { // 매개변수 = 파라미터(parameter)
//   console.log(파라미터);
// }

// //함수 호출
// 함수이름(값) // 값 = 인자(argument)

// 1. 기본적인 함수 선언과 호출
function greet() {
  console.log("Hello, John!");
}
greet(); // 출력: Hello, John!

// 2. 파라미터를 사용하는 함수
function greetWithName(name) {
  console.log("Hello, " + name + "!");
}
greetWithName("Alice"); // 출력: Hello, Alice!
greetWithName("Bob"); // 출력: Hello, Bob!

// 3. 두 개의 파라미터를 받는 함수 (두 숫자를 더하는 함수)
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(3, 5); // 출력: 8
addNumbers(10, 20); // 출력: 30

// 4. 숫자를 받아 그 제곱을 출력하는 함수
function square(x) {
  console.log(x * x);
}
square(3); // 출력: 9
square(5); // 출력: 25
square(10); // 출력: 100

// 5. 파라미터 이름을 의미 있게 변경한 함수
function printSum(num1, num2) {
  console.log(num1 + num2);
}

printSum(10, 5); // 출력: 15
printSum(7, 3); // 출력: 10

// 6. 자기소개 정보를 출력하는 함수
function introduce(name, birthDate, nationality, job) {
  console.log("안녕하세요! 제 이름은 " + name + "입니다.");
  console.log("저는 " + birthDate + "에 태어났어요.");
  console.log("국적은 " + nationality + "이고,");
  console.log("현재 직업은 " + job + "입니다.");
}

introduce("홍길동", "1990-01-01", "한국", "개발자");
introduce("김영희", "1985-05-15", "미국", "디자이너");

//----------------------------------------------
//----------------------------------------------
// optional-parameters.js
// 파라미터가 있는 함수 예시
// 전달된 값에 따라 다른 결과를 출력함
function greet(name) {
  console.log("Hello, " + name);
}

greet("코딩"); // Hello, 코딩 출력
greet(); // Hello, undefined 출력

// 리턴문이 없는 함수가 undefined를 리턴하는 예시
function sayHello() {
  console.log("Hello");
}

console.log(sayHello()); // Hello 출력 후 undefined 출력

// 옵셔널 파라미터(기본값 설정) 예시
function greet(name = "친구") {
  console.log("Hello, " + name);
}

greet(); // Hello, 친구 출력
greet("자바스크립트"); // Hello, 자바스크립트 출력

// 옵셔널 파라미터의 위치에 따른 문제 예시
function introduce(name, age = 25, city) {
  console.log(name + "는 " + age + "살이고 " + city + "에 삽니다.");
}

introduce("철수", "서울"); // 철수는 서울살이고 undefined에 삽니다.

// 옵셔널 파라미터를 올바르게 사용하는 예시
function introduceCorrect(name, city, age = 25) {
  console.log(name + "는 " + age + "살이고 " + city + "에 삽니다.");
}

introduceCorrect("영희", "부산"); // 영희는 25살이고 부산에 삽니다.
