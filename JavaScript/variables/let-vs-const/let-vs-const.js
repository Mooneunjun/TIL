// let과 const의 차이: 재할당 가능 여부
// ------------------------------------------
let number = 10;
number = 20; // let은 재할당 가능
console.log("number after reassignment:", number); // 20

const constantNumber = 10;
// constantNumber = 20; // TypeError: Assignment to constant variable
console.log("constantNumber:", constantNumber); // 10

// ------------------------------------------

// const를 사용하는 이유: 예측 가능성과 안정성
// ------------------------------------------
const searchKeyword = "JavaScript"; // 검색 버튼을 누르면 변하지 않는 값
console.log("Search Keyword:", searchKeyword); // "JavaScript"

// ------------------------------------------

// 변수와 상수의 이름 규칙
// ------------------------------------------

// 상수: 대문자와 밑줄로 구분
const MAX_USERS = 100;

// 변수: 카멜 케이스
let currentUsers = 0;

console.log("MAX_USERS:", MAX_USERS); // 100
console.log("currentUsers:", currentUsers); // 0

// ------------------------------------------

// const와 참조형 데이터 (객체)
// ------------------------------------------
const person = { name: "Alice", age: 25 };

// 객체의 프로퍼티를 변경 (가능)
person.age = 26;
console.log("Updated age:", person.age); // 26

// 새로운 객체 할당 시 오류 발생
// person = { name: "Bob", age: 30 }; // TypeError: Assignment to constant variable

// ------------------------------------------

// const와 참조형 데이터 (배열)
// ------------------------------------------
const numbers = [1, 2, 3];

// 배열의 요소 변경 (가능)
numbers.push(4);
console.log("Updated numbers:", numbers); // [1, 2, 3, 4]

// 새로운 배열 할당 시 오류 발생
// numbers = [5, 6, 7]; // TypeError: Assignment to constant variable
