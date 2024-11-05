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
