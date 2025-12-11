//------------------- 숫자 계산 오류 발생 예 -------------------
// 0.1과 0.2를 더하면 0.3이 나올 것 같지만, 예상치 못한 결과가 발생
console.log(0.1 + 0.2); // 출력: 0.30000000000000004

//------------------- toFixed 활용 -------------------
// 숫자를 소수점 아래 특정 자리수로 반올림
const resultToFixed = (0.1 + 0.2).toFixed(2); // 소수점 둘째 자리까지 반올림
console.log(resultToFixed); // 출력: "0.30"

// 문자열 반환된 결과를 숫자로 변환
const numericResult = Number(resultToFixed); // 숫자형 변환
console.log(numericResult); // 출력: 0.3

// 더 간단한 방법으로 숫자형 변환
const simplifiedResult = +resultToFixed; // 숫자형 변환
console.log(simplifiedResult); // 출력: 0.3

//------------------- Math.round 활용 -------------------
// Math.round와 10의 거듭 제곱을 활용한 반올림
const precision = 2; // 소수점 자리수
const value = 0.1 + 0.2;

// 정수로 변환 후 반올림하고 다시 나눔
const roundedResult =
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
console.log(roundedResult); // 출력: 0.3

//------------------- 한계 -------------------
// 자바스크립트의 숫자 계산 오류는 완벽히 해결할 수 없음
// 필요에 따라 상황에 맞는 반올림 처리가 필요
console.log(1 / 3); // 출력: 0.3333333333333333 (무한소수)
console.log((1 / 3).toFixed(2)); // 출력: "0.33"
