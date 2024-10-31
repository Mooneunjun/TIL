// 1. 산술 연산자에서의 자동 형변환

// 1.1 더하기 연산자 (+)
console.log("4" + 2); // 출력: "42"
console.log(4 + "2"); // 출력: "42"
console.log(4 + 2); // 출력: 6

// 1.2 기타 산술 연산자 (-, *, /, %, **)
console.log("10" - 5); // 출력: 5
console.log("5" * "2"); // 출력: 10
console.log("10" / "2"); // 출력: 5
console.log("8" % 3); // 출력: 2
console.log("2" ** 3); // 출력: 8
console.log("abc" - 1); // 출력: NaN

// 불리언 값의 산술 연산
console.log(true + 1); // 출력: 2
console.log(false * 10); // 출력: 0

// 2. 관계 비교 연산자에서의 자동 형변환
console.log("3" > 2); // 출력: true
console.log(true < 1); // 출력: false (true는 1로 변환)
console.log("2" <= false); // 출력: false ("2"는 2로, false는 0으로 변환)
console.log("abc" >= 1); // 출력: false

// 3. 동등 연산자 (==)와 일치 연산자 (===)

// 3.1 동등 연산자 (==)
console.log(1 == "1"); // 출력: true
console.log(true == 1); // 출력: true
console.log(null == undefined); // 출력: true

// 3.2 일치 연산자 (===)
console.log(1 === "1"); // 출력: false
console.log(true === 1); // 출력: false
console.log(null === undefined); // 출력: false

// 4. 불일치 연산자 (!=)와 불일치 일치 연산자 (!==)
console.log(1 != "1"); // 출력: false
console.log(1 !== "1"); // 출력: true

// 5. 추가 예시

// 불리언 값과의 산술 연산
console.log(true + true); // 출력: 2
console.log(false + false); // 출력: 0

// NaN과의 연산 결과
console.log(NaN + 1); // 출력: NaN
console.log("abc" * 2); // 출력: NaN

// 6. 연습 문제 및 풀이

// 문제 1
console.log("5" + 3 * 2); // 출력: "56"
// 연산 순서: 3 * 2 = 6 -> "5" + 6 = "56"

// 문제 2
console.log("10" - "5" + "3"); // 출력: "53"
// 연산 순서: "10" - "5" = 5 -> 5 + "3" = "53"

// 문제 3
console.log(true + 1); // 출력: 2
// true는 1로 변환되므로 1 + 1 = 2
