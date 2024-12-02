//------------------- Math.abs: 절댓값 -------------------
// 숫자의 부호를 제거하고 크기만 반환 (양수로 변환됨)
console.log(Math.abs(-10)); // 출력: 10
console.log(Math.abs(10)); // 출력: 10
console.log(Math.abs(0)); // 출력: 0
console.log(Math.abs(-3.14)); // 출력: 3.14

// 주의점: 인수로 숫자가 아닌 값을 전달하면 `NaN` 반환
console.log(Math.abs("hello")); // 출력: NaN

//------------------- Math.max: 최댓값 -------------------
// 전달된 여러 숫자 중 가장 큰 값을 반환
console.log(Math.max(2, -1, 4, 5, 0)); // 출력: 5
console.log(Math.max(10, 50, 30, -10)); // 출력: 50

// 배열의 최댓값을 구하려면 스프레드 연산자를 활용
const numbers = [3, 7, 1, -5, 4];
console.log(Math.max(...numbers)); // 출력: 7

//------------------- Math.min: 최솟값 -------------------
// 전달된 여러 숫자 중 가장 작은 값을 반환
console.log(Math.min(2, -1, 4, 5, 0)); // 출력: -1
console.log(Math.min(10, 50, 30, -10)); // 출력: -10

// 배열의 최솟값을 구하려면 스프레드 연산자를 활용
console.log(Math.min(...numbers)); // 출력: -5

//------------------- Math.pow: 거듭제곱 -------------------
// Math.pow(base, exponent) => base를 exponent 번 거듭제곱
console.log(Math.pow(2, 3)); // 출력: 8 (2^3)
console.log(Math.pow(5, 2)); // 출력: 25 (5^2)

// 주의점: 지수가 음수일 경우 분수로 계산
console.log(Math.pow(2, -3)); // 출력: 0.125 (1 / 2^3)

//------------------- Math.sqrt: 제곱근 -------------------
// Math.sqrt(x) => x의 제곱근 반환
console.log(Math.sqrt(25)); // 출력: 5
console.log(Math.sqrt(49)); // 출력: 7

// 주의점: 음수를 제곱근으로 전달하면 NaN 반환
console.log(Math.sqrt(-4)); // 출력: NaN

// 팁: 절댓값으로 감싸면 NaN 방지
console.log(Math.sqrt(Math.abs(-4))); // 출력: 2

//------------------- Math.round: 반올림 -------------------
// Math.round(x) => x를 반올림
console.log(Math.round(2.3)); // 출력: 2
console.log(Math.round(2.5)); // 출력: 3
console.log(Math.round(-2.7)); // 출력: -3

//------------------- Math.floor: 버림 -------------------
// Math.floor(x) => x의 소수점 이하를 버림
console.log(Math.floor(2.8)); // 출력: 2
console.log(Math.floor(-2.8)); // 출력: -3

//------------------- Math.ceil: 올림 -------------------
// Math.ceil(x) => x의 소수점 이하를 올림
console.log(Math.ceil(2.2)); // 출력: 3
console.log(Math.ceil(-2.2)); // 출력: -2

// 주의점: floor와 ceil은 음수에서 반대로 동작
// floor는 음수에서 더 작은 정수로 내려가고, ceil은 더 큰 정수로 올라간다.

//------------------- Math.random: 난수 생성 -------------------
// Math.random() => 0 이상 1 미만의 난수를 반환
console.log(Math.random()); // 예: 0.4567839043
console.log(Math.random()); // 예: 0.8972345321

// 특정 범위의 난수 생성
// 1부터 10 사이의 정수를 생성하려면 아래와 같이 작성
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // 1~10 사이의 정수

// 난수 팁: 특정 범위에서 난수를 쉽게 생성하는 함수
function getRandomInt(min, max) {
  // min 이상 max 이하의 정수 반환
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // 예: 45 (1부터 100 사이의 정수)

//------------------- Math.trunc: 소수점 이하 제거 -------------------
// 소수점 이하를 자르고 정수만 반환
console.log(Math.trunc(2.3)); // 출력: 2
console.log(Math.trunc(-2.8)); // 출력: -2

//------------------- Math.sign: 부호 반환 -------------------
// 숫자의 부호를 반환: 1 (양수), 0 (0), -1 (음수)
console.log(Math.sign(10)); // 출력: 1
console.log(Math.sign(-10)); // 출력: -1
console.log(Math.sign(0)); // 출력: 0
