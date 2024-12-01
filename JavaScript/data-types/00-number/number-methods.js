// toFixed 메소드 사용법
const myNumber = 0.3591;

// 소수점 아래 3자리 고정
const fixedThree = myNumber.toFixed(3);
console.log(fixedThree); // 출력: "0.359"

// 소수점 자릿수 초과시 0으로 채움
const fixedSeven = myNumber.toFixed(7);
console.log(fixedSeven); // 출력: "0.3591000"

// 반환값은 문자열
console.log(typeof fixedThree); // 출력: "string"

// 숫자로 변환하는 방법
const numberValue1 = Number(fixedThree); // Number 함수 사용
console.log(numberValue1); // 출력: 0.359

const numberValue2 = +fixedThree; // + 연산자 사용
console.log(numberValue2); // 출력: 0.359

// toString 메소드 사용법
const decimalNumber = 255;

// 2진수로 변환
const binary = decimalNumber.toString(2);
console.log(binary); // 출력: "11111111"

// 16진수로 변환
const hexadecimal = decimalNumber.toString(16);
console.log(hexadecimal); // 출력: "ff"

// 진법 변환 예제
const anotherDecimal = 42;
console.log(anotherDecimal.toString(2)); // 출력: "101010" (2진수)
console.log(anotherDecimal.toString(8)); // 출력: "52" (8진수)
console.log(anotherDecimal.toString(16)); // 출력: "2a" (16진수)

// 정수에 메소드 호출 시 주의사항
// console.log(255.toString(16)); // 에러 발생

// 올바른 방법
console.log((255).toString(16)); // 출력: "ff" (점 두 개 사용)
console.log((255).toString(16)); // 출력: "ff" (괄호로 감싸기)

// 변수에 담아서 사용하는 방식이 가장 안전하고 가독성 좋음
const safeNumber = 255;
console.log(safeNumber.toString(16)); // 출력: "ff"
