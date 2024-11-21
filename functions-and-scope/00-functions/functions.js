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
