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
