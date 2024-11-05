// 상수 (constant)
const PI = 3.14; // 원주율을 상수로 선언

// 변수 (variable)
let radius = 0; // 반지름을 나타내는 변수

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius; // 상수를 활용해 원의 넓이 계산
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}입니다.`; // 템플릿 문자열을 사용한 출력
}

// 반지름 값을 변경하며 원의 넓이를 출력하는 코드
radius = 4;
console.log(printArea()); // 반지름 4일 때 원의 넓이 출력

radius = 7;
console.log(printArea()); // 반지름 7일 때 원의 넓이 출력

radius = 8;
console.log(printArea()); // 반지름 8일 때 원의 넓이 출력

// 상수는 재할당이 불가능하다.
console.log(
  "상수 PI는 재할당이 불가능합니다. 재할당을 시도하면 오류가 발생합니다."
);

// 상수를 선언할 때는 대문자와 밑줄을 사용하여 이름을 짓는 것이 관례다.
const MY_CONSTANT = 100;
const MAX_WIDTH = 1920;
console.log(`최대 너비는 ${MAX_WIDTH}입니다.`);
