// 1. 지역 변수(Local Variable) 예시
function myFunction() {
  let x = 3; // 함수 내부에서 선언된 지역 변수 x
  console.log(x); // 3 출력
}

myFunction();
console.log(x); // 오류: x is not defined
// x는 함수 내부에서만 유효하기 때문에, 함수 외부에서 호출 시 ReferenceError 발생

// 2. 전역 변수(Global Variable) 예시
let y = 3; // 전역 변수 y

function myGlobalFunction() {
  console.log(y); // 3 출력 (전역 변수 참조)
}

myGlobalFunction();
console.log(y); // 3 출력 (전역 변수 참조)

// 3. 지역 변수와 전역 변수의 차이
let z = 3; // 전역 변수 z

function myScopeFunction() {
  let z = 5; // 함수 내부에서 선언된 지역 변수 z
  console.log(z); // 5 출력 (지역 변수가 우선)
}

myScopeFunction();
console.log(z); // 3 출력 (전역 변수 참조)

// 4. 스코프 체인(Scope Chain) 예시
let a = 3; // 전역 변수 a

function myChainFunction() {
  let a = 5; // 지역 변수 a
  console.log(a); // 5 출력 (지역 변수 우선 사용)
}

myChainFunction();
console.log(a); // 3 출력 (전역 변수 사용)
