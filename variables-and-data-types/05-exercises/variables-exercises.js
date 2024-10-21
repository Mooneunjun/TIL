// 1. 변수 선언과 할당
// let을 사용해 productPrice와 productQuantity 변수를 선언하고 각각 3000과 4를 할당하세요.
// 두 변수를 활용해 총 가격을 계산하고, console.log()로 출력하세요.

let productPrice = 3000;
let productQuantity = 4;
let totalPrice = productPrice * productQuantity;
console.log(totalPrice); // 예상 출력: 12000

// 2. 의미 있는 변수명 사용
// 사과 5개의 가격을 저장할 변수를 선언하고 15000을 할당하세요.
// 바나나 3개의 가격을 저장할 변수를 선언하고 9000을 할당하세요.
// 두 변수를 활용해 과일 총 가격을 계산하고 console.log()로 출력하세요.

let applePrice = 15000;
let bananaPrice = 9000;
let totalFruitPrice = applePrice + bananaPrice;
console.log(totalFruitPrice); // 예상 출력: 24000

// 3. 추상적인 변수명 피하기
// item이라는 변수명을 사용자 이름을 저장하는 의미 있는 변수명으로 바꾸세요.
// item2라는 변수명도 이메일을 저장하는 의미 있는 이름으로 바꾸세요.
// 그 변수들에 적절한 값을 할당하고, console.log()로 출력하세요.

let userName = "John";
let userEmail = "john@example.com";
console.log(userName); // 예상 출력: John
console.log(userEmail); // 예상 출력: john@example.com

// 4. camelCase 규칙으로 변수 선언
// 사용자의 생년월일을 저장할 변수를 birthdate라는 이름 대신 camelCase 방식으로 선언하고,
// 생년월일로 1995년 8월 20일을 저장하세요.
// 그 변수를 console.log()로 출력하세요.

let birthDate = "1995-08-20";
console.log(birthDate); // 예상 출력: 1995-08-20

// 5. 변수 값 변경
// let을 사용해 currentTemperature 변수를 선언하고 22로 할당하세요.
// 시간이 지나서 온도가 27로 변동되었다고 가정하고, 이 변수를 27로 변경하세요.
// 변경 전과 변경 후의 온도를 각각 console.log()로 출력하세요.

let currentTemperature = 22;
console.log("이전 온도:", currentTemperature); // 예상 출력: 이전 온도: 22

currentTemperature = 27;
console.log("현재 온도:", currentTemperature); // 예상 출력: 현재 온도: 27

// 6. 변수 활용 문제
// 초기에 let을 사용해 userAge라는 변수를 선언하고 25를 할당하세요.
// 5년이 지나서 나이를 계산해야 합니다. userAge의 값을 5년 후의 나이로 변경하고 출력하세요.

let userAge = 25;
userAge = userAge + 5;
console.log(userAge); // 예상 출력: 30

// 7. 예약어 사용 금지
// 다음 변수 선언에서 잘못된 부분을 찾아 수정하세요.
// let if = true;
// let for = "loop";
// let const = "constant";

// 수정 후 올바른 코드
let isConditionTrue = true;
let loopType = "loop";
let constantValue = "constant";

console.log(isConditionTrue); // 예상 출력: true
console.log(loopType); // 예상 출력: loop
console.log(constantValue); // 예상 출력: constant

// 8. 상수 선언 (const)
// const를 사용해 상수로 MAX_USERS라는 변수를 선언하고, 그 값으로 1000을 할당하세요.
// 그 변수를 console.log()로 출력하세요.
// 추가: 이 상수에 값을 재할당하려고 하면 어떻게 되는지 확인하세요.

const MAX_USERS = 1000;
console.log(MAX_USERS); // 예상 출력: 1000

// MAX_USERS = 1200; // 오류 발생: Assignment to constant variable.
