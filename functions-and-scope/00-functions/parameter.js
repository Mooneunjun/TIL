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
