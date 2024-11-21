// 객체 생성 예제: 책 목록
let bookList = {
  2: "알고리즘의 정석",
  3: "컴퓨터 개론",
  1: "자바스크립트 프로그래밍 기초",
};

// for...in 문을 활용하여 객체의 프로퍼티에 접근
console.log("객체의 프로퍼티에 순차적으로 접근:");
for (let key in bookList) {
  console.log(bookList[key]);
}
// 출력 예상 결과:
// 자바스크립트 프로그래밍 기초
// 알고리즘의 정석
// 컴퓨터 개론

//-------------------------------------------------------------

// 숫자형(양수) 프로퍼티 네임 확인
let numberProperties = {
  300: "정수",
  1.2: "소수",
};

console.log("\n각 프로퍼티 네임의 자료형 확인:");
for (let key in numberProperties) {
  console.log(`${key}의 자료형은 ${typeof key}입니다.`);
}
// 출력 예상 결과:
// 300의 자료형은 string입니다.
// 1.2의 자료형은 string입니다.

//-------------------------------------------------------------

// 숫자형 프로퍼티 접근 예제
console.log("\n숫자형 프로퍼티 접근:");
console.log(numberProperties["300"]); // '정수'
console.log(numberProperties["1.2"]); // '소수'

//-------------------------------------------------------------

// 정수형 프로퍼티 네임이 있을 때의 정렬
let mixedProperties = {
  3: "정수3",
  name: "도서목록",
  1: "정수1",
  birthDay: "2020-10-10",
  2: "정수2",
};

console.log("\nfor...in 반복문 정수형 프로퍼티 네임 정렬:");
for (let key in mixedProperties) {
  console.log(key);
}
// 출력 예상 결과:
// 1
// 2
// 3
// name
// birthDay

//-------------------------------------------------------------

// 정수형 프로퍼티 네임을 문자열로 설정해도 정렬 방식 동일
let stringifiedNumbers = {
  3: "정수3",
  name: "도서목록",
  1: "정수1",
  birthDay: "2020-10-10",
  2: "정수2",
};

console.log("\n정수형 프로퍼티 네임을 문자열로 설정했을 때도 정렬:");
for (let key in stringifiedNumbers) {
  console.log(key);
}
// 출력 예상 결과:
// 1
// 2
// 3
// name
// birthDay
